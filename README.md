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