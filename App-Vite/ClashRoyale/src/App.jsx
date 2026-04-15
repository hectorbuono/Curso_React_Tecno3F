// App.jsx
import { useState } from 'react';
import { catalogo } from './utils/data'; // Tu catálogo de juegos
import CustomHeader from './components/CustomHeader';
import CardGrid from './components/CardGrid';

function App() {
  const [busqueda, setBusqueda] = useState("");

  // Punto 6: Lógica fuera del return
  const handleSearch = (e) => {
    setBusqueda(e.target.value);
  };

  const juegosFiltrados = catalogo.filter((juego) =>
    juego.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <CustomHeader 
        titulo="Mi Catálogo de Juegos" 
        subtitulo="Filtrá tus favoritos" 
      />
      
      <main>
        {/* Punto 4: Buscador */}
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <input 
            type="text" 
            placeholder="Buscar por título..." 
            value={busqueda}
            onChange={handleSearch}
          />
        </div>

        <CardGrid lista={juegosFiltrados} />
      </main>

      <footer>
        <p>© 2026 - THORDEV - Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
