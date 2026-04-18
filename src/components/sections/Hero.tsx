import { cafeteria } from '../../config/cafeteria'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Overlay de grano */}
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content container">
        <p className="hero__eyebrow">Specialty Coffee · Córdoba</p>
        <h1 className="hero__title">{cafeteria.slogan}</h1>
        <p className="hero__sub">{cafeteria.nombre}</p>
        <div className="hero__actions">
          <a href="#carta" className="btn btn-primary">Ver la carta</a>
          <a href="#nosotros" className="btn btn-outline">Nuestra historia</a>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}