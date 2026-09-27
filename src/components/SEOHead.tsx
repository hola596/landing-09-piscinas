import React from 'react';
import { faqs } from '../data/faqs';

export default function SEOHead() {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Servicio de Marketing Digital',
    url: 'https://landing-09-piscinas.vercel.app',
    logo: 'https://landing-09-piscinas.vercel.app/LOGO.png',
    email: 'hola@serviciodemarketingdigital.com',
  };

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desarrollo de Landing Pages para Empresas de Construcción y Reforma de Piscinas de Obra',
    serviceType: 'Marketing y Landing Pages de Alta Conversión para Piscinas de Obra',
    description: 'Servicio especializado en diseño y desarrollo de landing pages individuales y ultrarrápidas enfocadas en obras de piscinas de €10.000 a €40.000 con precalificación de presupuestos.',
    provider: {
      '@type': 'Organization',
      name: 'Servicio de Marketing Digital',
      url: 'https://landing-09-piscinas.vercel.app',
      email: 'hola@serviciodemarketingdigital.com',
    },
    areaServed: 'ES',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landing Pages para Constructoras de Piscinas',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page Monoproducto para Piscinas de Obra',
            description: 'Embudo de conversión con filtro anti-curiosos para campañas de Google Ads y Meta Ads de piscinas de obra.',
          },
        },
      ],
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Demostración Landing Page de Alta Conversión para Piscinas de Obra',
    description: 'Cómo captar presupuestos de €10.000 a €40.000 mediante landing pages de producto estrella de alto rendimiento.',
    thumbnailUrl: 'https://img.youtube.com/vi/M5_QicGRh-s/maxresdefault.jpg',
    uploadDate: '2026-09-01T08:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/M5_QicGRh-s',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />
    </>
  );
}
