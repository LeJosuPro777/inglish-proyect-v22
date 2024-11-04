import "../styles/components/App.css";
import logoTeam from "../../public/PapusProLogo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Index } from "./Index";

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
            <Link to={"team-members"}>
              <h2>Papus Pro ツ</h2>
            </Link>
          </header>

          <nav className="bar-nav">
            <h2>Games</h2>
            <div className="links">
            <Link className="link" to={"/memory"}>Memory</Link>
            <Link className="link" to={"/quiz"}>Quiz</Link>
            <Link className="link" to={"/"}>Home</Link>
            </div>
          </nav>
        </div>
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/memory" element={<></>} />
          <Route path="/quiz" element={<></>} />
          <Route path="/" element={<></>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

// <>
//   <header>
//   <img className="team-logo" src={logoTeam} alt="team  logo made by santi" />
//   <a href="/">
//     <h2>Papus Pro ツ</h2>
//   </a>
//   </header>

//   <nav className="bar-nav">
//     <h2>Games</h2>
//     <ul className="links">
//       <a href="/pages/Memory.html">
//         <li>Memory</li>
//       </a>
//       <a href="/pages/Quiz.html">
//         <li>Quiz</li>
//       </a>
//     </ul>
//   </nav>
//   <footer>
//     <button>Iniciar SESION</button>
//   </footer>
// </>
