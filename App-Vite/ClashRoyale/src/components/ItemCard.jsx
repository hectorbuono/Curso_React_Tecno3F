import { useState } from 'react';

const ItemCard = ({ titulo, categoria, anio, destacado }) => {
  // Punto 4: Estado local para Favoritos
  const [esFavorito, setEsFavorito] = useState(false);

  // Punto 6: Manejador de eventos (Lógica fuera del return)
  const handleFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  // Punto 5: Estilos dinámicos combinados (Destacado + Favorito)
  const cardStyle = {
    border: destacado ? '3px solid gold' : '1px solid #ccc',
    // Si es favorito, cambiamos el fondo a un tono celeste suave
    backgroundColor: esFavorito ? '#e3f2fd' : (destacado ? '#fffdf0' : '#fff'),
    padding: '20px',
    borderRadius: '12px',
    margin: '10px',
    transition: 'all 0.3s ease', // Para que el cambio de color sea suave
    boxShadow: esFavorito ? '0 4px 8px rgba(0,0,0,0.1)' : 'none'
  };

  return (
    <div style={cardStyle}>
      <h3>{titulo}</h3>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Año:</strong> {anio}</p>
      
      {/* Punto 5: Clase condicional visual */}
      <div style={{ marginTop: '10px' }}>
        <button 
          onClick={handleFavorito}
          style={{
            backgroundColor: esFavorito ? '#2196f3' : '#fff',
            color: esFavorito ? '#fff' : '#2196f3',
            border: '1px solid #2196f3',
            borderRadius: '5px',
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          {esFavorito ? '❤️ Favorito' : '🤍 Marcar favorito'}
        </button>
      </div>

      {destacado && <p style={{color: 'gold', fontWeight: 'bold'}}>⭐ Destacado</p>}
    </div>
  );
};

export default ItemCard;

