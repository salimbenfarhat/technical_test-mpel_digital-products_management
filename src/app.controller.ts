import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getWelcomeMessage() {
    return { message: 'Bienvenue sur l’API de gestion des produits ! 🚀' };
  }
}
