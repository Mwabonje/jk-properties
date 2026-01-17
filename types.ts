export type PropertyType = 'Villa' | 'Apartment' | 'Office' | 'Bungalow' | 'Land';
export type ListingType = 'Sale' | 'Rent';

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: PropertyType;
  listingType: ListingType;
  bedrooms?: number;
  bathrooms?: number;
  sqft: number;
  description: string;
  imageUrl: string;
  images: string[];
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface BookingRequest {
  propertyId?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}
