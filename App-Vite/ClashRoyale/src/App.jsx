import { useState } from 'react'
import { catalogo } from './utils/data.js'
import CustomHeader from './components/CustomHeader.jsx'
import CardGrid from './components/CardGrid.jsx'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [favoritos, setFavoritos] = useState([])

  // Filtra el catálogo según lo que el usuario escribe
  // Filtra el catálogo según lo que el usuario escribe
  const catalogoFiltrado = catalogo.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase())
  )

  // Agrega o quita un ítem de favoritos
  const toggleFavorito = (id) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.includes(id)
        ? prevFavoritos.filter((favId) => favId !== id)
        : [...prevFavoritos, id]
    )
  }

  return (
    <>
      <CustomHeader
        titulo="Video Juegos"
        subtitulo="Tu colección personal de videojuegos y animes"
      />

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por título o categoría..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <CardGrid
        items={catalogoFiltrado}
        favoritos={favoritos}
        onToggleFavorito={toggleFavorito}
      />
    </>
  )
}

export default App
