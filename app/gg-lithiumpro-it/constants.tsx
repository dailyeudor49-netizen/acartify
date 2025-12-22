import React from 'react';
import { Truck, ShieldCheck, Zap, Battery, Scissors, ThumbsUp, Activity, Clock, CheckCircle2, Hammer, Leaf, Smile, Trash2, Wind, Droplets, Power, Crosshair, HeartPulse, Feather, Ban, UserCheck } from 'lucide-react';
import { Feature, Review, FAQItem } from './types';

export const PRODUCT_NAME = "LITHIUM PRO 40V™"; 
export const PRICE_PROMO = "69,99";
export const PRICE_OLD = "139,90";
export const DISCOUNT_PERCENT = "-50%";

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

export const PRESS_LOGOS = ["Giardinaggio.it", "FaiDaTe Facile", "VerdeCasa", "AgriNews"];

// Problem Solving Data
export const PAIN_POINTS = {
  oldWay: [
    { text: "Dolori a polsi e mani dopo 10 minuti", icon: <Ban className="w-5 h-5" /> },
    { text: "Cesoie che si bloccano nei rami duri", icon: <Ban className="w-5 h-5" /> },
    { text: "Ore perse e fatica inutile", icon: <Ban className="w-5 h-5" /> },
  ],
  newWay: [
    { text: "Zero sforzo, premi solo un bottone", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Tagli netti anche su legno secco", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Finisci il lavoro in metà tempo", icon: <CheckCircle2 className="w-5 h-5" /> },
  ]
};

// Benefici "Urla e Risolvi" - Angoli specifici richiesti
// Using JSX for bolding key phrases
export const BENEFIT_LIST = [
  {
    icon: <Scissors className="w-8 h-8 text-green-600" />,
    title: "TAGLIO NETTO (8CM)",
    text: (<span>Premi il grilletto e <strong className="font-black text-gray-900">tranci rami durissimi da 8cm</strong> in un secondo. Come tagliare il burro.</span>)
  },
  {
    icon: <Feather className="w-8 h-8 text-green-600" />,
    title: "LEGGERISSIMA (ZERO FATICA)",
    text: (<span>Pesa pochissimo. Puoi usarla <strong className="font-black text-gray-900">tutto il giorno senza avere dolori</strong> a braccia e schiena.</span>)
  },
  {
    icon: <Battery className="w-8 h-8 text-green-600" />,
    title: "BATTERIA INFINITA (8 ORE)",
    text: (<span>Lavori tutto il giorno senza fermarti. Includiamo <strong className="font-black text-gray-900">2 batterie per non lasciarti mai a piedi</strong>.</span>)
  },
  {
    icon: <Smile className="w-8 h-8 text-green-600" />,
    title: "FACILISSIMA DA USARE",
    text: (<span>Non serve essere esperti. <strong className="font-black text-gray-900">Inserisci la batteria e tagli</strong>. Ideale anche per chi è avanti con l'età.</span>)
  }
];

// Lista specifica per il box "Cosa c'è nella scatola"
export const WHATS_IN_BOX = [
  "2 Batterie 40V (Lunga Durata)",
  "Caricatore Rapido Industriale",
  "2 Lame di Ricambio SKS",
  "Valigia Trasporto Anti-Urto",
  "Kit Chiavi Manutenzione",
  "Manuale Italiano Semplificato"
];

// ==========================================
// 3. DIMOSTRAZIONE VISIVA (VIDEO MP4)
// ==========================================
export const VISUAL_PROOFS = [
  {
    title: "MOTORE TURBO 40V",
    desc: (
      <span>
        Sviluppa una potenza tale che <strong className="text-yellow-400">il ramo non ha scampo</strong>. Non si blocca mai, neanche sul legno secco.
      </span>
    ),
    video: "/images/lithiumpro-img/potenza-pura.mp4",
    label: "POTENZA PURA"
  },
  {
    title: "LAME ETERNE SKS",
    desc: (
      <span>
        Acciaio Giapponese affilato al laser. <strong className="text-yellow-400">Penetrano nel legno istantaneamente</strong> senza che tu debba fare forza.
      </span>
    ),
    video: "/images/lithiumpro-img/acciaio-sks.mp4",
    label: "ACCIAIO SKS"
  },
  {
    title: "FACILE E SICURA",
    desc: (
      <span>
        Impugnatura ergonomica. La usi con <strong className="text-yellow-400">una mano sola</strong> mentre con l'altra sposti i rami in sicurezza.
      </span>
    ),
    video: "/images/lithiumpro-img/facile-sicura.mp4",
    label: "100% SICURA"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Luigi M. - Pensionato",
    rating: 5,
    text: "Guardate quanta legna ho tagliato in meno di un'ora! Prima ci mettevo mezza giornata e mi bloccavo con la schiena. Questa forbice è un miracolo per noi anziani.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    date: "Ieri",
    reviewImage: "/images/lithiumpro-img/recensione-1.png"
  },
  {
    id: 2,
    name: "Marco T. - Giardiniere",
    rating: 5,
    text: "Uso attrezzatura professionale da anni e questa non ha nulla da invidiare a marche che costano il triplo. Taglio netto, batteria infinita. Allego foto del lavoro finito.",
    verified: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2 giorni fa",
    reviewImage: "/images/lithiumpro-img/recensione-2.png"
  },
  {
    id: 3,
    name: "Anna R.",
    rating: 5,
    text: "Arrivata puntualissima. La valigetta è comodissima e c'è davvero tutto, pure le chiavi per smontarla. Molto soddisfatta dell'acquisto.",
    verified: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "3 giorni fa",
    reviewImage: "/images/lithiumpro-img/recensione-3.png"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Taglia davvero rami grossi?",
    answer: "Sì, fino a 8cm di diametro. Il motore elettrico fa tutta la forza necessaria, tu devi solo premere il pulsante."
  },
  {
    question: "Quanto dura la batteria?",
    answer: "Con le 2 batterie incluse copri fino a 8 ore di lavoro continuo. Mentre ne usi una, l'altra si ricarica."
  },
  {
    question: "È pesante da tenere in mano?",
    answer: "Assolutamente no. Pesa meno di 1kg. È studiata apposta per non stancare il polso e la schiena."
  },
  {
    question: "La garanzia c'è?",
    answer: "Certamente. Garanzia Italiana di 2 Anni. Se hai problemi, te la sostituiamo gratis."
  }
];