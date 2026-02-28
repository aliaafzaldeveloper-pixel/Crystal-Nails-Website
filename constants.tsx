
import React from 'react';
import { Service, Review, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: 'CRYSTAL NAILS SALON',
  address: '848 Washington St, Norwood, MA 02062, US',
  phone: '+1 (781) 555-0123',
  email: 'hello@crystalnailsnorwood.com',
  hours: '10:00 AM - 10:00 PM (Daily)',
  rating: 4.6,
  reviewCount: 150,
  whatsapp: '17815550123'
};

export const SERVICES: Service[] = [
  {
    id: 'classic-mani',
    name: 'Classic Manicure',
    price: 25,
    duration: 30,
    category: 'Manicure',
    description: 'Perfect nail shaping, meticulous cuticle care, and professional polish application.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spa-mani',
    name: 'Spa Manicure',
    price: 40,
    duration: 45,
    category: 'Manicure',
    description: 'A luxurious ritual featuring a deep-cleansing sugar scrub and hydrating mask.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'classic-pedi',
    name: 'Classic Pedicure',
    price: 30,
    duration: 40,
    category: 'Pedicure',
    description: 'Refreshing foot soak followed by callus smoothing and expert polishing.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13df772ec2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'spa-pedi',
    name: 'Spa Pedicure',
    price: 50,
    duration: 60,
    category: 'Pedicure',
    description: 'A therapeutic journey with aromatic oils and a hot stone foot massage.',
    image: 'https://images.unsplash.com/photo-1519415510270-345856417539?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gel-nails',
    name: 'Gel Builder',
    price: 50,
    duration: 60,
    category: 'Enhancements',
    description: 'High-gloss finish that remains flawless and chip-free for up to 4 weeks.',
    image: 'https://images.unsplash.com/photo-1604654894610-df4906687cb5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'acrylic-nails',
    name: 'Luxury Acrylics',
    price: 60,
    duration: 75,
    category: 'Enhancements',
    description: 'Elegant extensions customized to your preferred shape and length.',
    image: 'https://images.unsplash.com/photo-1607691503525-f7562d47f82a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nail-art',
    name: 'Bespoke Nail Art',
    price: 35,
    duration: 45,
    category: 'Treatments',
    description: 'Intricate hand-painted designs and delicate crystal embellishments.',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nail-treatments',
    name: 'Keratin Repair',
    price: 45,
    duration: 45,
    category: 'Treatments',
    description: 'Strengthen and restore damaged nails with our signature keratin treatment.',
    image: 'https://images.unsplash.com/photo-1600057033583-0c7f13c6168e?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    rating: 5,
    comment: 'The atmosphere is so tranquil and the attention to detail is unmatched. Truly the gold standard for Norwood.',
    date: '2 weeks ago',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '2',
    author: 'Michael R.',
    rating: 5,
    comment: 'Extremely professional environment. The technicians are true artists. Best manicure I have ever had.',
    date: '1 month ago',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '3',
    author: 'Emily Chen',
    rating: 5,
    comment: 'Crystal Nails is my weekly sanctuary. Their nail art is always trending and execution is flawless.',
    date: '3 days ago',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', category: 'Nail Art', imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800', title: 'Minimalist Chic' },
  { id: 'g2', category: 'Bridal', imageUrl: 'https://images.unsplash.com/photo-1607691503525-f7562d47f82a?auto=format&fit=crop&q=80&w=800', title: 'Eternal French' },
  { id: 'g3', category: 'Interior', imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200', title: 'The Sanctuary' },
  { id: 'g4', category: 'Nail Art', imageUrl: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800', title: 'Modern Marble' },
  { id: 'g5', category: 'Mani-Pedi', imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800', title: 'Rose Petal Soak' },
  { id: 'g6', category: 'Bridal', imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13df772ec2?auto=format&fit=crop&q=80&w=800', title: 'Pearl Whispers' }
];
