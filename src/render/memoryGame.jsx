import React from 'react';
import ReactDOM from "react-dom/client";
import {MemoryGame}  from '../components/MemoryGame';
import memoramaContent from "./content-jsons/memoramaContent.json"
import renderJSON from './renderJSON';
import { Back2me } from '../components/Back2me';
const rootMain = ReactDOM.createRoot(document.querySelector(".main-content"));

rootMain.render(
  <>
    <div className='game'>
    <MemoryGame words={renderJSON(memoramaContent)}/>
    </div>
    <Back2me></Back2me>
  </>
)