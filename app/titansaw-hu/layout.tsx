import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'TitanSaw Pro - Professzionális Láncfűrész | -50% Korlátozott Ajánlat',
  description: 'TitanSaw Pro - ultra könnyű akkumulátoros láncfűrész. 80cm-es törzseket vág könnyedén. Csak 1.2kg. Utánvétes fizetés.',
};

export default function TitansawHuLayout({
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
      <Script id="google-ads-hu" strategy="afterInteractive">
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
