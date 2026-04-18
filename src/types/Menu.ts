export type Categoria = 'calientes' | 'frias' | 'comidas' | 'especiales'

export interface MenuItem {
  id:          number
  nombre:      string
  descripcion: string
  precio:      number
  categoria:   Categoria
  popular?:    boolean
  nuevo?:      boolean
}