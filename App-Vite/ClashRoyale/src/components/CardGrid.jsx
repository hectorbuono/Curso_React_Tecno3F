import CartaClashRoyale from "./CartaClashRoyale";

const CardGrid = ({ lista }) => {
  // --- 1. LÓGICA FUERA DEL RETURN (Punto 6) ---
  
  // Estilos del contenedor (Flexbox para que se vean en filas y columnas)
  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  // --- 2. RETURN LIMPIO ---
  return (
    <div style={gridStyle} id="cards-container">
      {/* Mapeamos la lista directamente usando la propiedad 'urlFoto' de tu data.js */}
      {lista.map((item) => (
        <CartaClashRoyale
          key={item.id}
          titulo={item.titulo}
          categoria={item.categoria}
          anio={item.anio}
          destacado={item.destacado}
          urlFoto={item.urlFoto} // <--- Aquí ya usa tu URL real del catálogo
        />
      ))}
    </div>
  );
};

export default CardGrid;
