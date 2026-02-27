'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Get in Touch</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Elite <span className="text-primary italic">Support</span>
          </h2>
          <p className="text-xl text-foreground/50 font-light max-w-2xl mx-auto">
            Whether you're a boutique salon owner or a large distributor, our team is ready to assist your journey to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            {[
              { icon: Phone, label: 'Main Registry', value: '+91 7506068946', sub: 'Technical Support' },
              { icon: Mail, label: 'Email Correspondence', value: 'info@evergloss.biz', sub: 'General Enquiries' },
              { icon: MapPin, label: 'Headquarters', value: 'Evergloss Cosmetics', sub: 'Mumbai, India' }
            ].map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <info.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold mb-1">{info.label}</p>
                  <p className="text-xl font-bold text-foreground mb-1">{info.value}</p>
                  <p className="text-xs text-foreground/30">{info.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 p-12 rounded-[3rem] bg-card/30 border border-primary/5 shadow-2xl backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10"></div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-primary/20 p-4 focus:border-primary focus:outline-none transition-all text-foreground"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-primary/20 p-4 focus:border-primary focus:outline-none transition-all text-foreground"
                    placeholder="name@salon.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-1">Inquiry Topic</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-primary/20 p-4 focus:border-primary focus:outline-none transition-all text-foreground"
                  placeholder="Distribution / Treatment Inquiry"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-primary/60 font-bold ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-primary/20 p-4 focus:border-primary focus:outline-none transition-all text-foreground resize-none"
                  placeholder="How can our experts assist you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-6 rounded-full luxury-gradient text-primary-foreground font-bold tracking-widest uppercase text-sm shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all active:scale-95 overflow-hidden group/btn"
              >
                {submitted ? (
                  <span className="flex items-center gap-2">Sent Successfully</span>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
