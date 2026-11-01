import { useArabicSpeech } from '../hooks/useArabicSpeech'

function WordCard({ word, showCorrection }) {
  const { available, speaking, speak } = useArabicSpeech()

  const handleListen = () => speak(word.text)

  return (
    <article className="word-card">
      <div className="word-text" lang="ar" dir="rtl">
        {word.text}
      </div>

      {showCorrection && (
        <div className="learning-content">
          <div className="correction">
            <span className="correction-label">Correction</span>
            <span className="correction-pron" dir="ltr">
              {word.pronunciation}
            </span>
            {available ? (
              <button
                type="button"
                className={`listen-btn${speaking ? ' speaking' : ''}`}
                onClick={handleListen}
                disabled={speaking}
                aria-label={`Écouter le mot ${word.pronunciation}`}
              >
                {speaking ? '🔊 Lecture…' : '🔊 Écouter'}
              </button>
            ) : (
              <span className="listen-unavailable">
                Voix arabe indisponible sur cet appareil
              </span>
            )}
          </div>

          <section className="pronunciation-tips" aria-label="Conseils de lecture">
            <h2>À retenir</h2>
            <ul>
              {word.tips.map((tip) => (
                <li key={tip.title}>
                  <strong>{tip.title}</strong>
                  <span>{tip.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {word.quranicExample && (
            <aside className="quranic-example">
              <span className="correction-label">À observer dans le Coran</span>
              <p className="quranic-connection">
                Dans ta suite, tu as lu{' '}
                <span lang="ar" dir="rtl">
                  {word.quranicExample.relatedGlyph}
                </span>{' '}
                : <strong>{word.quranicExample.relatedTip.title}</strong>. Dans
                l’exemple ci-dessous, retrouve le même signe ou le même son.
              </p>
              <span className="quranic-example-label">
                {word.quranicExample.label}
              </span>
              <span className="quranic-example-text" lang="ar" dir="rtl">
                {word.quranicExample.text}
              </span>
              <p>{word.quranicExample.note}</p>
              <a
                className="quranic-source"
                href={word.quranicExample.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                Source : {word.quranicExample.sourceLabel}
              </a>
            </aside>
          )}
        </div>
      )}
    </article>
  )
}

export default WordCard
