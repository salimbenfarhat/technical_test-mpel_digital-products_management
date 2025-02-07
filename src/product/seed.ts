import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { Product } from './product.schema';
import { Model } from 'mongoose';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const productModel = app.get<Model<Product>>('ProductModel'); // Récupère le modèle Product

  await productModel.create([
    {
      name: 'Smartphone Pro X',
      description: 'Un smartphone haut de gamme avec un écran OLED',
      price: 999,
      stock: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Laptop Ultra',
      description: 'Un ordinateur portable puissant pour les professionnels',
      price: 1499,
      stock: 10,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Casque Bluetooth',
      description: 'Un casque sans fil avec réduction de bruit',
      price: 199,
      stock: 50,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  console.log('Fake data insérée avec succès ! ✅');
  await app.close();
}

seed().catch((err) => {
  console.error("❌ Erreur lors de l'insertion des fake data:", err);
});
