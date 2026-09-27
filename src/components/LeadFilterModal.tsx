'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Zap, AlertCircle, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

interface LeadFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFilterModal({ isOpen, onClose }: LeadFilterModalProps) {
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [servicioEstrella, setServicioEstrella] = useState('');
  const [ticket, setTicket] = useState('');
  const [pauta, setPauta] = useState('');
  const [zona, setZona] = useState('');
  const [capacidad, setCapacidad] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Validation
  const isSinPresupuesto = pauta === 'Solo busco información / No tengo presupuesto para anuncios';
  const isFormComplete = Boolean(
    nombreEmpresa.trim() &&
    servicioEstrella &&
    ticket &&
    pauta &&
    zona.trim() &&
    capacidad &&
    !isSinPresupuesto
  );

  const handleValidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormComplete) return;
    setIsSuccess(true);
  };

  const handleWhatsAppRedirect = () => {
    // Number strictly obfuscated in JS memory - NEVER exposed in static HTML
    const p1 = '54911';
    const p2 = '2788';
    const p3 = '7093';
    const targetNumber = `${p1}${p2}${p3}`;

    const sanitizedNombre = nombreEmpresa.trim();
    const sanitizedServicio = servicioEstrella;
    const sanitizedTicket = ticket;
    const sanitizedPauta = pauta;
    const sanitizedZona = zona.trim();
    const sanitizedCapacidad = capacidad;

    // Exact message template required in the specification
    const textMessage = `¡Hola! Acabo de calificar mi empresa para una landing page de producto estrella:
📋 Datos de mi negocio:
• Nombre/Empresa: ${sanitizedNombre}
• Servicio estrella: ${sanitizedServicio}
• Ticket promedio: ${sanitizedTicket}
• Inversión publicitaria: ${sanitizedPauta}
• Ubicación: ${sanitizedZona}
• Capacidad de obras: ${sanitizedCapacidad}

Deseo coordinar los detalles técnicos y presupuesto.`;

    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(textMessage)}`;
    onClose();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-slate-900 border border-pool-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pool-950 text-pool-300 border border-pool-700/50 mb-2">
              <Zap className="w-3.5 h-3.5 text-pool-400" />
              <span>Filtro de Calificación para Constructoras</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {isSuccess ? '¡Negocio Calificado!' : 'Califica tu Empresa de Piscinas'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isSuccess
                ? 'Tu empresa cumple los requisitos para implementar una landing monoproducto de alto rendimiento.'
                : 'Completa los 6 campos para evaluar la viabilidad de captación de tu producto estrella.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="space-y-6 py-4 animate-fadeIn">
            <div className="p-5 rounded-2xl bg-pool-950/80 border border-pool-500/40 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-pool-500/20 text-pool-300 flex-shrink-0">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Perfil Ideal Validado</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Has completado los requisitos técnicos. Accede al chat de coordinación para revisar la estructura de tu landing.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-1.5 font-mono">
              <p>• Empresa: <strong className="text-white">{nombreEmpresa}</strong></p>
              <p>• Servicio: <strong className="text-white">{servicioEstrella}</strong></p>
              <p>• Ticket: <strong className="text-white">{ticket}</strong></p>
              <p>• Ubicación: <strong className="text-white">{zona}</strong></p>
            </div>

            <button
              onClick={handleWhatsAppRedirect}
              className="w-full py-4 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-pool-400 via-sky-300 to-cyan-200 hover:from-pool-300 hover:to-white shadow-xl shadow-pool-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Contactar por WhatsApp para coordinar mi proyecto</span>
            </button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleValidSubmit} className="space-y-3.5">
            {/* 1. Nombre y Empresa */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                1. Nombre y Empresa: *
              </label>
              <input
                type="text"
                value={nombreEmpresa}
                onChange={(e) => setNombreEmpresa(e.target.value)}
                placeholder="Ej: Marcos Ruiz - Piscinas del Norte S.L."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-pool-400 focus:ring-1 focus:ring-pool-400 transition-all"
                required
              />
            </div>

            {/* 2. Servicio estrella a promocionar */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                2. Servicio estrella a promocionar: *
              </label>
              <select
                value={servicioEstrella}
                onChange={(e) => setServicioEstrella(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-pool-400 focus:ring-1 focus:ring-pool-400 transition-all cursor-pointer"
                required
              >
                <option value="" disabled>Selecciona servicio estrella...</option>
                <option value="Construcción de piscinas de obra">Construcción de piscinas de obra</option>
                <option value="Reforma integral y rehabilitación">Reforma integral y rehabilitación</option>
                <option value="Piscinas de diseño y lujo">Piscinas de diseño y lujo</option>
              </select>
            </div>

            {/* 3. Ticket promedio */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                3. Ticket promedio de tus obras: *
              </label>
              <select
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-pool-400 focus:ring-1 focus:ring-pool-400 transition-all cursor-pointer"
                required
              >
                <option value="" disabled>Selecciona ticket promedio...</option>
                <option value="€10.000 – €20.000">€10.000 – €20.000</option>
                <option value="€20.000 – €40.000">€20.000 – €40.000</option>
                <option value="Más de €40.000">Más de €40.000</option>
              </select>
            </div>

            {/* 4. Inversión publicitaria */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                4. Inversión publicitaria activa o planificada: *
              </label>
              <select
                value={pauta}
                onChange={(e) => setPauta(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-pool-400 focus:ring-1 focus:ring-pool-400 transition-all cursor-pointer"
                required
              >
                <option value="" disabled>Selecciona estado publicitario...</option>
                <option value="Invierto activamente en Google Ads / Redes">Invierto activamente en Google Ads / Redes</option>
                <option value="Tengo presupuesto listo para empezar a pautar">Tengo presupuesto listo para empezar a pautar</option>
                <option value="Solo busco información / No tengo presupuesto para anuncios">Solo busco información / No tengo presupuesto para anuncios</option>
              </select>
              {isSinPresupuesto && (
                <div className="mt-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/40 text-amber-300 text-[11px] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Aviso: Este sistema está diseñado exclusivamente para negocios constructores con pauta publicitaria activa o presupuesto listo para pautar.</span>
                </div>
              )}
            </div>

            {/* 5. Zona o provincia de cobertura */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                5. Zona o provincia de cobertura: *
              </label>
              <input
                type="text"
                value={zona}
                onChange={(e) => setZona(e.target.value)}
                placeholder="Ej: Madrid, Toledo y Guadalajara"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-pool-400 focus:ring-1 focus:ring-pool-400 transition-all"
                required
              />
            </div>

            {/* 6. Capacidad mensual para nuevas obras */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                6. Capacidad mensual para nuevas obras: *
              </label>
              <select
                value={capacidad}
                onChange={(e) => setCapacidad(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-pool-400 focus:ring-1 focus:ring-pool-400 transition-all cursor-pointer"
                required
              >
                <option value="" disabled>Selecciona capacidad de ejecución...</option>
                <option value="1 a 3">1 a 3 obras al mes</option>
                <option value="4 a 10">4 a 10 obras al mes</option>
                <option value="Más de 10">Más de 10 obras al mes</option>
              </select>
            </div>

            {/* Privacy footnote */}
            <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-pool-400 flex-shrink-0" />
              <span>Tus datos están protegidos bajo estricto secreto profesional.</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormComplete}
              className="w-full mt-3 py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-pool-400 via-sky-300 to-cyan-200 hover:from-pool-300 hover:to-white shadow-lg shadow-pool-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
            >
              <span>Verificar Calificación y Continuar</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
