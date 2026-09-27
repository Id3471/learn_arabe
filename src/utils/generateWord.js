const pickRandom = (list) => list[Math.floor(Math.random() * list.length)]

// Construit un mot de `length` lettres en tirant chaque lettre au hasard
// (avec remise) selon sa position : seule, début, milieu ou fin.
export function buildWord(letters, length) {
  const syllables = []

  if (length <= 1) {
    const letter = pickRandom(letters)
    syllables.push({ ...letter, position: 'seule', glyph: letter.base })
  } else {
    const first = pickRandom(letters)
    syllables.push({ ...first, position: 'début', glyph: first.start })

    for (let i = 0; i < length - 2; i += 1) {
      const letter = pickRandom(letters)
      syllables.push({ ...letter, position: 'milieu', glyph: letter.middle })
    }

    const last = pickRandom(letters)
    syllables.push({ ...last, position: 'fin', glyph: last.end })
  }

  return {
    syllables,
    text: syllables.map((syllable) => syllable.glyph).join(''),
    pronunciation: syllables.map((syllable) => syllable.pron).join('-'),
  }
}
