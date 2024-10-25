import React from 'react';
import ReactDOM from "react-dom/client";
import renderJSON from './functions/renderJSON';
import { Back2me } from '../components/Back2me';
import contenidoQuestion from "./content-jsons/contenidoQuestion.json"
import contenidoAnswers from "./content-jsons/contenidoRespuestas.json"
import { Quiz } from '../components/Quiz.jsx';
const rootMain = ReactDOM.createRoot(document.querySelector(".main-content"));


rootMain.render(
  <>
    <div className='game'>
      <Quiz quesitons={renderJSON(contenidoQuestion)} answers={renderJSON(contenidoAnswers)}/>
    </div>
    <Back2me></Back2me>
  </>
)