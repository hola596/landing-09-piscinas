'use client';

import React, { useEffect } from 'react';
import { X, Shield, FileText, Scale } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: 'privacy' | 'terms' | 'legal';
  onClose: () => void;
  onTabChange: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function LegalModal({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-pool-400" />
            <h3 className="text-lg font-bold text-white">Información Legal y Cumplimiento Normativo</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-800 bg-slate-900/40 px-6 pt-2">
          <button
            onClick={() => onTabChange('privacy')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-pool-400 text-pool-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Política de Privacidad</span>
          </button>
          <button
            onClick={() => onTabChange('terms')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'terms'
                ? 'border-pool-400 text-pool-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Términos del Servicio</span>
          </button>
          <button
            onClick={() => onTabChange('legal')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'legal'
                ? 'border-pool-400 text-pool-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Aviso Legal</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
          {activeTab === 'privacy' && (
            <>
              <h4 className="text-base font-bold text-white">Política de Privacidad (RGPD y LOPD-GDD)</h4>
              <p>
                <strong>Responsable del Tratamiento:</strong> Servicio de Marketing Digital.
              </p>
              <p>
                <strong>Finalidad del Tratamiento:</strong> Evaluación de viabilidad técnica y desarrollo de páginas de aterrizaje monoproducto para constructoras y reformistas de piscinas de obra.
              </p>
              <p>
                <strong>Legitimación:</strong> Consentimiento libre, informado e inequívoco expresado al enviar el formulario de calificación.
              </p>
              <p>
                <strong>Canal de Contacto:</strong> <span className="font-mono text-pool-300">hola@serviciodemarketingdigital.com</span>.
              </p>
            </>
          )}

          {activeTab === 'terms' && (
            <>
              <h4 className="text-base font-bold text-white">Términos y Condiciones del Servicio</h4>
              <p>
                1. <strong>Servicio Contratado:</strong> Diseño, desarrollo en Next.js, optimización de Core Web Vitals e integración de embudos de captación para empresas de piscinas.
              </p>
              <p>
                2. <strong>Rango de Tickets:</strong> Estructurado específicamente para constructoras con obras comprendidas entre 10.000€ y 40.000€.
              </p>
              <p>
                3. <strong>Independencia del Anunciante:</strong> Servicio de Marketing Digital provee la infraestructura y optimización técnica de conversión; las campañas publicitarias son administradas según los acuerdos específicos con el cliente.
              </p>
            </>
          )}

          {activeTab === 'legal' && (
            <>
              <h4 className="text-base font-bold text-white">Aviso Legal (LSSI-CE)</h4>
              <p>
                Conforme a la Ley 34/2002 de Servicios de la Sociedad de la Información:
              </p>
              <p>
                <strong>Titular:</strong> Servicio de Marketing Digital.
              </p>
              <p>
                <strong>Contacto Oficial:</strong> <span className="font-mono text-pool-300">hola@serviciodemarketingdigital.com</span>.
              </p>
              <p>
                Queda prohibida la copia o reproducción no autorizada del código, diseños o estrategias de conversión.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-900 bg-pool-400 hover:bg-pool-300 transition-colors cursor-pointer"
          >
            Entendido y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
