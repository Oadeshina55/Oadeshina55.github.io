import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Home, Building, Award, Star } from 'lucide-react';
import Button from '../components/common/Button';
import PropertyCard from '../components/common/PropertyCard';
import HeroSlider from '../components/features/HeroSlider';
import { getFeaturedProperties, getRecentProperties } from '../data/properties';
import { getTopAgents } from '../data/agents';

const HomePage: React.FC = () => {
  const featuredProperties = getFeaturedProperties(3);
  const recentProperties = getRecentProperties(3);
  const topAgents = getTopAgents(3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Featured Properties</h2>
              <p className="text-gray-600 max-w-2xl">
                Discover our handpicked selection of the most exclusive properties on the market
              </p>
            </div>
            <Link 
              to="/properties" 
              className="inline-flex items-center mt-4 md:mt-0 text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Properties
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} featured={true} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Why Choose Luxury Estates</h2>
            <p className="text-gray-600">
              For over 20 years, we've been helping our clients find their dream properties with personalized service and unparalleled market expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exclusive Listings</h3>
              <p className="text-gray-600">
                Access to exclusive off-market properties and premier listings not available elsewhere
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Agents</h3>
              <p className="text-gray-600">
                Our team of experienced agents provide personalized service tailored to your specific needs
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-gray-600">
                International presence and connections to help you find or sell property anywhere in the world
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 bg-primary-900 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-accent-600 transform -skew-x-12 translate-x-1/3 opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-primary-200 mb-8 text-lg">
              Let our expert agents guide you through the process of finding your dream property or selling your current home
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/properties">
                <Button variant="accent" size="lg">
                  Browse Properties
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact an Agent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Recent Properties</h2>
              <p className="text-gray-600 max-w-2xl">
                The latest additions to our exclusive portfolio of luxury properties
              </p>
            </div>
            <Link 
              to="/properties" 
              className="inline-flex items-center mt-4 md:mt-0 text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Properties
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Agents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Meet Our Expert Agents</h2>
            <p className="text-gray-600">
              Our team of professional agents is dedicated to providing exceptional service and finding the perfect property for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topAgents.map(agent => (
              <div key={agent.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={agent.photo} 
                  alt={agent.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                  <p className="text-gray-600 mb-3">{agent.title}</p>
                  <div className="flex space-x-4 mb-4">
                    {agent.socialMedia.facebook && (
                      <a href={agent.socialMedia.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-primary-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                    )}
                    {agent.socialMedia.instagram && (
                      <a href={agent.socialMedia.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    )}
                    {agent.socialMedia.linkedin && (
                      <a href={agent.socialMedia.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-primary-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    )}
                  </div>
                  <Link to={`/agents/${agent.id}`} className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                    View Profile
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/agents">
              <Button variant="outline">
                View All Agents
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-300">
              Hear from our satisfied clients about their experience working with Luxury Estates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={20} className="text-accent-400 fill-current" />
                ))}
              </div>
              <blockquote className="mb-4">
                <p className="italic text-gray-300">
                  "Our agent went above and beyond to find us the perfect vacation home. The entire process was smooth and stress-free. We couldn't be happier with our purchase!"
                </p>
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Michael & Sarah Johnson</p>
                  <p className="text-sm text-gray-400">New York, NY</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={20} className="text-accent-400 fill-current" />
                ))}
              </div>
              <blockquote className="mb-4">
                <p className="italic text-gray-300">
                  "Luxury Estates helped us sell our home for well above asking price. Their marketing strategy and attention to detail made all the difference. Highly recommended!"
                </p>
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Robert & Lisa Thompson</p>
                  <p className="text-sm text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={20} className="text-accent-400 fill-current" />
                ))}
              </div>
              <blockquote className="mb-4">
                <p className="italic text-gray-300">
                  "As first-time homebuyers, we had lots of questions. Our agent was patient, knowledgeable, and found us a beautiful home within our budget. We're so grateful for their expertise!"
                </p>
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Jennifer & David Chen</p>
                  <p className="text-sm text-gray-400">Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;