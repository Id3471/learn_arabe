import { DIFFICULTIES } from '../data/difficulties'

const MIN = 1
const MAX = 10

function LengthPage({
  mode,
  difficultyId,
  length,
  onChangeLength,
  onSelectLength,
  onBack,
}) {
  const difficulty = DIFFICULTIES.find((item) => item.id === difficultyId)

  const decrement = () => onChangeLength(Math.max(MIN, length - 1))
  const increment = () => onChangeLength(Math.min(MAX, length + 1))

  return (
    <section className="page length">
      <p className="eyebrow">
        Mode {mode.label} · {difficulty?.label}
      </p>
      <h1>Choisis la longueur</h1>
      <p className="lead">
        La longueur compte les lettres de base. En moyen et difficile, les
        lettres ajoutées pour écrire une voyelle longue ne sont pas comptées.
      </p>

      <div className="length-picker" role="group" aria-label="Longueur des mots">
        <button
          type="button"
          className="counter-btn"
          onClick={decrement}
          disabled={length === MIN}
          aria-label="Moins une lettre"
        >
          −
        </button>

        <div className="length-display">
          <span className="length-value">{length}</span>
          <span className="length-label">
            {length === 1 ? 'lettre de base' : 'lettres de base'}
          </span>
        </div>

        <button
          type="button"
          className="counter-btn"
          onClick={increment}
          disabled={length === MAX}
          aria-label="Plus une lettre"
        >
          +
        </button>
      </div>

      <div className="actions">
        <button type="button" className="btn ghost" onClick={onBack}>
          Retour
        </button>
        <button
          type="button"
          className="btn primary"
          onClick={() => onSelectLength(length)}
        >
          Commencer
        </button>
      </div>
    </section>
  )
}

export default LengthPage
