import React from "react";

const catalog = [
  {
    id: 1,
    title: "O Poder da Fé",
    category: "Filme Gospel",
    thumbnail: "https://via.placeholder.com/300x180.png?text=O+Poder+da+F%C3%A9",
  },
  {
    id: 2,
    title: "A Jornada da Verdade",
    category: "Série Bíblica",
    thumbnail: "https://via.placeholder.com/300x180.png?text=A+Jornada+da+Verdade",
  },
  {
    id: 3,
    title: "TV Evangelizar",
    category: "Canal ao Vivo",
    thumbnail: "https://via.placeholder.com/300x180.png?text=TV+Evangelizar",
  },
];

export default function AppOTT() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1rem',
      padding: '1rem'
    }}>
      {catalog.map((item) => (
        <div key={item.id} style={{ background: '#222', borderRadius: '12px', overflow: 'hidden' }}>
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{ width: '100%', height: '180px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem' }}>
            <h2>{item.title}</h2>
            <p>{item.category}</p>
            <button style={{
              width: '100%',
              padding: '0.5rem',
              background: '#FF5722',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              Assistir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
