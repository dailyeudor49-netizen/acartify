import React from 'react';

export interface ReviewType {
  id: number;
  name: string;
  role: string;
  content: string;
  stars: number;
  image: string;
  verified: boolean;
}

export interface FeatureType {
  title: string;
  description: string;
  icon: React.ReactNode;
}