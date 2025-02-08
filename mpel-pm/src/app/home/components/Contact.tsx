// src/app/home/components/Contact.tsx
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto my-16 text-center px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-title font-semibold">
        Restons en contact
      </h2>
      <p className="mt-4 text-textSecondary sm:text-lg">
        Laissez-nous un message via notre adresse e-mail ci-dessous et nous vous répondrons dans les plus brefs délais.
      </p>
      <span className="block mt-2 font-medium">
        <Link
          href="mailto:contact@mpel-pm.local"
          className="text-secondary text-2xl hover:underline"
        >
          contact@mpel-pm.local
        </Link>
      </span>
    </section>
  );
};

export default Contact;