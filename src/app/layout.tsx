import type { Metadata, Viewport } from 'next';
import './globals.css';
import SEOHead from '../components/SEOHead';

export const metadata: Metadata = {
  title: 'Landing Pages para Construcción de Piscinas de Obra | Servicio de Marketing Digital',
  description: 'Convierte el tráfico de tus anuncios en presupuestos de €10.000 a €40.000 para piscinas de obra. Páginas de aterrizaje individuales, ultrarrápidas y sin fricción de compra.',
  keywords: [
    'landing page piscinas de obra',
    'marketing empresas de piscinas',
    'captacion presupuestos piscinas',
    'Google Ads piscinas de obra',
    'modelo piscinazos',
    'CRO construccion de piscinas',
  ],
  authors: [{ name: 'Servicio de Marketing Digital', url: 'https://serviciodemarketingdigital.com' }],
  metadataBase: new URL('https://landing-09-piscinas.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Landing Pages de Alta Conversión para Piscinas de Obra (€10k-€40k)',
    description: 'Más presupuestos reales y menos pérdida publicitaria con embudos de producto estrella.',
    url: 'https://landing-09-piscinas.vercel.app',
    siteName: 'Servicio de Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Logotipo Oficial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Pages para Constructoras de Piscinas',
    description: 'Captura la demanda estacional de alta intención con filtrado previo de presupuestos.',
    images: ['/LOGO.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0b1120',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <SEOHead />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen selection:bg-pool-500 selection:text-slate-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
