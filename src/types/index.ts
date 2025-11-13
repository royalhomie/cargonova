export interface TrackingData {
  trackingNumber: string;
  status: 'Pending' | 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Exception';
  currentLocation: string;
  estimatedDelivery: string;
  history: TrackingEvent[];
}

export interface TrackingEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
