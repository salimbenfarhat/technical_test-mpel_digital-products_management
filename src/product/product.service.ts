import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  // 🟢 Créer un produit
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  // 🟢 Créer plusieurs produits
  async createMany(products: CreateProductDto[]): Promise<Product[]> {
    const createdProducts = await this.productModel.insertMany(products);
    return createdProducts.map((product) => product.toObject() as Product);
  }

  // 🔵 Récupérer tous les produits et intégration de la pagination
  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ total: number; page: number; limit: number; data: Product[] }> {
    const skip = (page - 1) * limit;
    const total = await this.productModel.countDocuments();
    const data = await this.productModel.find().limit(limit).skip(skip).exec();

    return {
      total,
      page,
      limit,
      data,
    };
  }

  // 🟡 Récupérer un produit par ID
  async findOne(id: string): Promise<Product> {
    try {
      const product = await this.productModel.findById(id);
      if (!product) {
        throw new NotFoundException(`Produit avec l'ID ${id} non trouvé.`);
      }
      return product;
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'CastError') {
        throw new BadRequestException(`L'ID fourni (${id}) est invalide.`);
      }
      throw error;
    }
  }

  // 🟠 Mettre à jour un produit par ID
  async update(
    id: string,
    updateProductDto: Partial<CreateProductDto>,
  ): Promise<Product> {
    try {
      const updatedProduct = await this.productModel.findByIdAndUpdate(
        id,
        updateProductDto,
        { new: true },
      );
      if (!updatedProduct) {
        throw new NotFoundException(`Produit avec l'ID ${id} non trouvé.`);
      }
      return updatedProduct;
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'CastError') {
        throw new BadRequestException(`L'ID fourni (${id}) est invalide.`);
      }
      throw error;
    }
  }

  // 🔴 Supprimer un produit par ID
  async delete(id: string): Promise<{ message: string }> {
    try {
      const deletedProduct = await this.productModel.findByIdAndDelete(id);
      if (!deletedProduct) {
        throw new NotFoundException(`Produit avec l'ID ${id} non trouvé.`);
      }
      return { message: 'Produit supprimé avec succès' };
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'CastError') {
        throw new BadRequestException(`L'ID fourni (${id}) est invalide.`);
      }
      throw error;
    }
  }
}
