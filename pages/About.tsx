
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-40 soft-pink text-center relative overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-pink-200 rounded-full animate-float hidden lg:block opacity-50" />
        <div className="absolute bottom-[10%] right-[5%] w-48 h-48 border border-pink-200 rounded-full animate-float hidden lg:block opacity-50" style={{ animationDelay: '3s' }} />
        
        <div className="relative z-10 animate-reveal">
          <span className="gold-text font-bold uppercase tracking-[0.5em] text-[10px] block mb-4">Our Essence</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8">The <span className="italic font-serif font-light">Crystal</span> <br /> Philosophy</h1>
          <p className="text-slate-400 uppercase tracking-[0.3em] text-xs">Excellence • Purity • Perfection</p>
        </div>
      </section>

      {/* Artistic Content */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 relative animate-reveal">
                <div className="relative z-10">
                   <img 
                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1000" 
                    className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 h-[700px] object-cover w-full" 
                    alt="Manicure Artist at Work" 
                   />
                </div>
                <div className="absolute -top-10 -left-10 w-1/2 h-[300px] bg-slate-50 -z-10 hidden lg:block" />
             </div>
             
             <div className="space-y-12 order-1 lg:order-2 animate-reveal" style={{ animationDelay: '0.3s' }}>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-bold leading-tight">Elevating Lahore’s Beauty Landscape</h2>
                  <p className="text-slate-500 leading-relaxed text-lg font-light">
                    Founded with a vision to transcend the traditional salon experience, Crystal Nails is a sanctuary of meticulous artistry and refined relaxation in Lahore. We believe beauty is found in the smallest details, and our craft is a testament to that belief.
                  </p>
                </div>
                
                <div className="space-y-10 border-l border-slate-100 pl-10">
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-widest text-xs gold-text">Our Standard</h4>
                    <p className="text-slate-600 font-light">We exclusively utilize medical-grade sterilization and the world’s most prestigious, non-toxic products.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-widest text-xs gold-text">Our Artists</h4>
                    <p className="text-slate-600 font-light">Every technician at Crystal is a master of their craft, undergoing continuous education in global trends.</p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <div className="p-8 border border-slate-100 rounded-sm italic text-slate-400 font-light text-xl">
                    "We don't just shape nails; we curate moments of self-expression."
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Standards - Minimalist Premium Cards */}
      <section className="py-32 lavender relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-reveal">
            <h2 className="text-4xl font-bold mb-6">Our Protocol of Excellence</h2>
            <div className="w-20 h-0.5 gold-bg mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Surgical Sterility', desc: 'Hospital-grade autoclaves ensure every instrument is pristine.', icon: '🛡️' },
              { title: 'Pure Compositions', desc: 'We strictly avoid "Big 5" toxins, prioritizing your long-term health.', icon: '🌿' },
              { title: 'Bespoke Care', desc: 'Every service is tailored to your unique skin and nail biology.', icon: '💎' }
            ].map((std, idx) => (
              <div 
                key={idx} 
                className="bg-white/50 backdrop-blur-lg p-12 rounded-sm border border-white/50 text-center space-y-6 hover:translate-y-[-10px] transition-all duration-500 animate-reveal"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="text-4xl">{std.icon}</div>
                <h3 className="font-bold uppercase tracking-[0.2em] text-sm">{std.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
