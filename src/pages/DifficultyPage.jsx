import { DIFFICULTIES } from '../data/difficulties'

function DifficultyPage({ mode, onSelectDifficulty, onBack }) {
  return (
    <section className="page difficulty">
      <p className="eyebrow">Mode {mode.label}</p>
      <h1>Choisis la difficulté</h1>
      <p className="lead">
        Le niveau facile garde le fonctionnement actuel. Les niveaux moyen et
        difficile ajoutent des signes à lire.
      </p>

      <div className="difficulty-grid">
        {DIFFICULTIES.map((difficulty) => (
          <button
            key={difficulty.id}
            type="button"
            className="difficulty-card"
            onClick={() => onSelectDifficulty(difficulty)}
          >
            <span className="difficulty-name">{difficulty.label}</span>
            <span className="difficulty-summary">{difficulty.summary}</span>
          </button>
        ))}
      </div>

      <div className="actions">
        <button type="button" className="btn ghost" onClick={onBack}>
          Retour
        </button>
      </div>
    </section>
  )
}

export default DifficultyPage
