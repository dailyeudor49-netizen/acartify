import React from 'react';
import { Truck, ShieldCheck, Zap, Battery, Scissors, ThumbsUp, Activity, Clock, CheckCircle2, Hammer, Leaf, Smile, Trash2, Wind, Droplets, Power, Crosshair, HeartPulse, Feather, Ban, UserCheck } from 'lucide-react';
import { Feature, Review, FAQItem } from './types';

export const PRODUCT_NAME = "LITHIUM PRO 40V™";
export const PRICE_PROMO = "79,00";
export const PRICE_OLD = "158,00";
export const DISCOUNT_PERCENT = "-50%";
export const CURRENCY = "€";

// ==========================================
// 1. CAROSELLO IMMAGINI (SLIDER IN ALTO)
// ==========================================
export const CAROUSEL_IMAGES = [
  "/images/lithiumpro-img/1.png",
  "/images/lithiumpro-img/2.png",
  "/images/lithiumpro-img/3.png",
  "/images/lithiumpro-img/4.png",
  "/images/lithiumpro-img/5.png",
  "/images/lithiumpro-img/6.png",
];

// ==========================================
// 2. FOTO DEL KIT (SCATOLA / CONTENUTO)
// ==========================================
export const KIT_IMAGE_URL = "/images/lithiumpro-img/1.png";

export const PRESS_LOGOS = ["Zahradnictvo.sk", "KutilPortál", "ZelenyDom", "AgroNovinky"];

// Problem Solving Data
export const PAIN_POINTS = {
  oldWay: [
    { text: "Bolesť zápästia a rúk po 10 minútach", icon: <Ban className="w-5 h-5" /> },
    { text: "Nožnice sa zasekávajú na tvrdých konároch", icon: <Ban className="w-5 h-5" /> },
    { text: "Stratené hodiny a zbytočná námaha", icon: <Ban className="w-5 h-5" /> },
  ],
  newWay: [
    { text: "Nulová námaha, stačí stlačiť tlačidlo", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Čisté rezy aj na suchom dreve", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Prácu dokončíte za polovicu času", icon: <CheckCircle2 className="w-5 h-5" /> },
  ]
};

// Benefici
export const BENEFIT_LIST = [
  {
    icon: <Scissors className="w-8 h-8 text-green-600" />,
    title: "ČISTÝ REZ (8CM)",
    text: (<span>Stlačte spúšť a <strong className="font-black text-gray-900">prereže aj najtvrdšie konáre do 8cm</strong> za sekundu. Ako krájať maslo.</span>)
  },
  {
    icon: <Feather className="w-8 h-8 text-green-600" />,
    title: "ULTRAĽAHKÉ (NULOVÁ ÚNAVA)",
    text: (<span>Váži veľmi málo. Môžete používať <strong className="font-black text-gray-900">celý deň bez bolesti</strong> rúk a chrbta.</span>)
  },
  {
    icon: <Battery className="w-8 h-8 text-green-600" />,
    title: "NEKONEČNÁ BATÉRIA (8 HODÍN)",
    text: (<span>Pracujete celý deň bez prestávky. Pridávame <strong className="font-black text-gray-900">2 batérie, aby ste nikdy nezostali bez energie</strong>.</span>)
  },
  {
    icon: <Smile className="w-8 h-8 text-green-600" />,
    title: "VEĽMI JEDNODUCHÉ POUŽITIE",
    text: (<span>Nemusíte byť odborník. <strong className="font-black text-gray-900">Vložte batériu a režte</strong>. Ideálne aj pre seniorov.</span>)
  }
];

// Lista specifica per il box "Cosa c'è nella scatola"
export const WHATS_IN_BOX = [
  "2 Batérie 40V (Dlhá Životnosť)",
  "Rýchla Priemyselná Nabíjačka",
  "2 Náhradné Čepele SKS",
  "Odolný Prepravný Kufrík",
  "Sada Údržbových Nástrojov",
  "Návod v Slovenčine"
];

// ==========================================
// 3. DIMOSTRAZIONE VISIVA (VIDEO MP4)
// ==========================================
export const VISUAL_PROOFS = [
  {
    title: "TURBO MOTOR 40V",
    desc: (
      <span>
        Vyvíja takú silu, že <strong className="text-yellow-400">konár nemá šancu</strong>. Nikdy sa nezasekne, ani na suchom dreve.
      </span>
    ),
    video: "/images/lithiumpro-img/potenza-pura.mp4",
    label: "ČISTÁ SILA"
  },
  {
    title: "VEČNÉ ČEPELE SKS",
    desc: (
      <span>
        Japonská oceľ brúsená laserom. <strong className="text-yellow-400">Preniká do dreva okamžite</strong> bez použitia sily.
      </span>
    ),
    video: "/images/lithiumpro-img/acciaio-sks.mp4",
    label: "OCEĽ SKS"
  },
  {
    title: "JEDNODUCHÉ A BEZPEČNÉ",
    desc: (
      <span>
        Ergonomická rukoväť. Používate <strong className="text-yellow-400">jednou rukou</strong>, druhou bezpečne držíte konáre.
      </span>
    ),
    video: "/images/lithiumpro-img/facile-sicura.mp4",
    label: "100% BEZPEČNÉ"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Jozef M. - Dôchodca",
    rating: 5,
    text: "Pozrite sa, koľko dreva som narezal za necelú hodinu! Predtým mi to trvalo pol dňa a bolel ma chrbát. Tieto nožnice sú zázrak pre nás starších.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    date: "Včera",
    reviewImage: "/images/lithiumpro-img/recensione-1.png"
  },
  {
    id: 2,
    name: "Martin T. - Záhradník",
    rating: 5,
    text: "Používam profesionálne vybavenie roky a tieto nožnice nezaostávajú za značkami, ktoré stoja trikrát toľko. Čistý rez, nekonečná batéria. Prikladám foto hotovej práce.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "Pred 2 dňami",
    reviewImage: "/images/lithiumpro-img/recensione-2.png"
  },
  {
    id: 3,
    name: "Jana R.",
    rating: 5,
    text: "Dorazili veľmi rýchlo. Kufrík je veľmi pohodlný a naozaj je v ňom všetko, dokonca aj kľúče na rozobratie. Veľmi spokojná s nákupom.",
    verified: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "Pred 3 dňami",
    reviewImage: "/images/lithiumpro-img/recensione-3.png"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Naozaj reže hrubé konáre?",
    answer: "Áno, až do priemeru 8cm. Elektrický motor robí všetku prácu, stačí stlačiť tlačidlo."
  },
  {
    question: "Ako dlho vydrží batéria?",
    answer: "S 2 priloženými batériami zvládnete až 8 hodín nepretržitej práce. Zatiaľ čo používate jednu, druhá sa nabíja."
  },
  {
    question: "Je ťažké ich držať v ruke?",
    answer: "Vôbec nie. Vážia menej ako 1kg. Boli navrhnuté tak, aby nezaťažovali zápästie a chrbát."
  },
  {
    question: "Je záruka?",
    answer: "Samozrejme. 2 roky záruky. V prípade problémov ich zadarmo vymeníme."
  }
];
