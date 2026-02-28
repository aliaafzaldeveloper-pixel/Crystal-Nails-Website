
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const categories = Array.from(new Set(SERVICES.map(s => s.category)));

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1600057033583-0c7f13c6168e?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover grayscale" alt="Nail Craft Background" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/90" />
        <div className="relative z-10 text-center px-4 animate-reveal">
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.5em] text-[10px] block mb-4">Our Menu</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif italic">Bespoke Rituals</h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-light tracking-widest text-sm uppercase">Curated treatments for the modern individual</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-3xl font-bold tracking-tight whitespace-nowrap">{category}</h2>
                <div className="h-px bg-slate-200 w-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {SERVICES.filter(s => s.category === category).map((service) => (
                  <div key={service.id} className="flex flex-col sm:flex-row gap-6 group animate-reveal">
                    <div className="sm:w-1/3 h-48 rounded-sm overflow-hidden shadow-md flex-shrink-0">
                      <img src={service.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={service.name} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className="text-xl font-bold group-hover:gold-text transition-colors">{service.name}</h3>
                          <span className="gold-text font-bold text-lg">${service.price}</span>
                        </div>
                        <div className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-3">
                          {service.duration} MINS
                        </div>
                        <p className="text-slate-600 text-sm line-clamp-2">{service.description}</p>
                      </div>
                      <div className="mt-6">
                        <Link
                          to={`/book?service=${service.id}`}
                          className="bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-5 py-2 rounded-sm text-xs font-bold transition-all inline-block uppercase tracking-widest"
                        >
                          Schedule
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Inquiry CTA */}
      <section className="py-24 soft-pink text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6 font-serif">Looking for something custom?</h3>
            <p className="text-slate-600 mb-10 font-light">Whether it's a special bridal party or a custom nail art concept, we're here to make it happen. Get in touch with our creative directors.</p>
            <Link to="/contact" className="bg-slate-900 text-white px-12 py-4 rounded-full font-bold transition-all shadow-xl hover:bg-black hover:scale-105 active:scale-95 uppercase text-xs tracking-[0.2em]">
              Request Custom Service
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Services;
