'use client';

import React from 'react';
import { ArrowRight, Zap, Gauge, Filter, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-pool-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pool-950/90 text-pool-300 border border-pool-800/80 mb-6 shadow-sm">
          <Zap className="w-3.5 h-3.5 text-pool-400" />
          <span>Inspirado en el modelo de captación de Piscinazos • Alta Conversión B2C</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
          Convierte el tráfico de tus anuncios en presupuestos de{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pool-300 via-sky-300 to-cyan-200">
            €10.000 a €40.000 para piscinas de obra
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Creamos páginas de aterrizaje individuales, ultrarrápidas y sin fricción de compra para tu producto estrella. Más presupuestos reales y menos pérdida de presupuesto publicitario.
        </p>

        {/* Badges de confianza */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-semibold text-slate-300 mb-10">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <Gauge className="w-4 h-4 text-pool-400" />
            <span>Carga en &lt; 1s</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <Zap className="w-4 h-4 text-sky-400" />
            <span>Estructura optimizada para Google Ads y Meta Ads</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span>Filtrado anti-curiosos</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl font-extrabold text-base text-slate-950 bg-gradient-to-r from-pool-400 via-sky-300 to-cyan-200 hover:from-pool-300 hover:to-white shadow-xl shadow-pool-500/25 hover:shadow-pool-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Calificar mi negocio</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
}
