import Image from 'next/image';

export default function SolutionsHero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/hero-2.jpg" alt="Solutions" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 h-full flex items-center px-4 md:px-16">
        <div className="text-white max-w-3xl">
          <span className="text-white/80">Our Expertise</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3">Insurance Solutions</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">Comprehensive, industry-specific coverage designed to protect and empower your business.</p>
          <div className="mt-8 flex gap-4">
            <button className="bg-white text-corporate-blue-900 px-6 py-3">Explore Solutions</button>
            <button className="border border-white text-white px-6 py-3">Talk to an Expert</button>
          </div>
        </div>
      </div>
    </section>
  );
}
