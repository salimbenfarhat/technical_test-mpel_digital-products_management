import FeaturedProducts from '@/app/products/components/FeaturedProducts';
import ProductCard from '@/components/ProductCard';

// Liste d'URL d'images Unsplash fournies
const unsplashImages = [
  'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1585049303349-6680e6179692?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1631120629198-777872b283f1?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1606158436222-1896b18c5d25?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3',
];

// Liste de 30 produits avec des images Unsplash
const products = Array.from({ length: 30 }, (_, index) => {
  const id = (index + 1).toString();
  const name = `Produit ${id}`;
  const description = `Description du produit ${id}.`;
  const price = Math.floor(Math.random() * 50) + 1; // Prix aléatoire entre 1 et 50
  const image = unsplashImages[index % unsplashImages.length]; // Répartition cyclique des images

  return { id, name, description, price, image };
});

export default function ProductsPage() {
  return (
    <div className="container mx-auto text-center p-4">
      {/* Titre de la page */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Catalogue Produits
      </h1>

      {/* Bloc "Top Produits" ou "Produits recommandés" */}
      <FeaturedProducts
        products={products}
        title="Top Produits" // Ou "Produits recommandés"
      />

      {/* Grille de tous les produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
