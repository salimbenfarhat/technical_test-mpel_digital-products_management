// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-title hover:text-textPrimary">
          MPEL PM
        </Link>
        <nav>
          <Link href="/products" className="hover:text-textPrimary">
            Produits
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
