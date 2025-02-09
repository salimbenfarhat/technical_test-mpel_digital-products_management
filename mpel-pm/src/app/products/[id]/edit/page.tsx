'use client';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProductById, updateProduct } from '@/utils/api';
import { Product } from '@/types/product';

export default function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // ✅ Récupération de `id` avec `use()`
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({});
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
        setFormData(data); // ✅ Pré-remplit le formulaire avec les données actuelles
      } catch {
        setError('Produit introuvable.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!formData.name || !formData.price) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }
      await updateProduct(id, formData);
      alert('Produit mis à jour avec succès.');
      router.push(`/products/${id}`); // ✅ Redirection vers la page produit
    } catch {
      alert('Erreur lors de la mise à jour du produit.');
    }
  };

  if (loading) return <p className="text-textSecondary">Chargement...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p className="text-red-500">Produit introuvable.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-title text-textPrimary mb-6">
        Modifier le Produit
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-textPrimary font-semibold">
            Nom du produit
          </label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-textPrimary font-semibold">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-textPrimary font-semibold">
            Prix (€)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price || ''}
            onChange={handleChange}
            required
            step="0.01"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-textPrimary font-semibold">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock || ''}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-textPrimary font-semibold">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Enregistrer
          </button>
          <button
            type="button"
            onClick={() => router.push(`/products/${id}`)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
