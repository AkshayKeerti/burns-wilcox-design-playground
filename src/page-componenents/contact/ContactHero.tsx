import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contact-us-banner.png"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16">
        <div className="max-w-4xl">
          <div className="flex flex-col gap-6 text-white">
            <span className="text-[18px] leading-[21.6px] font-normal text-white/90">
              Get in Touch
            </span>
            <h1 className="font-bold text-4xl md:text-6xl leading-tight md:leading-[1.1]">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl font-normal text-white/90 max-w-3xl">
              Ready to discuss your insurance needs? Our team is here to help you find the right
              solutions for your business and personal protection.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-white text-[#012169] border border-white font-medium px-6 py-3 transition hover:bg-gray-100">
              Send Message
            </button>
            <button className="bg-transparent text-white border border-white font-medium px-6 py-3 transition hover:bg-white hover:text-[#012169]">
              Find Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
