// src/app/home/components/FAQ.tsx
const FAQ = () => {
  const faqs = [
    {
      question: 'Quels sont vos délais de livraison ?',
      answer: 'Nous livrons sous 3 à 5 jours ouvrés.',
    },
    {
      question: 'Puis-je retourner un produit ?',
      answer: 'Oui, sous 14 jours après réception.',
    },
  ];

  return (
    <section className="bg-gray-800 dark:bg-gray-900 text-white py-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-title font-semibold">FAQ</h2>
      <div className="mt-6 max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-700 pt-4">
            <p className="font-bold text-lg">📌 {faq.question}</p>
            <p className="mt-2 text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
