import { PRODUCTOS, CATEGORIAS } from '../mocks/productos';
import { ProductoCard } from '../components/ProductoCard';

export const Carta = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50' }}>Nuestro Menú</h1>
        <p style={{ color: '#7f8c8d' }}>Elegí lo que más te guste y armá tu pedido.</p>
      </header>

      {CATEGORIAS.map(categoria => {
        // Filtramos los productos que pertenecen a esta categoría
        const productosCategoria = PRODUCTOS.filter(p => p.categoriaId === categoria.id);

        // Si la categoría no tiene productos, no la renderizamos
        if (productosCategoria.length === 0) return null;

        return (
          <section key={categoria.id} style={{ marginBottom: '40px' }}>
            <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', color: '#34495e' }}>
              {categoria.nombre}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {productosCategoria.map(producto => (
                <ProductoCard key={producto.id} producto={producto} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};