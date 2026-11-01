import { useMemo, useState } from 'react'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import DifficultyPage from './pages/DifficultyPage'
import LengthPage from './pages/LengthPage'
import ExercisePage from './pages/ExercisePage'
import { MODES } from './data/modes'

function App() {
  // Étapes de l'app : welcome → difficulty → length → exercise
  const [step, setStep] = useState('welcome')
  const [modeId, setModeId] = useState(null)
  const [difficultyId, setDifficultyId] = useState(null)
  const [wordLength, setWordLength] = useState(3)

  const mode = useMemo(
    () => MODES.find((candidate) => candidate.id === modeId) ?? null,
    [modeId],
  )

  const handleSelectMode = (selected) => {
    setModeId(selected.id)
    setStep('difficulty')
  }

  const handleSelectDifficulty = (selected) => {
    setDifficultyId(selected.id)
    setStep('length')
  }

  const handleSelectLength = (length) => {
    setWordLength(length)
    setStep('exercise')
  }

  const handleChangeLength = (length) => {
    setWordLength(length)
  }

  return (
    <main id="center">
      {step === 'welcome' && (
        <WelcomePage onSelectMode={handleSelectMode} />
      )}

      {step === 'difficulty' && mode && (
        <DifficultyPage
          mode={mode}
          onSelectDifficulty={handleSelectDifficulty}
          onBack={() => setStep('welcome')}
        />
      )}

      {step === 'length' && mode && difficultyId && (
        <LengthPage
          mode={mode}
          difficultyId={difficultyId}
          length={wordLength}
          onChangeLength={handleChangeLength}
          onSelectLength={handleSelectLength}
          onBack={() => setStep('difficulty')}
        />
      )}

      {step === 'exercise' && mode && difficultyId && (
        <ExercisePage
          mode={mode}
          difficultyId={difficultyId}
          wordLength={wordLength}
          onBack={() => setStep('length')}
        />
      )}
    </main>
  )
}

export default App
