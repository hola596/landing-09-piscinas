'use client';

import React from 'react';
import { Check, X, ShieldAlert, Award, Waves, ArrowRight, Sparkles } from 'lucide-react';

interface ComparisonProps {
  onOpenModal: () => void;
}

export default function ComparisonSection({ onOpenModal }: ComparisonProps) {
  const points = [
    {
      feature: 'Enfoque de la Oferta',
      landing: '100% enfocada en tu servicio estrella (Piscina de Obra de €10.000 a €40.000)',
      corporate: 'Múltiples servicios compitiendo (cloro, mantenimiento, reformas menores, jacuzzis)',
    },
    {
      feature: 'Velocidad de Carga en Móvil',
      landing: 'Menos de 1 segundo (Core Web Vitals 100/100, imágenes WebP optimizadas)',
      corporate: '4 a 8 segundos por galerías de fotos pesadas sin comprimir',
    },
    {
      feature: 'Filtrado de Clientes',
      landing: 'Filtro anti-curiosos que cualifica presupuesto real y terreno antes de llamar',
      corporate: 'Formulario genérico que atrae solicitudes sin presupuesto ni capacidad de compra',
    },
    {
      feature: 'Fugas de Tráfico',
      landing: 'Cero menús ni enlaces externos que distraigan al usuario',
      corporate: 'Decenas de botones a redes sociales, blogs antiguos y pestañas irrelevantes',
    },
    {
      feature: 'Coste por Adquisición (CPA)',
      landing: 'Quality Score 9-10 en Google Ads, abaratando el coste por clic hasta un 35%',
      corporate: 'Penalización por lentitud y dispersión semántica, encareciendo los clics',
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-pool-400 uppercase">
            Análisis Comparativo de Conversión
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Sitio Web Corporativo Tradicional vs. Landing de Servicio Estrella
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Descubre por qué las constructoras de piscinas líderes invierten en páginas monoproducto para sus campañas de pago.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Landing Monoproducto */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-pool-950/60 border-2 border-pool-500/60 shadow-xl shadow-pool-500/10 relative">
            <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full text-xs font-bold bg-pool-400 text-slate-950 uppercase tracking-wider">
              Modelo Alta Conversión
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-pool-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Landing Monoproducto</h3>
                <p className="text-xs text-pool-300">Enfocada en Piscinas de Obra (€10k-€40k)</p>
              </div>
            </div>

            <ul className="space-y-4">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-pool-500/20 text-pool-300 mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-pool-200 block">{pt.feature}</span>
                    <span className="text-sm text-slate-200">{pt.landing}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-pool-800/60">
              <button
                onClick={onOpenModal}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-pool-400 via-sky-300 to-cyan-200 hover:from-pool-300 hover:to-white shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Calificar mi empresa para este modelo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Web Corporativa Dispersa */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/40 border border-slate-800 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="w-7 h-7 text-rose-400" />
              <div>
                <h3 className="text-xl font-bold text-slate-300">Web Corporativa Tradicional</h3>
                <p className="text-xs text-slate-500">Catálogo genérico multioferta</p>
              </div>
            </div>

            <ul className="space-y-4">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 opacity-80">
                  <div className="p-1 rounded-full bg-rose-500/20 text-rose-400 mt-0.5 flex-shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{pt.feature}</span>
                    <span className="text-sm text-slate-400">{pt.corporate}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <span className="text-xs text-slate-500">
                El 70% del presupuesto de Google Ads se pierde en fugas de páginas corporativas lentas.
              </span>
            </div>
          </div>
        </div>

        {/* El Modelo de Éxito en Piscinas de Obra (Inspirado en Piscinazos) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-pool-950/40 to-slate-900 border border-pool-500/30 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-pool-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              El Modelo de Éxito en Piscinas de Obra (Inspirado en Piscinazos)
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            La clave de plataformas de referencia como <strong>Piscinazos.com</strong> no radica en mostrar fotos de piscinas, sino en cómo capturan la demanda estacional de alta intención mediante un sistema interactivo de pre-calificación: solicitan medidas aproximadas, tipo de vaso (gunitado, hormigón, desbordante) y ubicación antes de poner al cliente en contacto con el constructor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="font-bold text-pool-300 block mb-1">1. Demanda Estacional</span>
              <p className="text-slate-400">Captura la temporada alta de primavera-verano con páginas que no sufren caídas ni ralentizaciones.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="font-bold text-pool-300 block mb-1">2. Pre-Cálculo de Proyecto</span>
              <p className="text-slate-400">El cliente indica dimensiones y presupuesto real, evitando visitas estériles de tu equipo técnico.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="font-bold text-pool-300 block mb-1">3. Derivación a WhatsApp</span>
              <p className="text-slate-400">Contacto inmediato con el lead en caliente cuando la intención de compra está en su punto máximo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
