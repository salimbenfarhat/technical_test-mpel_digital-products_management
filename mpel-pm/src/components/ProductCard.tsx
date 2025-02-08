// src/components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, description, price, image }: ProductProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <Image src={image} alt={name} width={150} height={150} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-title mt-2">{name}</h2>
      <p className="text-sm text-textSecondary">{description}</p>
      <p className="text-lg font-bold text-primary mt-2">{price.toFixed(2)}€</p>
      <Link href={`/products/${id}`} className="block mt-3 bg-primary text-white text-center py-2 rounded-lg hover:bg-secondary">
        Voir le produit
      </Link>
    </div>
  );
}
