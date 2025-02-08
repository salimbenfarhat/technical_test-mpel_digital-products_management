import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MPEL PM - Gestion des Produits',
  description: 'Application de gestion des produits cosmétiques',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-background text-textPrimary font-body">
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

        <main className="container mx-auto p-4">{children}</main>

        <footer className="bg-foreground text-textSecondary p-4 text-center">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <Link href="/" className="font-title hover:text-textPrimary">
              MPEL PM
            </Link>{' '}
            - Tous droits réservés.
          </p>
        </footer>
      </body>
    </html>
  );
}
