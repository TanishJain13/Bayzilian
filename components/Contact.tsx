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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/xvggebrp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[120px] bg-rich-cream relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-secondary"></div>
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs">Get in Touch</span>
            <div className="h-[1px] w-8 bg-secondary"></div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[4rem] font-serif font-bold text-primary mb-4"
          >
            Connect <span className="text-secondary italic font-light">With Us</span>
          </motion.h2>
          <p className="text-xl text-foreground/50 font-light max-w-2xl mx-auto">
            Whether you're a boutique salon owner or a large salon chain, our team is ready to assist your journey to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            {[
              { icon: Phone, label: 'Main Registry', value: '+91 7506068946', value2: '+91 7709597120', value3: '+91 9653184921', sub: 'Technical Support' },
              { icon: Mail, label: 'Email Correspondence', value: 'info@evergloss.biz', sub: 'General Enquiries' },
              { icon: MapPin, label: 'Headquarters', value: 'Evergloss Cosmetics', sub: 'Mumbai, India' }
            ].map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full border border-secondary/30 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 bg-white/50 shadow-sm">
                  <info.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold mb-1">{info.label}</p>
                  <p className="text-xl font-bold text-foreground mb-1">{info.value}</p>
                  {info.value2 && <p className="text-xl font-bold text-foreground mb-1">{info.value2}</p>}
                  {info.value3 && <p className="text-xl font-bold text-foreground mb-1">{info.value3}</p>}
                  <p className="text-xs text-foreground/30">{info.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 p-12 rounded-[24px] bg-card border border-secondary/20 shadow-xl backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] -z-10"></div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-primary/80 font-bold ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-primary rounded-[16px] text-foreground gold-focus-glow transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-primary/80 font-bold ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-primary rounded-[16px] text-foreground gold-focus-glow transition-all"
                    placeholder="name@salon.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-primary/80 font-bold ml-1">Inquiry Topic</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white border border-primary rounded-[16px] text-foreground gold-focus-glow transition-all"
                  placeholder="Distribution / Treatment Inquiry"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-primary/80 font-bold ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-white border border-primary rounded-[16px] text-foreground gold-focus-glow transition-all resize-none"
                  placeholder="How can our experts assist you?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitting || submitted}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-full btn-gold font-bold tracking-widest uppercase text-sm shadow-xl hover:shadow-secondary/30 transition-all shimmer-hover overflow-hidden relative disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">Sending...</span>
                ) : submitted ? (
                  <span className="flex items-center gap-2">Sent Successfully</span>
                ) : error ? (
                  <span className="flex items-center gap-2 text-red-200">Delivery Failed - Try Again</span>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
