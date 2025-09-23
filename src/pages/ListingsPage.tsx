import React, { useState, useEffect } from 'react';
import { List, Grid, ArrowDownAZ, ArrowUpZA, Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import SearchFilters from '../components/common/SearchFilters';
import PropertyCard from '../components/common/PropertyCard';
import Button from '../components/common/Button';
import { Property, SearchFilters as SearchFiltersType } from '../types';
import { filterProperties } from '../data/properties';

const ListingsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [isGridView, setIsGridView] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('newest');

  // Extract any initial filters from URL params
  const getInitialFilters = (): SearchFiltersType => {
    const initialFilters: SearchFiltersType = {};
    if (searchParams.get('location')) initialFilters.location = searchParams.get('location') || undefined;
    if (searchParams.get('type')) initialFilters.type = searchParams.get('type') || undefined;
    if (searchParams.get('status')) initialFilters.status = searchParams.get('status') || undefined;
    if (searchParams.get('minPrice')) initialFilters.minPrice = Number(searchParams.get('minPrice')) || undefined;
    if (searchParams.get('maxPrice')) initialFilters.maxPrice = Number(searchParams.get('maxPrice')) || undefined;
    if (searchParams.get('bedrooms')) initialFilters.bedrooms = Number(searchParams.get('bedrooms')) || undefined;
    if (searchParams.get('bathrooms')) initialFilters.bathrooms = Number(searchParams.get('bathrooms')) || undefined;
    return initialFilters;
  };

  const handleSearch = (filters: SearchFiltersType) => {
    // Update URL with filters
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        params.set(key, value.toString());
      }
    });
    setSearchParams(params);

    // Apply filters
    const filteredProperties = filterProperties(filters);
    
    // Apply sorting
    sortProperties(filteredProperties, sortOption);
  };

  const sortProperties = (props: Property[], sort: string) => {
    let sortedProperties = [...props];
    
    switch (sort) {
      case 'price-asc':
        sortedProperties.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedProperties.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sortedProperties.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        sortedProperties.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'beds-desc':
        sortedProperties.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case 'size-desc':
        sortedProperties.sort((a, b) => b.squareFeet - a.squareFeet);
        break;
      default:
        break;
    }
    
    setProperties(sortedProperties);
  };

  const toggleView = (isGrid: boolean) => {
    setIsGridView(isGrid);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSortOption(option);
    sortProperties(properties, option);
  };

  useEffect(() => {
    const initialFilters = getInitialFilters();
    const filteredProperties = filterProperties(initialFilters);
    sortProperties(filteredProperties, sortOption);
  }, [searchParams]);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary-900 py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Browse Properties</h1>
          <p className="text-primary-200 max-w-2xl">
            Explore our collection of exceptional properties, from modern urban apartments to luxurious countryside estates
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <Button 
            variant="outline" 
            onClick={toggleFilter}
            icon={<Filter size={16} />}
            fullWidth
          >
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div 
            className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block animate-fade-in`}
          >
            <div className="sticky top-24">
              <SearchFilters 
                onSearch={handleSearch} 
                initialFilters={getInitialFilters()}
              />
            </div>
          </div>
          
          {/* Property Listings */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{properties.length}</span> properties
              </p>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <select 
                  className="border border-gray-300 rounded-md text-gray-600 h-10 px-3 bg-white flex-1 sm:flex-none"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="beds-desc">Most Bedrooms</option>
                  <option value="size-desc">Largest Size</option>
                </select>
                
                <div className="bg-white border border-gray-300 rounded-md flex">
                  <button 
                    onClick={() => toggleView(true)}
                    className={`p-2 ${isGridView ? 'bg-primary-50 text-primary-600' : 'text-gray-500'}`}
                    aria-label="Grid view"
                  >
                    <Grid size={20} />
                  </button>
                  <button 
                    onClick={() => toggleView(false)}
                    className={`p-2 ${!isGridView ? 'bg-primary-50 text-primary-600' : 'text-gray-500'}`}
                    aria-label="List view"
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Results */}
            {properties.length === 0 ? (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-gray-600 mb-4">No properties found matching your criteria.</p>
                <Button 
                  variant="primary" 
                  onClick={() => handleSearch({})}
                >
                  Clear Filters
                </Button>
              </div>
            ) : isGridView ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} featured={property.isFeatured} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {properties.map((property) => (
                  <div key={property.id} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="md:w-1/3 relative">
                      <img 
                        src={property.images[0]} 
                        alt={property.title}
                        className="w-full h-60 md:h-full object-cover"
                      />
                      {property.isFeatured && (
                        <span className="absolute top-4 left-4 bg-accent-600 text-white text-xs px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                      <p className="text-gray-600 mb-2">
                        {property.address.street}, {property.address.city}, {property.address.state}
                      </p>
                      <p className="text-accent-700 font-semibold text-xl mb-3">
                        ${property.price.toLocaleString()}
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <span>{property.bedrooms} Beds</span>
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.squareFeet.toLocaleString()} sq ft</span>
                        <span className="capitalize">{property.type}</span>
                      </div>
                      <p className="text-gray-600 line-clamp-2 mb-4">{property.description}</p>
                      <Button variant="primary" as="link" to={`/properties/${property.id}`}>
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;