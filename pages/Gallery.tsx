
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(GALLERY_ITEMS.map(i => i.category)))];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <section className="py-40 text-center relative overflow-hidden bg-slate-100">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover animate-kenburns opacity-30" 
            alt="Salon Interior" 
          />
        </div>
        <div className="absolute inset-0 bg-white/40" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 animate-reveal">
          <span className="gold-text font-bold uppercase tracking-[0.5em] text-[10px] block mb-4">Portfolio</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8">Curated <span className="italic font-serif font-light">Elegance</span></h1>
          <p className="text-slate-400 font-light tracking-[0.3em] uppercase text-xs mb-12">A look inside our sanctuary</p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all pb-3 border-b-2 ${
                  filter === cat
                    ? 'gold-text border-[#D4AF37]'
                    : 'text-slate-400 border-transparent hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-sm break-inside-avoid shadow-lg animate-reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{item.category}</span>
                <h3 className="text-white font-bold text-lg tracking-widest uppercase">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Inspiration */}
      <section className="py-32 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold font-serif italic">Follow the Movement</h2>
          <p className="text-white/50 text-lg font-light italic">Join our community for daily drops of inspiration and trend reports.</p>
          <div className="flex justify-center gap-12 pt-8">
             <a href="#" className="group flex flex-col items-center gap-4">
               <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#D4AF37] transition-all group-hover:scale-110">📸</div>
               <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-all">Instagram</span>
             </a>
             <a href="#" className="group flex flex-col items-center gap-4">
               <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#D4AF37] transition-all group-hover:scale-110">🎵</div>
               <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-all">TikTok</span>
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
