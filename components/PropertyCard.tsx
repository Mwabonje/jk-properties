import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin, Heart } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col h-full">
      <Link to={`/properties/${property.id}`} className="relative overflow-hidden aspect-[4/3] block">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            property.listingType === 'Sale' ? 'bg-brand-primary text-white' : 'bg-brand-accent text-brand-dark'
          }`}>
            For {property.listingType}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
           <p className="text-white font-bold text-xl">KES {property.price.toLocaleString()}</p>
        </div>
      </Link>
      <button 
        className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10 active:scale-90"
        aria-label="Add to favorites"
      >
          <Heart size={18} />
      </button>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-slate-500 text-xs mb-2">
          <MapPin size={14} className="mr-1 text-brand-primary" />
          {property.location}
        </div>
        <Link to={`/properties/${property.id}`} className="block">
            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-brand-primary transition-colors line-clamp-1">
            {property.title}
            </h3>
        </Link>
        
        <div className="flex justify-between items-center py-4 border-b border-slate-100 mb-4 text-slate-600 text-sm">
            {property.bedrooms !== undefined && (
                 <div className="flex items-center" title="Bedrooms">
                    <Bed size={18} className="mr-2 text-slate-400" />
                    <span>{property.bedrooms} Bed</span>
                 </div>
            )}
            {property.bathrooms !== undefined && (
                 <div className="flex items-center" title="Bathrooms">
                    <Bath size={18} className="mr-2 text-slate-400" />
                    <span>{property.bathrooms} Bath</span>
                 </div>
            )}
            <div className="flex items-center" title="Square Feet">
                <Move size={18} className="mr-2 text-slate-400" />
                <span>{property.sqft} sqft</span>
            </div>
        </div>

        <div className="mt-auto">
             <Link 
                to={`/properties/${property.id}`}
                className="block w-full text-center py-3 rounded-lg border-2 border-brand-dark text-brand-dark font-semibold hover:bg-brand-dark hover:text-white transition-all active:scale-[0.98] active:bg-slate-800 active:text-white"
             >
                View Details
             </Link>
        </div>
      </div>
    </div>
  );
};