import React from 'react';
import { MapPin } from 'lucide-react';

const NeighborhoodMap: React.FC = () => {
  const formattedAddress = "123 Main St, Sample City, CA 90000";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formattedAddress)}`;

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="bg-gray-200 h-64 flex items-center justify-center relative">
        <div className="text-center p-6 bg-white bg-opacity-90 rounded-lg">
          <MapPin size={32} className="mx-auto mb-2 text-primary-600" />
          <h3 className="font-medium text-lg mb-1">Downtown</h3>
          <p className="text-gray-600 mb-4">{formattedAddress}</p>
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white rounded-md px-4 py-2 transition-colors"
          >
            View on Google Maps
          </a>
        </div>
        
        <div className="absolute inset-0 bg-gray-900 opacity-10"></div>
        
        {/* Map markers for illustration */}
        <div className="absolute top-1/4 left-1/3">
          <MapPin size={20} className="text-primary-600" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <MapPin size={20} className="text-accent-600" />
        </div>
        <div className="absolute bottom-1/4 right-1/3">
          <MapPin size={20} className="text-accent-600" />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <MapPin size={24} className="text-primary-800" />
        </div>
      </div>
      
      <div className="p-4 bg-white">
        <h3 className="font-semibold mb-2">Neighborhood Features</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Schools: Lincoln Elementary (0.5 mi), Washington High (1.2 mi)</li>
          <li>• Parks: Central Park (0.3 mi), Riverside Walking Trail (0.8 mi)</li>
          <li>• Shopping: Downtown Mall (1.0 mi), Market Square (1.5 mi)</li>
          <li>• Transit: Bus Station (0.4 mi), Metro Station (1.1 mi)</li>
        </ul>
      </div>
    </div>
  );
};

export default NeighborhoodMap;

// Usage example (uncomment and provide actual property data in your app):
// <NeighborhoodMap
//   address={{
//     street: "123 Main St",
//     city: "Sample City",
//     state: "CA",
//     zipCode: "90000",
//     neighborhood: "Downtown",
//   }}
//   features={{
//     schools: ['Lincoln Elementary (0.5 mi)', 'Washington High (1.2 mi)'],
//     parks: ['Central Park (0.3 mi)', 'Riverside Walking Trail (0.8 mi)'],
//     shopping: ['Downtown Mall (1.0 mi)', 'Market Square (1.5 mi)'],
//     transit: ['Bus Station (0.4 mi)', 'Metro Station (1.1 mi)'],
//   }}
// />