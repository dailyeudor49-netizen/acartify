import React from 'react';
import Script from 'next/script';

export default function LithiumproSkLayout({
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
      <Script id="google-ads-sk" strategy="afterInteractive">
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
