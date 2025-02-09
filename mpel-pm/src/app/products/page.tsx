'use client';
import { useEffect, useState } from 'react';
import { getProducts } from '@/utils/api';
import FeaturedProducts from '@/app/products/components/FeaturedProducts';
import ProductCard from '@/components/ProductCard';
import { Product, PaginatedResponse } from '@/types/product';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // 🆕 Numéro de la page
  const limit = 6; // 🆕 Nombre d’éléments par page
  const [totalPages, setTotalPages] = useState(1); // 🆕 Total des pages

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response: PaginatedResponse<Product> = await getProducts(page, limit);
        
        if (response && Array.isArray(response.data)) {
          setProducts(response.data);
          setTotalPages(Math.ceil(response.total / limit)); // 🆕 Calcul du nombre total de pages
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]); // 🆕 Dépendance pour recharger les produits quand la page change

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-title text-textPrimary mb-6">Nos Produits</h1>

      {loading ? (
        <p className="text-textSecondary">Chargement des produits...</p>
      ) : (
        <>
          {products.length > 0 && (
            <FeaturedProducts products={products} title="Top Produits" />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-textSecondary text-center">
                Aucun produit disponible.
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 rounded ${page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-secondary'}`}
            >
              Précédent
            </button>
            <span className="text-textPrimary font-semibold">
              Page {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
              disabled={page >= totalPages}
              className={`px-4 py-2 rounded ${page >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-secondary'}`}
            >
              Suivant
            </button>
          </div>
        </>
      )}
    </div>
  );
}
