'use client';

import React from 'react';
import { Play } from 'lucide-react';

export default function VideoDemoSection() {
  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest text-pool-400 uppercase">
            Demostración en Video
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Mira cómo funciona una landing de producto estrella de alto rendimiento
          </h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl aspect-video border border-pool-500/30 bg-slate-900">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/M5_QicGRh-s?si=_0gkgpp51W2mA-NQ"
            title="Demostración Landing Page de Alta Conversión"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
