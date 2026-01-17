import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Booking: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 max-w-2xl w-full text-center">
            <div className="w-16 h-16 bg-blue-100 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar size={32} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Book a General Consultation</h1>
            <p className="text-slate-600 mb-8">
                Not sure which property is right for you? Book a free consultation with one of our expert agents to discuss your needs.
            </p>
            
            <form action="https://formspree.io/f/mojjjyqr" method="POST" className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input type="text" name="name" className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Your Name" required />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                        <input type="tel" name="phone" className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Your Phone" required />
                    </div>
                </div>
                <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" name="email" className="w-full border border-slate-300 rounded-lg px-4 py-2" placeholder="Your Email" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                    <input type="date" name="date" className="w-full border border-slate-300 rounded-lg px-4 py-2" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea name="message" className="w-full border border-slate-300 rounded-lg px-4 py-2" rows={3} placeholder="What are you looking for?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 rounded-xl hover:bg-sky-600 transition-colors">
                    Confirm Booking
                </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-slate-500 text-sm">Looking for a specific property?</p>
                <Link to="/properties" className="text-brand-primary font-semibold hover:underline">Browse Listings</Link>
            </div>
        </div>
      </div>
    </div>
  );
};