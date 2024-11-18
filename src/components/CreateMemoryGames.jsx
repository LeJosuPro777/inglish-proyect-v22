import './../styles/CreateMemoryGames.css'
import { useState } from "react";
import axios from "axios";
export const CreateMemoryGames = () => {
  const [arrayText, setArrayText] = useState('')
  const [data, setData] = useState({
    title : '',
    content : '',
    words : []
  })
  const titleHandleChange = (event) => {
    setData((dataPrev) => {
      return {...dataPrev, title : event.target.value}
    })
  }
  const contentHandleChange = (event) => {
    setData((dataPrev) => {
      return {...dataPrev, content : event.target.value}
    })
  }
  
  const wordsHandleChange = (event) => {
    const value = event.target.value
    setArrayText(value)
    const words = value.split(',').map((word) => word.trim()).filter((word) => word !== '')

    setData(dataPrev => {
      return {...dataPrev, words: words}
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/data', data)
    .then((response => {
      console.log(response.data)
    })) 
  }
  return (
    <form action="" className="formulario" onSubmit={handleSubmit}>
      <input type="text" onChange={titleHandleChange} value={data.title} placeholder="Title" />
      <input type="text" onChange={contentHandleChange} value={data.content} placeholder="Description" />
      <input type="text" onChange={wordsHandleChange} value={arrayText}  placeholder="Words (At least 10)" />
      <button type="submit">Create Game</button>
    </form>
  );
};
