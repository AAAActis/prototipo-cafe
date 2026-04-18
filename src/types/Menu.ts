export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  categoriaId: string;
  disponible: boolean;
}

export interface Categoria {
  id: string;
  nombre: string;
  icono?: string; // Por si después querés meter iconos de FontAwesome o Lucide
}