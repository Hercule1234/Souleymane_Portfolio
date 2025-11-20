# Portfolio React + Vite - Jean Dupont

Un portfolio moderne et interactif développé avec React, Vite, JSX, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

### ✅ Pages Complètes
- **Page d'accueil** : Section héro animée avec introduction et boutons CTA
- **Page À propos** : Photo, texte personnel et informations clés
- **Page Projets** : Cartes de projets animées avec stack technique et liens
- **Page Compétences** : Compétences par catégorie avec barres de progression animées
- **Page Contact** : Formulaire de contact et informations de contact

### 🎨 Design & Animations
- **Design moderne** : Interface épurée et professionnelle
- **Animations Framer Motion** : Animations fluides et interactives
- **Animations au scroll** : Éléments qui apparaissent lors du défilement
- **Responsive design** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Effets hover** : Interactions riches sur tous les éléments cliquables

### 🛠️ Technologies
- **React** : Bibliothèque JavaScript pour les interfaces utilisateur
- **Vite** : Outil de build rapide et moderne
- **JSX** : Syntaxe XML pour React
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Bibliothèque d'animations pour React

## 📁 Structure du Projet

```
├── index.html                 # Fichier HTML principal
├── vite.config.js            # Configuration Vite
├── tailwind.config.js        # Configuration Tailwind CSS
├── postcss.config.js        # Configuration PostCSS
├── eslint.config.js          # Configuration ESLint
├── src/
│   ├── main.jsx             # Point d'entrée de l'application
│   ├── index.css            # Styles globaux
│   ├── components/
│   │   ├── App.jsx          # Composant principal avec routage
│   │   ├── Navigation.jsx   # Barre de navigation animée
│   │   └── ScrollAnimation.jsx # Composant pour animations au scroll
│   ├── pages/
│   │   ├── HomePage.jsx     # Page d'accueil
│   │   ├── AboutPage.jsx    # Page À propos
│   │   ├── ProjectsPage.jsx # Page Projets
│   │   ├── SkillsPage.jsx   # Page Compétences
│   │   └── ContactPage.jsx  # Page Contact
│   ├── data/
│   │   ├── projects.js      # Données des projets
│   │   └── skills.js        # Données des compétences
│   └── hooks/
│       └── useAnimateOnScroll.js # Hook personnalisé pour animations au scroll
└── dist/                    # Fichiers de production (générés par build)
```

## 🚀 Démarrage

### Installation des dépendances
```bash
npm install
```

### Développement
```bash
npm run dev
```

Le serveur de développement démarrera sur `http://localhost:3000`

### Build pour la production
```bash
npm run build
```

### Prévisualisation du build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 🎯 Caractéristiques Techniques

### Navigation
- Navigation fixe avec animations
- Menu responsive pour mobile
- Transitions fluides entre les pages
- Indicateur de page active

### Animations
- Animations d'entrée pour tous les éléments
- Animations au scroll avec Framer Motion
- Effets hover sur les cartes et boutons
- Transitions de page fluides

### Données
- Stockage local dans des fichiers JavaScript
- Structure de données organisée pour projets et compétences
- Facilement modifiable et extensible

### Design
- Palette de couleurs cohérente (gris et noir)
- Typographie lisible et hiérarchisée
- Espacement et alignement professionnels
- Ombres et dégradés subtils

## 🎨 Personnalisation

### Changer les informations personnelles
1. Modifier les textes dans les composants de page
2. Mettre à jour les données dans `src/data/projects.js` et `src/data/skills.js`
3. Adapter les couleurs et styles dans les fichiers CSS

### Ajouter de nouveaux projets
1. Ajouter un nouvel objet dans `src/data/projects.js`
2. Les cartes s'afficheront automatiquement sur la page Projets

### Ajouter de nouvelles compétences
1. Ajouter un nouvel objet dans `src/data/skills.js`
2. Les compétences s'afficheront automatiquement sur la page Compétences

## 📱 Responsive Design

Le portfolio est entièrement responsive :
- **Mobile** : Navigation hamburger, layout vertical
- **Tablette** : Layout adapté avec grilles flexibles
- **Desktop** : Layout complet avec toutes les fonctionnalités

## 🔧 Configuration

### Dépendances principales
- `framer-motion` : Animations
- `react` & `react-dom` : Core React
- `vite` : Build tool et serveur de développement
- `tailwindcss` : Styles

### Dépendances de développement
- `@vitejs/plugin-react` : Plugin React pour Vite
- `autoprefixer` : Préfixes CSS automatiques
- `postcss` : Traitement CSS
- `eslint` : Linting du code

### Configuration ESLint
Le projet utilise ESLint pour maintenir la qualité du code avec une configuration adaptée pour React et Vite.

## 📝 Notes

- **Aucune base de données** : Tout est stocké localement
- **Aucun backend** : Le formulaire de contact est une simulation
- **Aucune API externe** : Toutes les données sont locales
- **100% frontend** : Application client-side uniquement
- **Build rapide** : Grâce à Vite, le développement et le build sont très rapides

## 🎯 Avantages de Vite vs Next.js

### Vite
- ⚡ **Build ultra-rapide** grâce à Rollup et au pré-bundling ES modules
- 🔥 **Hot Module Replacement (HMR)** instantané
- 📦 **Moins de configuration** nécessaire
- 🎯 **Optimisé pour le développement** moderne
- 🚀 **Support natif des ES modules**

### Migration réussie
- ✅ Structure simplifiée
- ✅ Temps de build réduits
- ✅ Expérience de développement améliorée
- ✅ Toutes les fonctionnalités préservées
- ✅ Code plus maintenable

## 🔄 Migration depuis Next.js

Ce projet a été migré avec succès depuis Next.js vers Vite tout en conservant :
- Toutes les animations Framer Motion
- Le design responsive
- La structure des données
- Les fonctionnalités interactives
- La qualité du code

## 📊 Performance

- **Taille du bundle** : ~340KB (gzippé à ~107KB)
- **Temps de build** : ~3 secondes
- **HMR** : Instantané
- **Support navigateurs** : Modernes (ES2015+)

## 🎨 Prochaines améliorations possibles

- Ajouter un thème sombre/clair
- Intégrer un vrai système de contact
- Ajouter des filtres pour les projets
- Implémenter un système de recherche
- Ajouter des animations plus complexes
- Intégrer des vidéos ou démonstrations
- Optimiser les images avec des placeholders réels
- Ajouter des méta-tags pour le SEO

---

Développé avec ❤️ par Jean Dupont avec React + Vite