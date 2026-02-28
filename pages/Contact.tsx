
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      {/* Map Section */}
      <section className="h-[400px] bg-slate-200 w-full overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.123456789!2d-71.1999!3d42.1932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e47f97a5a8f4b1%3A0x6789abc!2s848%20Washington%20St%2C%20Norwood%2C%20MA%2002062!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>

      {/* Contact Details & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
                <p className="text-slate-500">We would love to hear from you. Whether you have a question about our services or want to book a large group event, our team is ready to assist.</p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 gold-bg text-white rounded-2xl flex items-center justify-center flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-bold text-lg">Visit Us</h3>
                    <p className="text-slate-600">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 gold-bg text-white rounded-2xl flex items-center justify-center flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p className="text-slate-600">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 gold-bg text-white rounded-2xl flex items-center justify-center flex-shrink-0">✉️</div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-slate-600">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 gold-bg text-white rounded-2xl flex items-center justify-center flex-shrink-0">🕒</div>
                  <div>
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p className="text-slate-600">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</label>
                    <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Subject</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Inquiry about..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 soft-pink border-t border-pink-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-4">Stay Radiant</h2>
           <p className="text-slate-600 mb-8">Subscribe to our newsletter to receive exclusive offers and the latest nail trends directly to your inbox.</p>
           <form className="flex flex-col sm:flex-row gap-4">
             <input type="email" placeholder="Your email address" className="flex-1 px-6 py-4 rounded-full border border-pink-200 outline-none focus:ring-2 focus:ring-[#D4AF37]" />
             <button type="button" className="bg-[#D4AF37] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#B38728] transition-all">Subscribe</button>
           </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
