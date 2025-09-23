import React, { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import Button from '../common/Button';
import { Agent } from '../../types';

interface AgentContactFormProps {
  agent: Agent;
  propertyTitle?: string;
}

const AgentContactForm: React.FC<AgentContactFormProps> = ({ agent, propertyTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyTitle ? `I'm interested in learning more about ${propertyTitle}. Please contact me at your earliest convenience.` : '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: propertyTitle ? `I'm interested in learning more about ${propertyTitle}. Please contact me at your earliest convenience.` : '',
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Contact {agent.name}</h3>
      
      <div className="flex items-center mb-4">
        <img 
          src={agent.photo} 
          alt={agent.name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-medium">{agent.name}</p>
          <p className="text-sm text-gray-600">{agent.title}</p>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2 mb-6">
        <a 
          href={`tel:${agent.phone}`} 
          className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
        >
          <Phone size={16} className="mr-2" />
          {agent.phone}
        </a>
        <a 
          href={`mailto:${agent.email}`} 
          className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
        >
          <Mail size={16} className="mr-2" />
          {agent.email}
        </a>
      </div>
      
      {isSubmitted ? (
        <div className="bg-success-50 border border-success-500 text-success-900 rounded-lg p-4 mb-4 animate-fade-in">
          Thank you! Your message has been sent to {agent.name}. They will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-error-50 border border-error-500 text-error-900 rounded-lg p-4 mb-4">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
            />
          </div>
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
            icon={<Send size={16} />}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default AgentContactForm;