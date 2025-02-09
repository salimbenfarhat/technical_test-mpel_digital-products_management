'use client';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductById, deleteProduct } from '@/utils/api';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
      } catch {
        setError('Produit introuvable.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Voulez-vous vraiment supprimer ${product?.name} ?`,
    );
    if (confirmDelete && product) {
      try {
        await deleteProduct(product._id);
        alert('Produit supprimé avec succès.');
        router.push('/products');
      } catch {
        alert('Erreur lors de la suppression du produit.');
      }
    }
  };

  if (loading) return <p className="text-textSecondary">Chargement...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p className="text-red-500">Produit introuvable.</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <Image
          src={product.image || '/default-product.jpg'}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-60 object-cover rounded-md"
          priority
        />
        <h1 className="text-3xl font-title text-textPrimary mt-4">
          {product.name}
        </h1>
        <p className="text-textSecondary mt-2">{product.description}</p>
        <p className="text-primary font-semibold mt-2">{product.price}€</p>

        <div className="flex gap-4 mt-4">
          <Link
            href={`/products/${product._id}/edit`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Modifier
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
