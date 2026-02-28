
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, REVIEWS, BUSINESS_INFO } from '../constants';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 4);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // 5 seconds per slide
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Slideshow Content */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Slide 1 - Black/Tortoiseshell Aesthetic */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1920"
              alt="Slide 1"
              className="w-full h-full object-cover animate-kenburns"
            />
          </div>
          {/* Slide 2 - Soft Knit / Pastel Aesthetic (Matching User Image) */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=1920"
              alt="Slide 2"
              className="w-full h-full object-cover animate-kenburns"
            />
          </div>
        </div>

        {/* Dynamic Text Content */}
        <div className="relative z-20 w-full px-4 sm:px-12 lg:px-24">
          <div className="max-w-6xl">
            {activeSlide === 0 ? (
              <div className="animate-reveal text-left">
                <span className="cursive text-4xl md:text-6xl lg:text-7xl gold-text block mb-1 leading-tight">
                  Welcome to
                </span>
                <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight whitespace-nowrap">
                  Lahore’s Premier Nail Spa Experience
                </h1>
              </div>
            ) : (
              <div className="animate-reveal text-left">
                <span className="cursive text-4xl md:text-6xl lg:text-7xl gold-text block mb-1 leading-tight">
                  Elegance
                </span>
                <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-wide italic">
                  at Your Fingertips
                </h2>
              </div>
            )}
          </div>
        </div>

        {/* Permanent Buttons (Visible on both slides) */}
        <div className="absolute bottom-24 left-0 w-full z-30 px-4 sm:px-12 lg:px-24">
          <div className="max-w-6xl flex flex-wrap gap-4 md:gap-8 justify-start">
            <Link
              to="/book"
              className="bg-[#D4AF37] hover:bg-[#B38728] text-white px-10 py-4 md:px-14 md:py-5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/20 text-white px-10 py-4 md:px-14 md:py-5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-all"
            >
              Our Rituals
            </Link>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* Intro Section - Overlapping Layout */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 p-4 bg-white shadow-2xl rounded-sm animate-reveal">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df4906687cb5?auto=format&fit=crop&q=80&w=1000"
                  alt="Fine Art Nails"
                  className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 h-[600px] object-cover w-full"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 z-20 p-2 bg-white shadow-2xl rounded-sm hidden lg:block animate-float">
                <img
                  src="https://images.unsplash.com/photo-1607691503525-f7562d47f82a?auto=format&fit=crop&q=80&w=800"
                  alt="Detail shot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-10 animate-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-4">
                <span className="gold-text font-bold uppercase tracking-[0.4em] text-xs">A Legacy of Beauty</span>
                <h2 className="text-4xl md:text-6xl font-bold leading-[1.1]">Where Craftsmanship <br /> Meets Relaxation</h2>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg font-light">
                Step into a world of curated elegance. Our master technicians combine avant-garde techniques with the finest non-toxic products to ensure your nails aren't just beautiful, but healthy. At Crystal Nails, every appointment is a private retreat from the ordinary.
              </p>
              <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-10">
                <div className="space-y-1">
                  <span className="text-4xl font-light gold-text font-serif">15+</span>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Years of Artistry</p>
                </div>
                <div className="space-y-1">
                  <span className="text-4xl font-light gold-text font-serif">150+</span>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Verified 5-Star Reviews</p>
                </div>
              </div>
              <Link to="/about" className="inline-block group text-sm font-bold uppercase tracking-[0.2em] pt-6">
                <span className="border-b-2 border-transparent group-hover:border-[#D4AF37] transition-all">Discover Our Story →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 soft-pink relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Signature <br /> Rituals</h2>
              <div className="w-20 h-1 gold-bg mb-6" />
              <p className="text-slate-500 font-light italic text-lg">Indulge in our most sought-after treatments, designed to rejuvenate and inspire.</p>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-[0.3em] border-b border-slate-300 pb-2 hover:border-[#D4AF37] transition-all">Explore Entire Menu</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredServices.map((service, idx) => (
              <div 
                key={service.id} 
                className="group relative h-[500px] overflow-hidden rounded-sm bg-slate-200 animate-reveal"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-4 transition-transform duration-500">
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 block">${service.price}</span>
                  <h3 className="text-white text-2xl font-bold mb-4">{service.name}</h3>
                  <Link
                    to="/book"
                    className="inline-block text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-white hover:text-black"
                  >
                    Schedule Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="gold-text font-bold uppercase tracking-[0.5em] text-[10px] block mb-4">Client Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold">The Crystal Reputation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {REVIEWS.map((review, idx) => (
              <div 
                key={review.id} 
                className="text-center space-y-8 animate-reveal"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="relative inline-block">
                  <img src={review.image} className="w-24 h-24 rounded-full mx-auto grayscale" alt={review.author} />
                  <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-white rounded-full w-8 h-8 flex items-center justify-center text-xs">★</div>
                </div>
                <p className="text-slate-600 text-lg italic font-light leading-relaxed">"{review.comment}"</p>
                <div>
                  <h4 className="font-bold text-slate-900 tracking-widest uppercase text-xs">{review.author}</h4>
                  <span className="text-[10px] text-slate-300 uppercase tracking-widest mt-1 block">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & CTA Section */}
      <section className="relative py-40 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1519415510270-345856417539?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover animate-kenburns" alt="Background" />
        </div>
        <div className="absolute inset-0 bg-slate-900/60" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">Elevate Your Everyday.</h2>
            <p className="text-lg md:text-xl text-white/60 font-light tracking-wide italic">
              "Beauty is the illumination of your soul." <br />
              Secure your moment of tranquility today.
            </p>
            
            <div className="p-12 glass-panel rounded-sm inline-block w-full max-w-lg border-white/10 animate-reveal">
              <div className="space-y-6">
                <div className="flex justify-between items-center text-slate-800">
                  <span className="uppercase tracking-[0.3em] text-xs font-bold">Mon - Sun</span>
                  <span className="gold-text font-serif text-xl italic">10 AM - 10 PM</span>
                </div>
                <div className="w-full h-px bg-slate-200" />
                <div className="flex justify-between items-center text-slate-800">
                  <span className="uppercase tracking-[0.3em] text-xs font-bold">Location</span>
                  <span className="text-sm font-medium">Washington St, Norwood</span>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <Link
                to="/book"
                className="bg-[#D4AF37] text-white px-16 py-6 rounded-full text-sm font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl hover:scale-105 active:scale-95 inline-block"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
