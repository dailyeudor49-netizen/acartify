'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, Gift, Zap, Feather, ShieldCheck,
  RefreshCw, BatteryCharging, Gauge, Check, X, Minus, Plus,
  Star, Truck, Lock, Award, Banknote, Clock, FileText, PhoneCall,
  Calendar, Flame, PlayCircle, HelpCircle, ChevronDown, ChevronUp,
  XCircle, CheckCircle, AlertOctagon
} from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/* =========================================================================
   1. HERO SECTION
   ========================================================================= */
const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/titansaw-img/1.webp',
    '/images/titansaw-img/2.webp',
    '/images/titansaw-img/3.webp',
    '/images/titansaw-img/4.webp',
    '/images/titansaw-img/5.webp',
    '/images/titansaw-img/6.webp',
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="pt-6 pb-2 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-2 uppercase">
          VÁGJ <span className="text-white bg-[#dc3545] px-2 rounded">80CM-ES</span> FATÖRZSEKET VAJKÉNT.
        </h1>
        <h2 className="text-lg md:text-2xl font-bold text-[#0056b3] mb-6 leading-tight">
          Egy benzines láncfűrész ereje,<br/>
          <span className="text-slate-600 font-medium text-base md:text-xl">de pehelykönnyű (1.2kg).</span>
        </h2>
        <div className="max-w-lg mx-auto shadow-2xl rounded-2xl overflow-hidden mb-6 border-4 border-[#dc3545]">
            <div className="bg-[#dc3545] text-white py-3 px-2 flex flex-col items-center justify-center gap-1 animate-pulse leading-none border-b-2 border-red-800">
                <div className="flex items-center gap-2 mb-1">
                   <Gift className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                   <span className="font-black uppercase text-base md:text-xl tracking-tight text-yellow-300">KORLÁTOZOTT AJÁNLAT:</span>
                </div>
                <span className="font-bold uppercase text-xs md:text-sm tracking-wide text-center">
                  TARTALMAZZA: 2 TITÁN LÁNC + PÁNCÉLOZOTT VÁGÓLAP + 2 AKKUMULÁTOR + TÁSKA + TÖLTŐ
                </span>
            </div>
            <div className="relative bg-white group cursor-pointer">
                <div className="absolute top-4 left-4 z-10 bg-white/90 border-2 border-green-600 rounded px-3 py-1 shadow-lg">
                  <span className="text-xs font-black text-green-700 uppercase">2 Év Magyarországi Garancia</span>
                </div>
                <img
                  src={images[currentImage]}
                  alt="TitanSaw Pro X"
                  className="w-full h-auto object-cover aspect-square"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-xl text-slate-900 border border-slate-200 z-30 transition-all"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-xl text-slate-900 border border-slate-200 z-30 transition-all"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${idx === currentImage ? 'bg-[#dc3545] scale-110' : 'bg-white/70 border border-slate-300'}`}
                    />
                  ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   2. BENEFITS LIST
   ========================================================================= */
const BenefitsList: React.FC = () => {
  return (
    <section className="bg-white px-4 py-8 border-b border-slate-100">
      <div className="container mx-auto max-w-lg space-y-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <Zap className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              80CM-ES TÖRZSEKET VÁG
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Köszönhetően a <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">SEBÉSZETI TITÁN</span> láncnak.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <RefreshCw className="w-8 h-8 md:w-10 md:h-10" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              ÖNÉLEZŐ VÁGÓLAP
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Minél többet vágasz, annál élesebb lesz. <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">NULLA KARBANTARTÁS</span>.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <Gauge className="w-8 h-8 md:w-10 md:h-10" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              52cc BENZINES ERŐVEL FEL ÉR
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              A mágneses motor <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">4.000 FORDULAT/PERC</span> teljesítményt ad le.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <BatteryCharging className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              8 ÓRA ÜZEMIDŐ (2 AKKUMULÁTOR)
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Köszönhetően az új <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">LÍTIUM-KOBALT (EV)</span> celláknak.
            </p>
          </div>
        </div>

         <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              LEHETETLEN MEGSÉRÜLNI
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              A <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">SAFELOCK™ BIOMETRIKUS</span> chip-nek köszönhetően.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
           <div className="shrink-0 mt-1">
             <div className="bg-green-100 text-green-700 p-2 rounded-lg border border-green-200 shadow-sm">
                <Feather className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
             </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-slate-900 uppercase leading-none">
              PEHELYKÖNNYŰ (1.2 KG)
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Egy kézzel használod. <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">NULLA FÁRADTSÁG</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   3. OFFER SECTION (UPDATED)
   ========================================================================= */
interface OfferSectionProps {
  onCtaClick: () => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  const today = new Date().toLocaleDateString('hu-HU', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section className="bg-white py-10 px-4 text-center border-t border-slate-200">
      <div className="container mx-auto max-w-xl">
        <div className="mb-6 space-y-2">
           <div className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase animate-pulse">
              <Calendar className="w-3 h-3" /> Mai Akció: {today}
           </div>
        </div>

        <div className="space-y-4 mb-6">
           <div className="relative bg-slate-100 border border-slate-300 rounded-xl p-4 opacity-70 grayscale select-none">
              <div className="absolute inset-0 bg-slate-200/50 z-10 flex items-center justify-center rounded-xl">
                 <span className="bg-slate-600 text-white font-black text-xl px-4 py-2 uppercase -rotate-3 border-4 border-white shadow-xl">
                   ❌ ELFOGYOTT
                 </span>
              </div>
              <div className="flex justify-between items-center">
                 <div className="text-left">
                    <span className="font-bold text-slate-500 block">Csak Láncfűrész</span>
                    <span className="text-xs text-slate-400">Extra tartozékok nélkül</span>
                 </div>
                 <div className="font-bold text-slate-500 text-xl">19 990 Ft</div>
              </div>
           </div>

           <div className="relative bg-[#f8f9fa] rounded-2xl border-4 border-[#28a745] p-6 shadow-2xl overflow-hidden transform scale-105 z-20">
              <div className="absolute top-0 right-0 bg-[#dc3545] text-white text-xs font-black px-4 py-1.5 rounded-bl-xl shadow-sm z-10">
                -50% KEDVEZMÉNY
              </div>

              <div className="text-left mb-2">
                 <span className="bg-[#28a745] text-white text-xs font-black px-2 py-0.5 rounded uppercase">Ajánlott</span>
                 <h3 className="font-black text-2xl text-slate-900 uppercase leading-none mt-2">TITANSAW PRO X <br/><span className="text-[#dc3545] text-lg">(TITÁN CSOMAG)</span></h3>

                 <div className="mt-4 bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <ul className="text-left space-y-1.5">
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 2x Lítium Akkumulátor 24V
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 2x Titán Lánc
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 1x Páncélozott Vágólap + Táska
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> Gyorstöltő Mellékelve
                      </li>
                    </ul>
                 </div>
              </div>

              <div className="flex justify-center items-end gap-3 mb-1 mt-4 border-t border-dashed border-slate-300 pt-4">
                  <span className="text-slate-400 text-2xl font-bold line-through decoration-red-500 decoration-2">55 999 Ft</span>
                  <span className="text-6xl font-black text-[#dc3545] tracking-tighter leading-none">27 999 Ft</span>
              </div>

              <p className="text-sm font-bold text-green-700 uppercase tracking-widest mb-4 bg-green-50 inline-block px-3 py-1 rounded-full border border-green-100">
                 Utánvéttel Fizethető
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                 <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center gap-1 shadow-sm">
                    <Truck className="w-4 h-4 text-[#28a745]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase">Szállítás 24/48h</span>
                 </div>
                 <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center gap-1 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-[#28a745]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase">2 Év Garancia</span>
                 </div>
              </div>

              <button
                onClick={onCtaClick}
                className="w-full bg-[#28a745] hover:bg-[#218838] text-white text-2xl md:text-3xl font-black py-4 rounded-xl shadow-[0_5px_0_#1e7e34] active:shadow-none active:translate-y-1 transition-all uppercase flex items-center justify-center gap-2 animate-pulse-fast ring-4 ring-green-100"
              >
                RENDELEM MOST
              </button>
           </div>
        </div>

        <div className="mb-6 bg-white p-3 rounded-lg border border-red-100 shadow-inner">
          <div className="flex justify-between text-xs font-bold uppercase mb-1">
            <span className="text-slate-500">Raktári Készlet:</span>
            <span className="text-red-600 flex items-center gap-1"><Flame className="w-3 h-3 fill-red-600" /> Hamarosan Elfogy</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full w-[85%] animate-pulse"></div>
          </div>
          <p className="text-[10px] text-left mt-1 text-slate-400">Több mint 140 ember nézi most ezt az ajánlatot.</p>
        </div>

        <p className="text-xs text-center mt-3 text-slate-500 font-medium">
          <ShieldCheck className="w-3 h-3 inline mr-1" />
          Kockázatmentes próba: 30 napos elégedettségi garancia vagy pénzvisszafizetés.
        </p>

      </div>
    </section>
  );
};

/* =========================================================================
   4. VISUAL FEATURES
   ========================================================================= */
const VisualFeatures: React.FC = () => {
  return (
    <section className="bg-slate-900 py-12 px-4 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-none mb-4 text-white">
            TECHNOLÓGIA, AMI <br/><span className="text-yellow-400">MEGVÁLTOZTATJA AZ ÉLETED</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Megoldottuk a régi benzines láncfűrészek összes problémáját. Ezért jobb a TitanSaw Pro X.
          </p>
        </div>

        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-red-600 text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    KIVÁG FÁKAT 15 MÁSODPERC ALATT
                  </span>
               </div>
               <video src="/images/titansaw-img/velocita-4000rpm.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-yellow-400 uppercase mb-2">
                4.000 RPM SEBESSÉG = TISZTA ERŐ
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Nézd meg, milyen könnyen kivágja ezt a fát. A titok a sebesség: a motor <strong className="text-white">percenként 4.000 fordulatot</strong> generál, ami megállíthatatlan vágóerővé alakul.
                <br/><br/>
                A <strong className="text-white">SEBÉSZETI TITÁN</strong> ultraéles láncnak köszönhetően a vágólap erőfeszítés nélkül hatol a fába. <span className="text-white font-bold bg-red-600/20 px-1">Bármit elvág, ami útjába kerül</span> (tölgy, olajfa, bükk), mintha forró kés vágna a vajba.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-[#28a745] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    PEHELYKÖNNYŰ: 1.2 KG
                  </span>
               </div>
               <video src="/images/titansaw-img/ti-basta-una-mano.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-green-400 uppercase mb-2">
                EGY KÉZ ELÉG HOZZÁ
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Felejtsd el a hátfájást és a remegő karokat 5 perc után. <strong>1.2 kg</strong> súlyával olyan, mint egy csavarhúzót használni. Egy kézzel fogod, míg a másikkal az ágakat rendezed. <span className="text-white font-bold">Ideális 60 év felett is.</span>
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-[#0056b3] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    BIOMETRIKUS ZÁRÁS 0.01mp
                  </span>
               </div>
               <video src="/images/titansaw-img/safelock-biometrico.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-blue-400 uppercase mb-2">
                "SAFELOCK™" BIOMETRIKUS
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                A feleséged fél, hogy megsérülsz? Ne aggódj. Az intelligens chip felismeri a biztonságos fogást. <strong className="text-white">Lehetetlen, hogy véletlenül elindul</strong> (még akkor sem, ha leesik vagy az unokák megérintik). Ha elengeded az ujjad, a motorfék <strong>0.01 másodperc</strong> alatt megállítja a vágólapot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   5. COMPARISON
   ========================================================================= */
const Comparison: React.FC = () => {
  return (
    <section className="bg-white py-8 px-4 border-b border-slate-100">
      <div className="container mx-auto max-w-3xl">
        <h3 className="text-2xl font-black text-center mb-6 uppercase leading-tight">
          RÉGI LÁNCFŰRÉSZ VS <br/><span className="text-[#dc3545]">TITANSAW PRO</span>
        </h3>
        <div className="overflow-hidden rounded-xl border-2 border-slate-200 shadow-xl">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th className="bg-slate-50 p-2 w-[30%] border-b border-slate-200"></th>
                <th className="bg-slate-100 p-2 w-[35%] text-slate-500 font-bold border-b border-slate-200 text-xs md:text-sm uppercase leading-tight align-bottom pb-4">
                  Benzines<br/>Láncfűrész (52cc)
                </th>
                <th className="bg-[#28a745] p-2 w-[35%] text-white font-black border-b border-green-600 text-sm md:text-lg uppercase align-bottom pb-4 relative">
                  <div className="w-full flex justify-center mb-1">
                     <span className="bg-yellow-400 text-black text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
                       EVOLÚCIÓ
                     </span>
                  </div>
                  TitanSaw Pro
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Motor</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Benzin/Keverék<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Büdös)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  Lítium-Kobalt EV<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(52cc Erő)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Indítás</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Berántós<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Fárasztó)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  SafeLock™ Bio<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(100% Biztonságos)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Súly</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  7 kg<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Háttörő)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  1.2 kg<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Pehelykönnyű)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Karbantartás</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Gyertyák, Élezés<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Drága)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  SEMMI<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Önélező)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Zaj</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Pokoli<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Fültok Kell)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  CSENDES<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Társasházban is)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 text-xs md:text-base bg-yellow-50">Vágás</td>
                <td className="p-3 text-center text-slate-500 bg-slate-50 bg-yellow-50">
                  Lassú<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Beragad)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] bg-green-50 bg-yellow-50 border-2 border-[#28a745] relative">
                  LÉZER<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Titán)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   6. QUALIFYING SECTION
   ========================================================================= */
const QualifyingSection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-center mb-8 uppercase text-slate-900">
            SZÓVAL... NEKED VALÓ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-black text-xl text-red-800 uppercase leading-none">NE VEDD MEG, HA...</h3>
                </div>
                <ul className="space-y-3 text-red-900 font-medium">
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Professzionális favágó vagy, aki egész erdőket vág ki napi 8 órában.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Nehéz és zajos eszközt keresel, hogy "érezd" a fáradtságot.
                </li>
                </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="font-black text-xl text-green-800 uppercase leading-none">VEDD MEG AZONNAL, HA...</h3>
                </div>
                <ul className="space-y-3 text-green-900 font-medium">
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Van kerted, olajfásod vagy kandallód és önálló szeretnél lenni.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Feleannyi idő alatt végezni szeretnél és élvezni a nap hátralévő részét.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Biztonságos eszközt szeretnél, ami nem töri le a hátadat.
                </li>
                </ul>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   7. BUNDLE
   ========================================================================= */
const Bundle: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase mb-2">
            MI VAN A DOBOZBAN?
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#dc3545] font-black text-lg md:text-xl uppercase bg-red-50 inline-block px-4 py-2 rounded-lg border border-red-100">
            <Gift className="w-6 h-6" />
            MEGA "MINDEN BENNE VAN" CSOMAG (29 990 Ft ÉRTÉK INGYEN)
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#28a745] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-slate-100 relative p-6 flex items-center justify-center">
             <span className="absolute top-4 left-4 bg-[#28a745] text-white text-xs font-bold px-3 py-1 uppercase rounded shadow-md z-10">
               TELJES CSOMAG
             </span>
             <img src="/images/titansaw-img/1.webp" alt="Teljes Csomag" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white">
            <h3 className="font-bold text-lg text-slate-500 mb-4 uppercase tracking-wide">Ezt kapod meg otthonodba:</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x TitanSaw Láncfűrész</span>
                  <p className="text-xs text-slate-500">Legújabb generációs géptest</p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">2x Lítium Akkumulátor 24V</span>
                  <span className="ml-2 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">8 ÓRA ÜZEMIDŐ</span>
                  <p className="text-xs text-slate-500">Dupla üzemidő végtelen</p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">2x Titán Lánc</span>
                  <p className="text-xs text-slate-500">Ultraéles. Soha nem veszíti élét.</p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x "Páncélozott" Vezetősín</span>
                  <p className="text-xs text-slate-500">Edzett acél csavarásmentesítő. <strong className="text-slate-700">Soha nem törik el.</strong></p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Kemény Táska</span>
                  <p className="text-xs text-slate-500">Ütésálló biztonságos szállításhoz</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Akkumulátortöltő</span>
                  <p className="text-xs text-slate-500">Gyors töltés</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   8. REVIEWS
   ========================================================================= */
const Reviews: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-2 text-slate-900 uppercase">
          MIT MONDANAK AZ ÜGYFELEK?
        </h2>
        <div className="flex justify-center items-center gap-2 mb-8">
           <div className="flex text-yellow-400">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-slate-600">4.9/5 (Ellenőrzött Vélemények)</span>
        </div>

        {/* Featured Review Image */}
        <div className="mb-8">
          <img
            src="/images/titansaw-img/recensione-3.webp"
            alt="Ellenőrzött ügyfél vélemények"
            className="w-full rounded-xl shadow-lg border border-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">L</div>
                 <div>
                   <h4 className="font-bold text-slate-900">László K.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Ellenőrzött Vásárlás</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">2 napja</span>
            </div>
            <p className="text-slate-700 italic mb-4">
              "Nem hittem el, amíg ki nem próbáltam. 2 órán át vágtam tűzifát anélkül, hogy elfáradtam volna. Az erő hihetetlen ilyen kis eszköznél."
            </p>
            <img
              src="/images/titansaw-img/recensione-1.webp"
              alt="Ügyfél vélemény fotó"
              className="w-full h-40 object-cover rounded-lg border border-slate-200"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">J</div>
                 <div>
                   <h4 className="font-bold text-slate-900">József B.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Ellenőrzött Vásárlás</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">Tegnap</span>
            </div>
            <p className="text-slate-700 italic mb-4">
              "Pontosan 24 órán belül megérkezett. Utánvéttel fizettem, ami nagyon kényelmes. Az olajfáim metszéséhez használom, csodálatosan működik. Ajánlott."
            </p>
            <img
              src="/images/titansaw-img/recensione-2.webp"
              alt="Ügyfél vélemény fotó"
              className="w-full h-40 object-cover rounded-lg border border-slate-200"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">I</div>
                 <div>
                   <h4 className="font-bold text-slate-900">István N.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Ellenőrzött Vásárlás</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">3 napja</span>
            </div>
            <p className="text-slate-700 italic">
              "65 éves vagyok és a benzines láncfűrészt már nem tudtam beindítani a vállam miatt. Ennél elég egy gombot megnyomni. Visszaadta a függetlenségemet a kertben. Köszönöm."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">A</div>
                 <div>
                   <h4 className="font-bold text-slate-900">András T.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Ellenőrzött Vásárlás</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">5 napja</span>
            </div>
            <p className="text-slate-700 italic">
              "A csomag mindennel komplett. Az akkumulátorok tényleg sokáig bírják. Raklapok vágására használtam és egy hibát sem ejtett. Villámgyors szállítás."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   9. HOW TO ORDER (UPDATED)
   ========================================================================= */
const HowToOrder: React.FC = () => {
  return (
    <section className="bg-slate-50 py-8 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-xl md:text-3xl font-black text-center mb-6 uppercase text-slate-900 leading-tight">
          HOGYAN RENDELJ <span className="text-[#28a745]">4 LÉPÉSBEN</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">1</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Töltsd ki az űrlapot</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Add meg az adataidat lent.</p>
             </div>
          </div>
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">2</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Visszahívunk</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Megerősítjük a rendelést telefonon.</p>
             </div>
          </div>
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">3</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <Truck className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Gyors Szállítás</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">24/48 órán belül házhoz érkezik.</p>
             </div>
          </div>
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">4</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <Banknote className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Utánvét fizetés</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Készpénzzel fizetsz a futárnak.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   10. ORDER FORM (UPDATED)
   ========================================================================= */
const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Load fingerprint script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://offers.uncappednetwork.com/forms/tmfp/';
    script.crossOrigin = 'anonymous';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Kérjük, töltse ki az összes kötelező mezőt");
      return;
    }
    setIsSubmitting(true);

    // Save data to sessionStorage for conversion tracking
    sessionStorage.setItem('ec_name', formData.name);
    sessionStorage.setItem('ec_phone', formData.phone);
    sessionStorage.setItem('ec_address', formData.address);
    sessionStorage.setItem('ec_value', '27999');

    try {
      // Get fingerprint from hidden input (populated by network script)
      const tmfpInput = document.querySelector('input[name="tmfp"]') as HTMLInputElement;
      const fingerprint = tmfpInput?.value || '';

      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams: Record<string, string> = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'subid', 'subid2', 'subid3', 'subid4', 'pubid'].forEach(param => {
        const value = urlParams.get(param);
        if (value) utmParams[param] = value;
      });

      // Send to our API proxy (avoids CORS issues)
      const response = await fetch('/api/network-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: 'titansaw',
          country: 'hu',
          name: formData.name,
          tel: formData.phone,
          address: formData.address,
          tmfp: fingerprint,
          ua: navigator.userAgent,
          utmParams,
        }),
      });

      const result = await response.json();
      console.log('Network API response:', result);

      // If DOUBLE, set flag to skip Google Ads conversion
      if (result.message === 'DOUBLE') {
        sessionStorage.setItem('skipConversion', 'true');
      }

    } catch (error) {
      console.error('Network API error:', error);
    }

    // Redirect to thank you page by country
    window.location.href = '/ty-hu';
  };

  if (isSuccess) {
    return (
      <section className="bg-green-600 py-12 text-white text-center rounded-xl mx-4 my-8 shadow-2xl">
        <div className="bg-white text-slate-900 rounded-2xl p-8 mx-auto max-w-sm shadow-inner">
          <Check className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-black mb-2 text-green-700 uppercase">KÖSZÖNJÜK!</h2>
          <p className="font-bold mb-4">A rendelésed megerősítve.</p>
          <p className="text-sm text-slate-600">Munkatársunk hamarosan felveszi veled a kapcsolatot.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-8 px-4 border-t border-slate-200">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-black uppercase text-slate-900">
            TÖLTSD KI AZ ŰRLAPOT
          </h3>
          <p className="text-sm text-slate-500">Csak a kézbesítéskor fizetsz. Gyors Szállítás 24/48h.</p>
        </div>

        <div className="bg-[#f8f9fa] rounded-xl border-2 border-slate-200 p-4 md:p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-slate-200 px-2 py-1 rounded-bl text-[10px] font-bold text-slate-500 flex items-center gap-1">
             <Lock className="w-3 h-3" /> SSL BIZTONSÁGOS
          </div>

          <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center gap-3">
              <img src="/images/titansaw-img/1.webp" className="w-12 h-12 rounded object-cover border border-slate-300" alt="Termék" />
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">TitanSaw Pro X (Titán Csomag)</p>
                <p className="text-[10px] text-[#dc3545] font-bold">-50% Kedvezmény Alkalmazva</p>
              </div>
            </div>
            <div className="text-xl font-black text-[#28a745]">27 999 Ft</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Hidden input for fingerprint */}
            <input type="hidden" name="tmfp" />

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Név *</label>
              <input
                type="text" name="name" required placeholder="Pl: Kiss János"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.name} onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Telefonszám *</label>
              <input
                type="tel" name="phone" required placeholder="Pl: +36 30 123 4567"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.phone} onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Teljes Cím *</label>
              <textarea
                name="address" required rows={2}
                placeholder="Utca, Házszám, Irányítószám, Város"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400 resize-none"
                value={formData.address} onChange={handleChange}
              />
              <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Az adataid védettek és csak szállításra használjuk.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-3 flex items-center justify-between mt-2 cursor-pointer">
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 bg-[#28a745] rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                 </div>
                 <span className="text-sm font-bold text-slate-900">Utánvétes Fizetés</span>
              </div>
              <Banknote className="w-5 h-5 text-green-700" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[#28a745] hover:bg-[#218838] text-white text-xl md:text-2xl font-black py-4 rounded-xl shadow-[0_4px_0_#1e7e34] uppercase tracking-wide transition-all active:scale-95 disabled:opacity-70 flex justify-center items-center gap-2 active:shadow-none active:translate-y-1"
            >
              {isSubmitting ? 'FELDOLGOZÁS...' : 'RENDELÉS VÉGLEGESÍTÉSE'} <Truck className="w-6 h-6" />
            </button>

          </form>

          <div className="mt-3 pt-2 border-t border-slate-200 text-center">
             <p className="text-[10px] text-slate-500 font-medium">
                🛡️ <strong>30 Napos Elégedettségi Garancia vagy Pénzvisszafizetés</strong> mellékelve.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   11. FAQ
   ========================================================================= */
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      >
        <span className="font-bold text-slate-900 text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 leading-relaxed text-sm md:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <HelpCircle className="w-10 h-10 text-[#0056b3] mx-auto mb-2" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">
            KÉRDÉSEK VAGY KÉTSÉGEK?
          </h2>
          <p className="text-slate-500">Itt vannak a válaszok ügyfeleink leggyakoribb kérdéseire.</p>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm">
          <FAQItem
            question="Mennyi ideig tartanak az akkumulátorok?"
            answer="A mellékelt akkumulátorok nagy kapacitásúak. Minden akkumulátor akár 8 ÓRA munkaidőt garantál. Mivel két akkumulátor van a csomagban, egész napokon át dolgozhatsz megállás nélkül."
          />
          <FAQItem
            question="Hol találom az alkatrészeket és a vágólapokat?"
            answer="Figyelem: ez nem egy szupermarketből való kereskedelmi láncfűrész. Speciális TITÁN láncot használ, amelyet úgy terveztek, hogy évekig tartson anélkül, hogy elveszítené az élét. A Vezetősín pedig Edzett 'Páncélozott' Acélból készült: lehetetlen eltörni vagy meghajlítani. Ha mégis szükséged lenne alkatrészekre (vagy tartalékra), már a csomagban kapsz egy második láncot. Jövőbeli vásárlásokhoz mindent megtalálsz a weboldalunkon."
          />
          <FAQItem
            question="Tényleg olyan erős, mint mondják?"
            answer="Igen, egy igazi erőmonstrum. A kefe nélküli motornak és a Titán láncnak köszönhetően akár 80cm átmérőjű törzseket is levág minden erőfeszítés nélkül. Soha nem akad el, még a legkeményebb és legszárazabb fánál sem."
          />
          <FAQItem
            question="Tényleg fizethetek kézbesítéskor?"
            answer="Természetesen! Tudjuk, hogy online nehéz megbízni. Ezért kínáljuk a készpénzes fizetést közvetlenül a futárnak, amikor kézbesíti a csomagot. Semmi kockázat számodra."
          />
          <FAQItem
            question="Ha nem tetszik, visszaküldhetem?"
            answer="30 napos 'Elégedettség vagy Pénzvisszafizetés' garanciád van. Ha a termék nem tetszik, visszaküldheted és visszaadjuk a pénzed. Kérdések nélkül."
          />
        </div>
      </div>
    </section>
  );
};

/* =========================================================================
   12. STICKY BAR
   ========================================================================= */
interface StickyBarProps {
  onCtaClick: () => void;
}

const StickyBar: React.FC<StickyBarProps> = ({ onCtaClick }) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.15)] p-2 z-50 md:hidden pb-safe">
      <div className="flex items-center gap-2">
        <div className="flex-1 pl-1">
          <div className="text-[10px] text-red-600 font-black uppercase flex items-center mb-0.5 animate-pulse">
            <Clock className="w-3 h-3 mr-1" /> LEJÁR: {formatTime(timeLeft)}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#dc3545]">27 999 Ft</span>
            <span className="text-xs text-slate-400 line-through">55 999 Ft</span>
          </div>
        </div>
        <button
          onClick={onCtaClick}
          className="flex-1 bg-[#27ae60] text-white font-black text-lg py-3 px-2 rounded shadow-lg animate-pulse-fast uppercase leading-none"
        >
          RENDELEM MOST
          <span className="block text-[10px] font-medium opacity-80 mt-1">UTÁNVÉTTEL FIZETHETŐ</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   MAIN PAGE COMPONENT
   ========================================================================= */
export default function LandingPage() {
  const scrollToOrder = () => {
    const element = document.getElementById('order-form-section');
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
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-24 md:pb-0">
      {/* Header */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 flex flex-col md:flex-row md:gap-2 leading-none">
            <span>TITANSAW</span> <span className="text-[#dc3545]">PRO X</span>
          </h1>
          <button
            onClick={scrollToOrder}
            className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-2 px-6 rounded-full uppercase text-sm md:text-base tracking-wide shadow-md transition-transform active:scale-95"
          >
            RENDELEM MOST
          </button>
        </div>
      </header>

      {/* Urgency Bar */}
      <div className="bg-[#fff3cd] text-[#856404] py-3 px-2 text-center text-sm md:text-base font-bold border-b border-[#ffeeba]">
        ⚠️ FIGYELEM: CSAK 14 DARAB MARADT A BEVEZETŐ ÁRON
      </div>

      <main className="bg-[#f8f9fa]">
        <div className="bg-white shadow-xl min-h-screen">
          <Hero />

          <BenefitsList />

          {/* Offer Box */}
          <OfferSection onCtaClick={scrollToOrder} />

          <VisualFeatures />

          <Comparison />

          <QualifyingSection />

          <Bundle />

          <Reviews />

          <div id="order-form-section">
            <HowToOrder />
            <OrderForm />
          </div>

          <FAQ />

          {/* Press/Trust Logos */}
          <div className="bg-slate-100 py-6 text-center border-y border-slate-200">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold text-slate-400 uppercase mb-4">Az "Év Terméke" díjat adta:</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50 font-serif font-bold text-slate-600 grayscale text-lg md:text-2xl">
                <span>Barkács Világ</span>
                <span>Kertészet.hu</span>
                <span>HázBolt PRO</span>
                <span className="hidden md:inline">Az Erdő</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <StickyBar onCtaClick={scrollToOrder} />
    </div>
  );
}
