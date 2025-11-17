import React from 'react';

export default function UVPuck() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-cobalt-600 to-cobalt-400 p-6 text-white shadow-sm">
            <div className="aspect-[4/3] w-full rounded-xl bg-white/10" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">UV‑Heat Puck Armband</h2>
            <p className="mt-3 text-zinc-600">A comfortable armband with integrated red‑light LEDs and gentle heat to prime the skin and accelerate diffusion. Designed to pair with FluxPatch for enhanced uptake.</p>
            <ul className="mt-6 space-y-3 text-zinc-700">
              <li>• Gentle 42°C heat optimizes perfusion</li>
              <li>• 630–660 nm LEDs support microcirculation</li>
              <li>• Smart timer with auto‑shutoff</li>
              <li>• USB‑C fast charge, all‑day battery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
