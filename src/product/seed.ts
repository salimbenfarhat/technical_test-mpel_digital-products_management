import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const productService = app.get(ProductService);

  const products: CreateProductDto[] = [
    {
      name: 'Vernis à ongles rouge',
      description: 'Vernis longue tenue, couleur rouge intense',
      price: 9.99,
      stock: 50,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Vernis à ongles nude',
      description: 'Teinte naturelle pour un look élégant',
      price: 8.99,
      stock: 40,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Gel UV transparent',
      description: 'Gel de construction pour ongles en résine UV',
      price: 15.99,
      stock: 30,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Base coat protectrice',
      description: "Protège l'ongle et améliore l'adhérence du vernis",
      price: 7.99,
      stock: 60,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Top coat brillant',
      description: 'Finition ultra-brillante et protection longue durée',
      price: 8.99,
      stock: 55,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Lime à ongles professionnelle',
      description: 'Lime douce pour une mise en forme précise',
      price: 3.5,
      stock: 100,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Pinceau nail art',
      description: 'Pour des designs précis et élégants sur les ongles',
      price: 6.99,
      stock: 45,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Kit de manucure complet',
      description: 'Tout le nécessaire pour une manucure parfaite',
      price: 29.99,
      stock: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Huile cuticule nourrissante',
      description: 'Hydrate et protège les cuticules',
      price: 12.5,
      stock: 35,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Lampe LED UV 48W',
      description: 'Sèche rapidement les vernis et gels UV',
      price: 59.99,
      stock: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Gel polish noir intense',
      description: 'Vernis semi-permanent noir profond',
      price: 14.99,
      stock: 25,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Crème hydratante mains',
      description: 'Soin nourrissant pour des mains douces',
      price: 9.5,
      stock: 45,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Déshydratant pour ongles',
      description: "Prépare l'ongle avant application du gel",
      price: 10.99,
      stock: 30,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Dissolvant sans acétone',
      description: 'Doux pour les ongles, enlève le vernis efficacement',
      price: 6.5,
      stock: 50,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Colle pour capsules',
      description: 'Fixation rapide et durable des faux ongles',
      price: 4.99,
      stock: 80,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Capsules d’ongles naturelles',
      description: 'Kit de 100 capsules pour extensions',
      price: 15.99,
      stock: 40,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bâtonnets de buis',
      description: 'Idéal pour repousser les cuticules',
      price: 2.99,
      stock: 120,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Gel camouflage rose',
      description: 'Gel UV couvrant pour un effet naturel',
      price: 17.99,
      stock: 25,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Kit de strass pour ongles',
      description: 'Décorations brillantes pour nail art',
      price: 8.5,
      stock: 60,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Aspirateur de poussière',
      description: 'Élimine la poussière de limage des ongles',
      price: 39.99,
      stock: 15,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Pince à cuticules',
      description: 'Permet de couper les cuticules avec précision',
      price: 11.99,
      stock: 40,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Cleaner dégraissant',
      description: 'Nettoie et enlève la couche collante du gel',
      price: 7.5,
      stock: 55,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Poudre acrylique rose',
      description: 'Poudre acrylique pour extensions d’ongles',
      price: 19.99,
      stock: 30,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Primer sans acide',
      description: "Favorise l'adhérence du gel UV",
      price: 12.99,
      stock: 35,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Pinceau pour gel UV',
      description: 'Application facile du gel UV',
      price: 9.99,
      stock: 50,
      image: 'https://via.placeholder.com/150',
    },
  ];

  await productService.createMany(products);
  console.log('💅 25 produits cosmétiques ajoutés avec succès ! 🚀');
  await app.close();
}

seed().catch((err) => {
  console.error("❌ Erreur lors de l'insertion des fake data:", err);
});
