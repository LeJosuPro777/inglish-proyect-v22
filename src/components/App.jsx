import "../styles/App.css";
import logoTeam from "/PapusProLogo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Index } from "./Index";
import { GameContent } from "./GameContent";
import { MemoryGame } from "./MemoryGame";
import quizContentJSON from "../content-jsons/quiz-links.json";
import quizQuestions from "../content-jsons/contenidoQuestion.json";
import quizAnwsers from "../content-jsons/contenidoRespuestas.json";
import { PapusPros } from "./PapusPros";
import { BackToMe } from "./BackToMe";
import { Quiz } from "./Quiz";
import { useEffect, useState } from "react";
import { CreateMemoryGames } from "./CreateMemoryGames";
import axios from "axios";

export const App = () => {
  const [memoryContent, setMemoryContent] = useState(() => {
    // Obtener datos desde localStorage si existen
    const savedMemoryContent = localStorage.getItem("memoryContent");
    return savedMemoryContent ? JSON.parse(savedMemoryContent) : [];
  });
  
  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = () => {
      axios.get("http://127.0.0.1:3001/api/memoryContent")
        .then((response) => {
          // Verificar si los datos han cambiado
          const {data} = response
          if (JSON.stringify(data) !== JSON.stringify(memoryContent)) {
            setMemoryContent(data); // Actualizar el estado con los datos del servidor
            localStorage.setItem("memoryContent", JSON.stringify(data)); // Actualizar localStorage
          }
        })
        .catch((error) => console.error("Error al cargar los datos:", error));
    };

    // Ejecutar la función de fetch al montar el componente
    fetchData();

    // Configurar el polling cada 30 segundos (puedes ajustar el intervalo)
    const intervalId = setInterval(fetchData, 30000); // 30 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [memoryContent]); // `memoryContent` como dependencia para detectar cambios

  return (
    <>
      <Router>
        <div className="sidebar">
          <header>
            <Link to={"/"}>
              <img
                className="team-logo"
                src={logoTeam}
                alt="team  logo made by santi"
              />
            </Link>
            <Link to={"/papus-pros-members"}>
              <h2>Papus Pro ツ</h2>
            </Link>
          </header>

          <nav className="bar-nav">
            <h2>Games</h2>
            <div className="links">
              <Link className="link" to={"/memory"}>
                Memory
              </Link>
              <Link className="link" to={"/quiz"}>
                Quiz
              </Link>
              <Link className="link" to={"/hangman"}>
                Hangman
              </Link>
            </div>
          </nav>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/papus-pros-members" element={<PapusPros />} />
            <Route path="/memory" element={<GameContent contenido={memoryContent} />} />
            <Route path="/quiz" element={<GameContent contenido={quizContentJSON} />} />
            <Route path="/hangman" element={<></>} />
            <Route path="/memory/:id" element={<MemoryGame games={memoryContent} />} />
            <Route path="/quiz/:id" element={ <Quiz quesitonsJSON={quizQuestions} answersJSON={quizAnwsers} />}/>
            <Route path="create-new-game" element={<CreateMemoryGames />} />
          </Routes>
        </div>

        <BackToMe />
      </Router>
    </>
  );
};
