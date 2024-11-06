import { Link } from "react-router-dom"
import "../styles/components/Content.css"
export const Content = ({title, content, image, id}) => {
  return (
    <>
        <Link to={id} className="content">
          <img className="image-preview" src={image} alt={title} />
          <h1 className="title-content">{title}</h1>
          <p className="text-content">{content}</p>
        </Link>
    </>
  )
}