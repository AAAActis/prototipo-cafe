import type { Producto } from '../types';

// ESTO ES LO QUE TE FALTA
interface Props {
  producto: Producto;
}

// Ahora la función sí sabe qué es 'Props'
export const ProductoCard = ({ producto }: Props) => {
  return (
    <div style={{ 
      background: '#ffffff',
      border: 'none', 
      borderRadius: '16px', 
      padding: '12px', 
      margin: '10px', 
      width: '260px', 
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s'
    }}>
      {/* ... el resto de tu código igual ... */}
      <img 
        src={producto.imagenUrl} 
        alt={producto.nombre} 
        style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px' }} 
      />
      <div style={{ padding: '12px 4px' }}>
        <h3 style={{ margin: '0', fontSize: '1.1rem', fontWeight: '600' }}>{producto.nombre}</h3>
        <p style={{ color: '#666', fontSize: '0.85rem', margin: '8px 0', height: '36px' }}>{producto.descripcion}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>${producto.precio}</span>
          <button style={{ 
            padding: '8px 16px', 
            background: '#000', 
            color: '#fff', 
            borderRadius: '20px', 
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem'
          }}>
            Pedir
          </button>
        </div>
      </div>
    </div>
  );
};