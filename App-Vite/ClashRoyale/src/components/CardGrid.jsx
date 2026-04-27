import ItemCard from './ItemCard.jsx'

function CardGrid({ items, favoritos, onToggleFavorito }) {
  return (
    <div className="card-grid">
      {items.length === 0 ? (
        <p className="card-grid__empty">No se encontraron resultados 😔</p>
      ) : (
        items.map((item) => (
          <ItemCard
            key={item.id}
            titulo={item.titulo}
            categoria={item.categoria}
            anio={item.anio}
            urlFoto={item.urlFoto}
            destacado={item.destacado}
            esFavorito={favoritos.includes(item.id)}
            onToggleFavorito={() => onToggleFavorito(item.id)}
          />
        ))
      )}
    </div>
  )
}

export default CardGrid
