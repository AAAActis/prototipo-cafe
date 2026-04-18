import { cafeteria } from '../../config/cafeteria'
import './Contact.css'

export default function Contact() {
  const telHref  = 'tel:' + cafeteria.telefono
  const mailHref = 'mailto:' + cafeteria.email

  return (
    <section id="contacto" className="contact">
      <div className="contact__inner container">

        <div className="contact__info">
          <span className="contact__eyebrow">Vení a vernos</span>
          <h2 className="contact__title">Encontranos en Córdoba</h2>

          <address className="contact__address">
            <p>{cafeteria.direccion}</p>
            <a href={telHref}>{cafeteria.telefono}</a>
            <a href={mailHref}>{cafeteria.email}</a>
          </address>

          <div className="contact__horarios">
            <h3>Horarios</h3>
            {cafeteria.horarios.map(h => (
              <div key={h.dia} className="contact__horario-row">
                <span>{h.dia}</span>
                <span>{h.hora}</span>
              </div>
            ))}
          </div>

          <a href={cafeteria.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary contact__ig">
            Seguinos en Instagram
          </a>
        </div>

        <div className="contact__map-placeholder" aria-label="Ubicación del café">
          <div className="contact__map-inner">
            <p>📍 {cafeteria.direccion}</p>
            <small>Integrá Google Maps aquí</small>
          </div>
        </div>

      </div>
    </section>
  )
}