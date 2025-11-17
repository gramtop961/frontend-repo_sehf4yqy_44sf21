import React from 'react';
import { LineChart } from 'lucide-react';

export default function Tech() {
  return (
    <section id="technology" className="bg-gradient-to-b from-white to-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Breakthrough delivery stack</h2>
            <p className="mt-3 text-zinc-600">FluxMatrix™ micro‑channel patch + UV‑Heat Puck synergy boosts skin permeability and sustains a smooth release curve. More active where you need it, less waste.</p>
            <ul className="mt-6 space-y-3 text-zinc-700">
              <li>• Micro‑channels create transient pathways without pain</li>
              <li>• Red‑light and gentle heat enhance diffusion</li>
              <li>• Multi‑layer reservoir stabilizes and meters release</li>
              <li>• Dermatologist tested, hypoallergenic substrates</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <LineChart className="h-5 w-5 text-cobalt-600" />
              <h3 className="text-sm font-semibold text-zinc-900">Absorption vs Oral</h3>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-12 gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="h-24 w-3 rounded bg-zinc-200" />
                    <div className="h-40 w-3 rounded bg-gradient-to-t from-cobalt-600 to-cobalt-400" style={{ height: `${60 + (i % 4) * 10}px` }} />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-xs text-zinc-500">
                <span>Oral</span>
                <span>FluxPatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
