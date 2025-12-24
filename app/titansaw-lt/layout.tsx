import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'TitanSaw Pro - Profesionalus Grandininis Pjūklas | -50% Ribota Pasiūlymas',
  description: 'TitanSaw Pro - ypač lengvas grandininis pjūklas su baterija. Pjauna kamienu iki 80cm. Sveria tik 1.2kg. Mokėjimas pristatymo metu.',
};

export default function TitansawLtLayout({
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
      <Script id="google-ads-lt" strategy="afterInteractive">
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
