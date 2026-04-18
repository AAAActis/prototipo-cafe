import type { Producto, Categoria } from '../types';

export const CATEGORIAS: Categoria[] = [
  { id: '1', nombre: 'Café de Especialidad' },
  { id: '2', nombre: 'Pastelería' },
  { id: '3', nombre: 'Infusiones' }
];

export const PRODUCTOS: Producto[] = [
  {
    id: 'p1',
    nombre: 'Flat White',
    descripcion: 'Doble shot de espresso con leche micro-cremada.',
    precio: 3500,
    imagenUrl: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61',
    categoriaId: '1',
    disponible: true
  },
  {
    id: 'p2',
    nombre: 'Croissant de Almendras',
    descripcion: 'Mantequilla pura, relleno de crema de almendras tostadas.',
    precio: 2800,
    imagenUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    categoriaId: '2',
    disponible: true
  }
];