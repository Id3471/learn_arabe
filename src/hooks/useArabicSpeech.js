import { useCallback, useEffect, useRef, useState } from "react";

// Accès à la synthèse vocale du navigateur, avec détection d'une voix arabe.
// Les voix se chargent de façon asynchrone : on écoute "voiceschanged" pour
// se mettre à jour quand elles arrivent.
export function useArabicSpeech() {
  const [voices, setVoices] = useState(() =>
    typeof window !== "undefined" && "speechSynthesis" in window
      ? window.speechSynthesis
          .getVoices()
          .filter((voice) => voice.lang.startsWith("ar"))
      : [],
  );
  const [speaking, setSpeaking] = useState(false);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return undefined;
    }

    const speechSynthesis = window.speechSynthesis;

    const refreshVoices = () => {
      setVoices(
        speechSynthesis
          .getVoices()
          .filter((voice) => voice.lang.startsWith("ar")),
      );
    };

    refreshVoices();
    speechSynthesis.addEventListener("voiceschanged", refreshVoices);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", refreshVoices);
      speechSynthesis.cancel();
    };
  }, []);

  const available = voices.length > 0;

  const speak = useCallback(
    (text, { rate = 0.85 } = {}) => {
      if (
        typeof window === "undefined" ||
        !("speechSynthesis" in window) ||
        !available
      ) {
        return false;
      }

      const speechSynthesis = window.speechSynthesis;
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = voices[0].lang;
      utterance.voice = voices[0];
      utterance.rate = rate;

      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);

      utteranceRef.current = utterance;
      setSpeaking(true);
      speechSynthesis.speak(utterance);
      return true;
    },
    [available, voices],
  );

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
  }, []);

  return { available, speaking, speak, stop };
}
