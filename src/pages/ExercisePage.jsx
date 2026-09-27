import { useCallback, useState } from 'react'
import WordCard from '../components/WordCard'
import { buildWord } from '../utils/generateWord'

function ExercisePage({ mode, wordLength, onBack }) {
  const [word, setWord] = useState(() => buildWord(mode.data, wordLength))
  const [showCorrection, setShowCorrection] = useState(false)

  const handleNext = useCallback(() => {
    setWord(buildWord(mode.data, wordLength))
    setShowCorrection(false)
  }, [mode, wordLength])

  const handleShowCorrection = useCallback(() => setShowCorrection(true), [])

  return (
    <section className="page exercise">
      <header className="exercise-header">
        <button type="button" className="btn ghost" onClick={onBack}>
          ← Retour
        </button>
        <p className="exercise-meta">
          Mode {mode.label} · {wordLength} {wordLength === 1 ? 'lettre' : 'lettres'}
        </p>
      </header>

      <WordCard word={word} showCorrection={showCorrection} />

      <div className="actions">
        {showCorrection ? (
          <button type="button" className="btn primary" onClick={handleNext}>
            Mot suivant →
          </button>
        ) : (
          <button type="button" className="btn primary" onClick={handleShowCorrection}>
            Correction
          </button>
        )}
      </div>
    </section>
  )
}

export default ExercisePage
