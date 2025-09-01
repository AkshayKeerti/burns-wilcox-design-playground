export default function ProductAreas() {
  const areas = [
    { title: 'Property', desc: 'Protect physical assets with tailored coverage' },
    { title: 'Casualty', desc: 'Shield against liability and third‑party risks' },
    { title: 'Professional Lines', desc: 'Safeguard specialized services and advice' },
    { title: 'Marine', desc: 'Coverage for cargo, hull, and logistics' },
    { title: 'Energy', desc: 'Solutions for power, oil & gas, renewables' },
    { title: 'Cyber', desc: 'Defense against data breach and downtime' }
  ];
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-corporate-grey-900 mb-8">Product Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map(a => (
            <div key={a.title} className="p-6 border border-corporate-grey-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-corporate-grey-900">{a.title}</h3>
              <p className="text-corporate-grey-600 mt-2">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
