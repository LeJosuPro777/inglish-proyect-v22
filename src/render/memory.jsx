import { GameCard } from "../components/GameCard.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import memolinks from "./content-jsons/memo-links.json"
import { Back2me } from "../components/Back2me.jsx";
const rootMain = ReactDOM.createRoot(document.querySelector(".main-content"));

rootMain.render(
  <>
    {memolinks.map(({ preview, title, description, target }) => {
      return (
        <GameCard
          preview={preview}
          title={title}
          description={description}
          target={target}
        />
      );
    })}
    <Back2me />
  </>
);
