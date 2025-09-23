import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Coffee, Target, Globe, ChevronRight } from 'lucide-react';
import Button from '../components/common/Button';
import { getTopAgents } from '../data/agents';

const AboutPage: React.FC = () => {
  const topAgents = getTopAgents(4);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary-900 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">About Luxury Estates</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            We're a premier real estate agency committed to excellence in every aspect of buying, selling, and investing in luxury properties
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, Luxury Estates began with a vision to transform the real estate experience by focusing on exceptional service and a deep understanding of our clients' needs. What started as a boutique agency in Beverly Hills has grown into a nationwide leader in luxury real estate.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Elizabeth Caldwell, established the company with a clear mission: to provide unparalleled service by truly listening to clients, understanding their unique requirements, and delivering results that exceed expectations. This client-first approach remains the cornerstone of our business philosophy.
              </p>
              <p className="text-gray-600">
                Today, Luxury Estates has expanded to multiple locations across the country, with a network of the industry's most accomplished agents. While we've grown in size and reach, our commitment to personalized service and excellence remains unchanged.
              </p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" 
                  alt="Luxury Estate Property" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 hidden md:block">
                  <div className="flex items-center justify-center flex-col text-center">
                    <p className="text-4xl font-bold text-primary-600">19</p>
                    <p className="text-gray-600">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">
              At Luxury Estates, we're driven by our commitment to excellence and guided by core values that shape everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional real estate services that enhance our clients' lives and exceed their expectations at every step of the journey.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and respected real estate company, recognized for our integrity, expertise, and commitment to creating extraordinary experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Promise</h3>
              <p className="text-gray-600">
                To conduct all of our business with integrity, transparency, and professionalism, ensuring that every client receives the highest level of service.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-600 font-bold">01</span>
                </div>
                <h3 className="font-semibold">Excellence</h3>
              </div>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from client interactions to marketing properties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-600 font-bold">02</span>
                </div>
                <h3 className="font-semibold">Integrity</h3>
              </div>
              <p className="text-gray-600">
                We operate with the highest ethical standards, ensuring honesty and transparency in all transactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-600 font-bold">03</span>
                </div>
                <h3 className="font-semibold">Innovation</h3>
              </div>
              <p className="text-gray-600">
                We embrace new ideas and technologies to provide the most effective solutions for our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-600 font-bold">04</span>
                </div>
                <h3 className="font-semibold">Collaboration</h3>
              </div>
              <p className="text-gray-600">
                We work together as a team, sharing knowledge and expertise to achieve the best outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Facts */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-primary-200">
              For nearly two decades, we've been helping clients find their dream properties and achieve exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">3,500+</div>
              <p className="text-primary-200">Properties Sold</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">$2.8B+</div>
              <p className="text-primary-200">Sales Volume</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">98%</div>
              <p className="text-primary-200">Client Satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">12</div>
              <p className="text-primary-200">Office Locations</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl">
                Our experienced leadership team brings decades of combined expertise in luxury real estate
              </p>
            </div>
            <Link 
              to="/agents" 
              className="inline-flex items-center mt-4 md:mt-0 text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Agents
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topAgents.map(agent => (
              <div key={agent.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={agent.photo} 
                  alt={agent.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                  <p className="text-gray-600 mb-4">{agent.title}</p>
                  <Link 
                    to={`/agents/${agent.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                  >
                    View Profile
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Why Choose Luxury Estates</h2>
            <p className="text-gray-600">
              We offer a comprehensive approach to real estate, combining market expertise with personalized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Award size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Agents</h3>
              <p className="text-gray-600">
                Our team consists of experienced professionals with in-depth market knowledge and specialized expertise in luxury properties.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Globe size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-gray-600">
                Our extensive network provides access to exclusive listings and connects buyers and sellers worldwide.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Target size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                We tailor our approach to meet your specific needs, ensuring a customized experience throughout your real estate journey.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Coffee size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Concierge Services</h3>
              <p className="text-gray-600">
                From property staging to legal assistance, our concierge services handle every detail to ensure a smooth transaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Clock size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Our track record of successful transactions and satisfied clients demonstrates our commitment to achieving exceptional outcomes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Users size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Focused Approach</h3>
              <p className="text-gray-600">
                We put our clients first, listening carefully to your goals and working tirelessly to help you achieve them.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-primary-200 max-w-2xl mx-auto mb-8">
            Whether you're looking to buy, sell, or invest in property, our team is here to help you achieve your real estate goals
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/properties">
              <Button variant="accent" size="lg">
                View Properties
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;