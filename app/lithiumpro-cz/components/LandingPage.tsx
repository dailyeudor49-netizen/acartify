'use client';

import React, { useEffect } from 'react';
import { Star, Check, ArrowDown, Shield, CheckCircle2, Truck, Zap, Battery, Package, ShoppingCart, Info, Award, Gift, Scissors, BadgeCheck, XCircle, Minus, X, CheckCheck, Wallet, RefreshCw, Flame, Hammer, AlertTriangle, Cpu, Camera } from 'lucide-react';
import { StickyFooter } from './StickyFooter';
import { OrderForm } from './OrderForm';
import { ImageCarousel } from './ImageCarousel';
import { ComparisonTable } from './ComparisonTable';
import { FAQ } from './FAQ';
import { REVIEWS, PRICE_PROMO, PRICE_OLD, DISCOUNT_PERCENT, PRODUCT_NAME, BENEFIT_LIST, VISUAL_PROOFS, PRESS_LOGOS, CAROUSEL_IMAGES, FAQS, WHATS_IN_BOX, PAIN_POINTS, KIT_IMAGE_URL, CURRENCY } from '../constants';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const LandingPage = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Google Ads PageView Tracking (for campaign analytics)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17806346250';
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer!.push(arguments); };
        window.gtag('js', new Date());
        // Only track page_view, no automatic remarketing/conversion triggers
        window.gtag('config', 'AW-17806346250', {
          'send_page_view': true,
          'conversion_linker': false
        });
      };
    }
  }, []);

  return (
    <div className="pb-24 md:pb-0 bg-white min-h-screen font-sans text-gray-900 overflow-x-hidden">

      {/* Network Click Pixel - tracks landing page views */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://offers.uncappednetwork.com/forms/api/ck/?o=3162&uid=0191b25c-22d2-7f55-9d9b-79b67cebbff3&lp=3196"
        style={{ width: '1px', height: '1px', display: 'none' }}
        alt=""
      />

      {/* HEADER */}
      <header className="bg-white py-4 sticky top-0 z-[60] shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="font-black text-2xl md:text-3xl uppercase tracking-tighter italic text-black leading-none">
            LITHIUM<span className="text-red-600">PRO</span>
          </div>
          <button
            onClick={scrollToOrder}
            className="bg-green-600 hover:bg-green-700 text-white font-black py-2 px-4 md:px-6 rounded-lg text-xs md:text-base uppercase tracking-wide shadow-lg transition-transform active:scale-95 animate-pulse flex items-center gap-2"
          >
            <Truck className="w-4 h-4 md:w-5 md:h-5" />
            <span>Platba při Doručení</span>
          </button>
        </div>
      </header>

      {/* URGENCY BAR */}
      <div className="bg-yellow-300 py-2 md:py-3 text-center px-4 border-b-2 border-yellow-400">
        <p className="text-red-900 font-black text-xs md:text-base uppercase tracking-wide flex items-center justify-center gap-2 animate-pulse-fast">
           ⚠️ STOP! Totální Výprodej - Posledních 14 Kusů
        </p>
      </div>

      {/* HERO SECTION */}
      <section className="bg-white pt-6 pb-12 md:pt-16">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* TITLES */}
          <div className="text-center mb-6 md:mb-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-[1.0] mb-4 uppercase tracking-tight">
              ŘEŽE VĚTVE DO 8CM <br className="hidden md:block" />
              <span className="bg-yellow-400 px-2 text-black transform -skew-x-6 inline-block mt-2 md:mt-0">JAKO MÁSLO.</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-bold text-gray-600 leading-tight max-w-2xl mx-auto mb-6">
              Konec s bolestí zad. Zastřihněte celou zahradu <span className="text-red-600 font-black underline decoration-2 underline-offset-4">bez námahy</span> a v polovičním čase.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:gap-12">

            {/* IMAGE COLUMN */}
            <div className="w-full md:w-1/2 mt-2 md:mt-0 relative mb-8 md:mb-0">
               {/* CAROUSEL WRAPPER - Acts as the sticky container */}
               <div className="relative mx-auto max-w-[500px] md:max-w-full md:sticky md:top-24">

                   {/* INNER CONTAINER WITH OVERFLOW HIDDEN FOR IMAGE RADIUS */}
                   <div className="rounded-t-3xl overflow-hidden shadow-2xl border-4 border-b-0 border-gray-100 relative bg-white">

                       {/* ELETTA N.1 BADGE - Top left */}
                       <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur border-2 border-green-600 rounded-full px-3 py-1 flex items-center gap-2 shadow-lg">
                          <div className="flex text-yellow-400">
                            <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                            <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                            <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                            <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                            <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                          </div>
                          <span className="text-[10px] md:text-xs font-black text-green-800 uppercase">Top 2025</span>
                       </div>

                       <ImageCarousel images={CAROUSEL_IMAGES} />
                   </div>

                   {/* KIT GRATIS BAR - Attached below carousel */}
                   <div className="bg-red-600 text-white rounded-b-2xl shadow-lg px-4 py-2 flex items-center justify-center gap-3 border-4 border-t-0 border-red-600">
                      <Gift className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
                      <span className="text-sm md:text-base font-black uppercase text-white">SADA PŘÍSLUŠENSTVÍ</span>
                      <span className="text-lg md:text-xl font-black uppercase text-yellow-300">ZDARMA</span>
                   </div>

               </div>
            </div>

            {/* COPY & OFFER COLUMN */}
            <div className="w-full md:w-1/2 text-center md:text-left">

              {/* BENEFITS LIST - FONT SIZE INCREASED */}
              <div className="text-left space-y-4 bg-gray-50 p-4 md:p-6 rounded-2xl border border-gray-200 mb-8 shadow-sm">
                {BENEFIT_LIST.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                     <div className="shrink-0 bg-white p-2 md:p-2 rounded-full shadow-sm border border-gray-100 text-green-600 mt-0.5">
                       {React.cloneElement(benefit.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 md:w-7 md:h-7" })}
                     </div>
                     <div>
                       <h3 className="font-black text-lg md:text-xl text-gray-900 uppercase leading-none mb-1">{benefit.title}</h3>
                       {/* Text-base ensures readability on mobile */}
                       <p className="text-base text-gray-700 font-medium leading-relaxed">{benefit.text}</p>
                     </div>
                  </div>
                ))}
              </div>

              {/* PRICE BLOCK - REDESIGNED FOR CONVERSION */}
              <div className="text-center relative bg-white p-1 rounded-2xl border-4 border-red-600 shadow-2xl">
                <div className="bg-red-600 text-white py-2 font-black uppercase tracking-widest text-sm md:text-base">
                  🔥 Bleskový Nabídka: {DISCOUNT_PERCENT} NYNÍ
                </div>

                <div className="p-6">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 mb-6">
                       <div className="flex flex-col items-center md:items-start">
                          <span className="text-gray-400 text-lg md:text-xl line-through font-bold">Cena {PRICE_OLD} {CURRENCY}</span>
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Ušetříte 1 799 Kč</span>
                       </div>
                       <span className="text-7xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none">{PRICE_PROMO}<span className="text-3xl">{CURRENCY}</span></span>
                    </div>

                    {/* BIG TRUST BANNER - ADDED GUARANTEES */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                        <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 flex flex-col items-center justify-center">
                            <Shield className="w-6 h-6 text-green-600 mb-1" />
                            <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 leading-tight">Záruka<br/>2 Roky</span>
                        </div>
                        <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 flex flex-col items-center justify-center">
                            <RefreshCw className="w-6 h-6 text-green-600 mb-1" />
                            <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 leading-tight">Spokojenost nebo<br/>Vrácení Peněz</span>
                        </div>
                    </div>

                    <div className="bg-green-50 border-2 border-green-500 border-dashed rounded-lg p-3 mb-6 flex items-center justify-center gap-3 animate-pulse">
                        <div className="bg-green-600 text-white p-1 rounded-full">
                            <Wallet className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <span className="block text-xs font-bold text-green-800 uppercase">Nulové Riziko</span>
                            <span className="block text-lg md:text-xl font-black text-green-700 uppercase leading-none">PLATÍTE PŘI DORUČENÍ</span>
                        </div>
                    </div>

                    {/* CTA BUTTON */}
                    <button
                      onClick={scrollToOrder}
                      className="w-full bg-gradient-to-b from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-2xl md:text-3xl font-black py-4 px-6 rounded-xl shadow-[0_4px_0_#14532d] active:shadow-none active:translate-y-[4px] transition-all uppercase tracking-tight flex flex-col items-center leading-none gap-1 group"
                    >
                      <span className="flex items-center gap-2 drop-shadow-md">CHCI OBJEDNAT <ArrowDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce" /></span>
                    </button>

                    <p className="mt-3 text-xs text-gray-400 font-bold uppercase tracking-wide">
                        *Rychlé Doručení 24/48h
                    </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PRESS LOGOS */}
      <section className="bg-gray-50 py-6 border-y border-gray-200">
         <div className="container mx-auto px-4 text-center max-w-6xl">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Viděno v</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-40 font-black text-gray-800 uppercase text-sm md:text-lg grayscale">
               {PRESS_LOGOS.map((logo, idx) => (
                  <span key={idx}>{logo}</span>
               ))}
            </div>
         </div>
      </section>

      {/* PROBLEM RESOLVING SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
           <h2 className="text-3xl md:text-5xl font-black text-center uppercase mb-10 leading-tight">
             KONEC S <span className="bg-red-600 text-white px-2">TRÁPENÍM</span> NA ZAHRADĚ
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* OLD WAY */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-100 relative opacity-75 hover:opacity-100 transition-opacity">
                 <div className="absolute -top-3 left-6 bg-gray-600 text-white font-black px-3 py-1 uppercase text-xs rounded shadow-lg">
                    Stará Metoda
                 </div>
                 <div className="flex items-center gap-4 mb-4">
                    <XCircle className="w-10 h-10 text-red-500" />
                    <h3 className="font-black text-xl uppercase text-red-900">Bolest a Únava</h3>
                 </div>
                 <ul className="space-y-3">
                    {PAIN_POINTS.oldWay.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-500 font-bold text-sm md:text-base">
                        <X className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                        {point.text}
                      </li>
                    ))}
                 </ul>
              </div>

              {/* NEW WAY */}
              <div className="bg-green-50 rounded-2xl p-6 md:p-8 border-4 border-green-500 relative shadow-xl transform md:scale-105">
                 <div className="absolute -top-4 left-6 bg-green-600 text-white font-black px-4 py-1 uppercase text-sm rounded shadow-lg flex items-center gap-2">
                    <Star className="w-3 h-3 fill-white" /> Volba Profesionálů
                 </div>
                 <div className="flex items-center gap-4 mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                    <h3 className="font-black text-xl uppercase text-green-900">Nulová Námaha</h3>
                 </div>
                 <ul className="space-y-3">
                    {PAIN_POINTS.newWay.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-900 font-black text-sm md:text-base">
                        <Check className="w-5 h-5 shrink-0 text-green-600 mt-0.5" />
                        {point.text}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* VISUAL DEMONSTRATION */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
         <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-none mb-3">
               OBROVSKÁ <span className="text-green-500">SÍLA</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                Technologie LithiumPro™ je navržena na celý život. Každý prvek je posílen pro intenzivní používání.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               {VISUAL_PROOFS.map((proof, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col group">
                     <div className="relative aspect-square w-full overflow-hidden">
                        <video
                          src={proof.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-green-600 text-white px-4 py-1 text-xs font-black uppercase tracking-wider">
                           {proof.label}
                        </div>
                     </div>
                     <div className="p-6 text-left flex-1">
                        <h4 className="text-xl font-black text-white mb-2 uppercase">{proof.title}</h4>
                        <div className="text-gray-300 text-base leading-relaxed font-medium">
                           {proof.desc}
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12">
               <button
                  onClick={scrollToOrder}
                  className="bg-green-600 hover:bg-green-700 text-white font-black py-4 px-10 rounded-full shadow-[0_0_20px_rgba(22,163,74,0.6)] text-xl uppercase tracking-wide inline-flex items-center gap-3 transition-transform hover:scale-105"
               >
                  <ShoppingCart className="w-6 h-6" />
                  OBJEDNEJTE - Platba při Doručení
               </button>
            </div>
         </div>
      </section>

      {/* NEW HYPER-PERSUASIVE PROSPECTUS SECTION - CLEAN & PROFESSIONAL STYLE */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
         <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-12">
               <div className="inline-block bg-green-100 text-green-800 font-bold text-xs uppercase px-3 py-1 rounded-full mb-4 border border-green-200">
                  PRECIZNÍ TECHNOLOGIE
               </div>
               <h2 className="text-3xl md:text-5xl font-black uppercase leading-[1.1] mb-6 text-gray-900">
                  NENÍ TO JEN NŮŽKY. <br/>
                  TO PRODLOUŽENÍ <span className="text-green-600 underline decoration-4 decoration-green-200 underline-offset-4">VAŠÍ RUKY.</span>
               </h2>
               <p className="text-lg md:text-xl font-medium text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Zapomeňte na únavu a bolest na konci dne. LithiumPro™ je navržen, aby pracoval tvrdě za vás.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Feature 1 */}
               <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-green-400 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                     <Zap className="w-32 h-32 text-green-600" />
                  </div>
                  <div className="bg-green-100 text-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors shadow-sm">
                     <Cpu className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3 text-gray-900">BRUSHLESS SÍLA</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                     Digitální motor 600W generuje obrovský krouticí moment. Žádná větev nemá šanci: <strong className="text-gray-900">drtí suché i zelené dřevo do 8cm</strong> jako máslo, nikdy nezpomaluje.
                  </p>
               </div>

               {/* Feature 2 */}
               <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-green-400 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                     <Shield className="w-32 h-32 text-green-600" />
                  </div>
                  <div className="bg-green-100 text-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors shadow-sm">
                     <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3 text-gray-900">NAPROSTÁ BEZPEČNOST</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                     Díky inteligentním senzorům pracujete v plném klidu. Aktivní ochranný systém <strong className="text-gray-900">zabraňuje náhodným řezům</strong>, což z něj činí nejbezpečnější nástroj, jaký jste kdy používali.
                  </p>
               </div>

               {/* Feature 3 */}
               <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-green-400 transition-all group relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                     <Award className="w-32 h-32 text-green-600" />
                  </div>
                  <div className="bg-green-100 text-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors shadow-sm">
                     <Scissors className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3 text-gray-900">CHIRURGICKÝ ŘEZ</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                     Čepele SK5 z uhlíkové oceli se nikdy neotupí. Řez je tak čistý a rychlý (0,3 sekundy), že <strong className="text-gray-900">rostlina se hojí okamžitě</strong>, což brání nemocem a škůdcům.
                  </p>
               </div>
            </div>

            <div className="mt-16 text-center">
               <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-lg border border-gray-100 max-w-3xl relative">
                  <div className="absolute -top-4 -left-4 text-green-200">
                     <AlertTriangle className="w-12 h-12 fill-current" />
                  </div>
                  <p className="text-xl md:text-2xl font-black uppercase text-gray-800 leading-tight italic relative z-10">
                     "Představte si změnu 4 hodin pekla na slunci na <span className="text-green-600 underline decoration-yellow-400 decoration-4">40 minut čistého potěšení</span>."
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* COMPARISON TABLE SECTION */}
      <section className="py-16 bg-white border-t border-gray-200">
         <div className="container mx-auto px-4 max-w-4xl">
             <div className="text-center mb-8">
                 <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 leading-none">
                   PROČ ZVOLIT <span className="text-red-600">LITHIUM PRO</span>?
                 </h2>
             </div>
             <ComparisonTable />
         </div>
      </section>

      {/* WHAT'S IN THE BOX */}
      <section className="py-12 md:py-20 bg-green-50 border-y border-green-200 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-green-200 rounded-full opacity-50 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-yellow-200 rounded-full opacity-50 blur-3xl"></div>

         <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-10">
               <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 leading-none mb-4">
                  CO DOSTANETE DOMŮ
               </h2>
               <div className="inline-flex items-center gap-2 bg-black text-yellow-400 px-6 py-2 rounded-full font-bold uppercase text-sm shadow-lg animate-bounce">
                  <Gift className="w-5 h-5" />
                  Hodnota Příslušenství: 400+ Kč (ZDARMA)
               </div>
            </div>

            <div className="bg-white border-4 border-green-500 rounded-3xl overflow-hidden shadow-2xl">
               <div className="bg-green-500 text-white text-center py-3 font-black text-lg uppercase tracking-wider">
                  KOMPLETNÍ PRÉMIOVÁ SADA
               </div>

               <div className="flex flex-col md:flex-row">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 bg-gray-100 relative group">
                        <img src={KIT_IMAGE_URL} alt="Kompletní Sada" className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-center bg-white/90 backdrop-blur text-green-800 px-4 py-2 font-black uppercase text-sm rounded shadow-lg">
                           Vše v ceně
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                      <ul className="space-y-4 mb-8">
                         {WHATS_IN_BOX.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-base md:text-lg font-bold text-gray-700 border-b border-gray-100 pb-3 last:border-0">
                               <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                  <CheckCircle2 className="w-5 h-5" />
                               </div>
                               {item}
                            </li>
                         ))}
                      </ul>

                      <div className="bg-gray-100 rounded-xl p-4 text-center border border-gray-200">
                         <p className="text-xs font-bold text-gray-500 uppercase mb-1">Platíte pouze při převzetí</p>
                         <div className="flex items-center justify-center gap-4">
                            <span className="text-2xl line-through text-gray-400 font-bold">{PRICE_OLD} {CURRENCY}</span>
                            <span className="text-5xl font-black text-red-600">{PRICE_PROMO} {CURRENCY}</span>
                         </div>
                      </div>
                    </div>
               </div>
            </div>
         </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-white">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
               <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900">Kdo Už Používá</h2>
               <div className="flex justify-center text-yellow-400 gap-1 mt-2">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
               </div>
               <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-2">Více než 2000 Spokojených Zákazníků</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {REVIEWS.map((review) => (
                  <div key={review.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm relative flex flex-col">
                     <div className="flex justify-between items-start mb-4">
                        <h4 className="font-black text-sm text-gray-900 uppercase flex items-center gap-2">
                            <span className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden"><img src={review.image} className="w-full h-full object-cover"/></span>
                            {review.name}
                        </h4>
                        <div className="flex text-yellow-400 text-xs">
                           <Star className="w-3 h-3 fill-current" />
                           <Star className="w-3 h-3 fill-current" />
                           <Star className="w-3 h-3 fill-current" />
                           <Star className="w-3 h-3 fill-current" />
                           <Star className="w-3 h-3 fill-current" />
                        </div>
                     </div>
                     <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4 flex-1">"{review.text}"</p>

                     {/* CUSTOMER PHOTO SECTION */}
                     {review.reviewImage && (
                        <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 relative group">
                            <img src={review.reviewImage} alt="Foto od zákazníka" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                                <Camera className="w-3 h-3" /> Foto Zákazníka
                            </div>
                        </div>
                     )}

                     <div className="flex items-center gap-1 text-green-700 text-[10px] font-black uppercase opacity-70">
                        <BadgeCheck className="w-3 h-3" /> Ověřený Nákup
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* FINAL CTA & FORM AREA */}
      <section className="py-0 bg-white">
        <div className="bg-red-600 py-10 px-4 text-center clip-path-slant">
             <div className="bg-yellow-400 text-black text-xs font-black px-4 py-1 inline-block uppercase tracking-widest mb-4 rounded transform -rotate-2 shadow-lg">
               SLEVA {DISCOUNT_PERCENT} AKTIVNÍ NYNÍ
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-none mb-3">
               OBJEDNEJTE NYNÍ
             </h2>
             <p className="text-white/90 text-lg font-bold uppercase tracking-widest">Platba při Doručení</p>
        </div>

        <div className="container mx-auto px-4 max-w-xl -mt-8">

           {/* JAK OBJEDNAT - 4 KROKY */}
           <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mb-6 border border-gray-200">
              <h3 className="text-lg md:text-xl font-black text-gray-900 uppercase text-center mb-4">Jak Objednat ve 4 Krocích</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 <div className="text-center">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-2">1</div>
                    <p className="text-xs font-bold text-gray-800">Vyplňte formulář</p>
                    <p className="text-[10px] text-gray-500">Zadejte své údaje níže</p>
                 </div>
                 <div className="text-center">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-2">2</div>
                    <p className="text-xs font-bold text-gray-800">Zavoláme vám</p>
                    <p className="text-[10px] text-gray-500">Potvrdíme údaje</p>
                 </div>
                 <div className="text-center">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-2">3</div>
                    <p className="text-xs font-bold text-gray-800">Rychlé Doručení</p>
                    <p className="text-[10px] text-gray-500">Dorazí za 24/48 hodin</p>
                 </div>
                 <div className="text-center">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-2">4</div>
                    <p className="text-xs font-bold text-gray-800">Platba při doručení</p>
                    <p className="text-[10px] text-gray-500">Zaplatíte hotově kurýrovi</p>
                 </div>
              </div>
           </div>

           <OrderForm />

           <div className="text-center py-10 text-gray-400 text-xs">
              <p className="mb-2 flex items-center justify-center gap-2 font-bold"><Shield className="w-4 h-4"/> 2 ROKY ZÁRUKY V BALENÍ</p>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
         <div className="container mx-auto px-4 max-w-2xl">
            <h3 className="text-2xl font-black text-gray-900 uppercase text-center mb-8">Často Kladené Otázky</h3>
            <FAQ items={FAQS} />
         </div>
      </section>

      {/* STICKY CTA FOR MOBILE */}
      <StickyFooter onScrollToOrder={scrollToOrder} />
    </div>
  );
}

export default LandingPage;
