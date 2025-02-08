import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 📌 Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('MPEL PM - API Produits')
    .setDescription("Documentation de l'API de gestion des produits")
    .setVersion('1.0')
    .addTag('Produits')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  console.log('🚀 API en ligne sur http://localhost:3000/');
  console.log('📚 Documentation Swagger : http://localhost:3000/api');
}
bootstrap().catch((err) => {
  console.error('Erreur lors du démarrage de l’application:', err);
});
