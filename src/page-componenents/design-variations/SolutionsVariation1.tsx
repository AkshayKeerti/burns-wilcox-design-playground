'use client';

import Image from 'next/image';

export default function SolutionsVariation1() {
  const highlights = [
    { title: 'Tailored Programs', desc: 'Built around your risk profile', img: '/hero-1.jpg' },
    { title: 'Global Capacity', desc: 'Access to international markets', img: '/hero-2.jpg' },
    { title: 'Claims Advocacy', desc: 'Dedicated support at every step', img: '/hero-3.jpg' }
  ];
  return (
    <section className="bg-white w-full">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/hero.webp" alt="Solutions" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-900/80 to-transparent" />
        <div className="relative z-10 max-w-5xl px-6 text-white">
          <span className="text-white/80">Solutions</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-3">Protect. Perform. Grow.</h1>
          <p className="mt-4 text-xl text-white/90">Modern card-based layout emphasizing clarity and action.</p>
        </div>
      </div>

      <div className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map(h => (
          <div key={h.title} className="bg-white border border-corporate-grey-200 shadow-sm hover:shadow-lg transition">
            <div className="relative h-40">
              <Image src={h.img} alt={h.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-corporate-grey-900">{h.title}</h3>
              <p className="text-corporate-grey-600 mt-2">{h.desc}</p>
              <button className="mt-4 text-corporate-blue-600">Learn more →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
