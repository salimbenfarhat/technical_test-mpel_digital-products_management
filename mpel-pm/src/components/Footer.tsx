// src/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-foreground text-textSecondary p-4 text-center">
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <Link href="/" className="font-title hover:text-textPrimary">
          MPEL PM
        </Link>{' '}
        - Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
