
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold tracking-widest text-white italic serif">Crystal Nails</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Where luxury meets perfection. Experience the finest nail care services in Norwood in a serene and elegant environment.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><span className="sr-only">Facebook</span>FB</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><span className="sr-only">Instagram</span>IG</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors"><span className="sr-only">TikTok</span>TK</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Nail Gallery</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Opening Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sun</span>
                <span className="text-white">10:00 AM - 10:00 PM</span>
              </li>
              <li className="pt-4 text-xs text-slate-500 italic">
                * Holiday hours may vary. Please call us to confirm.
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span>
                <span>{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Crystal Nails Salon. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
