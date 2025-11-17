import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero({ onShop }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 py-2 backdrop-blur">
                <div className="h-2 w-2 rounded-full bg-cobalt-500" />
                <span className="text-xs font-medium tracking-wide text-zinc-700">Next‑gen transdermal biotech</span>
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
                Patches that fuel your biology — all day
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
                Meet FluxPatch: a high‑absorption system delivering NAD+, B12, Detox and Sleep actives with our UV‑Heat Puck and micro‑channel tech for consistent, all‑day effects.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button onClick={onShop} className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800">
                  Shop patches
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <div className="flex items-center gap-3 text-sm text-zinc-600">
                  <Shield className="h-4 w-4 text-zinc-400" />
                  Dermatologist tested • Hypoallergenic • Vegan
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative aspect-[4/5] w-full">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
