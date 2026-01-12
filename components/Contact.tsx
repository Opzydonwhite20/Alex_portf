'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, just show success message
        // In production, this would send to an API endpoint
        setStatus('Thank you! Your message has been received. We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="section-padding bg-charcoal text-offwhite" ref={ref}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-warmgray text-lg">
                        Ready to create magic together?
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-warmgray">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-offwhite/10 border border-warmgray/30 rounded-sm text-offwhite placeholder-warmgray/50 focus:outline-none focus:border-gold transition-colors duration-300"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-warmgray">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-offwhite/10 border border-warmgray/30 rounded-sm text-offwhite placeholder-warmgray/50 focus:outline-none focus:border-gold transition-colors duration-300"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-warmgray">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-offwhite/10 border border-warmgray/30 rounded-sm text-offwhite placeholder-warmgray/50 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gold text-charcoal font-medium rounded-sm hover:bg-gold/90 transition-all duration-300 hover:scale-105"
                            >
                                Send Message
                            </button>

                            {status && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-gold text-center"
                                >
                                    {status}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-serif text-gold mb-6">
                                Get In Touch
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <HiLocationMarker className="text-gold mt-1 flex-shrink-0" size={24} />
                                    <div>
                                        <p className="text-offwhite font-medium">Location</p>
                                        <p className="text-warmgray">Ibadan, Nigeria</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <HiPhone className="text-gold mt-1 flex-shrink-0" size={24} />
                                    <div>
                                        <p className="text-offwhite font-medium">Phone</p>
                                        <p className="text-warmgray">+234 701 708 6970</p>
                                        <p className="text-warmgray">+234 810 510 5364</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <HiMail className="text-gold mt-1 flex-shrink-0" size={24} />
                                    <div>
                                        <p className="text-offwhite font-medium">Email</p>
                                        <a
                                            href="mailto:aduragbemiadeyemo1@gmail.com"
                                            className="text-warmgray hover:text-gold transition-colors duration-300"
                                        >
                                            aduragbemiadeyemo1@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-serif text-gold mb-6">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://instagram.com/alex_deeimage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-offwhite/10 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={24} />
                                </a>
                                <a
                                    href="https://wa.me/2348105105364"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-offwhite/10 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 hover:scale-110"
                                    aria-label="WhatsApp"
                                >
                                    <FaWhatsapp size={24} />
                                </a>
                                <a
                                    href="mailto:aduragbemiadeyemo1@gmail.com"
                                    className="p-3 bg-offwhite/10 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 hover:scale-110"
                                    aria-label="Email"
                                >
                                    <HiMail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
