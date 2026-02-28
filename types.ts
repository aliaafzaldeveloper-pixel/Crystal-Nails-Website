
export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
  category: 'Manicure' | 'Pedicure' | 'Enhancements' | 'Treatments';
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  category: 'Nail Art' | 'Interior' | 'Mani-Pedi' | 'Bridal';
  imageUrl: string;
  title: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  paymentMethod: 'Credit Card' | 'In-Person';
  message?: string;
}
