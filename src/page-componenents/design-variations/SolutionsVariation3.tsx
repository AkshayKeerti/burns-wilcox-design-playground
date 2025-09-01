'use client';

import { useState } from 'react';

const tabs = [
  { key: 'property', title: 'Property', points: ['Buildings', 'Contents', 'BI'] },
  { key: 'casualty', title: 'Casualty', points: ['GL', 'Products', 'Umbrella'] },
  { key: 'cyber', title: 'Cyber', points: ['Breach', 'Incident Response', 'Downtime'] }
];

export default function SolutionsVariation3() {
  const [active, setActive] = useState('property');
  const current = tabs.find(t => t.key === active)!;
  return (
    <section className="bg-white">
      <div className="h-[60vh] bg-gradient-to-r from-corporate-blue-600 to-corporate-blue-800 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6 inline-flex gap-3 bg-white/15 px-4 py-2">
            <span className="w-2 h-2 bg-white rounded-full" />
            <span>Interactive Solutions</span>
          </div>
          <h1 className="text-6xl font-bold">Choose Your Focus</h1>
          <p className="mt-4 text-white/90 max-w-3xl">Switch tabs to explore what matters most to your organization.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setActive(t.key)}
                className={`px-4 py-2 rounded ${active===t.key?'bg-white text-corporate-blue-800':'bg-white/20 text-white'}`}>{t.title}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-corporate-grey-900 mb-4">{current.title}</h3>
        <ul className="list-disc pl-6 text-corporate-grey-700 space-y-2">
          {current.points.map(p => (<li key={p}>{p}</li>))}
        </ul>
      </div>
    </section>
  );
}
