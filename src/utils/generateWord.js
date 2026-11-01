import { ARABIC_LETTERS, VOWELS } from '../data/arabicLetters'
import { QURANIC_EXAMPLES } from '../data/difficulties'

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)]

const PRONUNCIATION_TIPS = {
  fatha: {
    title: 'Fatha َ',
    text: 'Elle se place au-dessus de la consonne et donne une voyelle brève « a », comme dans « papa ».',
  },
  kasra: {
    title: 'Kasra ِ',
    text: 'Elle se place sous la consonne et donne une voyelle brève « i », comme dans « ici ».',
  },
  damma: {
    title: 'Damma ُ',
    text: 'Elle se place au-dessus de la consonne et donne une voyelle brève « ou », comme dans « doux ».',
  },
  sukun: {
    title: 'Soukoun ْ',
    text: 'Il indique qu’aucune voyelle brève ne suit cette consonne : on ferme la syllabe.',
  },
  quranicSukun: {
    title: 'Autre écriture du soukoun ۡ',
    text: 'Le petit signe coranique indique également l’absence de voyelle après la consonne.',
  },
  long: {
    title: 'Voyelle longue',
    text: 'La voyelle se prolonge : fatha + ا donne « ā », kasra + ي donne « ī », et damma + و donne « ū ».',
  },
  tanwin: {
    title: 'Tanwin ً ٍ ٌ',
    text: 'La double voyelle ajoute un son « n » à la fin : « an », « in » ou « oun » ici.',
  },
  shadda: {
    title: 'Chadda ّ',
    text: 'La chadda signifie que la consonne est tenue ou doublée. La voyelle choisie se prononce après cette consonne.',
  },
}

function getVowelIds(mode) {
  return mode.vowel ? [mode.vowel] : Object.keys(VOWELS)
}

function getVariants(letter, vowelId, index, length) {
  const vowel = VOWELS[vowelId]
  const variants = [
    {
      id: 'short',
      mark: vowel.mark,
      pronunciation: letter.pronunciations[vowelId],
      tip: vowelId,
    },
    {
      id: 'tanwin',
      mark: vowel.tanwinMark,
      pronunciation: `${letter.pronunciations[vowelId]}n`,
      tip: 'tanwin',
    },
  ]

  if (letter.id !== 1) {
    variants.push({
      id: 'long',
      mark: vowel.mark,
      after: vowel.longVowel,
      pronunciation: `${letter.consonant}${vowel.longPronunciation}`,
      tip: 'long',
    })
    variants.push({
      id: 'shadda',
      mark: `ّ${vowel.mark}`,
      pronunciation: `${letter.consonant}${letter.pronunciations[vowelId]}`,
      tip: 'shadda',
    })
  }

  if (index > 0 && length > 1) {
    variants.push(
      {
        id: 'sukun',
        mark: 'ْ',
        pronunciation: letter.consonant,
        tip: 'sukun',
      },
      {
        id: 'quranicSukun',
        mark: 'ۡ',
        pronunciation: letter.consonant,
        tip: 'quranicSukun',
      },
    )
  }

  return index === length - 1
    ? variants
    : variants.filter((variant) => variant.id !== 'tanwin')
}

function getSyllable(letter, vowelId, index, length, difficultyId) {
  const vowel = VOWELS[vowelId]
  const variant =
    difficultyId === 'easy'
      ? {
          id: 'short',
          mark: vowel.mark,
          pronunciation: letter.pronunciations[vowelId],
          tip: vowelId,
        }
      : pickRandom(getVariants(letter, vowelId, index, length))
  const glyph = letter.glyphs[vowelId] ?? letter.glyphs.default

  return {
    letterId: letter.id,
    variantId: variant.id,
    vowelId,
    glyph: `${glyph}${variant.mark}${variant.after ?? ''}`,
    pronunciation: variant.pronunciation,
    tip: variant.tip,
  }
}

function getQuranicExample(syllables) {
  const matchingSyllables = syllables.filter((syllable) =>
    QURANIC_EXAMPLES.some(
      (example) =>
        example.variantId === syllable.variantId &&
        (!example.vowelId || example.vowelId === syllable.vowelId),
    ),
  )
  const relatedSyllable = pickRandom(matchingSyllables)
  const examples = QURANIC_EXAMPLES.filter(
    (example) =>
      example.variantId === relatedSyllable.variantId &&
      (!example.vowelId || example.vowelId === relatedSyllable.vowelId),
  )
  const example = pickRandom(examples)

  return {
    ...example,
    relatedGlyph: relatedSyllable.glyph,
    relatedTip: PRONUNCIATION_TIPS[relatedSyllable.tip],
  }
}

export function buildWord(mode, length, difficultyId) {
  const vowelIds = getVowelIds(mode)
  const syllables = Array.from({ length }, (_, index) => {
    const letter = pickRandom(ARABIC_LETTERS)
    const vowelId = pickRandom(vowelIds)

    return getSyllable(letter, vowelId, index, length, difficultyId)
  })
  const tipIds = [...new Set(syllables.map((syllable) => syllable.tip))]
  const tips = tipIds.map((tipId) => PRONUNCIATION_TIPS[tipId])

  return {
    syllables,
    text: syllables.map((syllable) => syllable.glyph).join(''),
    pronunciation: syllables.map((syllable) => syllable.pronunciation).join('-'),
    tips,
    quranicExample: difficultyId === 'hard' ? getQuranicExample(syllables) : null,
  }
}
