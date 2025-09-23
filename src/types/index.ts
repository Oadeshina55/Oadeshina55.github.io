export interface Property {
  id: string;
  title: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    neighborhood: string;
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  description: string;
  features: string[];
  type: 'house' | 'apartment' | 'condo' | 'townhouse' | 'villa' | 'land';
  status: 'for-sale' | 'for-rent' | 'sold' | 'pending';
  yearBuilt: number;
  parkingSpaces: number;
  images: string[];
  video?: string;
  virtualTour?: string;
  agent: Agent;
  createdAt: string;
  isFeatured: boolean;
  tags: string[];
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
  bio: string;
  specialties: string[];
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  properties: string[]; // IDs of properties
}

export interface SearchFilters {
  location?: string;
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  minSquareFeet?: number;
  maxSquareFeet?: number;
  features?: string[];
}