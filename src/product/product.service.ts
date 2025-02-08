import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  // 🟢 Créer un produit
  async create(productData: Partial<Product>): Promise<Product> {
    const product = new this.productModel(productData);
    return product.save();
  }

  // 🔵 Récupérer tous les produits
  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  // 🟡 Récupérer un produit par ID
  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) throw new NotFoundException('Produit non trouvé');
    return product;
  }

  // 🟠 Mettre à jour un produit par ID
  async update(id: string, updateData: Partial<Product>): Promise<Product> {
    const product = await this.productModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    if (!product) throw new NotFoundException('Produit non trouvé');
    return product;
  }

  // 🔴 Supprimer un produit par ID
  async delete(id: string): Promise<void> {
    const result = await this.productModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Produit non trouvé');
  }
}
