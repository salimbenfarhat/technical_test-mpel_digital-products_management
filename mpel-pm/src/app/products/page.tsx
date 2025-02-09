'use client';
import { useEffect, useState } from 'react';
import { getProducts } from '@/utils/api';
import FeaturedProducts from '@/app/products/components/FeaturedProducts';
import ProductCard from '@/components/ProductCard';
import { Product, PaginatedResponse } from '@/types/product';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Début de la récupération des produits...');
        setLoading(true);

        // Appel à l'API
        const response: PaginatedResponse<Product> = await getProducts(); // Utilise le type PaginatedResponse
        console.log('Données reçues depuis l\'API :', response);
        console.log('Type de données reçues :', typeof response);

        // Vérifier si "data" existe et est un tableau
        if (response && Array.isArray(response.data)) {
          const extractedProducts = response.data; // Extraire les produits du champ "data"
          console.log('Nombre de produits extraits :', extractedProducts.length);
          setProducts(extractedProducts);
        } else {
          console.error("La réponse de l'API ne contient pas de données valides.");
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      } finally {
        console.log('Fin du chargement...');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log('État des produits avant le rendu :', products);

  return (
    <div className="container mx-auto p-4">
      {/* Titre de la page */}
      <h1 className="text-3xl font-title text-textPrimary mb-6">Nos Produits</h1>

      {/* Affichage d'un message de chargement si nécessaire */}
      {loading ? (
        <p className="text-textSecondary">Chargement des produits...</p>
      ) : (
        <>
          {/* Bloc "Top Produits" ou "Produits recommandés" */}
          {products.length > 0 && (
            <FeaturedProducts products={products} title="Top Produits" />
          )}

          {/* Grille de tous les produits */}
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
        </>
      )}
    </div>
  );
}