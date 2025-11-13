import { Service, TeamMember } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Express Shipping',
    description: 'Fast and reliable express shipping services for time-sensitive deliveries worldwide.',
    icon: 'Zap',
    features: [
      'Same-day delivery available',
      'Real-time tracking',
      '24/7 customer support',
      'International coverage'
    ]
  },
  {
    id: '2',
    title: 'Warehousing Solutions',
    description: 'Secure and efficient warehousing facilities with climate control and advanced security.',
    icon: 'Warehouse',
    features: [
      'Climate-controlled storage',
      'Inventory management',
      'Security monitoring',
      'Flexible storage plans'
    ]
  },
  {
    id: '3',
    title: 'Freight Forwarding',
    description: 'Comprehensive freight forwarding services for air, sea, and land transportation.',
    icon: 'Ship',
    features: [
      'Multi-modal transport',
      'Customs clearance',
      'Documentation handling',
      'Cargo insurance'
    ]
  },
  {
    id: '4',
    title: 'Last-Mile Delivery',
    description: 'Efficient last-mile delivery solutions ensuring packages reach customers quickly.',
    icon: 'Truck',
    features: [
      'Route optimization',
      'Flexible delivery windows',
      'Proof of delivery',
      'Returns management'
    ]
  },
  {
    id: '5',
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain management solutions to optimize your logistics operations.',
    icon: 'Network',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Vendor management',
      'Analytics & reporting'
    ]
  },
  {
    id: '6',
    title: 'E-commerce Fulfillment',
    description: 'Complete e-commerce fulfillment services from order processing to delivery.',
    icon: 'ShoppingCart',
    features: [
      'Order processing',
      'Pick & pack services',
      'Returns handling',
      'Integration with platforms'
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'With over 20 years in logistics, Sarah leads ExLead with vision and innovation.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Chief Operations Officer',
    bio: 'Michael ensures seamless operations across all our logistics networks worldwide.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Head of Technology',
    bio: 'Emily drives our digital transformation and technology innovation initiatives.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  },
  {
    id: '4',
    name: 'David Park',
    role: 'VP of Customer Success',
    bio: 'David ensures our customers receive exceptional service and support at every touchpoint.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Director of Sustainability',
    bio: 'Lisa leads our environmental initiatives and sustainable logistics practices.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop'
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Head of Warehousing',
    bio: 'James manages our global network of warehouses and distribution centers.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  }
];
