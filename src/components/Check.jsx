import { useState } from "react";
import './estilo.css';

import Text from "./text.json";
import Question from "./question.json";
import Image from "./imagen.json";

export const Check = ({textJSON, questionJSON}) => {
  
  /*const id = useParams().id;
  const content = games.find((game) => game.id === id);

  const [textos, setTextos] = useState(textJSON);
  const [preguntas, setPreguntas] = useState(questionJSON);

  const getText = (text) => {
    return textos.filter(item => item.text === text);
  }*/

  const [text, setText] = useState(Text.uno[0].body);

  /*const passText = (props ) => {

    return(
      <p className="writing">{props(Text)}</p>
    )
  }*/

  const [selectedOptions, setSelectedOptions] = useState({}); // Maneja las respuestas seleccionadas por pregunta

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: optionIndex // Guarda la opción seleccionada para cada pregunta
    });
  };

  const checkCorrectAnswer = (questionIndex) => {
    const correctOption = Question.uno[questionIndex].correctOption;
    return selectedOptions[questionIndex] === correctOption;
  };

  return (
    <>
      <header>
        <h1>Read and tick the correct box</h1>
        <p className="text">{text}</p>
      </header>

      <main className="content">
        <section className="image">
          <ul>
            {/* Primera pregunta */}
            <li className="question">
              <p>{Question.uno[0].body}</p>
              <figure className="picture">
                {Image.uno.slice(0, 3).map((image, index) => (
                  <label key={index}>
                    <img src={image.url} alt="" height="200px" width="200px" />
                    <input
                      type="radio"
                      name="question1"
                      value={index}
                      checked={selectedOptions[0] === index}
                      onChange={() => handleOptionChange(0, index)}
                    />
                  </label>
                ))}
              </figure>
              {/* Mostrar si es correcto o incorrecto con estilo */}
              <p
                style={{
                  color: selectedOptions[0] !== undefined 
                    ? checkCorrectAnswer(0) 
                      ? 'green'  // Verde si es correcto
                      : 'red'    // Rojo si es incorrecto
                    : 'black',  // Color normal si no ha seleccionado nada aún
                  fontWeight: 'bold',
                  fontSize: '1.2em',
                }}
              >
                {selectedOptions[0] !== undefined && (checkCorrectAnswer(0) ? "Correct answer!" : "Incorrect answer. Try again!")}
              </p>
            </li>

            {/* Segunda pregunta */}
            <li className="question">
              <p>{Question.uno[1].body}</p>
              <figure className="picture">
                {Image.uno.slice(3, 6).map((image, index) => (
                  <label key={index}>
                    <img src={image.url} alt="" height="200px" width="200px" />
                    <input
                      type="radio"
                      name="question2"
                      value={index}
                      checked={selectedOptions[1] === index}
                      onChange={() => handleOptionChange(1, index)}
                    />
                  </label>
                ))}
              </figure>
              <p
                style={{
                  color: selectedOptions[1] !== undefined 
                    ? checkCorrectAnswer(1) 
                      ? 'green'
                      : 'red'
                    : 'black',
                  fontWeight: 'bold',
                  fontSize: '1.2em',
                }}
              >
                {selectedOptions[1] !== undefined && (checkCorrectAnswer(1) ? "Correct answer!" : "Incorrect answer. Try again!")}
              </p>
            </li>

            {/* Tercera pregunta */}
            <li className="question">
              <p>{Question.uno[2].body}</p>
              <figure className="picture">
                {Image.uno.slice(6, 9).map((image, index) => (
                  <label key={index}>
                    <img src={image.url} alt="" height="200px" width="200px" />
                    <input
                      type="radio"
                      name="question3"
                      value={index}
                      checked={selectedOptions[2] === index}
                      onChange={() => handleOptionChange(2, index)}
                    />
                  </label>
                ))}
              </figure>
              <p
                style={{
                  color: selectedOptions[2] !== undefined 
                    ? checkCorrectAnswer(2) 
                      ? 'green'
                      : 'red'
                    : 'black',
                  fontWeight: 'bold',
                  fontSize: '1.2em',
                }}
              >
                {selectedOptions[2] !== undefined && (checkCorrectAnswer(2) ? "Correct answer!" : "Incorrect answer. Try again!")}
              </p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
