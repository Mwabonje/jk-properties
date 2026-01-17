import { Property, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Oceanfront Villa',
    price: 45000000,
    location: 'Casuarina, Malindi',
    type: 'Villa',
    listingType: 'Sale',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 4500,
    description: 'Experience the pinnacle of coastal luxury in this breathtaking 5-bedroom villa located in the prestigious Casuarina area. Featuring a private infinity pool, direct beach access, and lush tropical gardens.',
    imageUrl: 'https://picsum.photos/id/10/800/600',
    images: ['https://picsum.photos/id/10/800/600', 'https://picsum.photos/id/11/800/600', 'https://picsum.photos/id/12/800/600'],
    features: ['Ocean View', 'Swimming Pool', 'Garden', 'Security', 'Staff Quarters'],
    isFeatured: true,
    agent: {
      name: 'Sarah Johnson',
      phone: '+254 712 345 678',
      email: 'sarah@jkproperties.co.ke',
      image: 'https://picsum.photos/id/64/100/100'
    }
  },
  {
    id: '2',
    title: 'Modern City Apartment',
    price: 85000,
    location: 'Malindi Town, CBD',
    type: 'Apartment',
    listingType: 'Rent',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    description: 'A sleek and modern 2-bedroom apartment in the heart of Malindi. Perfect for professionals, this unit offers high-speed internet, 24/7 security, and proximity to all major amenities.',
    imageUrl: 'https://picsum.photos/id/14/800/600',
    images: ['https://picsum.photos/id/14/800/600', 'https://picsum.photos/id/15/800/600'],
    features: ['Gym', 'Parking', 'Elevator', 'Air Conditioning'],
    isFeatured: true,
    agent: {
      name: 'David Kimani',
      phone: '+254 722 987 654',
      email: 'david@jkproperties.co.ke',
      image: 'https://picsum.photos/id/91/100/100'
    }
  },
  {
    id: '3',
    title: 'Cozy Beach Bungalow',
    price: 18000000,
    location: 'Mayungu, Malindi',
    type: 'Bungalow',
    listingType: 'Sale',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    description: 'A charming retreat nestled in the quiet Mayungu neighborhood. This bungalow features traditional Swahili architecture with modern comforts.',
    imageUrl: 'https://picsum.photos/id/28/800/600',
    images: ['https://picsum.photos/id/28/800/600', 'https://picsum.photos/id/29/800/600'],
    features: ['Veranda', 'Garden', 'Water Tanks', 'Quiet Neighborhood'],
    agent: {
      name: 'Sarah Johnson',
      phone: '+254 712 345 678',
      email: 'sarah@jkproperties.co.ke',
      image: 'https://picsum.photos/id/64/100/100'
    }
  },
  {
    id: '4',
    title: 'Prime Office Space',
    price: 150000,
    location: 'Lamu Road, Malindi',
    type: 'Office',
    listingType: 'Rent',
    bedrooms: 0,
    bathrooms: 2,
    sqft: 800,
    description: 'Premium office space available for rent on the busy Lamu Road. High visibility, ample parking for clients, and backup generator.',
    imageUrl: 'https://picsum.photos/id/48/800/600',
    images: ['https://picsum.photos/id/48/800/600'],
    features: ['High Visibility', 'Parking', 'Backup Generator', 'Fibre Ready'],
    agent: {
      name: 'David Kimani',
      phone: '+254 722 987 654',
      email: 'david@jkproperties.co.ke',
      image: 'https://picsum.photos/id/91/100/100'
    }
  },
  {
    id: '5',
    title: 'Sunset View Penthouse',
    price: 35000000,
    location: 'Silversands, Malindi',
    type: 'Apartment',
    listingType: 'Sale',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    description: 'Luxurious penthouse with panoramic views of the Indian Ocean. Exclusive access to rooftop lounge and pool.',
    imageUrl: 'https://picsum.photos/id/59/800/600',
    images: ['https://picsum.photos/id/59/800/600'],
    features: ['Ocean View', 'Rooftop Pool', 'Smart Home', 'Concierge'],
    isFeatured: true,
    agent: {
      name: 'Sarah Johnson',
      phone: '+254 712 345 678',
      email: 'sarah@jkproperties.co.ke',
      image: 'https://picsum.photos/id/64/100/100'
    }
  },
  {
    id: '6',
    title: 'Half Acre Plot',
    price: 4500000,
    location: 'Ganda, Malindi',
    type: 'Land',
    listingType: 'Sale',
    bedrooms: 0,
    bathrooms: 0,
    sqft: 21780,
    description: 'Ideal residential plot in the developing area of Ganda. Ready title deed, electricity and water on site.',
    imageUrl: 'https://picsum.photos/id/74/800/600',
    images: ['https://picsum.photos/id/74/800/600'],
    features: ['Title Deed', 'Fenced', 'Utilities Available'],
    agent: {
      name: 'David Kimani',
      phone: '+254 722 987 654',
      email: 'david@jkproperties.co.ke',
      image: 'https://picsum.photos/id/91/100/100'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Mwangi',
    role: 'Home Buyer',
    content: 'JK Properties made finding my dream retirement home in Malindi seamless. Their team is professional and transparent.',
    image: 'https://picsum.photos/id/1005/100/100'
  },
  {
    id: '2',
    name: 'Anita Patel',
    role: 'Property Investor',
    content: 'I have worked with many brokers, but JK stands out for their market knowledge and integrity. Highly recommended.',
    image: 'https://picsum.photos/id/338/100/100'
  },
  {
    id: '3',
    name: 'John Smith',
    role: 'Tenant',
    content: 'Found a great apartment within my budget in record time. The viewing process was very efficient.',
    image: 'https://picsum.photos/id/1025/100/100'
  }
];
