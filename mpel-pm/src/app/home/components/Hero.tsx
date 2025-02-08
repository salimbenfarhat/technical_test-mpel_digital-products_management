// src/app/home/components/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-primary text-white py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-title font-bold">
        MPEL PM - L&apos;Excellence Cosmétique
      </h1>
      <p className="mt-4 text-lg sm:text-xl">
        Découvrez nos produits de beauté haut de gamme pour des soins
        exceptionnels.
      </p>
      <Link
        href="/products"
        className="mt-6 inline-block bg-secondary text-white px-6 py-3 rounded-lg text-lg font-bold shadow-md hover:shadow-lg transition-shadow"
      >
        Découvrir nos produits
      </Link>
    </section>
  );
};

export default Hero;
