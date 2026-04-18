import { cafeteria } from '../../config/cafeteria'
import './About.css'

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about__inner container">
        <div className="about__quote">
          <blockquote>
            "El café es el pretexto perfecto para encontrarse."
          </blockquote>
        </div>
        <div className="about__body">
          <span className="about__eyebrow">Nuestra historia</span>
          <h2 className="about__title">Pasión en cada preparación</h2>
          <p className="about__text">{cafeteria.descripcion}</p>
          <p className="about__text">
            Trabajamos con productores locales y de origen para traerte
            siempre el mejor grano, tostado en pequeños lotes para
            preservar sus aromas únicos.
          </p>
          <div className="about__stats">
            {[
              { num: '+30', label: 'Variedades de café' },
              { num: '5',   label: 'Años en Córdoba'    },
              { num: '100%', label: 'Grano de origen'   },
            ].map(s => (
              <div key={s.label} className="about__stat">
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}