import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        {/* Header */}
        <Header />

        {/* Contenu principal */}
        <main className="container mx-auto p-4">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
