function ItemCard({ titulo, categoria, anio, urlFoto, destacado, esFavorito, onToggleFavorito }) {
  const clasesTarjeta = [
    'card',
    destacado ? 'card--destacado' : '',
    esFavorito ? 'card--favorito' : '',
  ].join(' ')

  return (
    <div className={clasesTarjeta}>
      <img src={urlFoto} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{categoria}</p>
      <p>{anio}</p>
      <div className="buttons-container">
        <button
          className={`btn-fav ${esFavorito ? 'btn-fav--active' : ''}`}
          onClick={onToggleFavorito}
        >
          {esFavorito ? '★ Favorito' : '☆ Agregar'}
        </button>
      </div>
    </div>
  )
}

export default ItemCard
