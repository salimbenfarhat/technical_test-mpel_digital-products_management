import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { Product } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('Produits') // 📌 Ajoute une section "Produits" dans Swagger
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 🟢 Créer un produit (POST /products)
  @Post()
  @ApiOperation({ summary: 'Créer un produit' })
  @ApiBody({ type: CreateProductDto }) // ✅ Ajoute la documentation du body
  @ApiResponse({ status: 201, description: 'Produit créé avec succès.' })
  @ApiResponse({ status: 400, description: 'Erreur de validation.' }) // ✅ Documentation des erreurs
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() productData: CreateProductDto) {
    return this.productService.create(productData);
  }

  // 🔵 Récupérer tous les produits avec pagination (GET /products?page=1&limit=10)
  @Get()
  @ApiOperation({ summary: 'Récupérer tous les produits (avec pagination)' })
  @ApiResponse({ status: 200, description: 'Liste des produits.' })
  async findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.productService.findAll(Number(page), Number(limit));
  }
  // 🟡 Récupérer un produit par ID (GET /products/:id)
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un produit par ID' })
  @ApiResponse({ status: 200, description: 'Produit trouvé.' })
  @ApiResponse({ status: 404, description: 'Produit introuvable.' })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  // 🟠 Mettre à jour un produit (PUT /products/:id)
  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un produit' })
  @ApiResponse({ status: 200, description: 'Produit mis à jour.' })
  update(@Param('id') id: string, @Body() updateData: Partial<Product>) {
    return this.productService.update(id, updateData);
  }

  // 🔴 Supprimer un produit (DELETE /products/:id)
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un produit' })
  @ApiResponse({ status: 200, description: 'Produit supprimé avec succès.' })
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
