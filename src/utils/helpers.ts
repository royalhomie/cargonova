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
  if (trackingNumber === 'XL2025YEMEN') {
    const trackingData: TrackingData = {
      trackingNumber,
      status: 'Delivered',
      currentLocation: 'Delivered to recipient - New York, NY',
      estimatedDelivery: 'November 25, 2025',
      history: [
        {
          date: 'November 23, 2025',
          time: '10:30 AM',
          location: 'Warehouse - Los Angeles, CA',
          status: 'Package received',
          description: 'Package received at origin facility'
        },
        {
          date: 'November 24, 2025',
          time: '2:15 PM',
          location: 'Sorting Facility - Phoenix, AZ',
          status: 'In Transit',
          description: 'Package in transit to destination'
        },
        {
          date: 'November 25, 2025',
          time: '8:45 AM',
          location: 'Distribution Center - New York, NY',
          status: 'Delivered',
          description: 'Package delivered successfully'
        }
      ]
    };
    return trackingData;
  } else if (trackingNumber === 'XL2025BRAZIL') {
    const trackingData: TrackingData = {
      trackingNumber,
      status: 'Delivered',
      currentLocation: 'Delivered to recipient - Santos Port, Brazil',
      estimatedDelivery: 'November 26, 2025',
      history: [
        {
          date: 'November 23, 2025',
          time: '10:30 AM',
          location: 'Sender Facility - Sanaa, Yemen',
          status: 'Package received',
          description: 'Package received from sender Garth Davis'
        },
        {
          date: 'November 24, 2025',
          time: '2:15 PM',
          location: 'Export Facility - Sanaa, Yemen',
          status: 'In Transit',
          description: 'Package cleared customs and prepared for international shipment'
        },
        {
          date: 'November 25, 2025',
          time: '8:45 AM',
          location: 'International Hub - Dubai, UAE',
          status: 'In Transit',
          description: 'Package arrived at international hub for transshipment'
        },
        {
          date: 'November 25, 2025',
          time: '3:20 PM',
          location: 'Distribution Center - Miami, FL',
          status: 'In Transit',
          description: 'Package arrived at US distribution center'
        },
        {
          date: 'November 26, 2025',
          time: '11:30 AM',
          location: 'International Hub - Houston, TX',
          status: 'In Transit',
          description: 'Package shipped to destination country'
        },
        {
          date: 'November 26, 2025',
          time: '6:15 PM',
          location: 'Distribution Center - Santos, Brazil',
          status: 'Out for Delivery',
          description: 'Package arrived at destination distribution center'
        },
        {
          date: 'November 26, 2025',
          time: '8:30 PM',
          location: 'Santos Port, Brazil',
          status: 'Delivered',
          description: 'Package delivered to recipient Marileide Dias Lourenco at 1072 Bella Street, President Prudente, Brazil'
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
