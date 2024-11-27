import { Router, Link, Routes, Route } from "react-router-dom";
import { PapusPros } from "./PapusPros";
import { GameContent } from "./GameContent";
import { MemoryGame } from "./MemoryGame";
import { CreateMemoryGames } from "./CreateMemoryGames";
import { Index } from "./Index";
import { BackToMe } from "./BackToMe";
import logoTeam from "/PapusProLogo.jpeg";
import WhatsAppButton from "./WhatsappButton";


export const GameContentRoutes = ({memoryContent}) => {
  return (
    <>
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
            <Link className="link" to={"/create-new-game"}>CreateMemoryGames</Link>
          </div>
        </nav>
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/papus-pros-members" element={<PapusPros />} />
          <Route
            path="/memory"
            element={<GameContent contenido={memoryContent} />}
          />
          <Route
            path="/quiz"
            element={<GameContent contenido={memoryContent} />}
          />
          <Route path="/hangman" element={<WhatsAppButton />} />
          <Route
            path="/memory/:id" //en el path le pasas el id por parametro que lo va a recibir en el componente memoryGame
            element={<MemoryGame key={memoryContent.id} games={memoryContent} />}
          />
          <Route path="/quiz/:id" element={<div>something</div>} />
          <Route path="/create-new-game" element={<CreateMemoryGames />} />
        </Routes>
      </div>

      <BackToMe />
    </>
  );
};
