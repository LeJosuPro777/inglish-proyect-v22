import "./../styles/CreateMemoryGames.css";
import { useState } from "react";
import axios from "axios";
export const CreateMemoryGames = () => {
  const [arrayText, setArrayText] = useState("");
  const [data, setData] = useState({
    title: "",
    content: "",
    words: [],
  });
  const [isPosted, setIsPosted] = useState(false);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setData((dataPrev) => ({ ...dataPrev, [name]: value }));
  };

  const wordsHandleChange = (event) => {
    const value = event.target.value;
    setArrayText(value);
    const words = value
      .split(",")
      .map((word) => word.trim())
      .filter((word) => word !== "");

    setData((dataPrev) => {
      return { ...dataPrev, words: words };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://papusdb-1.onrender.com/create-memory-game", data)
      .then((response) => {
        //hace un post en la url correspondiente y le pasa el objeto data, despues resetea los datos
        console.log(data);
        setData({
          title: "",
          content: "",
          words: [],
        });
        setArrayText("");
        setIsPosted(true);
      });
  };
  return (
    <>
      <form action="" className="formulario" onSubmit={handleSubmit}>
        <h1>Create Memory Game</h1>
        <input
          type="text"
          onChange={handleChange}
          value={data.title}
          placeholder="Title"
          required
          name="title"
        />
        <input
          type="text"
          onChange={handleChange}
          value={data.content}
          placeholder="Description"
          required
          name="content"
        />
        <input
          type="text"
          onChange={wordsHandleChange}
          value={arrayText}
          placeholder="Words (At least 10)"
          required
        />
        <button type="submit">Create Game</button>
      </form>
      {
        isPosted && 
        <div className="alerta">
          <span class="alert-icon">⚠️</span>
          <p className="alert-message">Memory Game created successfully!</p>
          <button class="alert-close" onClick={() => setIsPosted(false)}>×</button>
        </div>
      }
    </>
  );
};
