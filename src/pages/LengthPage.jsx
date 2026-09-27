import { useState } from 'react'

const MIN = 1
const MAX = 10

function LengthPage({ mode, onSelectLength, onBack }) {
  const [length, setLength] = useState(3)

  const decrement = () => setLength((value) => Math.max(MIN, value - 1))
  const increment = () => setLength((value) => Math.min(MAX, value + 1))

  return (
    <section className="page length">
      <p className="eyebrow">Mode {mode.label}</p>
      <h1>Choisis la longueur</h1>
      <p className="lead">Les mots seront formé d'une succession de lettres alétoires de l'alphabet.</p>

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
            {length === 1 ? 'lettre' : 'lettres'}
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
