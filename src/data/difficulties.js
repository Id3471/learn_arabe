export const DIFFICULTIES = [
  {
    id: 'easy',
    label: 'Facile',
    summary: 'Le mode choisi, comme dans la version actuelle.',
  },
  {
    id: 'medium',
    label: 'Moyen',
    summary:
      'La voyelle choisie, avec soukoun, voyelle longue, tanwin et chadda.',
  },
  {
    id: 'hard',
    label: 'Difficile',
    summary:
      'Les mêmes signes, avec des exemples contextualisés de l’écriture coranique.',
  },
]

export const QURANIC_EXAMPLES = [
  {
    variantId: 'short',
    vowelId: 'fatha',
    label: 'Fatha brève',
    text: 'ٱلۡحَمۡدُ',
    note:
      'Repère la fatha au-dessus du ح : elle produit ici une voyelle brève « a », comme dans ta syllabe.',
    sourceLabel: 'Al-Fātiḥa 1:2',
    sourceUrl: 'https://quran.com/1/2',
  },
  {
    variantId: 'short',
    vowelId: 'kasra',
    label: 'Kasra brève',
    text: 'لِلَّهِ',
    note:
      'La kasra placée sous la première lettre ل donne ici une voyelle brève « i », comme dans ta syllabe.',
    sourceLabel: 'Al-Fātiḥa 1:2',
    sourceUrl: 'https://quran.com/1/2',
  },
  {
    variantId: 'short',
    vowelId: 'damma',
    label: 'Damma brève',
    text: 'ٱلۡحَمۡدُ',
    note:
      'La damma placée au-dessus du د donne ici une voyelle brève « ou », comme dans ta syllabe.',
    sourceLabel: 'Al-Fātiḥa 1:2',
    sourceUrl: 'https://quran.com/1/2',
  },
  {
    variantId: 'long',
    vowelId: 'fatha',
    label: 'Voyelle longue « ā »',
    text: 'ذَٰلِكَ',
    note:
      'Le petit alif au-dessus du ذ note le son long « ā », comme la prolongation de la fatha dans ta syllabe.',
    sourceLabel: 'Al-Baqara 2:2',
    sourceUrl: 'https://quran.com/2/2',
  },
  {
    variantId: 'long',
    vowelId: 'kasra',
    label: 'Voyelle longue « ī »',
    text: 'فِيهِ',
    note:
      'Le ي après la kasra prolonge le son en « ī », comme la prolongation de kasra dans ta syllabe.',
    sourceLabel: 'Al-Baqara 2:2',
    sourceUrl: 'https://quran.com/2/2',
  },
  {
    variantId: 'long',
    vowelId: 'damma',
    label: 'Voyelle longue « ū »',
    text: 'ٱلۡمُفۡلِحُونَ',
    note:
      'Le و après la damma prolonge le son en « ū », comme la prolongation de damma dans ta syllabe.',
    sourceLabel: 'Al-Baqara 2:5',
    sourceUrl: 'https://quran.com/2/5',
  },
  {
    variantId: 'tanwin',
    vowelId: 'fatha',
    label: 'Tanwin fatha « an »',
    text: 'هُدٗى',
    note:
      'Le tanwin associé à la fatha ajoute un son « n » final. Dans l’écriture coranique, sa notation peut différer de la forme pédagogique simple.',
    sourceLabel: 'Al-Baqara 2:5',
    sourceUrl: 'https://quran.com/2/5',
  },
  {
    variantId: 'tanwin',
    vowelId: 'kasra',
    label: 'Tanwin kasra « in »',
    text: 'شَيۡءٍ',
    note:
      'Le tanwin associé à la kasra ajoute un son « n » final, comme dans ta syllabe.',
    sourceLabel: 'Al-Baqara 2:29',
    sourceUrl: 'https://quran.com/2/29',
  },
  {
    variantId: 'tanwin',
    vowelId: 'damma',
    label: 'Tanwin damma « oun »',
    text: 'عَلِيمٞ',
    note:
      'Le tanwin associé à la damma ajoute un son « n » final, comme dans ta syllabe.',
    sourceLabel: 'Al-Baqara 2:29',
    sourceUrl: 'https://quran.com/2/29',
  },
  {
    variantId: 'shadda',
    label: 'Chadda',
    text: 'ثُمَّ',
    note:
      'La chadda au-dessus du م indique une consonne doublée ou tenue, comme dans ta syllabe. La voyelle qui l’accompagne peut varier.',
    sourceLabel: 'Al-Baqara 2:29',
    sourceUrl: 'https://quran.com/2/29',
  },
  {
    variantId: 'sukun',
    label: 'Soukoun',
    text: 'ٱلۡحَمۡدُ',
    note:
      'Le petit signe ۡ au-dessus du ل indique l’absence de voyelle brève, comme le soukoun de ta syllabe. Les signes peuvent différer selon l’écriture.',
    sourceLabel: 'Al-Fātiḥa 1:2',
    sourceUrl: 'https://quran.com/1/2',
  },
  {
    variantId: 'quranicSukun',
    label: 'Soukoun coranique',
    text: 'ٱلۡحَمۡدُ',
    note:
      'Le petit signe ۡ au-dessus du ل indique l’absence de voyelle brève, comme dans ta syllabe.',
    sourceLabel: 'Al-Fātiḥa 1:2',
    sourceUrl: 'https://quran.com/1/2',
  },
]
