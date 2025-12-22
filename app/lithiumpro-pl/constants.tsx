import React from 'react';
import { Truck, ShieldCheck, Zap, Battery, Scissors, ThumbsUp, Activity, Clock, CheckCircle2, Hammer, Leaf, Smile, Trash2, Wind, Droplets, Power, Crosshair, HeartPulse, Feather, Ban, UserCheck } from 'lucide-react';
import { Feature, Review, FAQItem } from './types';

export const PRODUCT_NAME = "LITHIUM PRO 40V™";
export const PRICE_PROMO = "279,00";
export const PRICE_OLD = "558,00";
export const DISCOUNT_PERCENT = "-50%";
export const CURRENCY = "zł";

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

export const PRESS_LOGOS = ["Ogrodnictwo.pl", "Majsterkowanie", "ZielonyDom", "AgroNews"];

// Problem Solving Data
export const PAIN_POINTS = {
  oldWay: [
    { text: "Ból nadgarstków i dłoni po 10 minutach", icon: <Ban className="w-5 h-5" /> },
    { text: "Sekatory blokują się na twardych gałęziach", icon: <Ban className="w-5 h-5" /> },
    { text: "Stracone godziny i niepotrzebny wysiłek", icon: <Ban className="w-5 h-5" /> },
  ],
  newWay: [
    { text: "Zero wysiłku, wystarczy nacisnąć przycisk", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Czyste cięcia nawet na suchym drewnie", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Kończysz pracę w połowie czasu", icon: <CheckCircle2 className="w-5 h-5" /> },
  ]
};

// Benefici "Urla e Risolvi" - Angoli specifici richiesti
export const BENEFIT_LIST = [
  {
    icon: <Scissors className="w-8 h-8 text-green-600" />,
    title: "CZYSTE CIĘCIE (8CM)",
    text: (<span>Naciśnij spust i <strong className="font-black text-gray-900">tnie najtwardsze gałęzie do 8cm</strong> w sekundę. Jak kroić masło.</span>)
  },
  {
    icon: <Feather className="w-8 h-8 text-green-600" />,
    title: "ULTRALEKKI (ZERO ZMĘCZENIA)",
    text: (<span>Waży bardzo mało. Możesz używać <strong className="font-black text-gray-900">cały dzień bez bólu</strong> rąk i pleców.</span>)
  },
  {
    icon: <Battery className="w-8 h-8 text-green-600" />,
    title: "NIEOGRANICZONA BATERIA (8 GODZIN)",
    text: (<span>Pracujesz cały dzień bez przerwy. Dołączamy <strong className="font-black text-gray-900">2 baterie, żebyś nigdy nie został bez zasilania</strong>.</span>)
  },
  {
    icon: <Smile className="w-8 h-8 text-green-600" />,
    title: "BARDZO ŁATWY W OBSŁUDZE",
    text: (<span>Nie musisz być ekspertem. <strong className="font-black text-gray-900">Włóż baterię i tnij</strong>. Idealny także dla seniorów.</span>)
  }
];

// Lista specifica per il box "Cosa c'è nella scatola"
export const WHATS_IN_BOX = [
  "2 Baterie 40V (Długa Żywotność)",
  "Szybka Ładowarka Przemysłowa",
  "2 Wymienne Ostrza SKS",
  "Walizka Transportowa Wzmocniona",
  "Zestaw Kluczy do Konserwacji",
  "Instrukcja w Języku Polskim"
];

// ==========================================
// 3. DIMOSTRAZIONE VISIVA (VIDEO MP4)
// ==========================================
export const VISUAL_PROOFS = [
  {
    title: "SILNIK TURBO 40V",
    desc: (
      <span>
        Generuje taką moc, że <strong className="text-yellow-400">gałąź nie ma szans</strong>. Nigdy się nie blokuje, nawet na suchym drewnie.
      </span>
    ),
    video: "/images/lithiumpro-img/potenza-pura.mp4",
    label: "CZYSTA MOC"
  },
  {
    title: "WIECZNE OSTRZA SKS",
    desc: (
      <span>
        Japońska stal ostrzona laserowo. <strong className="text-yellow-400">Wchodzą w drewno natychmiast</strong> bez użycia siły.
      </span>
    ),
    video: "/images/lithiumpro-img/acciaio-sks.mp4",
    label: "STAL SKS"
  },
  {
    title: "ŁATWY I BEZPIECZNY",
    desc: (
      <span>
        Ergonomiczny uchwyt. Używasz <strong className="text-yellow-400">jedną ręką</strong>, a drugą bezpiecznie przytrzymujesz gałęzie.
      </span>
    ),
    video: "/images/lithiumpro-img/facile-sicura.mp4",
    label: "100% BEZPIECZNY"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Andrzej M. - Emeryt",
    rating: 5,
    text: "Zobaczcie ile drewna pociąłem w niecałą godzinę! Wcześniej zajmowało mi to pół dnia i bolały mnie plecy. Te sekatory to cud dla nas, starszych osób.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    date: "Wczoraj",
    reviewImage: "/images/lithiumpro-img/recensione-1.png"
  },
  {
    id: 2,
    name: "Marek T. - Ogrodnik",
    rating: 5,
    text: "Używam profesjonalnego sprzętu od lat i te sekatory nie ustępują markom kosztującym trzy razy więcej. Czyste cięcie, nieskończona bateria. Załączam zdjęcie efektu.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2 dni temu",
    reviewImage: "/images/lithiumpro-img/recensione-2.png"
  },
  {
    id: 3,
    name: "Anna R.",
    rating: 5,
    text: "Przyszły bardzo szybko. Walizka jest bardzo wygodna i naprawdę wszystko jest w zestawie, nawet klucze do demontażu. Bardzo zadowolona z zakupu.",
    verified: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "3 dni temu",
    reviewImage: "/images/lithiumpro-img/recensione-3.png"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Czy naprawdę tnie grube gałęzie?",
    answer: "Tak, do 8cm średnicy. Silnik elektryczny wykonuje całą pracę, wystarczy nacisnąć przycisk."
  },
  {
    question: "Jak długo działa bateria?",
    answer: "Z 2 dołączonymi bateriami możesz pracować do 8 godzin ciągłej pracy. Gdy używasz jednej, druga się ładuje."
  },
  {
    question: "Czy jest ciężki w trzymaniu?",
    answer: "Absolutnie nie. Waży mniej niż 1kg. Został zaprojektowany tak, aby nie obciążać nadgarstka i pleców."
  },
  {
    question: "Czy jest gwarancja?",
    answer: "Oczywiście. 2 lata gwarancji. W przypadku problemów wymieniamy za darmo."
  }
];
