import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import PropertyCard from '../components/common/PropertyCard';
import AgentContactForm from '../components/features/AgentContactForm';
import Button from '../components/common/Button';
import { Agent } from '../types';
import { getAgentById, getAgentProperties } from '../data/agents';

const AgentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [agentProperties, setAgentProperties] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      const foundAgent = getAgentById(id);
      if (foundAgent) {
        setAgent(foundAgent);
        setAgentProperties(getAgentProperties(id));
      }
      // Scroll to top when property changes
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!agent) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Agent Not Found</h2>
          <p className="mb-6">Sorry, we couldn't find the agent you're looking for.</p>
          <Link 
            to="/agents"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white rounded-md px-4 py-2 transition-colors"
          >
            View All Agents
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Agent Header */}
      <div className="bg-primary-900 py-12 px-4">
        <div className="container mx-auto">
          <Link 
            to="/agents" 
            className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Agents
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img 
              src={agent.photo} 
              alt={agent.name} 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-white"
            />
            
            <div>
              <h1 className="text-3xl font-serif font-bold text-white mb-2 text-center md:text-left">{agent.name}</h1>
              <p className="text-primary-200 mb-4 text-center md:text-left">{agent.title}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <div className="flex items-center text-primary-200">
                  <Phone size={16} className="mr-1" />
                  <a href={`tel:${agent.phone}`} className="hover:text-white transition-colors">
                    {agent.phone}
                  </a>
                </div>
                <div className="flex items-center text-primary-200">
                  <Mail size={16} className="mr-1" />
                  <a href={`mailto:${agent.email}`} className="hover:text-white transition-colors">
                    {agent.email}
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-4">
                {agent.socialMedia.facebook && (
                  <a 
                    href={agent.socialMedia.facebook} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-primary-200 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}
                {agent.socialMedia.twitter && (
                  <a 
                    href={agent.socialMedia.twitter} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-primary-200 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {agent.socialMedia.instagram && (
                  <a 
                    href={agent.socialMedia.instagram} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-primary-200 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {agent.socialMedia.linkedin && (
                  <a 
                    href={agent.socialMedia.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-primary-200 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* About Agent */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">About {agent.name}</h2>
              <p className="text-gray-600 mb-6">{agent.bio}</p>
              
              <h3 className="text-lg font-semibold mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {agent.specialties.map((specialty, index) => (
                  <span 
                    key={index} 
                    className="bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold mb-3">Experience & Expertise</h3>
              <p className="text-gray-600 mb-6">
                With extensive knowledge of local markets and a proven track record, {agent.name} has established a reputation for exceptional client service and achieving outstanding results. {agent.name}'s dedication to understanding each client's unique needs ensures a personalized approach to every transaction.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Client Testimonials</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="italic text-gray-600 mb-2">"{agent.name} exceeded our expectations at every turn. Their knowledge, professionalism, and dedication made our home buying experience smooth and enjoyable."</p>
                  <p className="font-medium">- Michael & Sarah Johnson</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="italic text-gray-600 mb-2">"We couldn't have asked for a better agent. {agent.name}'s market insights and negotiation skills helped us secure our dream home in a competitive market."</p>
                  <p className="font-medium">- David & Jennifer Thompson</p>
                </div>
              </div>
            </div>
            
            {/* Agent's Properties */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">{agent.name}'s Listings</h2>
              {agentProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {agentProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <p className="text-gray-600 mb-4">No active listings at the moment.</p>
                  <Button 
                    variant="primary" 
                    as="link"
                    to="/properties"
                  >
                    Browse All Properties
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Contact Form */}
            <AgentContactForm agent={agent} />
            
            {/* Agent Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Residential Property Sales</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Luxury Home Marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>First-Time Homebuyer Assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Property Valuation & Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Relocation Services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Investment Property Consultation</span>
                </li>
              </ul>
            </div>
            
            {/* Awards & Recognition */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Awards & Recognition</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Top Producer, 2022-2023</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Luxury Property Specialist Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Five-Star Client Satisfaction Award</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>Best of Zillow Premier Agent</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPage;