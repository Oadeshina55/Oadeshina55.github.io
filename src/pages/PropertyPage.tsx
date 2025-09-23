import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  Car, 
  CheckCircle, 
  Share2, 
  Printer, 
  Heart, 
  ArrowLeft, 
  MapPin,
  Download
} from 'lucide-react';
import ImageGallery from '../components/features/ImageGallery';
import AgentContactForm from '../components/features/AgentContactForm';
import NeighborhoodMap from '../components/features/NeighborhoodMap';
import PropertyCard from '../components/common/PropertyCard';
import Button from '../components/common/Button';
import { Property } from '../types';
import { getPropertyById, getRelatedProperties, formatPrice } from '../data/properties';

const PropertyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [relatedProperties, setRelatedProperties] = useState<Property[]>([]);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (id) {
      const foundProperty = getPropertyById(id);
      if (foundProperty) {
        setProperty(foundProperty);
        setRelatedProperties(getRelatedProperties(id, 3));
      }
      // Scroll to top when property changes
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <p className="mb-6">Sorry, we couldn't find the property you're looking for.</p>
          <Link 
            to="/properties"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white rounded-md px-4 py-2 transition-colors"
          >
            Browse All Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Property Header */}
      <div className="bg-primary-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
            <div>
              <Link 
                to="/properties" 
                className="inline-flex items-center text-primary-200 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back to Properties
              </Link>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{property.title}</h1>
              <div className="flex items-center text-primary-200 mb-1">
                <MapPin size={16} className="mr-1 flex-shrink-0" />
                <span>
                  {property.address.street}, {property.address.city}, {property.address.state} {property.address.zipCode}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="bg-primary-800 text-white px-3 py-1 rounded-full text-sm capitalize">
                  {property.status.replace('-', ' ')}
                </span>
                <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-sm capitalize">
                  {property.type}
                </span>
                <span className="bg-primary-800 text-white px-3 py-1 rounded-full text-sm">
                  ID: {property.id}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-start lg:items-end">
              <div className="text-3xl font-bold text-white mb-2">
                {formatPrice(property.price)}
              </div>
              <div className="flex gap-2">
                <button 
                  className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all text-white"
                  aria-label="Share property"
                >
                  <Share2 size={20} />
                </button>
                <button 
                  className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all text-white"
                  aria-label="Print property details"
                >
                  <Printer size={20} />
                </button>
                <button 
                  className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all text-white"
                  aria-label="Save to favorites"
                >
                  <Heart size={20} />
                </button>
                <button 
                  className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all text-white"
                  aria-label="Download property details"
                >
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Property Images */}
            <div className="mb-8">
              <ImageGallery images={property.images} title={property.title} />
            </div>
            
            {/* Property Overview */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Property Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-2">
                    <Bed size={24} className="text-primary-600" />
                  </div>
                  <div className="text-gray-800 font-medium">{property.bedrooms} Bedrooms</div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-2">
                    <Bath size={24} className="text-primary-600" />
                  </div>
                  <div className="text-gray-800 font-medium">{property.bathrooms} Bathrooms</div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-2">
                    <Square size={24} className="text-primary-600" />
                  </div>
                  <div className="text-gray-800 font-medium">{property.squareFeet.toLocaleString()} sq ft</div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-2">
                    <Car size={24} className="text-primary-600" />
                  </div>
                  <div className="text-gray-800 font-medium">{property.parkingSpaces} Parking</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Details</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex">
                      <span className="w-1/2">Property Type:</span>
                      <span className="w-1/2 font-medium capitalize">{property.type}</span>
                    </li>
                    <li className="flex">
                      <span className="w-1/2">Status:</span>
                      <span className="w-1/2 font-medium capitalize">{property.status.replace('-', ' ')}</span>
                    </li>
                    <li className="flex">
                      <span className="w-1/2">Year Built:</span>
                      <span className="w-1/2 font-medium">{property.yearBuilt}</span>
                    </li>
                    <li className="flex">
                      <span className="w-1/2">Neighborhood:</span>
                      <span className="w-1/2 font-medium">{property.address.neighborhood}</span>
                    </li>
                    <li className="flex">
                      <span className="w-1/2">Listing Date:</span>
                      <span className="w-1/2 font-medium">
                        {new Date(property.createdAt).toLocaleDateString()}
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-gray-600">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle size={16} className="text-primary-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`px-6 py-3 font-medium text-sm transition-colors ${
                    activeTab === 'description' 
                      ? 'text-primary-600 border-b-2 border-primary-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`px-6 py-3 font-medium text-sm transition-colors ${
                    activeTab === 'details' 
                      ? 'text-primary-600 border-b-2 border-primary-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Additional Details
                </button>
                <button
                  onClick={() => setActiveTab('location')}
                  className={`px-6 py-3 font-medium text-sm transition-colors ${
                    activeTab === 'location' 
                      ? 'text-primary-600 border-b-2 border-primary-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Location
                </button>
              </div>
              
              <div className="p-6">
                {activeTab === 'description' && (
                  <div className="prose max-w-none">
                    <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
                  </div>
                )}
                
                {activeTab === 'details' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Interior Details</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-600">
                        <li className="flex">
                          <span className="w-1/2">Bedrooms:</span>
                          <span className="w-1/2">{property.bedrooms}</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Bathrooms:</span>
                          <span className="w-1/2">{property.bathrooms}</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Floor Area:</span>
                          <span className="w-1/2">{property.squareFeet.toLocaleString()} sq ft</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Basement:</span>
                          <span className="w-1/2">Finished</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Flooring:</span>
                          <span className="w-1/2">Hardwood, Tile</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Heating:</span>
                          <span className="w-1/2">Forced Air</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Cooling:</span>
                          <span className="w-1/2">Central AC</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Fireplaces:</span>
                          <span className="w-1/2">2</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Exterior Details</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-600">
                        <li className="flex">
                          <span className="w-1/2">Lot Size:</span>
                          <span className="w-1/2">0.5 acres</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Parking:</span>
                          <span className="w-1/2">{property.parkingSpaces} spaces</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Roof:</span>
                          <span className="w-1/2">Slate</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Construction:</span>
                          <span className="w-1/2">Brick, Stone</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Utilities</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-600">
                        <li className="flex">
                          <span className="w-1/2">Water:</span>
                          <span className="w-1/2">City</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Sewer:</span>
                          <span className="w-1/2">City</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Electric:</span>
                          <span className="w-1/2">200 Amp</span>
                        </li>
                        <li className="flex">
                          <span className="w-1/2">Gas:</span>
                          <span className="w-1/2">Natural</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'location' && (
                  <div>
                    <NeighborhoodMap address={property.address} />
                    <div className="mt-6">
                      <h3 className="font-semibold text-lg mb-3">Neighborhood Information</h3>
                      <p className="text-gray-600 mb-4">
                        {property.address.neighborhood} is a sought-after location known for its excellent schools, beautiful parks, and convenient access to shopping and dining. The neighborhood features tree-lined streets, a strong sense of community, and a mix of architectural styles.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-600">
                        <div className="flex">
                          <span className="w-1/2">Walk Score:</span>
                          <span className="w-1/2">78/100 (Very Walkable)</span>
                        </div>
                        <div className="flex">
                          <span className="w-1/2">Transit Score:</span>
                          <span className="w-1/2">65/100 (Good Transit)</span>
                        </div>
                        <div className="flex">
                          <span className="w-1/2">School District:</span>
                          <span className="w-1/2">Washington Unified</span>
                        </div>
                        <div className="flex">
                          <span className="w-1/2">Crime Rate:</span>
                          <span className="w-1/2">Low</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Virtual Tour / Video */}
            {(property.virtualTour || property.video) && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Virtual Experience</h2>
                
                {property.video && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Property Video</h3>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Video Player Placeholder</p>
                    </div>
                  </div>
                )}
                
                {property.virtualTour && (
                  <div>
                    <h3 className="text-lg font-medium mb-3">Virtual Tour</h3>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Virtual Tour Placeholder</p>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Related Properties */}
            {relatedProperties.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Similar Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProperties.map(relatedProperty => (
                    <PropertyCard key={relatedProperty.id} property={relatedProperty} />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Agent Contact Form */}
            <AgentContactForm agent={property.agent} propertyTitle={property.title} />
            
            {/* Agent Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Listed By</h3>
              <div className="flex items-center mb-4">
                <img 
                  src={property.agent.photo} 
                  alt={property.agent.name} 
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-lg">{property.agent.name}</p>
                  <p className="text-gray-600">{property.agent.title}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">{property.agent.bio}</p>
              <Link 
                to={`/agents/${property.agent.id}`}
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                View Agent Profile
                <ArrowLeft size={16} className="ml-1 rotate-180" />
              </Link>
            </div>
            
            {/* Mortgage Calculator */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Mortgage Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Home Price
                  </label>
                  <input
                    type="text"
                    value={formatPrice(property.price)}
                    disabled
                    className="w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Down Payment (20%)
                  </label>
                  <input
                    type="text"
                    value={formatPrice(property.price * 0.2)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Term
                  </label>
                  <select
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
                  >
                    <option>30 Years</option>
                    <option>20 Years</option>
                    <option>15 Years</option>
                    <option>10 Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interest Rate
                  </label>
                  <input
                    type="text"
                    defaultValue="4.5%"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
                  />
                </div>
                <div className="pt-2">
                  <Button variant="primary" fullWidth>
                    Calculate
                  </Button>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Estimated Monthly:</span>
                    <span className="font-semibold text-lg">{formatPrice(property.price * 0.005)}</span>
                  </div>
                  <p className="text-gray-500 text-xs">
                    * This is an estimate. Contact a mortgage professional for an accurate quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;