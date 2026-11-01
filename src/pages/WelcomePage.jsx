import { MODES } from '../data/modes'

function WelcomePage({ onSelectMode }) {
  return (
    <section className="page welcome">
      <p className="eyebrow">تعلم القراءة</p>
      <h1>Apprendre à lire l&rsquo;arabe</h1>
      <p className="lead">
        Reconnaître les lettres arabes et apprendre à lire leurs voyelles et
        leurs signes. Choisis un mode pour commencer&nbsp;:
      </p>

      <div className="mode-grid">
        {MODES.map((mode) => (
          <button
            key={mode.id}
            type="button"
            className="mode-card"
            disabled={!mode.available}
            onClick={() => onSelectMode(mode)}
          >
            <span className="mode-mark" lang="ar" aria-hidden="true">
              {mode.mark}
            </span>
            <span className="mode-name">{mode.label}</span>
            {mode.available ? (
              <span className="mode-hint">Disponible</span>
            ) : (
              <span className="mode-hint soon">Bientôt</span>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

export default WelcomePage
