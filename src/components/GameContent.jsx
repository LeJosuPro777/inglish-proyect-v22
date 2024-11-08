
import { Content } from "./Content"
export const GameContent = ({contenido}) => {
  return (contenido.map(({content, id, title}) => <Content key={id} content={content} id={id} title={title} 
  image={"https://t4.ftcdn.net/jpg/08/28/68/85/240_F_828688501_s4ynx9lQAtTEhPIFhfBSZMoB8dBmd0Ht.jpg"}
  />))
}