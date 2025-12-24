import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'TitanSaw Pro - Profesionální Řetězová Pila | -50% Limitovaná Nabídka',
  description: 'TitanSaw Pro - ultra lehká akumulátorová řetězová pila. Řeže kmeny do 80cm jako máslo. Váží pouze 1.2kg. Platba na dobírku.',
};

export default function TitansawCzLayout({
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
      <Script id="google-ads-cz" strategy="afterInteractive">
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
