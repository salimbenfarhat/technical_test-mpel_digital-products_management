// src/app/home/components/Testimonials.tsx
const Testimonials = () => {
  return (
    <section className="container mx-auto my-16 text-center px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-title font-semibold">
        Nos clients en parlent
      </h2>
      <div className="mt-6 space-y-4">
        <p className="text-textSecondary italic text-lg">
          &quot;Des produits incroyables ! Je recommande vivement.&quot; - Sarah
          L.
        </p>
        <p className="text-textSecondary italic text-lg">
          &quot;Une qualité exceptionnelle et un service au top.&quot; - Julien
          M.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
