
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES } from '../constants';
import { BookingFormData } from '../types';
import { supabase } from "../lib/supabase";
const Booking: React.FC = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceId: '',
    date: '',
    time: '',
    paymentMethod: 'Credit Card',
    message: ''
  });

  // Handle pre-selected service from query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get('service');
    if (serviceId) {
      setFormData(prev => ({ ...prev, serviceId }));
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

 const handleBooking = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const selectedService = SERVICES.find(s => s.id === formData.serviceId);

    if (!selectedService) {
      alert("Please select a service.");
      setIsSubmitting(false);
      return;
    }

    // ✅ Save booking to Supabase
    const { error } = await supabase.from("bookings").insert([
      {
        name: formData.fullName,
        phone: formData.phone,
        service: selectedService.name,
        date: formData.date,      // format: YYYY-MM-DD
        time: formData.time,
        amount: selectedService.price
      }
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      alert("Booking save nahi hui. Please try again.");
      setIsSubmitting(false);
      return;
    }

    // ✅ Success
    setStep(3);
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 min-h-screen">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Progress Bar */}
        <div className="flex h-2">
          <div className={`transition-all duration-500 gold-bg ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`} />
          <div className="flex-1 bg-slate-100" />
        </div>

        <div className="p-8 md:p-12">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">Book Your Visit</h1>
                <p className="text-slate-500">Select your preferred service and contact details.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Select Service</label>
                  <select
                    required
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none"
                  >
                    <option value="">Choose a treatment...</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.name} - ${s.price}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Date</label>
                  <input
                    required
                    type="date"
                    name="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Phone Number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="(781) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-slate-400">Preferred Time</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'].map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, time: t }))}
                      className={`py-2 rounded-lg text-sm font-bold transition-all ${
                        formData.time === t ? 'gold-bg text-white shadow-md' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                Proceed to Secure Payment
                <span>➔</span>
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <button onClick={() => setStep(1)} className="text-sm text-slate-400 mb-8 hover:text-slate-600">← Back to details</button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Secure Payment</h2>
                  <p className="text-slate-500 text-sm">To confirm your appointment for <span className="font-bold text-slate-800">{selectedService?.name}</span>, please provide payment information.</p>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-[#D4AF37] bg-pink-50 rounded-xl">
                      <div className="flex justify-between font-bold">
                        <span>Due Today</span>
                        <span>${selectedService?.price}</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-slate-400">Card Information</label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          placeholder="Card Number"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] outline-none"
                        />
                        <div className="absolute right-4 top-3.5 text-slate-300">💳</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input required placeholder="MM/YY" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3" />
                      <input required placeholder="CVC" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3" />
                    </div>
                    
                    <button
                      disabled={isSubmitting}
                      className="w-full py-4 gold-bg text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl mt-4"
                    >
                      {isSubmitting ? 'Processing...' : `Confirm Booking & Pay $${selectedService?.price}`}
                    </button>
                    <p className="text-[10px] text-center text-slate-400">Secure 256-bit SSL encrypted payment.</p>
                  </form>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl space-y-4 h-fit">
                   <h3 className="font-bold border-b border-slate-200 pb-2">Booking Summary</h3>
                   <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Service</span>
                     <span className="font-semibold">{selectedService?.name}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Duration</span>
                     <span className="font-semibold">{selectedService?.duration} mins</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Date</span>
                     <span className="font-semibold">{formData.date}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Time</span>
                     <span className="font-semibold">{formData.time}</span>
                   </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-12 animate-in zoom-in duration-500">
               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
               <h2 className="text-4xl font-bold mb-4">See You Soon, {formData.fullName.split(' ')[0]}!</h2>
               <p className="text-slate-500 mb-8 max-w-md mx-auto">Your appointment has been confirmed. A confirmation email and SMS have been sent to your provided contact details.</p>
               <div className="bg-slate-50 p-6 rounded-2xl mb-8 inline-block text-left w-full max-w-sm">
                 <p className="text-xs uppercase text-slate-400 font-bold mb-2">Booking Details</p>
                 <p className="font-bold">{selectedService?.name}</p>
                 <p className="text-sm text-slate-600">{formData.date} at {formData.time}</p>
                 <p className="text-sm text-slate-600 mt-2">848 Washington St, Norwood, MA</p>
               </div>
               <br />
               <a href="/" className="gold-text font-bold hover:underline">Return to Home Page</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
