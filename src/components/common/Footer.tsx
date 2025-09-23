import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Home, ExternalLink, GitBranch as BrandTiktok } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Home size={24} className="mr-2" />
              <h3 className="text-xl font-serif font-semibold">AlvenHomes</h3>
            </div>
            <p className="mb-6 text-gray-300">
              Providing exceptional real estate services and connecting clients with their dream properties since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white hover:text-accent-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-white hover:text-accent-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/alvenhomesandproperties?igsh=cW1tYXQ5Zjd1bXQ%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white hover:text-accent-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white hover:text-accent-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="text-white hover:text-accent-400 transition-colors">
                <BrandTiktok size={20} />
              </a>
              <a href="https://wa.me/+12403852092" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-white hover:text-accent-400 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/agents" className="text-gray-300 hover:text-white transition-colors">Our Agents</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/selling" className="text-gray-300 hover:text-white transition-colors">Selling Properties</Link>
              </li>
              <li>
                <Link to="/buying" className="text-gray-300 hover:text-white transition-colors">Buying Properties</Link>
              </li>
              <li>
                <Link to="/investment" className="text-gray-300 hover:text-white transition-colors">Property Investment</Link>
              </li>
              <li>
                <Link to="/valuation" className="text-gray-300 hover:text-white transition-colors">Property Valuation</Link>
              </li>
              <li>
                <Link to="/mortgage" className="text-gray-300 hover:text-white transition-colors">Mortgage Services</Link>
              </li>
              <li>
                <Link to="/consulting" className="text-gray-300 hover:text-white transition-colors">Real Estate Consulting</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Luxury Avenue<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (800) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@alvenhomes.com" className="text-gray-300 hover:text-white transition-colors">
                  info@alvenhomes.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors">
                <span className="mr-1">View on map</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AlvenHomes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;