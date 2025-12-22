import React from 'react';

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  verified: boolean;
  image: string;
  date: string;
  reviewImage?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}
