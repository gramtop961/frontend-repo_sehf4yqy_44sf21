import React from 'react';

const testimonials = [
  {
    name: 'Alex R.',
    quote: 'Swapped my pills for FluxPatch. Energy felt steady and clean all day.',
  },
  {
    name: 'Dana K.',
    quote: 'Sleep patch knocked down my 3am wakeups. I wake up clear. Big fan.',
  },
  {
    name: 'Chris M.',
    quote: 'The UV puck + NAD patch is my pre‑work ritual now. Focus without jitters.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-zinc-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">People feel the difference</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-zinc-700">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-zinc-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
