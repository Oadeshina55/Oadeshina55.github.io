import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Search, User, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center mr-16"
            onClick={closeMenu}
          >
            <Home size={32} className={`mr-2 ${isScrolled ? 'text-accent-600' : 'text-white'}`} />
            <span 
              className={`text-2xl font-heading font-light tracking-wider ${isScrolled ? 'text-primary-950' : 'text-white'}`}
            >
              ALVEN<span className="font-bold text-accent-500">HOMES</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/properties" 
              className={`font-medium tracking-wide transition-colors ${
                isActive('/properties') 
                  ? (isScrolled ? 'text-accent-500' : 'text-accent-400') 
                  : (isScrolled ? 'text-gray-800 hover:text-accent-500' : 'text-white hover:text-accent-400')
              }`}
            >
              Properties
            </Link>
            <div className="relative group">
              <button 
                className={`flex items-center font-medium tracking-wide transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-accent-500' : 'text-white hover:text-accent-400'
                }`}
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white/95 backdrop-blur-md ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right animate-slide-down">
                <div className="py-1">
                  <Link to="/properties" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent-50 hover:text-accent-500">
                    Selling
                  </Link>
                  <Link to="/properties" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent-50 hover:text-accent-500">
                    Buying
                  </Link>
                  <Link to="/properties" className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent-50 hover:text-accent-500">
                    Investment
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/agents" 
              className={`font-medium tracking-wide transition-colors ${
                isActive('/agents') 
                  ? (isScrolled ? 'text-accent-500' : 'text-accent-400') 
                  : (isScrolled ? 'text-gray-800 hover:text-accent-500' : 'text-white hover:text-accent-400')
              }`}
            >
              Our Agents
            </Link>
            <Link 
              to="/about" 
              className={`font-medium tracking-wide transition-colors ${
                isActive('/about') 
                  ? (isScrolled ? 'text-accent-500' : 'text-accent-400') 
                  : (isScrolled ? 'text-gray-800 hover:text-accent-500' : 'text-white hover:text-accent-400')
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium tracking-wide transition-colors ${
                isActive('/contact') 
                  ? (isScrolled ? 'text-accent-500' : 'text-accent-400') 
                  : (isScrolled ? 'text-gray-800 hover:text-accent-500' : 'text-white hover:text-accent-400')
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/favorites" 
              className={`transition-colors hover:text-accent-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <Heart size={20} />
            </Link>
            <Link 
              to="/account" 
              className={`transition-colors hover:text-accent-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <User size={20} />
            </Link>
            <Link 
              to="/properties" 
              className="bg-accent-500 hover:bg-accent-600 text-white rounded-full px-6 py-2.5 transition-colors font-medium tracking-wide"
            >
              View Listings
            </Link>
          </div>

          <button 
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen 
              ? <X size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} /> 
              : <Menu size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 animate-slide-down">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/properties" 
                className={`py-2 font-medium tracking-wide ${isActive('/properties') ? 'text-accent-500' : 'text-gray-800'}`}
                onClick={closeMenu}
              >
                Properties
              </Link>
              <details className="group py-2">
                <summary className="flex justify-between items-center font-medium tracking-wide text-gray-800 cursor-pointer list-none">
                  Services
                  <ChevronDown size={16} className="ml-1 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pt-2 pl-4 space-y-2">
                  <Link 
                    to="/selling" 
                    className="block py-1 text-gray-700 hover:text-accent-500"
                    onClick={closeMenu}
                  >
                    Selling
                  </Link>
                  <Link 
                    to="/buying" 
                    className="block py-1 text-gray-700 hover:text-accent-500"
                    onClick={closeMenu}
                  >
                    Buying
                  </Link>
                  <Link 
                    to="/investment" 
                    className="block py-1 text-gray-700 hover:text-accent-500"
                    onClick={closeMenu}
                  >
                    Investment
                  </Link>
                </div>
              </details>
              <Link 
                to="/agents" 
                className={`py-2 font-medium tracking-wide ${isActive('/agents') ? 'text-accent-500' : 'text-gray-800'}`}
                onClick={closeMenu}
              >
                Our Agents
              </Link>
              <Link 
                to="/about" 
                className={`py-2 font-medium tracking-wide ${isActive('/about') ? 'text-accent-500' : 'text-gray-800'}`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`py-2 font-medium tracking-wide ${isActive('/contact') ? 'text-accent-500' : 'text-gray-800'}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="pt-4 flex items-center space-x-4 border-t border-gray-200">
                <Link 
                  to="/favorites" 
                  className="text-gray-800 hover:text-accent-500 transition-colors"
                  onClick={closeMenu}
                >
                  <Heart size={20} />
                </Link>
                <Link 
                  to="/account" 
                  className="text-gray-800 hover:text-accent-500 transition-colors"
                  onClick={closeMenu}
                >
                  <User size={20} />
                </Link>
                <Link 
                  to="/properties" 
                  className="bg-accent-500 hover:bg-accent-600 text-white rounded-full px-6 py-2.5 transition-colors font-medium tracking-wide flex-1 text-center"
                  onClick={closeMenu}
                >
                  View Listings
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;