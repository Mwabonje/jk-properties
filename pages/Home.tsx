import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Star, Home as HomeIcon, Building, Warehouse, Sun } from 'lucide-react';
import { PROPERTIES, TESTIMONIALS } from '../constants';
import { PropertyCard } from '../components/PropertyCard';

export const Home: React.FC = () => {
  const featuredProperties = PROPERTIES.filter(p => p.isFeatured).slice(0, 3);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/properties?search=${searchTerm}`);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen md:h-[85vh] min-h-[550px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/164/1920/1080" 
            alt="Malindi Real Estate" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center pt-20 md:pt-0">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-semibold tracking-wide mb-6 border border-white/30">
            #1 Real Estate Agency in Malindi
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
            Find Your Dream Home on the <span className="text-brand-accent">Swahili Coast</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Browse our exclusive portfolio of villas, apartments, and land in Malindi's most sought-after locations.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto bg-white p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-3">
             <div className="flex-grow w-full md:w-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search by location, property type..." 
                  className="w-full pl-12 pr-4 py-3 rounded-xl md:rounded-full outline-none text-slate-700 bg-slate-50 md:bg-transparent focus:bg-white transition-colors text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <button type="submit" className="w-full md:w-auto bg-brand-primary hover:bg-sky-600 active:bg-sky-700 text-white font-bold py-3.5 px-8 rounded-xl md:rounded-full transition-colors flex items-center justify-center shadow-md">
               Search
             </button>
          </form>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Explore Property Types</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Whether you're looking for a holiday home or an investment, we have options to suit your lifestyle.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: HomeIcon, label: 'Villas', count: '12 Listings', color: 'bg-blue-100 text-blue-600' },
              { icon: Building, label: 'Apartments', count: '8 Listings', color: 'bg-green-100 text-green-600' },
              { icon: Sun, label: 'Land', count: '15 Listings', color: 'bg-amber-100 text-amber-600' },
              { icon: Warehouse, label: 'Commercial', count: '5 Listings', color: 'bg-purple-100 text-purple-600' },
            ].map((cat, idx) => (
              <Link 
                key={idx} 
                to="/properties" 
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col items-center text-center group active:scale-95 md:active:scale-100"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 ${cat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-bold text-slate-800 text-base md:text-lg mb-1">{cat.label}</h3>
                <span className="text-slate-500 text-xs md:text-sm">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Featured Listings</h2>
              <p className="text-slate-600">Hand-picked properties for you</p>
            </div>
            <Link to="/properties" className="hidden md:flex items-center font-semibold text-brand-primary hover:text-brand-dark transition-colors">
              View All Properties <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/properties" className="inline-flex items-center font-semibold text-brand-primary px-6 py-3 border border-brand-primary rounded-full hover:bg-brand-primary hover:text-white transition-colors">
              View All Properties <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Banner */}
      <section className="py-20 md:py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent opacity-10 skew-x-12 transform translate-x-12"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to sell your property?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
              List with JK Properties for maximum exposure to qualified buyers. We handle viewing, negotiations, and legalities.
            </p>
            <Link to="/contact" className="w-full md:w-auto text-center inline-block bg-white text-brand-dark font-bold py-3.5 px-8 rounded-full hover:bg-brand-accent hover:text-brand-dark transition-colors">
              Become a Seller
            </Link>
          </div>
          <div className="w-full md:w-5/12">
             <img src="https://picsum.photos/id/1031/600/400" alt="Consultation" className="w-full rounded-2xl shadow-2xl border-4 border-white/10" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};