export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: '¿Por qué enfocarse en un solo producto estrella a la vez en vez de mostrar todo el catálogo?',
    answer:
      'Cuando un particular busca en Google "construcción de piscina de obra", no quiere ver reformas de baños, spas ni mantenimiento químico. Una página monoproducto mantiene el 100% de coherencia con la intención de búsqueda, aumentando la tasa de conversión hasta un 300% y eliminando la fricción de compra.',
  },
  {
    question: '¿Qué retorno de inversión (ROI) puedo esperar para obras de €10.000 a €40.000?',
    answer:
      'Dado el elevado ticket de una piscina de obra (€15.000 - €35.000 de media), con cerrar tan solo 1 o 2 contratos adicionales al mes se cubre ampliamente el coste del desarrollo y toda la pauta publicitaria, generando un ROI multiplicador superior al 800%.',
  },
  {
    question: '¿Cuánto tiempo se tarda en entregar la landing lista para recibir anuncios?',
    answer:
      'El plazo habitual de entrega técnica y puesta en producción es de 48 a 72 horas laborales, incluyendo la configuración de hosting ultrarrápido en Vercel, optimización de imágenes en WebP y pruebas de carga sub-segundo.',
  },
  {
    question: '¿Cómo se integra el embudo con nuestro CRM, Pixel y WhatsApp?',
    answer:
      'Conectamos el formulario calificador directamente a WhatsApp y podemos vincularlo vía Webhooks a herramientas como HubSpot, Pipedrive o Google Sheets, integrando además Meta Pixel y Google Tag Manager con seguimiento de eventos de conversión.',
  },
  {
    question: '¿Cómo funciona el filtro anti-curiosos para no saturar al equipo comercial?',
    answer:
      'El modal interactivo exige que el usuario detalle el tipo de obra, rango de presupuesto real y ubicación antes de poder solicitar contacto, asegurando que tu equipo solo invierta tiempo en visitas y presupuestos con alta probabilidad de cierre.',
  },
];
