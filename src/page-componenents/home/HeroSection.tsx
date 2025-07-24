'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const images = ['/hero.webp', '/hero.webp', '/hero.webp'];

const SLIDE_DURATION = 4000; // ms

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 1
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Progress animation
  useEffect(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1));
    }, 16);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current]);

  // SVG circle constants
  const RADIUS = 24;
  const STROKE = 2;
  const CIRCUM = 2 * Math.PI * RADIUS;

  return (
    <section className="relative w-full h-[80vh] overflow-hidden select-none">
      {/* Overlayed Text Content */}
      <div className="absolute z-10 top-0 left-0 flex flex-col justify-center h-full w-full px-4 md:px-16 pointer-events-none">
        <div className="max-w-2xl rounded-lg p-6 md:p-12 flex flex-col gap-8 pointer-events-auto">
          <div className="flex flex-col gap-6 text-white">
            <h1 className="font-bold text-3xl md:text-5xl leading-tight md:leading-[1.2]">
              Your Vision
              <br />
              Our Commitment to Smarter Protection
            </h1>
            <p className="text-base md:text-lg font-normal text-white/90">
              At Burns & Wilcox Middle East, we leverage over 50 years of global expertise to
              provide customized insurance solutions that meet the unique needs of your business.
              Backed by the trusted legacy of the H.W. Kaufman Group and led by a team of seasoned
              global professionals, we are committed to providing industry-leading risk management
              and risk-transfer solutions to help your business.
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <button className="bg-white text-[#012169] border border-white font-medium px-6 py-3  transition hover:bg-gray-100">
              Learn More
            </button>
            <button className="bg-transparent text-white border border-white font-medium px-6 py-3  transition hover:bg-white hover:text-[#012169]">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      {/* Slideshow Images */}
      <div
        ref={containerRef}
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${-current * 100}%)`,
        }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 items-center justify-center">
        {images.map((_, idx) => (
          <div
            key={idx}
            className="relative flex items-center justify-center w-12 h-12" // slightly larger container
          >
            {idx === current && (
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                width={2 * (RADIUS + STROKE + 4)} // extra space for outside ring
                height={2 * (RADIUS + STROKE + 4)}
              >
                <circle
                  cx={RADIUS + STROKE + 4}
                  cy={RADIUS + STROKE + 4}
                  r={RADIUS}
                  stroke="#94a3b8" // tailwind's slate-400
                  strokeWidth={STROKE}
                  fill="none"
                  strokeDasharray="6 6" // dashed style
                />
                <circle
                  cx={RADIUS + STROKE + 4}
                  cy={RADIUS + STROKE + 4}
                  r={RADIUS}
                  stroke="#012169"
                  strokeWidth={STROKE + 2}
                  fill="none"
                  strokeDasharray={CIRCUM}
                  strokeDashoffset={CIRCUM * (1 - progress)}
                  style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                />
              </svg>
            )}

            <button
              className={`rounded-full transition-all duration-300 overflow-hidden flex items-center justify-center relative ${
                idx === current
                  ? 'bg-white w-10 h-10'
                  : 'bg-transparent w-3 h-3 border border-white'
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === current && (
                <Image
                  src={images[idx]}
                  className="object-cover w-full h-full absolute top-0 left-0 rounded-full"
                  alt={`Slide ${idx + 1}`}
                  width={160}
                  height={160}
                />
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
