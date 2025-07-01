# Backend TypeScript - Gestion des Offres

Ce projet backend a été converti de JavaScript vers TypeScript pour une meilleure maintenabilité et sécurité des types.

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Installer les dépendances de développement :
```bash
npm install --save-dev
```

## Scripts disponibles

- `npm run build` : Compile le code TypeScript vers JavaScript
- `npm run dev` : Lance le serveur en mode développement avec rechargement automatique
- `npm start` : Lance le serveur en production (nécessite d'avoir compilé avec `npm run build`)
- `npm run clean` : Supprime le dossier de compilation

## Structure du projet

```
backend/
├── types/
│   └── index.ts          # Définitions des types TypeScript
├── controlers/
│   ├── userControlers.ts # Contrôleurs pour les utilisateurs
│   └── offreControlers.ts # Contrôleurs pour les offres
├── routes/
│   └── routes.ts         # Définition des routes
├── db.ts                 # Configuration de la base de données
├── server.ts             # Point d'entrée du serveur
├── tsconfig.json         # Configuration TypeScript
└── package.json          # Dépendances et scripts
```

## Variables d'environnement

Créez un fichier `.env` à la racine du projet backend avec les variables suivantes :

```env
PORT=3000
PG_HOST=your_host
PG_PORT=5432
PG_DATABASE=your_database
PG_USER=your_user
PG_PASSWORD=your_password
```

## API Endpoints

### Utilisateurs
- `POST /create_user` - Créer un utilisateur
- `POST /login` - Connexion utilisateur
- `PUT /update_user/:id` - Mettre à jour un utilisateur
- `DELETE /delete_user/:id` - Supprimer un utilisateur

### Offres
- `GET /offres` - Récupérer toutes les offres
- `GET /offres/:id_offres` - Récupérer une offre par ID
- `POST /offres/add-offres` - Ajouter une nouvelle offre

## Développement

Pour le développement, utilisez :
```bash
npm run dev
```

Le serveur se relancera automatiquement à chaque modification du code.

## Production

Pour la production :
```bash
npm run build
npm start
```

## Avantages de la conversion TypeScript

1. **Sécurité des types** : Détection d'erreurs à la compilation
2. **Meilleure IDE** : Autocomplétion et refactoring améliorés
3. **Documentation intégrée** : Les types servent de documentation
4. **Maintenabilité** : Code plus facile à maintenir et à faire évoluer
5. **Gestion d'erreurs** : Meilleure gestion des erreurs avec les types 