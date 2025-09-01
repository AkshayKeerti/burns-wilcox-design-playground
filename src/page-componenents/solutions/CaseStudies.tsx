import Image from 'next/image';

export default function CaseStudies() {
  const cases = [
    { title: 'Global Retailer Cyber Resilience', img: '/hero.webp', summary: 'Deployed layered cyber program reducing exposure by 45%.' },
    { title: 'Port Operator Marine Program', img: '/hero-1.jpg', summary: 'Comprehensive marine package across cargo and hull.' },
    { title: 'Healthcare Network Liability', img: '/hero-3.jpg', summary: 'Claims-made structure optimizing limits and premium.' }
  ];
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-900 mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map(c => (
            <article key={c.title} className="border border-corporate-grey-200">
              <div className="relative h-40">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-corporate-grey-900">{c.title}</h3>
                <p className="text-corporate-grey-600 mt-2">{c.summary}</p>
                <button className="mt-4 text-corporate-blue-600">Read more →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
