import { useArabicSpeech } from "../hooks/useArabicSpeech";

// Affiche un mot arabe avec la correction phonétique.
// Quand la correction est visible, un bouton Écouter prononce le mot entier
// via la synthèse vocale du navigateur (voix arabe).
function WordCard({ word, showCorrection }) {
  const { available, speaking, speak } = useArabicSpeech();

  const handleListen = () => speak(word.text);

  return (
    <div className="word-card">
      <div className="word-text" lang="ar" dir="rtl">
        {word.text}
      </div>

      {showCorrection && (
        <div className="correction">
          <span className="correction-label">Correction</span>
          <span className="correction-pron" dir="ltr">
            {word.pronunciation}
          </span>
          {available ? (
            <button
              type="button"
              className={`listen-btn${speaking ? " speaking" : ""}`}
              onClick={handleListen}
              disabled={speaking}
              aria-label={`Écouter le mot ${word.pronunciation}`}
            >
              {speaking ? "🔊 Lecture…" : "🔊 Écouter"}
            </button>
          ) : (
            <span className="listen-unavailable">
              Voix arabe indisponible sur cet appareil
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default WordCard;
