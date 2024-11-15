import "../styles/App.css";
import logoTeam from "/PapusProLogo.jpeg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Index } from "./Index";
import { GameContent } from "./GameContent";
import {MemoryGame} from "./MemoryGame";

import memoramaContentJSON from "../content-jsons/memo-links.json"
import quizContentJSON from "../content-jsons/quiz-links.json"
import memoryContent from "../content-jsons/memoramaContent.json"
import quizQuestions from "../content-jsons/contenidoQuestion.json"
import quizAnwsers from "../content-jsons/contenidoRespuestas.json"
import { PapusPros } from "./PapusPros";
import { BackToMe } from "./BackToMe";
import { Quiz } from "./Quiz";

export const App = () => {
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
            <Link className="link" to={"/memory"}>Memory</Link>
            <Link className="link" to={"/quiz"}>Quiz</Link>
            <Link className="link" to={"/hangman"}>Hangman</Link>
            </div>
          </nav>
        </div>
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/papus-pros-members" element={<PapusPros />}/>
          <Route path="/memory" element={<GameContent contenido={memoramaContentJSON}/>} />
          <Route path="/quiz" element={<GameContent contenido={quizContentJSON}/>} />
          <Route path="/hangman" element={<></>} />
          <Route path="/memory/:id" element={<MemoryGame games={memoryContent}/>}/>
          <Route path="/quiz/:id" element={<Quiz quesitonsJSON={quizQuestions} answersJSON={quizAnwsers}/>}/>
        </Routes>
        </div>
      <BackToMe></BackToMe>
      </Router>
    </>
  );
}