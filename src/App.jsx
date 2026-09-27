import { useMemo, useState } from 'react'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import LengthPage from './pages/LengthPage'
import ExercisePage from './pages/ExercisePage'
import { MODES } from './data/mockModes'

function App() {
  // Étapes de l'app : welcome → length → exercise
  const [step, setStep] = useState('welcome')
  const [modeId, setModeId] = useState(null)
  const [wordLength, setWordLength] = useState(3)

  const mode = useMemo(
    () => MODES.find((candidate) => candidate.id === modeId) ?? null,
    [modeId],
  )

  const handleSelectMode = (selected) => {
    setModeId(selected.id)
    setStep('length')
  }

  const handleSelectLength = (length) => {
    setWordLength(length)
    setStep('exercise')
  }

  return (
    <main id="center">
      {step === 'welcome' && (
        <WelcomePage onSelectMode={handleSelectMode} />
      )}

      {step === 'length' && mode && (
        <LengthPage
          mode={mode}
          onSelectLength={handleSelectLength}
          onBack={() => setStep('welcome')}
        />
      )}

      {step === 'exercise' && mode && (
        <ExercisePage
          mode={mode}
          wordLength={wordLength}
          onBack={() => setStep('length')}
        />
      )}
    </main>
  )
}

export default App
