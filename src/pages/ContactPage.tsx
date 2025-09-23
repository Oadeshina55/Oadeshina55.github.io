import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Button from '../components/common/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1000);
  };
  
  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary-900 py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">Contact Us</h1>
          <p className="text-primary-200 max-w-2xl mx-auto text-center">
            We're here to answer any questions you have about our properties or services. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-success-50 border border-success-500 text-success-900 rounded-lg p-6 mb-4 animate-fade-in">
                <h3 className="font-bold text-lg mb-2">Thank You!</h3>
                <p>Your message has been received. One of our team members will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
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
                  
                  <div>
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
                  
                  <div>
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
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
                    >
                      <option value="">Select an option</option>
                      <option value="general">General Inquiry</option>
                      <option value="property">Property Question</option>
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="valuation">Property Valuation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2 border"
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  icon={<Send size={16} />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4 bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                  <p className="text-gray-600">
                    123 Luxury Avenue<br />
                    Beverly Hills, CA 90210<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@luxuryestates.com" className="hover:text-primary-600 transition-colors">
                      info@luxuryestates.com
                    </a><br />
                    <a href="mailto:support@luxuryestates.com" className="hover:text-primary-600 transition-colors">
                      support@luxuryestates.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+18001234567" className="hover:text-primary-600 transition-colors">
                      (800) 123-4567
                    </a><br />
                    <a href="tel:+13109876543" className="hover:text-primary-600 transition-colors">
                      (310) 987-6543
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden h-64">
              {/* In a real application, this would be a Google Maps embed */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;