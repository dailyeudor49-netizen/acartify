import React from 'react';
import { Truck, ShieldCheck, Zap, Battery, Scissors, ThumbsUp, Activity, Clock, CheckCircle2, Hammer, Leaf, Smile, Trash2, Wind, Droplets, Power, Crosshair, HeartPulse, Feather, Ban, UserCheck } from 'lucide-react';
import { Feature, Review, FAQItem } from './types';

export const PRODUCT_NAME = "LITHIUM PRO 40V™";
export const PRICE_PROMO = "1 799";
export const PRICE_OLD = "3 598";
export const DISCOUNT_PERCENT = "-50%";
export const CURRENCY = "Kč";

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

export const PRESS_LOGOS = ["Zahradnictvi.cz", "KutilPortál", "ZelenyDum", "AgroNovinky"];

// Problem Solving Data
export const PAIN_POINTS = {
  oldWay: [
    { text: "Bolest zápěstí a rukou po 10 minutách", icon: <Ban className="w-5 h-5" /> },
    { text: "Nůžky se zasekávají na tvrdých větvích", icon: <Ban className="w-5 h-5" /> },
    { text: "Ztracené hodiny a zbytečná námaha", icon: <Ban className="w-5 h-5" /> },
  ],
  newWay: [
    { text: "Nulová námaha, stačí stisknout tlačítko", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Čisté řezy i na suchém dřevě", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Práci dokončíte za polovinu času", icon: <CheckCircle2 className="w-5 h-5" /> },
  ]
};

// Benefici
export const BENEFIT_LIST = [
  {
    icon: <Scissors className="w-8 h-8 text-green-600" />,
    title: "ČISTÝ ŘEZ (8CM)",
    text: (<span>Stiskněte spoušť a <strong className="font-black text-gray-900">přeřízne i nejtvrdší větve do 8cm</strong> za sekundu. Jako krájet máslo.</span>)
  },
  {
    icon: <Feather className="w-8 h-8 text-green-600" />,
    title: "ULTRALEHKÉ (NULOVÁ ÚNAVA)",
    text: (<span>Váží velmi málo. Můžete používat <strong className="font-black text-gray-900">celý den bez bolesti</strong> rukou a zad.</span>)
  },
  {
    icon: <Battery className="w-8 h-8 text-green-600" />,
    title: "NEKONEČNÁ BATERIE (8 HODIN)",
    text: (<span>Pracujete celý den bez přestávky. Přidáváme <strong className="font-black text-gray-900">2 baterie, abyste nikdy nezůstali bez energie</strong>.</span>)
  },
  {
    icon: <Smile className="w-8 h-8 text-green-600" />,
    title: "VELMI SNADNÉ POUŽITÍ",
    text: (<span>Nemusíte být odborník. <strong className="font-black text-gray-900">Vložte baterii a řežte</strong>. Ideální i pro seniory.</span>)
  }
];

// Lista specifica per il box "Cosa c'è nella scatola"
export const WHATS_IN_BOX = [
  "2 Baterie 40V (Dlouhá Životnost)",
  "Rychlá Průmyslová Nabíječka",
  "2 Náhradní Čepele SKS",
  "Odolný Přepravní Kufřík",
  "Sada Údržbových Nástrojů",
  "Návod v Češtině"
];

// ==========================================
// 3. DIMOSTRAZIONE VISIVA (VIDEO MP4)
// ==========================================
export const VISUAL_PROOFS = [
  {
    title: "TURBO MOTOR 40V",
    desc: (
      <span>
        Vyvíjí takovou sílu, že <strong className="text-yellow-400">větev nemá šanci</strong>. Nikdy se nezasekne, ani na suchém dřevě.
      </span>
    ),
    video: "/images/lithiumpro-img/potenza-pura.mp4",
    label: "ČISTÁ SÍLA"
  },
  {
    title: "VĚČNÉ ČEPELE SKS",
    desc: (
      <span>
        Japonská ocel broušená laserem. <strong className="text-yellow-400">Proniká do dřeva okamžitě</strong> bez použití síly.
      </span>
    ),
    video: "/images/lithiumpro-img/acciaio-sks.mp4",
    label: "OCEL SKS"
  },
  {
    title: "SNADNÉ A BEZPEČNÉ",
    desc: (
      <span>
        Ergonomická rukojeť. Používáte <strong className="text-yellow-400">jednou rukou</strong>, druhou bezpečně držíte větve.
      </span>
    ),
    video: "/images/lithiumpro-img/facile-sicura.mp4",
    label: "100% BEZPEČNÉ"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Jiří M. - Důchodce",
    rating: 5,
    text: "Podívejte se, kolik dřeva jsem nařezal za necelou hodinu! Dříve mi to trvalo půl dne a bolela mě záda. Tyto nůžky jsou zázrak pro nás starší.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    date: "Včera",
    reviewImage: "/images/lithiumpro-img/recensione-1.png"
  },
  {
    id: 2,
    name: "Martin T. - Zahradník",
    rating: 5,
    text: "Používám profesionální vybavení roky a tyto nůžky nezaostávají za značkami, které stojí třikrát tolik. Čistý řez, nekonečná baterie. Přikládám foto hotové práce.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "Před 2 dny",
    reviewImage: "/images/lithiumpro-img/recensione-2.png"
  },
  {
    id: 3,
    name: "Jana R.",
    rating: 5,
    text: "Dorazily velmi rychle. Kufřík je velmi pohodlný a opravdu je v něm vše, dokonce i klíče na rozebrání. Velmi spokojená s nákupem.",
    verified: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "Před 3 dny",
    reviewImage: "/images/lithiumpro-img/recensione-3.png"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Opravdu řeže tlusté větve?",
    answer: "Ano, až do průměru 8cm. Elektrický motor dělá veškerou práci, stačí stisknout tlačítko."
  },
  {
    question: "Jak dlouho vydrží baterie?",
    answer: "S 2 přiloženými bateriemi zvládnete až 8 hodin nepřetržité práce. Zatímco používáte jednu, druhá se nabíjí."
  },
  {
    question: "Je těžké je držet v ruce?",
    answer: "Vůbec ne. Váží méně než 1kg. Byly navrženy tak, aby nezatěžovaly zápěstí a záda."
  },
  {
    question: "Je záruka?",
    answer: "Samozřejmě. 2 roky záruky. V případě problémů je zdarma vyměníme."
  }
];
