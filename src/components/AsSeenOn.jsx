import React from 'react';

const logos = [
  'Forbes', 'Wired', 'Bloomberg', 'TechCrunch', 'Men\'s Health', 'Vogue'
]

export default function AsSeenOn() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-xs font-medium tracking-widest text-zinc-500">AS SEEN IN</p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="text-center text-sm font-semibold text-zinc-400">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
