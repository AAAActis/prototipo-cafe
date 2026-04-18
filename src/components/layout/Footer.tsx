import { cafeteria } from '../../config/cafeteria'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__brand">{cafeteria.nombre}</p>
        <p className="footer__copy">
          © {new Date().getFullYear()} {cafeteria.nombre} · Córdoba, Argentina
        </p>
      </div>
    </footer>
  )
}