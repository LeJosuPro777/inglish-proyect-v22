import { useState, useEffect } from "react";
import { Card } from "./Card";
import { useParams } from "react-router-dom";
export const MemoryGame = ({ games }) => {
  const id = useParams().id;// usamos el hook useParams para conseguir el id del path y se lo asignamos a una constante
  const content = games.find((game) => game.id === id); //como el componente recibe todo el JSON de la DB como prop tenemos que hacer una find para que nos devuelva solo el juego que queremos renderizar
  
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  function generateCards() {
    const cardValues = [...content.words];
    const cards = [...cardValues, ...cardValues];
    return randomPostion(cards);
  }

  function randomPostion(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleCardClick = (index) => {
    if (
      flippedIndices.length < 2 &&
      !flippedIndices.includes(index) &&
      !matchedIndices.includes(index)
    ) {
      setFlippedIndices((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedIndices([]), 750);
    }
  }, [flippedIndices, cards]);

  return (
    <div className="memoryGame">
      {cards.map((value, index) => (
        <Card
          key={index}
          value={value}
          index={index}
          isFlipped={
            flippedIndices.includes(index) || matchedIndices.includes(index)
          }
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};
