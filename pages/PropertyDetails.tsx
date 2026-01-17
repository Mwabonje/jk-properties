import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Move, Check, Calendar, Phone, Mail, ArrowLeft, Share2 } from 'lucide-react';
import { PROPERTIES } from '../constants';
import { PropertyCard } from '../components/PropertyCard';

export const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold text-slate-800">Property Not Found</h2>
        <Link to="/properties" className="mt-4 text-brand-primary hover:underline">Back to Listings</Link>
      </div>
    );
  }

  // Get related properties (exclude current one, show up to 3)
  const relatedProperties = PROPERTIES.filter(p => p.id !== property.id).slice(0, 3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mojjjyqr", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formState,
          subject: `Property Inquiry: ${property.title}`,
          property_title: property.title,
          property_id: property.id,
          property_location: property.location,
          agent: property.agent.name
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        alert("Booking request received! An agent will contact you shortly.");
        setFormState({ name: '', email: '', phone: '', message: '' });
        setSubmitStatus('idle');
      } else {
        alert("There was a problem submitting your request. Please try again.");
      }
    } catch (error) {
      alert("There was a problem submitting your request. Please check your internet connection.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/properties" className="inline-flex items-center text-slate-500 hover:text-brand-primary mb-6 transition-colors">
          <ArrowLeft size={18} className="mr-2" /> Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 mb-8">
              <div className="aspect-[16/9] relative">
                <img 
                  src={property.images[activeImage]} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-slate-800 hover:bg-white shadow-lg">
                    <Share2 size={20} />
                </button>
              </div>
              <div className="flex p-2 gap-2 overflow-x-auto">
                {property.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-brand-primary opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                   <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{property.title}</h1>
                   <div className="flex items-center text-slate-500">
                     <MapPin size={18} className="mr-1 text-brand-primary shrink-0" />
                     <span>{property.location}</span>
                   </div>
                </div>
                <div className="text-left md:text-right">
                   <p className="text-sm text-slate-500 mb-1">{property.listingType === 'Sale' ? 'Selling Price' : 'Monthly Rent'}</p>
                   <p className="text-2xl md:text-3xl font-bold text-brand-primary">KES {property.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 md:gap-8 py-6 border-y border-slate-100 mb-8">
                {property.bedrooms !== undefined && (
                    <div className="flex items-center text-slate-700 min-w-[120px]">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                            <Bed size={20} />
                        </div>
                        <div>
                            <span className="block font-bold">{property.bedrooms}</span>
                            <span className="text-xs text-slate-500">Bedrooms</span>
                        </div>
                    </div>
                )}
                {property.bathrooms !== undefined && (
                    <div className="flex items-center text-slate-700 min-w-[120px]">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                            <Bath size={20} />
                        </div>
                        <div>
                            <span className="block font-bold">{property.bathrooms}</span>
                            <span className="text-xs text-slate-500">Bathrooms</span>
                        </div>
                    </div>
                )}
                 <div className="flex items-center text-slate-700 min-w-[120px]">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <Move size={20} />
                    </div>
                    <div>
                        <span className="block font-bold">{property.sqft.toLocaleString()}</span>
                        <span className="text-xs text-slate-500">Square Feet</span>
                    </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Description</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {property.description}
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-slate-700">
                    <Check size={16} className="text-green-500 mr-2 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (Booking & Agent) */}
          <div className="lg:col-span-1">
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* Booking Form */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Calendar className="mr-2 text-brand-accent" /> Book a Viewing
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-primary outline-none"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-primary outline-none"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-primary outline-none"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea 
                      rows={3} 
                      name="message"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-primary outline-none"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      placeholder="I am interested in this property..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-brand-primary hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    Request Booking
                  </button>
                </form>
              </div>

              {/* Agent Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                 <h3 className="text-lg font-bold text-slate-900 mb-4">Listing Agent</h3>
                 <div className="flex items-center mb-4">
                    <img src={property.agent.image} alt={property.agent.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                    <div>
                      <p className="font-bold text-slate-900">{property.agent.name}</p>
                      <p className="text-sm text-slate-500">Senior Broker</p>
                    </div>
                 </div>
                 <div className="space-y-3">
                   <a href={`tel:${property.agent.phone}`} className="flex items-center text-slate-600 hover:text-brand-primary">
                      <Phone size={18} className="mr-3 text-slate-400" />
                      {property.agent.phone}
                   </a>
                   <a href={`mailto:${property.agent.email}`} className="flex items-center text-slate-600 hover:text-brand-primary">
                      <Mail size={18} className="mr-3 text-slate-400" />
                      {property.agent.email}
                   </a>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties Section */}
        <div className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Other Properties You May Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProperties.map(p => (
                    <PropertyCard key={p.id} property={p} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};