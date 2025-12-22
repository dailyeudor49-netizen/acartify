'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, Gift, Zap, Feather, ShieldCheck,
  RefreshCw, BatteryCharging, Gauge, Check, X, Minus, Plus,
  Star, Truck, Lock, Award, Banknote, Clock, FileText, PhoneCall,
  Calendar, Flame, PlayCircle, HelpCircle, ChevronDown, ChevronUp,
  XCircle, CheckCircle, AlertOctagon
} from 'lucide-react';

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
          TNIE PNIE <span className="text-white bg-[#dc3545] px-2 rounded">80CM</span> JAK MASŁO.
        </h1>
        <h2 className="text-lg md:text-2xl font-bold text-[#0056b3] mb-6 leading-tight">
          Moc pilarki spalinowej,<br/>
          <span className="text-slate-600 font-medium text-base md:text-xl">ale lekka jak piórko (1.2kg).</span>
        </h2>
        <div className="max-w-lg mx-auto shadow-2xl rounded-2xl overflow-hidden mb-6 border-4 border-[#dc3545]">
            <div className="bg-[#dc3545] text-white py-3 px-2 flex flex-col items-center justify-center gap-1 animate-pulse leading-none border-b-2 border-red-800">
                <div className="flex items-center gap-2 mb-1">
                   <Gift className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                   <span className="font-black uppercase text-base md:text-xl tracking-tight text-yellow-300">OFERTA LIMITOWANA:</span>
                </div>
                <span className="font-bold uppercase text-xs md:text-sm tracking-wide text-center">
                  W ZESTAWIE: 2 ŁAŃCUCHY TYTANOWE + PANCERNA PROWADNICA + 2 AKUMULATORY + WALIZKA + ŁADOWARKA
                </span>
            </div>
            <div className="relative bg-white group cursor-pointer">
                <div className="absolute top-4 left-4 z-10 bg-white/90 border-2 border-green-600 rounded px-3 py-1 shadow-lg">
                  <span className="text-xs font-black text-green-700 uppercase">2 Lata Gwarancji w Polsce</span>
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
              TNIE PNIE DO 80CM
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Dzięki łańcuchowi z <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">TYTANU CHIRURGICZNEGO</span>.
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
              SAMOOSTRZĄCY SIĘ
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Im więcej ciąć, tym ostrzejsze ostrze. <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">ZERO KONSERWACJI</span>.
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
              MOC RÓWNA 52CC SPALINOWEJ
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Silnik magnetyczny generuje <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">4.000 OBROTÓW/MIN</span>.
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
              CZAS PRACY 8 GODZIN (2 AKUMULATORY)
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Dzięki nowym ogniwom <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">LITOWO-KOBALTOWYM (EV)</span>.
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
              NIEMOŻLIWE DO ZRANIENIA SIĘ
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Dzięki chipowi <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">SAFELOCK™ BIOMETRYCZNEMU</span>.
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
              SUPERLEKKIA (1.2 KG)
            </h3>
            <p className="text-slate-600 font-medium text-base leading-tight mt-1">
              Używasz jedną ręką. <span className="bg-yellow-200 px-1 border border-yellow-300 rounded-sm text-slate-900 font-bold">ZERO ZMĘCZENIA</span>.
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
  const today = new Date().toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section className="bg-white py-10 px-4 text-center border-t border-slate-200">
      <div className="container mx-auto max-w-xl">
        <div className="mb-6 space-y-2">
           <div className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase animate-pulse">
              <Calendar className="w-3 h-3" /> Oferta Dnia: {today}
           </div>
        </div>

        <div className="space-y-4 mb-6">
           <div className="relative bg-slate-100 border border-slate-300 rounded-xl p-4 opacity-70 grayscale select-none">
              <div className="absolute inset-0 bg-slate-200/50 z-10 flex items-center justify-center rounded-xl">
                 <span className="bg-slate-600 text-white font-black text-xl px-4 py-2 uppercase -rotate-3 border-4 border-white shadow-xl">
                   ❌ WYPRZEDANE
                 </span>
              </div>
              <div className="flex justify-between items-center">
                 <div className="text-left">
                    <span className="font-bold text-slate-500 block">Tylko Pilarka</span>
                    <span className="text-xs text-slate-400">Bez dodatkowych akcesoriów</span>
                 </div>
                 <div className="font-bold text-slate-500 text-xl">159 zł</div>
              </div>
           </div>

           <div className="relative bg-[#f8f9fa] rounded-2xl border-4 border-[#28a745] p-6 shadow-2xl overflow-hidden transform scale-105 z-20">
              <div className="absolute top-0 right-0 bg-[#dc3545] text-white text-xs font-black px-4 py-1.5 rounded-bl-xl shadow-sm z-10">
                -50% RABAT
              </div>

              <div className="text-left mb-2">
                 <span className="bg-[#28a745] text-white text-xs font-black px-2 py-0.5 rounded uppercase">Polecane</span>
                 <h3 className="font-black text-2xl text-slate-900 uppercase leading-none mt-2">TITANSAW PRO X <br/><span className="text-[#dc3545] text-lg">(ZESTAW TYTANOWY)</span></h3>

                 <div className="mt-4 bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <ul className="text-left space-y-1.5">
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 2x Akumulatory Litowe 24V
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 2x Łańcuchy Tytanowe
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> 1x Pancerna Prowadnica + Walizka
                      </li>
                      <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-[#28a745]" /> Szybka Ładowarka w Zestawie
                      </li>
                    </ul>
                 </div>
              </div>

              <div className="flex justify-center items-end gap-3 mb-1 mt-4 border-t border-dashed border-slate-300 pt-4">
                  <span className="text-slate-400 text-2xl font-bold line-through decoration-red-500 decoration-2">519 zł</span>
                  <span className="text-6xl font-black text-[#dc3545] tracking-tighter leading-none">259 zł</span>
              </div>

              <p className="text-sm font-bold text-green-700 uppercase tracking-widest mb-4 bg-green-50 inline-block px-3 py-1 rounded-full border border-green-100">
                 Płatność Przy Odbiorze
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                 <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center gap-1 shadow-sm">
                    <Truck className="w-4 h-4 text-[#28a745]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase">Dostawa 24/48h</span>
                 </div>
                 <div className="bg-white border border-slate-200 rounded p-2 flex items-center justify-center gap-1 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-[#28a745]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase">Gwarancja 2 Lata</span>
                 </div>
              </div>

              <button
                onClick={onCtaClick}
                className="w-full bg-[#28a745] hover:bg-[#218838] text-white text-2xl md:text-3xl font-black py-4 rounded-xl shadow-[0_5px_0_#1e7e34] active:shadow-none active:translate-y-1 transition-all uppercase flex items-center justify-center gap-2 animate-pulse-fast ring-4 ring-green-100"
              >
                ZAMÓW TERAZ
              </button>
           </div>
        </div>

        <div className="mb-6 bg-white p-3 rounded-lg border border-red-100 shadow-inner">
          <div className="flex justify-between text-xs font-bold uppercase mb-1">
            <span className="text-slate-500">Dostępność Magazynowa:</span>
            <span className="text-red-600 flex items-center gap-1"><Flame className="w-3 h-3 fill-red-600" /> Wyczerpuje Się</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full w-[85%] animate-pulse"></div>
          </div>
          <p className="text-[10px] text-left mt-1 text-slate-400">Ponad 140 osób ogląda tę ofertę.</p>
        </div>

        <p className="text-xs text-center mt-3 text-slate-500 font-medium">
          <ShieldCheck className="w-3 h-3 inline mr-1" />
          Testuj bez ryzyka: 30 dni zadowolenia lub zwrot pieniędzy.
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
            TECHNOLOGIA KTÓRA <br/><span className="text-yellow-400">ZMIENIA ŻYCIE</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Rozwiązaliśmy wszystkie problemy starych pilarek spalinowych. Dlatego TitanSaw Pro X jest lepsza.
          </p>
        </div>

        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-red-600 text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    ŚCINA DRZEWA W 15 SEKUND
                  </span>
               </div>
               <video src="/images/titansaw-img/velocita-4000rpm.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-yellow-400 uppercase mb-2">
                PRĘDKOŚĆ 4.000 RPM = CZYSTA MOC
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Zobacz, z jaką łatwością ścina to drzewo. Sekretem jest prędkość: silnik generuje <strong className="text-white">4.000 obrotów na minutę</strong>, które przekładają się na niepowstrzymaną siłę cięcia.
                <br/><br/>
                Dzięki super ostremu łańcuchowi z <strong className="text-white">TYTANU CHIRURGICZNEGO</strong>, prowadnica wchodzi w drewno bez wysiłku. <span className="text-white font-bold bg-red-600/20 px-1">Tnie wszystko, co napotka</span> (dąb, oliwka, buk) jak gorący nóż masło.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-[#28a745] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    SUPERLEKKIA: 1.2 KG
                  </span>
               </div>
               <video src="/images/titansaw-img/ti-basta-una-mano.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-green-400 uppercase mb-2">
                WYSTARCZY JEDNA RĘKA
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Zapomnij o bólu pleców i drżących ramionach po 5 minutach. Przy wadze <strong>1.2 kg</strong> jest jak używanie wkrętarki. Używasz jedną ręką, drugą przesuwasz gałęzie. <span className="text-white font-bold">Idealna nawet dla osób po 60 roku życia.</span>
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative group cursor-pointer aspect-square">
               <div className="absolute top-4 left-4 right-4 text-center z-20">
                  <span className="bg-[#0056b3] text-white text-sm md:text-lg font-black px-4 py-2 uppercase shadow-lg transform -skew-x-6 inline-block border-2 border-white">
                    BLOKADA BIOMETRYCZNA 0.01s
                  </span>
               </div>
               <video src="/images/titansaw-img/safelock-biometrico.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl border-4 border-slate-700 shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-black text-blue-400 uppercase mb-2">
                "SAFELOCK™" BIOMETRYCZNY
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Twoja żona boi się, że się zranisz? Spokojnie. Inteligentny chip rozpoznaje bezpieczny chwyt. <strong className="text-white">Niemożliwe jest przypadkowe uruchomienie</strong> (nawet jeśli spadnie na ziemię lub dotkną go wnuki). Jeśli puścisz palec, hamulec silnika zatrzymuje prowadnicę w <strong>0.01 sekundy</strong> dokładnie.
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
          STARA PILARKA VS <br/><span className="text-[#dc3545]">TITANSAW PRO</span>
        </h3>
        <div className="overflow-hidden rounded-xl border-2 border-slate-200 shadow-xl">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr>
                <th className="bg-slate-50 p-2 w-[30%] border-b border-slate-200"></th>
                <th className="bg-slate-100 p-2 w-[35%] text-slate-500 font-bold border-b border-slate-200 text-xs md:text-sm uppercase leading-tight align-bottom pb-4">
                  Pilarka<br/>Spalinowa (52cc)
                </th>
                <th className="bg-[#28a745] p-2 w-[35%] text-white font-black border-b border-green-600 text-sm md:text-lg uppercase align-bottom pb-4 relative">
                  <div className="w-full flex justify-center mb-1">
                     <span className="bg-yellow-400 text-black text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
                       EWOLUCJA
                     </span>
                  </div>
                  TitanSaw Pro
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Silnik</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Benzyna/Mieszanka<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Śmierdzi)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  Litowo-Kobaltowy EV<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Moc 52cc)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Rozruch</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Na szarpnięcie<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Męczące)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  SafeLock™ Bio<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(100% Bezpieczne)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Waga</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  7 kg<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Łamie Plecy)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  1.2 kg<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Piórko)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Konserwacja</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Świece, Ostrzenie<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Kosztowne)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  ŻADNA<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Samoostrzący)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 border-b border-slate-100 text-xs md:text-base">Hałas</td>
                <td className="p-3 text-center text-slate-500 border-b border-slate-100 bg-slate-50">
                  Piekielny<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Potrzebne Słuchawki)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] border-b border-slate-100 bg-green-50">
                  CICHA<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Użycie w Bloku)</span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-700 bg-slate-50 text-xs md:text-base bg-yellow-50">Cięcie</td>
                <td className="p-3 text-center text-slate-500 bg-slate-50 bg-yellow-50">
                  Wolne<br/><span className="text-[10px] md:text-xs text-red-500 font-bold">(Się Zacina)</span>
                </td>
                <td className="p-3 text-center font-black text-[#28a745] bg-green-50 bg-yellow-50 border-2 border-[#28a745] relative">
                  LASER<br/><span className="text-[10px] md:text-xs text-green-700 font-bold">(Tytan)</span>
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
            WIĘC... CZY TO DLA CIEBIE?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="font-black text-xl text-red-800 uppercase leading-none">NIE KUPUJ JEŚLI...</h3>
                </div>
                <ul className="space-y-3 text-red-900 font-medium">
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Jesteś profesjonalnym drwalem, który musi wycinać całe lasy 8 godzin dziennie.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Szukasz ciężkiego i hałaśliwego narzędzia, żeby "poczuć" zmęczenie.
                </li>
                </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="font-black text-xl text-green-800 uppercase leading-none">KUP OD RAZU JEŚLI...</h3>
                </div>
                <ul className="space-y-3 text-green-900 font-medium">
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Masz ogród, gaj oliwny lub kominek i chcesz być samodzielny.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Chcesz zakończyć pracę w połowie czasu i cieszyć się resztą dnia.
                </li>
                <li className="flex items-start gap-2">
                    <span className="font-bold">•</span> Chcesz bezpieczne narzędzie, które nie zniszczy twoich pleców.
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
            CO JEST W PUDEŁKU?
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#dc3545] font-black text-lg md:text-xl uppercase bg-red-50 inline-block px-4 py-2 rounded-lg border border-red-100">
            <Gift className="w-6 h-6" />
            MEGA ZESTAW "WSZYSTKO WLICZONE" (WARTOŚĆ 199 ZŁ GRATIS)
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#28a745] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-slate-100 relative p-6 flex items-center justify-center">
             <span className="absolute top-4 left-4 bg-[#28a745] text-white text-xs font-bold px-3 py-1 uppercase rounded shadow-md z-10">
               KOMPLETNY ZESTAW
             </span>
             <img src="/images/titansaw-img/1.webp" alt="Kompletny Zestaw" className="w-full h-auto rounded-lg shadow-sm" />
          </div>
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white">
            <h3 className="font-bold text-lg text-slate-500 mb-4 uppercase tracking-wide">Oto co otrzymasz do domu:</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Pilarka TitanSaw</span>
                  <p className="text-xs text-slate-500">Korpus maszyny ostatniej generacji</p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">2x Akumulatory Litowe 24V</span>
                  <span className="ml-2 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">8 GODZIN PRACY</span>
                  <p className="text-xs text-slate-500">Podwójna nieskończona autonomia</p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">2x Łańcuchy Tytanowe</span>
                  <p className="text-xs text-slate-500">Super ostre. Nigdy nie tracą ostrości.</p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Prowadnica "Pancerna"</span>
                  <p className="text-xs text-slate-500">Hartowana stal anty-skręceniowa. <strong className="text-slate-700">Nigdy się nie łamie.</strong></p>
                </div>
              </li>
              <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Twarda Walizka</span>
                  <p className="text-xs text-slate-500">Odporna na wstrząsy do bezpiecznego transportu</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full"><Plus className="w-4 h-4 text-green-600" /></div>
                <div className="flex-1">
                  <span className="font-black text-slate-900 text-lg">1x Ładowarka</span>
                  <p className="text-xs text-slate-500">Szybkie ładowanie</p>
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
          CO MÓWIĄ KLIENCI?
        </h2>
        <div className="flex justify-center items-center gap-2 mb-8">
           <div className="flex text-yellow-400">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-slate-600">4.9/5 (Zweryfikowane Opinie)</span>
        </div>

        {/* Featured Review Image */}
        <div className="mb-8">
          <img
            src="/images/titansaw-img/recensione-3.webp"
            alt="Zweryfikowane opinie klientów"
            className="w-full rounded-xl shadow-lg border border-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">P</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Piotr K.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Zakup Zweryfikowany</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">2 dni temu</span>
            </div>
            <p className="text-slate-700 italic mb-4">
              "Nie wierzyłem, dopóki jej nie spróbowałem. Ciąłem drewno do kominka przez 2 godziny bez zmęczenia. Moc jest szalona jak na taki mały sprzęt."
            </p>
            <img
              src="/images/titansaw-img/recensione-1.webp"
              alt="Zdjęcie z opinii klienta"
              className="w-full h-40 object-cover rounded-lg border border-slate-200"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">J</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Janusz W.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Zakup Zweryfikowany</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">Wczoraj</span>
            </div>
            <p className="text-slate-700 italic mb-4">
              "Przyszła dokładnie w 24 godziny. Zapłaciłem kurierowi, co jest super wygodne. Używam do przycinania gaju oliwnego, działa cudownie. Polecam."
            </p>
            <img
              src="/images/titansaw-img/recensione-2.webp"
              alt="Zdjęcie z opinii klienta"
              className="w-full h-40 object-cover rounded-lg border border-slate-200"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">M</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Marek N.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Zakup Zweryfikowany</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">3 dni temu</span>
            </div>
            <p className="text-slate-700 italic">
              "Mam 65 lat i nie mogłem już uruchomić pilarki spalinowej przez problem z ramieniem. Ta wystarczy nacisnąć guzik. Przywróciła mi niezależność w ogrodzie. Dziękuję."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">A</div>
                 <div>
                   <h4 className="font-bold text-slate-900">Andrzej B.</h4>
                   <p className="text-xs text-green-600 font-bold uppercase flex items-center gap-1">✅ Zakup Zweryfikowany</p>
                 </div>
               </div>
               <span className="text-xs text-slate-400">5 dni temu</span>
            </div>
            <p className="text-slate-700 italic">
              "Zestaw jest kompletny ze wszystkim. Akumulatory naprawdę długo wytrzymują. Używałem do cięcia palet i nie miała problemu. Bardzo szybka dostawa."
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
          JAK ZAMÓWIĆ W <span className="text-[#28a745]">4 KROKACH</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">1</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Wypełnij formularz</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Zostaw swoje dane poniżej.</p>
             </div>
          </div>
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">2</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Oddzwaniamy</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Potwierdzamy zamówienie telefonicznie.</p>
             </div>
          </div>
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">3</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <Truck className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Szybka Wysyłka</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Dostawa w 24/48 godzin do domu.</p>
             </div>
          </div>
          <div className="bg-white p-3 md:p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute -right-2 -top-2 text-6xl font-black text-slate-100 z-0">4</div>
             <div className="bg-[#e6f4ea] p-2 rounded-full z-10 mb-2">
               <Banknote className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
             </div>
             <div className="z-10">
               <h3 className="font-black text-sm md:text-lg text-slate-900 uppercase mb-1">Płatność przy odbiorze</h3>
               <p className="text-slate-500 text-xs md:text-sm leading-tight">Płacisz gotówką kurierowi.</p>
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
      alert("Proszę wypełnić wszystkie wymagane pola");
      return;
    }
    setIsSubmitting(true);

    // Save data to sessionStorage for conversion tracking
    sessionStorage.setItem('ec_name', formData.name);
    sessionStorage.setItem('ec_phone', formData.phone);
    sessionStorage.setItem('ec_address', formData.address);
    sessionStorage.setItem('ec_value', '259');

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
          country: 'pl',
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
    window.location.href = '/ty-pl';
  };

  return (
    <section className="bg-white py-8 px-4 border-t border-slate-200">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-black uppercase text-slate-900">
            WYPEŁNIJ FORMULARZ
          </h3>
          <p className="text-sm text-slate-500">Płacisz tylko przy odbiorze. Szybka Wysyłka 24/48h.</p>
        </div>

        <div className="bg-[#f8f9fa] rounded-xl border-2 border-slate-200 p-4 md:p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-slate-200 px-2 py-1 rounded-bl text-[10px] font-bold text-slate-500 flex items-center gap-1">
             <Lock className="w-3 h-3" /> SSL BEZPIECZNE
          </div>

          <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center gap-3">
              <img src="/images/titansaw-img/1.webp" className="w-12 h-12 rounded object-cover border border-slate-300" alt="Produkt" />
              <div>
                <p className="font-bold text-sm text-slate-900 leading-tight">TitanSaw Pro X (Zestaw Tytanowy)</p>
                <p className="text-[10px] text-[#dc3545] font-bold">Rabat -50% Zastosowany</p>
              </div>
            </div>
            <div className="text-xl font-black text-[#28a745]">259 zł</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Hidden input for fingerprint */}
            <input type="hidden" name="tmfp" />

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Imię i Nazwisko *</label>
              <input
                type="text" name="name" required placeholder="Np: Jan Kowalski"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.name} onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Telefon (Komórkowy) *</label>
              <input
                type="tel" name="phone" required placeholder="Np: 500 123 456"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400"
                value={formData.phone} onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-600 uppercase">Pełny Adres *</label>
              <textarea
                name="address" required rows={2}
                placeholder="Ulica, Nr domu, Kod pocztowy, Miasto"
                className="w-full p-2.5 border border-slate-300 rounded focus:border-[#28a745] focus:ring-1 focus:ring-[#28a745] outline-none shadow-sm placeholder-slate-400 resize-none"
                value={formData.address} onChange={handleChange}
              />
              <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Twoje dane są chronione i używane tylko do wysyłki.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-3 flex items-center justify-between mt-2 cursor-pointer">
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 bg-[#28a745] rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                 </div>
                 <span className="text-sm font-bold text-slate-900">Płatność Przy Odbiorze</span>
              </div>
              <Banknote className="w-5 h-5 text-green-700" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[#28a745] hover:bg-[#218838] text-white text-xl md:text-2xl font-black py-4 rounded-xl shadow-[0_4px_0_#1e7e34] uppercase tracking-wide transition-all active:scale-95 disabled:opacity-70 flex justify-center items-center gap-2 active:shadow-none active:translate-y-1"
            >
              {isSubmitting ? 'CZEKAJ...' : 'DOKOŃCZ ZAMÓWIENIE'} <Truck className="w-6 h-6" />
            </button>

          </form>

          <div className="mt-3 pt-2 border-t border-slate-200 text-center">
             <p className="text-[10px] text-slate-500 font-medium">
                🛡️ Gwarancja <strong>30 Dni Zadowolenia lub Zwrot Pieniędzy</strong> wliczona.
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
            WĄTPLIWOŚCI LUB PYTANIA?
          </h2>
          <p className="text-slate-500">Oto odpowiedzi na najczęściej zadawane pytania naszych klientów.</p>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm">
          <FAQItem
            question="Jak długo wytrzymują akumulatory?"
            answer="Dołączone akumulatory mają bardzo wysoką pojemność. Każdy akumulator gwarantuje do 8 GODZIN pracy. Mając dwa w zestawie, możesz pracować całymi dniami bez przerwy."
          />
          <FAQItem
            question="Gdzie znajdę części zamienne i ostrza?"
            answer="Uwaga: to nie jest komercyjna pilarka z supermarketu. Ma specjalny łańcuch z TYTANU zaprojektowany tak, by wytrzymać lata i lata bez utraty ostrości. Prowadnica natomiast jest z hartowanej stali 'Pancernej': niemożliwa do złamania lub wygięcia. Jeśli jednak będziesz potrzebować części zamiennych (lub na zapas), już otrzymujesz drugi łańcuch w zestawie. Do przyszłych zakupów znajdziesz wszystko na naszej stronie."
          />
          <FAQItem
            question="Czy naprawdę jest tak potężna jak mówicie?"
            answer="Tak, to potwór mocy. Dzięki silnikowi bezszczotkowemu i łańcuchowi tytanowemu ścina pnie do 80cm średnicy bez wysiłku. Nigdy się nie zacina, nawet na najtwardszym i sezonowanym drewnie."
          />
          <FAQItem
            question="Czy mogę naprawdę zapłacić przy odbiorze?"
            answer="Oczywiście! Wiemy, że trudno zaufać online. Dlatego oferujemy płatność gotówką bezpośrednio kurierowi podczas dostawy paczki. Żadnego ryzyka dla Ciebie."
          />
          <FAQItem
            question="Jeśli mi się nie spodoba, mogę zwrócić?"
            answer="Masz 30 dni gwarancji 'Zadowolenia lub Zwrot Pieniędzy'. Jeśli produkt Ci się nie podoba, zwracasz go nam, a my oddajemy pieniądze. Bez pytań."
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
            <Clock className="w-3 h-3 mr-1" /> WYGASA ZA: {formatTime(timeLeft)}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#dc3545]">259 zł</span>
            <span className="text-xs text-slate-400 line-through">519 zł</span>
          </div>
        </div>
        <button
          onClick={onCtaClick}
          className="flex-1 bg-[#27ae60] text-white font-black text-lg py-3 px-2 rounded shadow-lg animate-pulse-fast uppercase leading-none"
        >
          ZAMÓW TERAZ
          <span className="block text-[10px] font-medium opacity-80 mt-1">PŁAĆ PRZY ODBIORZE</span>
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
            ZAMÓW TERAZ
          </button>
        </div>
      </header>

      {/* Urgency Bar */}
      <div className="bg-[#fff3cd] text-[#856404] py-3 px-2 text-center text-sm md:text-base font-bold border-b border-[#ffeeba]">
        ⚠️ UWAGA: TYLKO 14 SZTUK POZOSTAŁO W CENIE PROMOCYJNEJ
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
              <p className="text-xs font-bold text-slate-400 uppercase mb-4">Wybrany "Produktem Roku" przez:</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50 font-serif font-bold text-slate-600 grayscale text-lg md:text-2xl">
                <span>ZróbToSam24</span>
                <span>Ogrodnictwo.pl</span>
                <span>MajsterkowaniePRO</span>
                <span className="hidden md:inline">Las i Ogród</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <StickyBar onCtaClick={scrollToOrder} />
    </div>
  );
}
