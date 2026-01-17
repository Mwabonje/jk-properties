import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Home } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and scroll to top when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Book Viewing', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== '/' || isMobileMenuOpen
            ? 'bg-brand-dark shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-2xl tracking-tighter">
             <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-dark">
                <Home size={24} />
             </div>
             <span>JK Properties</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-sm font-medium hover:text-brand-accent transition-colors ${
                  isScrolled || location.pathname !== '/' ? 'text-slate-200' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-accent hover:bg-amber-400 text-brand-dark px-5 py-2 rounded-full font-semibold transition-transform hover:scale-105"
            >
              List Property
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-slate-800 shadow-xl h-screen overflow-y-auto">
            <div className="flex flex-col p-6 space-y-4 pb-32">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="px-4 py-4 text-lg text-white font-medium border-b border-slate-800 hover:text-brand-accent transition-colors flex items-center justify-between"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="block w-full bg-brand-accent text-brand-dark text-center font-bold text-lg py-4 rounded-xl hover:bg-amber-400 transition-colors"
                >
                  List Your Property
                </Link>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="pt-8 text-slate-400 text-sm space-y-4">
                 <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-brand-accent" />
                    <span>+254 712 345 678</span>
                 </div>
                 <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-brand-accent" />
                    <span>info@jkproperties.co.ke</span>
                 </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="col-span-2 md:col-span-1 lg:col-span-1 md:order-1 lg:order-1">
              <div className="flex items-center space-x-2 text-white font-bold text-2xl mb-6">
                <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center text-brand-dark">
                    <Home size={18} />
                </div>
                <span>JK Properties</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Your trusted partner for finding the perfect home or investment in Malindi. We bring clarity and trust to real estate.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-brand-accent transition-colors p-2 -ml-2"><Facebook size={20} /></a>
                <a href="#" className="hover:text-brand-accent transition-colors p-2"><Instagram size={20} /></a>
                <a href="#" className="hover:text-brand-accent transition-colors p-2"><Twitter size={20} /></a>
              </div>
            </div>

            <div className="col-span-1 md:order-3 lg:order-2">
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/properties" className="hover:text-brand-accent transition-colors block py-1">All Listings</Link></li>
                <li><Link to="/properties?type=Sale" className="hover:text-brand-accent transition-colors block py-1">Buy Property</Link></li>
                <li><Link to="/properties?type=Rent" className="hover:text-brand-accent transition-colors block py-1">Rent Property</Link></li>
                <li><Link to="/contact" className="hover:text-brand-accent transition-colors block py-1">Sell with Us</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:order-4 lg:order-3">
              <h3 className="text-white font-semibold text-lg mb-6">Property Types</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/properties" className="hover:text-brand-accent transition-colors block py-1">Villas</Link></li>
                <li><Link to="/properties" className="hover:text-brand-accent transition-colors block py-1">Apartments</Link></li>
                <li><Link to="/properties" className="hover:text-brand-accent transition-colors block py-1">Beachfront</Link></li>
                <li><Link to="/properties" className="hover:text-brand-accent transition-colors block py-1">Land</Link></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-1 md:order-2 lg:order-4">
              <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="text-brand-accent shrink-0 mt-1" size={18} />
                  <span>JK House, Lamu Road<br />Malindi, Kenya</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-brand-accent shrink-0" size={18} />
                  <a href="tel:+254712345678" className="hover:text-white transition-colors">+254 712 345 678</a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-brand-accent shrink-0" size={18} />
                  <a href="mailto:info@jkproperties.co.ke" className="hover:text-white transition-colors break-all">info@jkproperties.co.ke</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} JK Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};