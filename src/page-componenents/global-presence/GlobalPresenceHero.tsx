'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const slides = [
  {
    image: '/hero-1.jpg',
    title: 'Global Reach',
    subtitle: 'Local Expertise',
    description:
      'With over 60 offices worldwide and deep regional knowledge, Burns & Wilcox delivers insurance solutions that understand your local market while leveraging global expertise.',
  },
  {
    image: '/hero-2.jpg',
    title: 'Worldwide Network',
    subtitle: 'Unified Solutions',
    description:
      'Our international presence enables seamless service delivery across borders, providing consistent risk management solutions wherever your business operates.',
  },
  {
    image: '/hero-3.jpg',
    title: 'Regional Specialization',
    subtitle: 'Global Standards',
    description:
      'Each region brings unique challenges and opportunities. Our local teams combine deep market knowledge with global best practices to deliver exceptional results.',
  },
];

const SLIDE_DURATION = 5000; // ms

export default function GlobalPresenceHero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
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

  const RADIUS = 24;
  const STROKE = 2;
  const CIRCUM = 2 * Math.PI * RADIUS;

  return (
    <section className="relative w-full h-[80vh] overflow-hidden select-none">
      {/* Overlayed Text Content */}
      <div className="absolute z-10 top-0 left-0 flex flex-col justify-center h-full w-full px-4 md:px-16 pointer-events-none overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(${-current * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="min-w-full flex flex-col justify-center"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="max-w-2xl rounded-lg flex flex-col gap-8 pointer-events-auto">
                <div className="flex flex-col gap-6 text-white">
                  <h1 className="font-bold text-3xl md:text-5xl leading-tight md:leading-[1.2]">
                    {slide.title}
                    <br />
                    {slide.subtitle}
                  </h1>
                  <p className="text-base md:text-lg font-normal text-white/90">
                    {slide.description}
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <button className="bg-white text-[#012169] border border-white font-medium px-6 py-3 transition hover:bg-gray-100">
                    Explore Regions
                  </button>
                  <button className="bg-transparent text-white border border-white font-medium px-6 py-3 transition hover:bg-white hover:text-[#012169]">
                    Contact Local Team
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slideshow Images */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(${-current * 100}%)`,
        }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <Image
              src={slide.image}
              alt={`Global Presence Slide ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 items-center justify-center">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className="relative flex items-center justify-center w-12 h-12"
          >
            {idx === current && (
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                width={2 * (RADIUS + STROKE + 4)}
                height={2 * (RADIUS + STROKE + 4)}
              >
                <circle
                  cx={RADIUS + STROKE + 4}
                  cy={RADIUS + STROKE + 4}
                  r={RADIUS}
                  stroke="#94a3b8"
                  strokeWidth={STROKE}
                  fill="none"
                  strokeDasharray="6 6"
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
                  src={slides[idx].image}
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
