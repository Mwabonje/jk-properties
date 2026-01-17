import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { PROPERTIES } from '../constants';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyType, ListingType } from '../types';

export const Properties: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') as ListingType | null;
  const initialSearch = queryParams.get('search') || '';

  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [listingType, setListingType] = useState<ListingType | 'All'>(initialType || 'All');
  const [propertyType, setPropertyType] = useState<PropertyType | 'All'>('All');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(property => {
      // Search Term Match
      const matchesSearch = 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      // Filter Matches
      const matchesListing = listingType === 'All' || property.listingType === listingType;
      const matchesType = propertyType === 'All' || property.type === propertyType;
      const matchesPrice = maxPrice === '' || property.price <= parseInt(maxPrice);

      return matchesSearch && matchesListing && matchesType && matchesPrice;
    });
  }, [searchTerm, listingType, propertyType, maxPrice]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Properties</h1>
            <p className="text-slate-500 mt-1">Showing {filteredProperties.length} results</p>
          </div>
          <button 
            className="lg:hidden mt-4 w-full md:w-auto flex items-center justify-center space-x-2 bg-white border border-slate-300 py-3 rounded-lg text-slate-700 font-medium active:bg-slate-100 transition-colors shadow-sm hover:shadow"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter size={18} />
            <span>{filterOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-1/4 ${filterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <div className="flex justify-between items-center mb-6 lg:hidden">
                 <h2 className="font-bold text-lg">Filters</h2>
                 <button onClick={() => setFilterOpen(false)} className="p-2 hover:bg-slate-100 rounded-full"><X size={24} /></button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Search</label>
                  <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Location, keyword..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Listing Type</label>
                  <div className="flex space-x-2 bg-slate-100 p-1 rounded-lg">
                    {['All', 'Sale', 'Rent'].map(type => (
                      <button
                        key={type}
                        onClick={() => setListingType(type as any)}
                        className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                          listingType === type ? 'bg-white text-brand-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Property Type</label>
                  <select 
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value as any)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none bg-white text-base"
                  >
                    <option value="All">All Types</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Office">Office</option>
                    <option value="Land">Land</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Max Price (KES)</label>
                  <input 
                    type="number" 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Any price"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none text-base"
                  />
                </div>
                
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setListingType('All');
                    setPropertyType('All');
                    setMaxPrice('');
                  }}
                  className="w-full py-3 text-slate-500 text-sm font-medium hover:text-brand-primary hover:bg-slate-50 rounded-lg transition-colors mt-2"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="lg:w-3/4">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
                <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
                  <Filter size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">No properties found</h3>
                <p className="text-slate-500">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};