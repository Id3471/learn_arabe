# Learn Arabe

Application pédagogique interactive pour apprendre les lettres et les voyelles courtes de l’alphabet arabe.

Le projet propose une expérience simple et visuelle : l’utilisateur choisit un mode d’apprentissage, fixe la longueur du mot à générer, puis observe la lettre ou le mot arabe avec une correction phonétique.

## À propos du projet

Learn Arabe est une petite application React développée avec Vite. Elle a pour objectif d’aider à pratiquer :

- la reconnaissance des lettres arabes ;
- la lecture des voyelles courtes comme la fatha ;
- la prononciation de mots composés à partir d’un alphabet modélisé.

## Fonctionnalités

- écran d’accueil avec plusieurs modes disponibles et à venir ;
- mode Fatha activé par défaut ;
- choix de la longueur d’un mot (de 1 à 10 lettres) ;
- génération aléatoire de mots à partir des données de lettres ;
- affichage du mot arabe avec rendu RTL ;
- correction phonétique affichée au clic ;
- navigation simple entre les étapes de l’application ;
- design responsive adapté à l’écran.

## Stack technique

- React 19
- Vite 8
- JavaScript
- CSS personnalisé
- GitHub Pages pour le déploiement

## Prérequis

Avant de lancer le projet, assurez-vous d’avoir installé :

- Node.js 18+
- npm ou pnpm

## Installation

```bash
npm install
```

## Lancer le projet en local

```bash
npm run dev
```

Puis ouvrez l’URL affichée dans le terminal :

```bash
http://localhost:5173
```

## Construire le projet

```bash
npm run build
```

Le build de production est généré dans le dossier `dist`.

## Déploiement

Le projet est configuré pour être publié via GitHub Pages.

```bash
npm run deploy
```

Le script `predeploy` génère le build avant le déploiement, puis `gh-pages` publie le dossier `dist`.

## Structure du projet

```text
learn_arabe/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite-env.d.ts
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

### Dossiers principaux

- `src/data` : données des lettres et des modes d’apprentissage ;
- `src/pages` : écrans de l’application ;
- `src/components` : composants réutilisables comme la carte de mot ;
- `src/utils` : logique de génération des mots ;
- `src/App.jsx` : orchestration de l’application et gestion des étapes ;
- `src/App.css` : styles de l’interface.

## Exemple de logique métier

Le cœur du projet repose sur :

1. la sélection d’un mode d’apprentissage ;
2. la définition d’une longueur de mot ;
3. la génération aléatoire de syllabes avec voyelles courtes ;
4. l’affichage de la bonne prononciation après validation.

## État actuel

Le projet est fonctionnel en version d’exploration pédagogique et met en place le mode Fatha comme première étape d’apprentissage. Les autres modes sont préparés et peuvent être activés progressivement.

## Contribution

Les améliorations sont bienvenues. Vous pouvez :

- ajouter de nouveaux modes d’apprentissage ;
- enrichir les données de lettres ;
- améliorer l’UX/UI ;
- ajouter des jeux de mémorisation, quiz et évaluations.

## Licence

Ce projet est fourni sans licence spécifique dans son état actuel.

## Contact

Projet développé dans le cadre d’un apprentissage de l’arabe et de la pratique du développement React / Vite.
