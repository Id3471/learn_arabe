import { useCallback, useState } from 'react'
import WordCard from '../components/WordCard'
import { buildWord } from '../utils/generateWord'
import { DIFFICULTIES } from '../data/difficulties'

function ExercisePage({ mode, difficultyId, wordLength, onBack }) {
  const difficulty = DIFFICULTIES.find((item) => item.id === difficultyId)
  const [word, setWord] = useState(() =>
    buildWord(mode, wordLength, difficultyId),
  )
  const [showCorrection, setShowCorrection] = useState(false)

  const handleNext = useCallback(() => {
    setWord(buildWord(mode, wordLength, difficultyId))
    setShowCorrection(false)
  }, [mode, difficultyId, wordLength])

  const handleShowCorrection = useCallback(() => setShowCorrection(true), [])

  return (
    <section className="page exercise">
      <header className="exercise-header">
        <button type="button" className="btn ghost" onClick={onBack}>
          ← Retour
        </button>
        <p className="exercise-meta">
          Mode {mode.label} · {difficulty?.label} · {wordLength}{' '}
          {wordLength === 1 ? 'lettre de base' : 'lettres de base'}
        </p>
      </header>

      <WordCard word={word} showCorrection={showCorrection} />

      <div className="actions">
        {showCorrection ? (
          <button type="button" className="btn primary" onClick={handleNext}>
            Suite suivante →
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
