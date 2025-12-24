import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'TitanSaw Pro - Profesjonalna Piła Łańcuchowa | -50% Limitowana Oferta',
  description: 'TitanSaw Pro - ultra lekka piła łańcuchowa z baterią. Tnie pnie do 80cm jak masło. Waży tylko 1.2kg. Płatność przy odbiorze.',
};

export default function TitansawPlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Ads PageView Tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17806346250"
        strategy="afterInteractive"
      />
      <Script id="google-ads-pl" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17806346250');
        `}
      </Script>
      {children}
    </>
  );
}
