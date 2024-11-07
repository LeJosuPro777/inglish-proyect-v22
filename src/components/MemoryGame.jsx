import React, { useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

export function MemoryGame({ json }) {
  const id = useParams().id;
  const content = json.find((j) => j.id === id);

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

  React.useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
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
}

export default MemoryGame;
