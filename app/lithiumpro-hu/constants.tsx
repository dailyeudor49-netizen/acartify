import React from 'react';
import { Truck, ShieldCheck, Zap, Battery, Scissors, ThumbsUp, Activity, Clock, CheckCircle2, Hammer, Leaf, Smile, Trash2, Wind, Droplets, Power, Crosshair, HeartPulse, Feather, Ban, UserCheck } from 'lucide-react';
import { Feature, Review, FAQItem } from './types';

export const PRODUCT_NAME = "LITHIUM PRO 40V™";
export const PRICE_PROMO = "25 999";
export const PRICE_OLD = "51 998";
export const DISCOUNT_PERCENT = "-50%";
export const CURRENCY = "Ft";

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

export const PRESS_LOGOS = ["Kertészet.hu", "BarkácsMester", "ZöldOtthon", "AgroHírek"];

// Problem Solving Data
export const PAIN_POINTS = {
  oldWay: [
    { text: "Csukló- és kézfájdalom 10 perc után", icon: <Ban className="w-5 h-5" /> },
    { text: "A metszőollók elakadnak a kemény ágakon", icon: <Ban className="w-5 h-5" /> },
    { text: "Elvesztegetett órák és felesleges erőfeszítés", icon: <Ban className="w-5 h-5" /> },
  ],
  newWay: [
    { text: "Nulla erőfeszítés, csak nyomd meg a gombot", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Tiszta vágások még száraz fán is", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "A munka fele idő alatt kész", icon: <CheckCircle2 className="w-5 h-5" /> },
  ]
};

// Benefici
export const BENEFIT_LIST = [
  {
    icon: <Scissors className="w-8 h-8 text-green-600" />,
    title: "TISZTA VÁGÁS (8CM)",
    text: (<span>Nyomd meg a ravaszt és <strong className="font-black text-gray-900">a legkeményebb 8cm-es ágakat is átvágja</strong> egy másodperc alatt. Mint a vajat vágni.</span>)
  },
  {
    icon: <Feather className="w-8 h-8 text-green-600" />,
    title: "ULTRAKÖNNYŰ (NULLA FÁRADTSÁG)",
    text: (<span>Nagyon keveset nyom. <strong className="font-black text-gray-900">Egész nap használhatod kar- és hátfájás nélkül</strong>.</span>)
  },
  {
    icon: <Battery className="w-8 h-8 text-green-600" />,
    title: "VÉGTELEN AKKUMULÁTOR (8 ÓRA)",
    text: (<span>Egész nap dolgozhatsz megállás nélkül. <strong className="font-black text-gray-900">2 akkumulátort adunk, hogy soha ne maradj energia nélkül</strong>.</span>)
  },
  {
    icon: <Smile className="w-8 h-8 text-green-600" />,
    title: "NAGYON EGYSZERŰ HASZNÁLAT",
    text: (<span>Nem kell szakértőnek lenned. <strong className="font-black text-gray-900">Tedd be az akkumulátort és vágj</strong>. Ideális idősebbeknek is.</span>)
  }
];

// Lista specifica per il box "Cosa c'è nella scatola"
export const WHATS_IN_BOX = [
  "2 db 40V Akkumulátor (Hosszú Élettartam)",
  "Gyors Ipari Töltő",
  "2 db SKS Tartalék Penge",
  "Ütésálló Szállító Táska",
  "Karbantartó Szerszámkészlet",
  "Magyar Nyelvű Használati Útmutató"
];

// ==========================================
// 3. DIMOSTRAZIONE VISIVA (VIDEO MP4)
// ==========================================
export const VISUAL_PROOFS = [
  {
    title: "40V TURBÓ MOTOR",
    desc: (
      <span>
        Olyan erőt fejt ki, hogy <strong className="text-yellow-400">az ágnak esélye sincs</strong>. Soha nem akad el, még száraz fán sem.
      </span>
    ),
    video: "/images/lithiumpro-img/potenza-pura.mp4",
    label: "TISZTA ERŐ"
  },
  {
    title: "ÖRÖK SKS PENGÉK",
    desc: (
      <span>
        Lézerrel élezett japán acél. <strong className="text-yellow-400">Azonnal behatol a fába</strong> erő használata nélkül.
      </span>
    ),
    video: "/images/lithiumpro-img/acciaio-sks.mp4",
    label: "SKS ACÉL"
  },
  {
    title: "EGYSZERŰ ÉS BIZTONSÁGOS",
    desc: (
      <span>
        Ergonomikus markolat. <strong className="text-yellow-400">Egy kézzel használhatod</strong>, a másikkal biztonságosan tarthatod az ágakat.
      </span>
    ),
    video: "/images/lithiumpro-img/facile-sicura.mp4",
    label: "100% BIZTONSÁGOS"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "László M. - Nyugdíjas",
    rating: 5,
    text: "Nézzétek mennyi fát vágtam el kevesebb mint egy óra alatt! Korábban fél napig tartott és beállt a hátam. Ez az olló csoda nekünk, idősebbeknek.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    date: "Tegnap",
    reviewImage: "/images/lithiumpro-img/recensione-1.png"
  },
  {
    id: 2,
    name: "Tamás K. - Kertész",
    rating: 5,
    text: "Évek óta profi felszerelést használok, és ez nem marad el a háromszor annyiba kerülő márkáktól. Tiszta vágás, végtelen akkumulátor. Mellékelem a kész munka fotóját.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2 napja",
    reviewImage: "/images/lithiumpro-img/recensione-2.png"
  },
  {
    id: 3,
    name: "Anna R.",
    rating: 5,
    text: "Nagyon gyorsan megérkezett. A táska nagyon kényelmes és tényleg minden benne van, még a szétszedő kulcsok is. Nagyon elégedett vagyok a vásárlással.",
    verified: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "3 napja",
    reviewImage: "/images/lithiumpro-img/recensione-3.png"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Tényleg vág vastag ágakat?",
    answer: "Igen, akár 8cm átmérőig. Az elektromos motor elvégzi az összes erőfeszítést, neked csak meg kell nyomnod a gombot."
  },
  {
    question: "Mennyi ideig bírja az akkumulátor?",
    answer: "A 2 mellékelt akkumulátorral akár 8 óra folyamatos munkát is lefedhetsz. Amíg az egyiket használod, a másik töltődik."
  },
  {
    question: "Nehéz kézben tartani?",
    answer: "Egyáltalán nem. Kevesebb mint 1kg. Úgy tervezték, hogy ne terhelje a csuklót és a hátat."
  },
  {
    question: "Van garancia?",
    answer: "Természetesen. 2 év garancia. Probléma esetén ingyen kicseréljük."
  }
];
