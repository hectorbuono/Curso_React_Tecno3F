// src/components/CardGrid.jsx
import ItemCard from "./ItemCard";

const CardGrid = ({ lista }) => {
  return (
    <div className="grid-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {lista.map((item) => (
        <ItemCard 
          key={item.id}
          titulo={item.titulo}
          categoria={item.categoria}
          anio={item.anio}
          destacado={item.destacado}
        />
      ))}
    </div>
  );
};

export default CardGrid;
