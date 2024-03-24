import { useContext } from "react"
import { ContextApp } from "../App"
import IconHeart from "./IconHeart"

const Gallery = ({ photos }) => {

  const { liked, setLiked } = useContext(ContextApp)

  const handleLikeClick = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((itemId) => itemId !== id));
    } else {
      setLiked([...liked, id])
    }
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      {Array.isArray(photos) ? (
        photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.src.tiny} alt={photo.title} />
            <IconHeart
              filled={liked.includes(photo.id)}
              onClick={() => handleLikeClick(photo.id)}
            />
          </div>
        ))
      ) : (
        <p>No se han proporcionado fotos.</p>
      )}
    </div>
  )
}

export default Gallery