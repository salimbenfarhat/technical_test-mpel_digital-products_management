// src/app/products/components/FeaturedProducts.tsx
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

interface FeaturedProductsProps {
  products: Product[];
  title: string; // Titre du bloc (ex. "Top Produits" ou "Produits recommandés")
}

const FeaturedProducts = ({ products, title }: FeaturedProductsProps) => {
  return (
    <div
      className="bg-primary p-6 rounded-lg shadow-md mb-8"
    >
      {/* Titre du bloc */}
      <h2 className="text-3xl font-title font-semibold text-white mb-4">{title}</h2>

      {/* Grille des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};


export default FeaturedProducts;