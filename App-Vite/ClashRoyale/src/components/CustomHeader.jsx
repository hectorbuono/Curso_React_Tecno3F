function CustomHeader({ titulo, subtitulo }) {
  return (
    <div className="custom-header">
      <h1 className="custom-header__title">{titulo}</h1>
      <p className="custom-header__subtitle">{subtitulo}</p>
    </div>
  )
}

export default CustomHeader
