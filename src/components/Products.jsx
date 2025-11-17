import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'nad',
    name: 'NAD+ Patch',
    desc: 'Sustained cellular energy, clarity and repair.',
    price: 59,
    color: 'from-cobalt-500 to-cobalt-700',
    pills: ['All-day release', 'Clinically dosed', 'Zero jitters']
  },
  {
    id: 'b12',
    name: 'B12 Patch',
    desc: 'Clean energy and mood support without spikes.',
    price: 39,
    color: 'from-rose-500 to-rose-700',
    pills: ['Methylcobalamin', 'Smooth focus', 'Daily vitality']
  },
  {
    id: 'detox',
    name: 'Detox Patch',
    desc: 'Binders + botanicals to support gentle detox.',
    price: 49,
    color: 'from-emerald-500 to-emerald-700',
    pills: ['Liver support', 'Glutathione', 'Heavy metal binders']
  },
  {
    id: 'sleep',
    name: 'Sleep Patch',
    desc: 'Deep, consistent sleep architecture—wake clear.',
    price: 44,
    color: 'from-indigo-500 to-indigo-700',
    pills: ['Melatonin-free', 'Circadian aligned', 'Non-groggy']
  },
];

export default function Products({ onAdd }) {
  return (
    <section id="products" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Patches that perform</h2>
            <p className="mt-2 text-zinc-600">Targeted actives. Steady delivery. Real‑world results.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className={`h-36 w-full rounded-xl bg-gradient-to-br ${p.color} opacity-90 transition group-hover:opacity-100`} />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-zinc-900">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.pills.map((tag) => (
                    <span key={tag} className="rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-600">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-semibold text-zinc-900">${p.price}</div>
                  <button onClick={() => onAdd(p)} className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white transition hover:bg-zinc-800">Add to cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
