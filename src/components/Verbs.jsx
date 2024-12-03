import { useState } from "react";
import './drag_drop.css'

export const Verbs = () => {

  const [questions, setQuestions] = useState([
    { id: 1, body: '1. _________ name is Robert.', wordAssigned: null, correctAnswerId: 10 },
    { id: 2, body: '2. They _________ from Spain', wordAssigned: null, correctAnswerId: 8 },
    { id: 3, body: '3. _________ are you from?', wordAssigned: null, correctAnswerId: 2 },
    { id: 4, body: '4. What do you do? I´m _________ student.', wordAssigned: null, correctAnswerId: 6 },
    { id: 5, body: '5. Peter _________ at seven o´clock', wordAssigned: null, correctAnswerId: 9 },
    { id: 6, body: '6. _________ you like this DVD?', wordAssigned: null, correctAnswerId: 5},
    { id: 7, body: '7. We _________ live in a flat.', wordAssigned: null, correctAnswerId: 7 },
    { id: 8, body: '8. Wednesday, Thursday, Friday, _________ ', wordAssigned: null, correctAnswerId: 4 },
    { id: 9, body: '9. Does he _________ tennis?', wordAssigned: null, correctAnswerId: 3 },
    { id: 10, body: '10. Have you _________ a car?', wordAssigned: null, correctAnswerId: 1 }
  ]);

  const [words, setWords] = useState([
    { id: 1, body: 'got', list: 1 },
    { id: 2, body: 'Where', list: 1 },
    { id: 3, body: 'play', list: 1 },
    { id: 4, body: 'Saturday', list: 1 },
    { id: 5, body: 'Do', list: 1 },
    { id: 6, body: 'a', list: 1 },
    { id: 7, body: "don't", list: 1 },
    { id: 8, body: 'are', list: 1 },
    { id: 9, body: 'goes', list: 1 },
    { id: 10, body: 'My', list: 1 }
  ]);

  const getList = (list) => {
    return words.filter(item => item.list === list);
  }

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData('itemId', item.id);
  }

  const dragginOver = (evt) => {
    evt.preventDefault();
  }

  const onDrop = (evt, questionId) => {
    const itemID = evt.dataTransfer.getData('itemId');
    const item = words.find(item => item.id == itemID);
    
    // Encontrar la pregunta donde se está soltando
    const question = questions.find(q => q.id === questionId);

    // no permitir poner otra
    if (question.wordAssigned) {
      return;
    }

    // POner la palabra a la pregunta
    question.wordAssigned = item;

    // Actualizar el estado de las preguntas
    const newQuestions = questions.map(q => q.id === questionId ? question : q);
    setQuestions(newQuestions);

    // Actualizar el estado
    const newWords = words.map(word => {
      if (word.id === item.id) {
        return { ...word, list: 2 }; // Cambiar de lista
      }
      return word;
    });

    setWords(newWords);
  }

  const returnToWords = (evt, questionId) => {
    // Mover el elemento de vuelta a la columna 1
    const question = questions.find(q => q.id === questionId);
    if (question.wordAssigned) {
      const wordId = question.wordAssigned.id;

      const newWords = words.map(word => {
        if (word.id === wordId) {
          return { ...word, list: 1 }; // Volver la palabra a la columna 1
        }
        return word;
      });

      setWords(newWords);

      // Quitar la palabra
      const newQuestions = questions.map(q => q.id === questionId ? { ...q, wordAssigned: null } : q);
      setQuestions(newQuestions);
    }
  }

  const getBackgroundColor = (question) => {
    if (!question.wordAssigned) {
      return "white"; // Sin asignar palabra
    }
    return question.wordAssigned.id === question.correctAnswerId ? "#A5D6A7" : "#F5CDD2";
  };


  return (
    <>
      <h1>
        Put the words on the correct question &nbsp;
      </h1>
      <br />

      <div className="drag-and-drop">
        <div className="colum colum-1">
          <h3>
            Random words
          </h3>

          <div className="dd-zone" droppable="true" onDragOver={(evt => dragginOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
            {getList(1).map(item => (
              <div className="dd-element" key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="colum colum-2">
          <h3>
            Questions
          </h3>

          <div className="question-zone">
            {questions.map((item) => (
              <div key={item.id} className="dd-elementQ" style={{backgroundColor: getBackgroundColor(item)}} droppable="true" onDragOver={(evt => dragginOver(evt))} onDrop={(evt => onDrop(evt, item.id))}>
                <p className="body1">{item.body}</p>
                
                {item.wordAssigned ? (
                  <div>
                  <p>{item.wordAssigned.body}</p>
                  <button onClick={(evt) => returnToWords(evt, item.id)}>Return</button>
                </div>
              ) : null}
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Verbs;
