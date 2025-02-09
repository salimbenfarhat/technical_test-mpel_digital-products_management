// src/components/ProductCard.tsx
import Image from 'next/image';
import { Product } from '@/types/product';
import Link from 'next/link';

interface ProductProps {
  product: Product; 
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image
        src={product.image || '/default-product.jpg'}
        alt={product.name}
        width={150}
        height={150}
        className="w-full h-40 object-cover rounded-md"
        priority
      />
      <h3 className="text-lg font-title text-textPrimary mt-2">{product.name}</h3>
      <p className="text-textSecondary text-sm">{product.description}</p>
      <p className="text-primary font-semibold mt-2">{product.price}€</p>
      <Link href={`/products/${product._id}`} className="block mt-3 bg-primary text-white text-center py-2 rounded-lg hover:bg-secondary">
        Voir le produit
      </Link>
    </div>
  );
};

export default ProductCard;
