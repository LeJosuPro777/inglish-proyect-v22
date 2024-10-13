import "../styles/components/Navbar.css"
import {Back2me} from "../components/Back2me"
import logoTeam from "../../layout/PapusProLogo.jpeg"
export function NavBar() {
  const jsonLink = {
    content: "Memory",
    reference: "/pages/Memory Games.html",
  };
  return (
    <>
      <header>
      <img className="team-logo" src={logoTeam} alt="team  logo made by santi" />
      <a href="/">
        <h2>Papus Pro 🤔</h2>
      </a>
      </header>

      <nav className="bar-nav">
        <h2>Games</h2>
        <ul className="links">
          <a href="/pages/Memory.html">
            <li>Memory</li>
          </a>
          <a href="/pages/Crossword.html">
            <li>Crossword</li>
          </a>
          <a href="/pages/Quiz.html">
            <li>Quiz</li>
          </a>
        </ul>
      </nav>
      <footer>
        <button>Iniciar SESION</button>
      </footer>
    </>
  );
}
