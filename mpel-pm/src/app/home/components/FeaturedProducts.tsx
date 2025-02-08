// src/app/home/components/FeaturedProducts.tsx
const FeaturedProducts = () => {
  const products = [
    { title: 'Produit 1', description: 'Description du produit.' },
    { title: 'Produit 2', description: 'Description du produit.' },
    { title: 'Produit 3', description: 'Description du produit.' },
  ];

  return (
    <section className="bg-foreground py-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-title font-semibold text-textPrimary">
        Nos produits phares
      </h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6 px-4 sm:px-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-primary p-4 rounded-lg shadow-md w-full sm:w-64"
          >
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p className="text-sm text-textSecondary">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
