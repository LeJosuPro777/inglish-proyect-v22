import { useState } from "react";
import '../styles/components/drag_drop.css'
export const Quiz = ({quesitons, answers}) => {

  const [questions, setQuestions] = useState(quesitons);

  const [words, setWords] = useState(answers);

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
      <h1 className="title-quiz">
        Put the words on the correct question &nbsp;
      </h1>

      <div className="drag-and-drop">
        <div className="colum colum-1">
          <h3 className="random-words">
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
          <h3 className="random-words">
            Questions
          </h3>

          <div className="question-zone">
            {questions.map((item) => (
              <div key={item.id} className="dd-elementQ" style={{backgroundColor: getBackgroundColor(item)}} droppable="true" onDragOver={(evt => dragginOver(evt))} onDrop={(evt => onDrop(evt, item.id))}>
                <p className="body1">{item.body}</p>
                
                {item.wordAssigned ? (
                  <div className="answers">
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


