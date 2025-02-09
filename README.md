# MPEL PM - Gestion des Produits 🛍️

# 📌 Partie Backend
API Backend de l’application web MPEL PM, permettant la gestion des produits cosmétiques (CRUD + pagination + validation + documentation Swagger).

## 🚀 Installation
```sh
git clone https://github.com/salimbenfarhat/technical_test-mpel_digital-products_management.git
cd technical_test-mpel_digital-products_management
npm install 
```

## 🛠️ Lancer le projet en local
```sh
npm run start:dev
L'API est accessible sur : http://localhost:3000/  
```

## 📚 Documentation Swagger
Une documentation interactive est disponible sur :
```sh
http://localhost:3000/api
```

## 📦 Peupler la base de données
```sh
npx ts-node src/product/seed.ts
```
Ajoute 30 produits cosmétiques automatiquement.

## 🔥 Tester l'API avec Postman
- **POST** _/products_ → Ajouter un produit  
- **GET** _/products_ → Récupérer tous les produits (pagination supportée)  
- **GET** _/products/:id_ → Récupérer un produit par ID  
- **PUT** _/products/:id_ → Mettre à jour un produit  
- **DELETE** _/products/:id_ → Supprimer un produit  


# 📌 Partie Frontend
## 🚀 Installation
Assurez-vous d'avoir déjà cloné le projet et installé les dépendances backend.
```sh
cd mpel-pm  # Aller dans le dossier du frontend
npm install # Installer les dépendances
```

```sh
npm run dev
```

📌 L'application est accessible sur :
➡ http://localhost:3001/

Assurez-vous que le backend tourne également sur http://localhost:3000/ pour que l'API fonctionne correctement.

## 📚 Technologies utilisées
- Next.js (React Framework)
- TailwindCSS (Stylisation rapide et efficace)
- Axios (Requêtes API)
- TypeScript (Typage strict et robuste)

## 📜 Structure du projet
📁 mpel-pm/src/

📂 components/ → Composants réutilisables (ex: ProductCard.tsx, Header.tsx, Footer.tsx)
📂 app/ → Pages principales (/, /products, /products/[id], /products/[id]/edit)
📂 utils/ → Fonctions utiles et API (api.ts)
📂 types/ → Définition des interfaces TypeScript (product.ts)
📜 globals.css → Styles globaux

## 🔧 Configuration
Si besoin, vous pouvez modifier la configuration Tailwind ou Next.js dans :

tailwind.config.ts → Personnalisation des couleurs, polices, etc.
next.config.ts → Configuration Next.js, gestion des images, etc.

## 🔥 Tester l'application
- Consulter les produits → /products
- Voir un produit → /products/[id]
- Modifier un produit → /products/[id]/edit
- Supprimer un produit → (bouton supprimer dans /products/[id])