import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // 🟢 Créer un produit (POST /products)
  @Post()
  create(@Body() productData: Partial<Product>) {
    return this.productService.create(productData);
  }

  // 🔵 Récupérer tous les produits (GET /products)
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  // 🟡 Récupérer un produit par ID (GET /products/:id)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  // 🟠 Mettre à jour un produit (PUT /products/:id)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Product>) {
    return this.productService.update(id, updateData);
  }

  // 🔴 Supprimer un produit (DELETE /products/:id)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
