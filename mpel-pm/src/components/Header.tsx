// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Titre */}
        <Link href="/" className="text-2xl font-title hover:text-textPrimary">
          MPEL PM
        </Link>

        {/* Navigation */}
        <nav className="space-x-6"> {/* Espacement entre les éléments du menu */}
          <Link
            href="/products"
            className="text-lg font-semibold hover:text-secondary uppercase tracking-wide"
          >
            PRODUITS
          </Link>
          <Link
            href="/#contact"
            className="text-lg font-semibold hover:text-secondary uppercase tracking-wide"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;