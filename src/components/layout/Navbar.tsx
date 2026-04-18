import { useScrollY } from '../../hooks/useScrollY'
import { cafeteria } from '../../config/cafeteria'
import './Navbar.css'

const links = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Carta',    href: '#carta'    },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const scrollY = useScrollY()
  const solid   = scrollY > 60

  return (
    <header className={`navbar ${solid ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          {cafeteria.nombre}
        </a>
        <nav className="navbar__nav" aria-label="Navegación principal">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary navbar__cta">
            Visitanos
          </a>
        </nav>
      </div>
    </header>
  )
}