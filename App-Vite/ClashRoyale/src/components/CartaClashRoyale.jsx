import { useState } from 'react';

function CartaClashRoyale({ titulo, categoria, anio, destacado, urlFoto }) {
    const [esFavorito, setEsFavorito] = useState(false);

    // --- LÓGICA FUERA DEL RETURN (Punto 6) ---
    const manejarFavorito = () => setEsFavorito(!esFavorito);

    const cardStyle = {
        position: 'relative', // Necesario para posicionar el texto y el corazón
        width: '260px',
        height: '380px',
        borderRadius: '15px',
        overflow: 'hidden',
        margin: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // Empuja el texto hacia abajo
        color: 'white',
        fontFamily: 'sans-serif',
        // Estilo dinámico: Borde dorado si es destacado
        border: destacado ? '4px solid #FFD700' : '1px solid rgba(255,255,255,0.2)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease'
    };

    const fondoImagenStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, // La imagen va atrás
        objectFit: 'cover',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // Gradiente oscuro abajo para que el texto se lea bien (como en la foto)
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
        zIndex: 2,
    };

    const contenidoStyle = {
        position: 'relative',
        zIndex: 3, // El texto va arriba de todo
        padding: '20px',
        textAlign: 'center'
    };

    const corazonStyle = {
        position: 'absolute',
        top: '15px',
        right: '15px',
        zIndex: 4,
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        color: esFavorito ? '#ff4d4d' : 'white'
    };

    return (
        <div style={cardStyle}>
            {/* 1. Imagen de Fondo */}
            <img src={urlFoto} alt={titulo} style={fondoImagenStyle} />

            {/* 2. Capa oscura para legibilidad */}
            <div style={overlayStyle}></div>

            {/* 3. Corazón arriba a la derecha */}
            <button onClick={manejarFavorito} style={corazonStyle}>
                {esFavorito ? '❤️' : '🤍'}
            </button>

            {/* 4. Texto abajo (Título, Categoría, Año) */}
            <div style={contenidoStyle}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.3rem' }}>{titulo}</h3>
                <p style={{ margin: '0', fontSize: '0.9rem', opacity: 0.8 }}>{categoria}</p>
                <p style={{ margin: '0', fontSize: '0.9rem', opacity: 0.8 }}>{anio}</p>
                
                {destacado && (
                    <span style={{ color: '#FFD700', fontSize: '0.7rem', fontWeight: 'bold' }}>
                        ⭐ DESTACADO
                    </span>
                )}
            </div>
        </div>
    );
}

export default CartaClashRoyale;
