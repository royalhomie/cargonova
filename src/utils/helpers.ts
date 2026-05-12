import { TrackingData } from '../types';

// Simulate tracking data lookup
export const getTrackingData = (trackingNumber: string): TrackingData | null => {
  // Save to localStorage for persistence
  const savedData = localStorage.getItem(`tracking_${trackingNumber}`);
  
  if (savedData) {
    return JSON.parse(savedData);
  }

  // Mock tracking data based on tracking number pattern
  if (trackingNumber.length < 8) {
    return null;
  }

  // Special tracking numbers for the specific package
  if (trackingNumber === 'B274Q63F') {
    const trackingData: TrackingData = {
      trackingNumber,
      status: 'Delivered',
      currentLocation: 'Delivered to recipient - Manila, Philippines',
      estimatedDelivery: '05/12/2026',
      history: [
        {
          date: '05/11/2026',
          time: '9:30 AM',
          location: 'Sender Facility - Damascus, Syria',
          status: 'Package received',
          description: 'Package received from sender Ezequiel Blanco Syria'
        },
        {
          date: '05/11/2026',
          time: '2:15 PM',
          location: 'Export Facility - Damascus, Syria',
          status: 'In Transit',
          description: 'Package cleared customs and prepared for export to Dubai'
        },
        {
          date: '05/11/2026',
          time: '11:20 PM',
          location: 'International Hub - Dubai, UAE',
          status: 'In Transit',
          description: 'Package arrived at Dubai hub for onward flight to India'
        },
        {
          date: '05/12/2026',
          time: '5:05 AM',
          location: 'Transit Hub - Mumbai, India',
          status: 'In Transit',
          description: 'Package cleared customs in India and continues toward Singapore'
        },
        {
          date: '05/12/2026',
          time: '9:10 AM',
          location: 'Transit Hub - Singapore',
          status: 'In Transit',
          description: 'Package arrived in Singapore and is preparing for final delivery to the Philippines'
        }
        ,
        {
          date: '05/12/2026',
          time: '5:45 PM',
          location: 'Receiver Address - Manila, Philippines',
          status: 'Delivered',
          description: 'Package delivered successfully to Bediones Christine'
        }
      ]
    };
    return trackingData;
  }
  
  const statuses: TrackingData['status'][] = ['Pending', 'In Transit', 'Out for Delivery', 'Delivered', 'Exception'];
  const statusIndex = trackingNumber.charCodeAt(0) % statuses.length;
  const status = statuses[statusIndex];

  const trackingData: TrackingData = {
    trackingNumber,
    status,
    currentLocation: status === 'Delivered' ? 'Delivered to recipient' : 'Distribution Center - New York, NY',
    estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    history: [
      {
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        time: '10:30 AM',
        location: 'Warehouse - Los Angeles, CA',
        status: 'Package received',
        description: 'Package received at origin facility'
      },
      {
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        time: '2:15 PM',
        location: 'Sorting Facility - Phoenix, AZ',
        status: 'In Transit',
        description: 'Package in transit to destination'
      },
      {
        date: new Date().toLocaleDateString(),
        time: '8:45 AM',
        location: 'Distribution Center - New York, NY',
        status: status,
        description: status === 'Delivered' ? 'Package delivered successfully' : 'Package arrived at distribution center'
      }
    ]
  };

  // Save to localStorage
  localStorage.setItem(`tracking_${trackingNumber}`, JSON.stringify(trackingData));

  return trackingData;
};

// Validate tracking number format
export const validateTrackingNumber = (trackingNumber: string): boolean => {
  // Simple validation: alphanumeric, 8-20 characters
  const regex = /^[A-Z0-9]{8,20}$/i;
  return regex.test(trackingNumber);
};

// Format date
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Scroll to element
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
