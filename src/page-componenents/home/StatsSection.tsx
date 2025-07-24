'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const stats = [
  {
    icon: '/stats-icon-1.svg',
    value: '50+',
    label: 'Years in Insurance',
  },
  {
    icon: '/stats-icon-1.svg',
    value: '60+',
    label: 'Offices Worldwide',
  },
  {
    icon: '/stats-icon-2.svg',
    value: '2300+',
    label: 'Insurance Professionals',
  },
  {
    icon: '/stats-icon-3.svg',
    value: '3.6B+',
    label: 'Group Premium Throughout',
  },
  {
    icon: '/stats-icon-3.svg',
    value: '1969',
    label: 'Leading global insurance broker',
  },
];

export default function StatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse event handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Touch event handlers for mobile
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchScrollLeft, setTouchScrollLeft] = useState(0);
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setTouchStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setTouchScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const onTouchEnd = () => setIsDragging(false);
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = x - touchStartX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = touchScrollLeft - walk;
    }
  };

  // Create a seamless loop by duplicating the stats array
  const statsLoop = [...stats, ...stats];

  return (
    <section className="bg-tertiary-blue-50 w-full flex flex-col items-center py-24 px-4 md:px-16">
      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className={`select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
        >
          <div
            className={`flex flex-row gap-16 md:gap-[109px] items-center animate-stats-scroll group-hover:[animation-play-state:paused] ${isDragging ? '[animation-play-state:paused]' : ''}`}
            style={{ width: 'max-content' }}
          >
            {statsLoop.map((stat, idx) => (
              <div
                key={stat.label + idx}
                className="flex flex-col items-center gap-6 min-w-[185px] md:min-w-[185px] lg:min-w-[216px]"
              >
                <div className="flex items-center justify-center w-[61px] h-[68px] mb-2">
                  <Image
                    src={stat.icon}
                    alt={stat.label + ' icon'}
                    width={61}
                    height={68}
                    className="object-contain"
                  />
                </div>
                <div className="text-[64px] leading-[69px] font-black text-corporate-blue-500 text-center font-sans">
                  {stat.value}
                </div>
                <div className="text-[20px] leading-[28px] font-normal text-corporate-blue-500 text-center font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes stats-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-stats-scroll {
          animation: stats-scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
