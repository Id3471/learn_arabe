# Learn Arabe

Application pédagogique interactive pour apprendre à reconnaître et prononcer les lettres et les signes de lecture arabes.

Le projet propose une expérience simple et visuelle : l’utilisateur choisit un mode, une difficulté et le nombre de lettres, puis lit une suite générée et consulte sa correction phonétique.

## À propos du projet

Learn Arabe est une petite application React développée avec Vite. Elle a pour objectif d’aider à pratiquer :

- la reconnaissance des lettres arabes ;
- la lecture des voyelles brèves et longues, du soukoun, du tanwin et de la chadda ;
- la prononciation de suites de lettres générées pour l’exercice ;
- le repérage de quelques formes orthographiques coraniques contextualisées.

## Fonctionnalités

- écran d’accueil avec plusieurs modes disponibles et à venir ;
- modes Fatha, Kasra, Damma et Mix ;
- choix d’une difficulté facile, moyenne ou difficile ;
- choix de la longueur d’une suite (de 1 à 10 lettres de base) ;
- génération aléatoire à partir d’une liste centrale de lettres et de signes combinables ;
- affichage du mot arabe avec rendu RTL ;
- correction phonétique, synthèse vocale arabe et conseils de prononciation affichés au clic ;
- au niveau difficile, exemple coranique choisi en fonction d’un signe réellement présent dans la suite de l’exercice ;
- navigation simple entre les étapes de l’application ;
- design responsive adapté à l’écran.

### Niveaux

- **Facile** : conserve le fonctionnement initial et pratique la voyelle du mode choisi.
- **Moyen** : ajoute les deux notations du soukoun, la voyelle longue liée au mode, son tanwin et la chadda.
- **Difficile** : reprend le niveau moyen et présente en plus un exemple coranique contextualisé au signe travaillé dans la suite.

Les exercices générés sont des suites de lettres destinées à l’entraînement, pas des mots arabes attestés. La longueur compte les lettres de base ; les lettres de prolongation servant à écrire une voyelle longue ne sont pas incluses. Au niveau difficile, l’extrait coranique est sélectionné selon une voyelle ou un signe présent dans la suite affichée. Les signes et conventions peuvent varier selon l’édition du muṣḥaf et la lecture.

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

- `src/data` : alphabet central, voyelles, modes, difficultés et exemples ;
- `src/pages` : écrans de l’application ;
- `src/components` : composants réutilisables comme la carte de mot ;
- `src/utils` : logique de génération des mots ;
- `src/App.jsx` : orchestration de l’application et gestion des étapes ;
- `src/App.css` : styles de l’interface.

## Exemple de logique métier

Le cœur du projet repose sur :

1. la sélection d’un mode, puis d’une difficulté ;
2. la définition d’une longueur en lettres ;
3. la génération d’une suite avec les signes permis par le mode et la difficulté ;
4. l’affichage de la prononciation, d’un conseil associé et, au niveau difficile, d’un exemple contextualisé.

## État actuel

Le projet est fonctionnel en version d’exploration pédagogique. Les suites générées servent à pratiquer le décodage des signes ; elles ne remplacent pas l’apprentissage du vocabulaire, des règles complètes de tajwīd ou la lecture d’un muṣḥaf avec un enseignant.

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
