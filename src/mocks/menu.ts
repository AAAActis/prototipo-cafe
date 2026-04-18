import type { MenuItem } from '../types/Menu'

export const menuItems: MenuItem[] = [
  // ─── Calientes ───
  { id: 1,  nombre: 'Espresso',       descripcion: 'Concentrado puro, intenso y aromático. El origen de todo.',           precio: 1400, categoria: 'calientes', popular: true  },
  { id: 2,  nombre: 'Cortado',        descripcion: 'Espresso con un toque de leche cremosa al vapor.',                    precio: 1600, categoria: 'calientes' },
  { id: 3,  nombre: 'Café con Leche', descripcion: 'Espresso suave con abundante leche caliente.',                        precio: 1800, categoria: 'calientes', popular: true  },
  { id: 4,  nombre: 'Cappuccino',     descripcion: 'Espresso, leche y una generosa capa de espuma sedosa.',               precio: 2000, categoria: 'calientes' },
  { id: 5,  nombre: 'Latte',          descripcion: 'Café suave con mucha leche vaporizada y arte latte.',                 precio: 2200, categoria: 'calientes' },
  { id: 6,  nombre: 'Flat White',     descripcion: 'Doble espresso con micro-espuma de leche. Intenso y cremoso.',        precio: 2200, categoria: 'calientes', nuevo: true    },

  // ─── Frías ───
  { id: 7,  nombre: 'Cold Brew',      descripcion: 'Café extraído en frío durante 12 horas. Suave, dulce y sedoso.',     precio: 2400, categoria: 'frias', popular: true  },
  { id: 8,  nombre: 'Frappe',         descripcion: 'Café frío batido con hielo, leche y crema.',                         precio: 2600, categoria: 'frias' },
  { id: 9,  nombre: 'Latte Helado',   descripcion: 'Nuestro latte favorito servido sobre hielo.',                         precio: 2400, categoria: 'frias' },
  { id: 10, nombre: 'Matcha Latte',   descripcion: 'Té matcha ceremonial con leche de avena. Sin café.',                 precio: 2800, categoria: 'frias', nuevo: true    },

  // ─── Comidas ───
  { id: 11, nombre: 'Medialunas',     descripcion: 'Tres medialunas de manteca, recién horneadas cada mañana.',          precio: 1200, categoria: 'comidas', popular: true  },
  { id: 12, nombre: 'Tostado Mixto',  descripcion: 'Jamón y queso fundido en pan artesanal de molde.',                  precio: 2200, categoria: 'comidas' },
  { id: 13, nombre: 'Banana Bread',   descripcion: 'Bizcochuelo húmedo de banana con nueces y canela.',                 precio: 1800, categoria: 'comidas', nuevo: true    },
  { id: 14, nombre: 'Cheesecake',     descripcion: 'Cremoso cheesecake con coulis de frutos rojos del día.',            precio: 2400, categoria: 'comidas', popular: true  },
]