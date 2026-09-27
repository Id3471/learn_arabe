import { mockFatha } from './mockLetter'

// Les 4 modes de la page d'accueil. Seul "fatha" est disponible pour l'instant,
// les autres s'activeront en passant available à true avec leurs données.
export const MODES = [
  { id: 'fatha', label: 'Fatha', mark: 'بَ', available: true, data: mockFatha },
  { id: 'kasra', label: 'Kasra', mark: 'بِ', available: false },
  { id: 'damma', label: 'Damma', mark: 'بُ', available: false },
  { id: 'mix', label: 'Mix', mark: 'بَ بِ بُ', available: false },
]
