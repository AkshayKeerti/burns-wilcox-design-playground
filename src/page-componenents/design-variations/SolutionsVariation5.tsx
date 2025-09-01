'use client';

import Image from 'next/image';

export default function SolutionsVariation5() {
  const articles = [
    { t: 'Rethinking Cyber Posture', i: '/hero.png', e: 'A pragmatic roadmap for resilience.' },
    { t: 'Parametric Cat Solutions', i: '/hero.jpeg', e: 'Speed and transparency for NatCat.' },
    { t: 'Supply Chain Continuity', i: '/hero-2.jpg', e: 'Mitigating cascading risks.' }
  ];
  return (
    <section className="bg-white">
      <div className="h-[56vh] bg-corporate-grey-50 flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-semibold text-corporate-grey-900">Insights-led Solutions</h1>
          <p className="mt-4 text-corporate-grey-700 max-w-3xl">Editorial layout pairing thought leadership with targeted solution paths.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map(a => (
          <article key={a.t} className="border border-corporate-grey-200 bg-white">
            <div className="relative h-40">
              <Image src={a.i} alt={a.t} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-corporate-grey-900">{a.t}</h3>
              <p className="text-corporate-grey-600 mt-2">{a.e}</p>
              <button className="mt-4 text-corporate-blue-600">Explore →</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  
}
