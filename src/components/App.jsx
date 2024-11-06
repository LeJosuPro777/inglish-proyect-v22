import "../styles/components/App.css";
import logoTeam from "../../public/PapusProLogo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Index } from "./Index";
import { GameContent } from "./GameContent";
import memoramaContentJSON from "../render/content-jsons/memo-links.json"
import quizContentJSON from "../render/content-jsons/quiz-links.json"
import memoryContent from "../render/content-jsons/memoramaContent.json"
import MemoryGame from "./MemoryGame";
export function App() {
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
            <Link to={"/team-members"}>
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
          <Route path="/memory" element={<GameContent contenido={memoramaContentJSON}/>} />
          <Route path="/quiz" element={<GameContent contenido={quizContentJSON}/>} />
          <Route path="/hangman" element={<>En proceso de construccion 🤓</>} />
          <Route path="/memory/:id" element={<MemoryGame json={memoryContent}/>}/>
          <Route path="/quiz/:id" element/>
        </Routes>
        </div>
      </Router>
    </>
  );
}