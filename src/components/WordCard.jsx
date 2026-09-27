import { useMemo } from 'react'

// Affiche un mot arabe avec la correction phonétique.
// En mode mixte, chaque lettre porte sa propre haraka.
function WordCard({ word, showCorrection, mixMode = false }) {
  const display = useMemo(() => {
    if (mixMode) {
      // En mode mixte, chaque syllabe porte sa propre haraka : on affiche
      // la lettre nue + la haraka par-dessus.
      return word.syllables
        .map((syllable) => `${syllable.letter}${syllable.haraka}`)
        .join('')
    }
    return word.text
  }, [word, mixMode])

  return (
    <div className="word-card">
      <div className="word-text" lang="ar" dir="rtl">
        {display}
      </div>

      {showCorrection && (
        <div className="correction">
          <span className="correction-label">Correction</span>
          <span className="correction-pron" dir="ltr">
            {word.pronunciation}
          </span>
        </div>
      )}
    </div>
  )
}

export default WordCard
