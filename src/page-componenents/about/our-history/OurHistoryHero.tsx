import Image from 'next/image';

export default function OurHistoryHero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-2.jpg"
          alt="Our History - Burns & Wilcox"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16">
        <div className="max-w-4xl">
          <div className="flex flex-col gap-6 text-white">
            <span className="text-[18px] leading-[21.6px] font-normal text-white/90">
              Our Story
            </span>
            <h1 className="font-bold text-4xl md:text-6xl leading-tight md:leading-[1.1]">
              Our History
            </h1>
            <p className="text-xl md:text-2xl font-normal text-white/90 max-w-3xl">
              From humble beginnings in 1969 to becoming a global insurance leader, discover the journey that shaped Burns & Wilcox into the trusted partner we are today
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-white text-[#012169] border border-white font-medium px-6 py-3 transition hover:bg-gray-100">
              Explore Timeline
            </button>
            <button className="bg-transparent text-white border border-white font-medium px-6 py-3 transition hover:bg-white hover:text-[#012169]">
              Key Milestones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
