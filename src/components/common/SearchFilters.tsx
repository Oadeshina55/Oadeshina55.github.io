import React, { useState } from 'react';
import { Search, Sliders, X } from 'lucide-react';
import { SearchFilters as SearchFiltersType } from '../../types';
import Button from './Button';

interface SearchFiltersProps {
  onSearch: (filters: SearchFiltersType) => void;
  initialFilters?: SearchFiltersType;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, initialFilters = {} }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filters, setFilters] = useState<SearchFiltersType>(initialFilters);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'number') {
      setFilters(prev => ({ ...prev, [name]: value ? Number(value) : undefined }));
    } else {
      setFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({});
    onSearch({});
  };

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                id="location"
                name="location"
                placeholder="City, State, or Neighborhood"
                value={filters.location || ''}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 pl-10 py-2 border"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select
                id="type"
                name="type"
                value={filters.type || ''}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
              >
                <option value="">Any Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="villa">Villa</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={filters.status || ''}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
              >
                <option value="">Any Status</option>
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Min Price
              </label>
              <select
                id="minPrice"
                name="minPrice"
                value={filters.minPrice || ''}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
              >
                <option value="">No Min</option>
                <option value="100000">$100,000</option>
                <option value="250000">$250,000</option>
                <option value="500000">$500,000</option>
                <option value="750000">$750,000</option>
                <option value="1000000">$1,000,000</option>
                <option value="2000000">$2,000,000</option>
                <option value="5000000">$5,000,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Max Price
              </label>
              <select
                id="maxPrice"
                name="maxPrice"
                value={filters.maxPrice || ''}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
              >
                <option value="">No Max</option>
                <option value="250000">$250,000</option>
                <option value="500000">$500,000</option>
                <option value="750000">$750,000</option>
                <option value="1000000">$1,000,000</option>
                <option value="2000000">$2,000,000</option>
                <option value="5000000">$5,000,000</option>
                <option value="10000000">$10,000,000</option>
              </select>
            </div>
          </div>
        </div>

        {showAdvanced && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200 animate-fade-in">
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={filters.bedrooms || ''}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            <div>
              <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                Bathrooms
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                value={filters.bathrooms || ''}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            <div>
              <label htmlFor="minSquareFeet" className="block text-sm font-medium text-gray-700 mb-1">
                Min Area (sq ft)
              </label>
              <input
                type="number"
                id="minSquareFeet"
                name="minSquareFeet"
                placeholder="No Min"
                value={filters.minSquareFeet || ''}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
              />
            </div>

            <div>
              <label htmlFor="maxSquareFeet" className="block text-sm font-medium text-gray-700 mb-1">
                Max Area (sq ft)
              </label>
              <input
                type="number"
                id="maxSquareFeet"
                name="maxSquareFeet"
                placeholder="No Max"
                value={filters.maxSquareFeet || ''}
                onChange={handleInputChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-3">
          <button
            type="button"
            onClick={toggleAdvanced}
            className="flex items-center text-gray-700 text-sm font-medium hover:text-primary-600 transition-colors"
          >
            {showAdvanced ? (
              <>
                <X size={16} className="mr-1" />
                Hide Advanced Filters
              </>
            ) : (
              <>
                <Sliders size={16} className="mr-1" />
                Show Advanced Filters
              </>
            )}
          </button>

          <div className="flex gap-3 w-full md:w-auto">
            {(Object.keys(filters).length > 0 && Object.values(filters).some(value => value !== '')) && (
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="md:w-auto w-1/2"
              >
                Clear
              </Button>
            )}
            <Button
              type="submit"
              variant="accent"
              icon={<Search size={16} />}
              className="md:w-auto w-1/2"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;