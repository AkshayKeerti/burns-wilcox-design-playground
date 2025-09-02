'use client';

export default function SolutionsVariation2() {
  const items = [
    { title: 'Property', desc: 'Assets, BI, Cat' },
    { title: 'Casualty', desc: 'General & Products Liability' },
    { title: 'Professional', desc: 'Errors & Omissions' },
    { title: 'Cyber', desc: 'Breach, BI, Extortion' },
  ];
  return (
    <section className="bg-white">
      <div className="h-[50vh] bg-corporate-grey-900 text-white flex items-center justify-center">
        <div className="text-center px-6">
          <div className="inline-block border-b border-white/30 pb-2 mb-6 tracking-widest uppercase text-sm">
            Solutions
          </div>
          <h1 className="text-5xl font-light">Clarity in Coverage</h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Minimalist layout focused on typography and spacing.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-6">
        {items.map(i => (
          <div
            key={i.title}
            className="p-8 border-l-4 border-corporate-blue-500 bg-white shadow-sm"
          >
            <h3 className="text-2xl font-light text-corporate-grey-900">{i.title}</h3>
            <p className="text-corporate-grey-600 mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
