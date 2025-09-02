'use client';

export default function SolutionsVariation4() {
  const features = [
    { k: 'Speed', d: 'Rapid quoting and placement' },
    { k: 'Scale', d: 'Capacity for complex risks' },
    { k: 'Service', d: 'Hands-on claims advocacy' },
  ];
  return (
    <section className="bg-white">
      <div className="min-h-[70vh] bg-gradient-to-br from-corporate-blue-900 via-corporate-blue-700 to-black text-white flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-7xl font-black tracking-tight">Bold Solutions</h1>
          <p className="mt-6 text-2xl text-white/90">Built for momentum and measurable outcomes.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map(f => (
              <div key={f.k} className="p-8 bg-white/10 border border-white/20">
                <div className="text-4xl font-black">{f.k}</div>
                <div className="mt-2 text-white/90">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
