import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { Property } from '../../types';
import { formatPrice } from '../../data/properties';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  const { id, title, address, price, bedrooms, bathrooms, squareFeet, images, status, type } = property;

  return (
    <div 
      className={`relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group ${
        featured ? 'transform hover:-translate-y-1 transition-transform' : ''
      }`}
    >
      <Link to={`/properties/${id}`} className="block relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img 
          src={images[0]} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded capitalize">
            {status.replace('-', ' ')}
          </span>
          <span className="bg-accent-600 text-white text-xs px-2 py-1 rounded capitalize">
            {type}
          </span>
        </div>
        
        <button 
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center transition-colors hover:bg-white"
          aria-label="Add to favorites"
        >
          <Heart size={16} className="text-gray-600" />
        </button>
      </Link>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 mb-1 hover:text-primary-600 transition-colors">
              <Link to={`/properties/${id}`}>{title}</Link>
            </h3>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <MapPin size={14} className="mr-1 text-gray-400 flex-shrink-0" />
              <span className="line-clamp-1">
                {address.street}, {address.city}, {address.state} {address.zipCode}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-accent-700 font-semibold text-lg mb-3">
          {formatPrice(price)}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 text-gray-600">
            <div className="flex items-center">
              <Bed size={16} className="mr-1" />
              <span className="text-sm">{bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-1" />
              <span className="text-sm">{bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square size={16} className="mr-1" />
              <span className="text-sm">{squareFeet.toLocaleString()} sq ft</span>
            </div>
          </div>
          
          {featured && (
            <span className="bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;