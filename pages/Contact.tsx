import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions about buying, selling, or renting? Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-brand-dark rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-brand-primary rounded-full opacity-20 blur-3xl"></div>
            
            <h2 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h2>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <Phone size={24} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Phone Number</p>
                  <p className="text-lg font-semibold">+254 712 345 678</p>
                  <p className="text-slate-400 text-sm mt-1">Mon-Fri 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <Mail size={24} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email Address</p>
                  <p className="text-lg font-semibold">info@jkproperties.co.ke</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <MapPin size={24} className="text-brand-accent" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Our Office</p>
                  <p className="text-lg font-semibold">JK House, Lamu Road</p>
                  <p className="text-slate-400">Malindi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form action="https://formspree.io/f/mojjjyqr" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" name="firstName" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none bg-slate-50" placeholder="John" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" name="lastName" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none bg-slate-50" placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" name="email" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none bg-slate-50" placeholder="john@example.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select name="subject" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none bg-slate-50">
                  <option>Buying Property</option>
                  <option>Selling Property</option>
                  <option>Renting Property</option>
                  <option>Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea name="message" rows={4} className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none bg-slate-50" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-primary hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};