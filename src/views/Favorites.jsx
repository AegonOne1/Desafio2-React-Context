import { useContext } from "react"
import { ContextApp } from "../App"
import Gallery from "../components/Gallery"
import Photos from "../assets/js/photos.json"

const Favorites = () => {
  const { liked } = useContext(ContextApp)

  // Filtra las fotos basadas en las que han sido marcadas como favoritas
  const favoritePhotos = Photos.filter((photo) => liked.includes(photo.id))

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <Gallery photos={favoritePhotos} />
    </div>
  )
}

export default Favorites