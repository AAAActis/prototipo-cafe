import { useState } from 'react'
import { menuItems } from '../../mocks/menu'
import type { Categoria } from '../../types/Menu'
import './MenuSection.css'

const tabs: { label: string; value: Categoria | 'todos' }[] = [
  { label: 'Todos',      value: 'todos'     },
  { label: 'Calientes',  value: 'calientes' },
  { label: 'Frías',      value: 'frias'     },
  { label: 'Comidas',    value: 'comidas'   },
]

export default function MenuSection() {
  const [active, setActive] = useState<Categoria | 'todos'>('todos')

  const filtered = active === 'todos'
    ? menuItems
    : menuItems.filter(i => i.categoria === active)

  return (
    <section id="carta" className="menu-section">
      <div className="container">
        <div className="menu-section__header">
          <span className="menu-section__eyebrow">Lo que preparamos</span>
          <h2 className="menu-section__title">Nuestra Carta</h2>
        </div>

        <div className="menu-section__tabs" role="tablist">
          {tabs.map(t => (
            <button
              key={t.value}
              role="tab"
              aria-selected={active === t.value}
              className={`menu-tab ${active === t.value ? 'menu-tab--active' : ''}`}
              onClick={() => setActive(t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="menu-section__grid">
          {filtered.map(item => (
            <article key={item.id} className="menu-card">
              <div className="menu-card__top">
                <h3 className="menu-card__name">{item.nombre}</h3>
                <div className="menu-card__badges">
                  {item.popular && <span className="badge badge--popular">Popular</span>}
                  {item.nuevo   && <span className="badge badge--nuevo">Nuevo</span>}
                </div>
              </div>
              <p className="menu-card__desc">{item.descripcion}</p>
              <p className="menu-card__price">
                ${item.precio.toLocaleString('es-AR')}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}