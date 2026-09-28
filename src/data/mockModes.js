import { mockFatha, mockKasra, mockDomma } from "./mockLetter";

// Les 4 modes de la page d'accueil
// Les autres modes seront activé en passant available à True
export const MODES = [
  { id: "fatha", label: "Fatha", mark: "بَ", available: true, data: mockFatha },
  { id: "kasra", label: "Kasra", mark: "بِ", available: true, data: mockKasra },
  { id: "damma", label: "Damma", mark: "بُ", available: true, data: mockDomma },
  { id: "mix", label: "Mix", mark: "بَ بِ بُ", available: false },
];
