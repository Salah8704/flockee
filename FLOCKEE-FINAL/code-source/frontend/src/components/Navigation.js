import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/velo-flockee', label: 'Le vélo' },
    { path: '/personnalisation', label: 'Personnalisation' },
    { path: '/tarifs', label: 'Tarifs' },
    { path: '/flottes', label: 'Flottes' },
    { path: '/avantages', label: 'Avantages' },
    { path: '/comparatif', label: 'Comparatif' },
  ];

  return (
    <nav data-testid="main-navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" data-testid="logo-link" className="flex items-center space-x-2">
            <div className="font-heading text-2xl gradient-text">FLOCKEE</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-[#27AAE1] ${
                  location.pathname === item.path ? 'text-[#27AAE1]' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/devis"
              data-testid="nav-cta-button"
              className="btn-primary text-sm"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#27AAE1] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div data-testid="mobile-menu" className="lg:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#f7fff7] text-[#27AAE1]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/devis"
              data-testid="mobile-nav-cta-button"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center btn-primary mt-4"
            >
              Demander un devis
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;