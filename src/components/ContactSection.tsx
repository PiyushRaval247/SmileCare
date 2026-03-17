"use client";

import { siteConfig } from '@/data/config';
import { Mail, MapPin, Phone, Calendar, Clock, User, ClipboardList, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const { contact } = siteConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const text = `*New Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service || 'Not specified'}%0A*Preferred Date:* ${formData.date || 'Not specified'}%0A*Message:* ${formData.message || 'None'}`;
    
    // Simulate slight delay for UX
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Open WhatsApp in new tab
      window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, '_blank');
      
      // Reset after success message
      setTimeout(() => setIsSuccess(false), 5000);
      setFormData({ name: '', phone: '', service: '', date: '', message: '' });
    }, 1000);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/2 opacity-20 hidden lg:block">
        <div className="w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600">
            We are here to help you smile brighter. Call us, WhatsApp us, or visit our clinic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Details (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 lg:col-span-2 order-2 lg:order-1"
          >
            <div className="group flex gap-6">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-blue-100">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 mb-2">We are available during working hours to answer your queries.</p>
                <a href={`tel:${contact.phone}`} className="text-lg font-semibold text-blue-600 hover:text-blue-700">
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="group flex gap-6">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-green-100">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp Us</h3>
                <p className="text-slate-600 mb-2">Send us a message and we'll reply as soon as possible.</p>
                <a 
                  href={`https://wa.me/${contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-semibold text-green-600 hover:text-green-700"
                >
                  +{contact.whatsapp}
                </a>
              </div>
            </div>
            
            <div className="group flex gap-6">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-indigo-100">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
                <p className="text-slate-600 mb-2">{contact.address}</p>
                <a 
                  href="https://www.google.com/maps/dir//24.265366,72.183251" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>
          </motion.div>

          {/* Appointment Form (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 order-1 lg:order-2"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Book an Appointment</h3>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 h-full min-h-[400px]"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Request Sent!</h4>
                    <p className="text-green-600">Redirecting you to WhatsApp to confirm your appointment details...</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-500" /> Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-500" /> Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <ClipboardList className="w-4 h-4 text-blue-500" /> Service
                      </label>
                      <select 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-700"
                      >
                        <option value="">Select a service</option>
                        {siteConfig.services.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="General Checkup">General Checkup</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" /> Preferred Date
                      </label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-700"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-500" /> Message (Optional)
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Any specific issues or questions?"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-all ${
                      isSubmitting 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Processing...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Book via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Embed - Taking full width below */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 w-full h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative group"
        >
          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
          
          <iframe
            title="Clinic Location"
            src={contact.googleMapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Floating Directions Button over Map */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-6 z-20">
            <a 
              href="https://www.google.com/maps/dir//24.265366,72.183251" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:bg-blue-50 hover:scale-105 transition-all flex items-center justify-center gap-2 border border-blue-100 min-w-max"
            >
              <MapPin className="w-5 h-5 fill-blue-100" />
              Get Navigating Directions
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
