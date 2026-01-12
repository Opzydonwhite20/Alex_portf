'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/images/about-slide-1.jpeg',
        '/images/about-slide-2.jpeg',
        '/images/about-slide-3.jpeg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section id="about" className="section-padding bg-charcoal text-offwhite" ref={ref}>
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Slideshow */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={slides[currentSlide]}
                                    alt={`Aduragbemi - Alex Dee Media ${currentSlide + 1}`}
                                    fill
                                    className="object-cover"
                                    quality={90}
                                    priority={currentSlide === 0}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                            ? 'bg-gold w-8'
                                            : 'bg-warmgray/50 hover:bg-warmgray'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gold">
                            About Me
                        </h2>
                        <div className="space-y-4 text-warmgray text-lg leading-relaxed">
                            <p>
                                I'm <span className="text-offwhite font-medium">Aduragbemi</span>, the creative mind behind{' '}
                                <span className="text-offwhite font-medium">Alex Dee Media</span>. Rooted in passion and guided by purpose,
                                we're a photography and media brand based in Ibadan, Nigeria.
                            </p>
                            <p>
                                We specialize in transforming everyday moments into timeless visual memories — blending professionalism,
                                tradition, and modern creativity to tell your story in the most authentic way.
                            </p>
                            <p>
                                With years of experience behind the lens, we've covered everything from quiet portraits to unforgettable
                                celebrations. And we're just getting started.
                            </p>
                            <p className="text-gold font-medium italic">
                                Faith-driven. Detail-focused. Client-loved.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-8"
                        >
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-block px-8 py-3 bg-gold text-charcoal font-medium rounded-sm hover:bg-gold/90 transition-all duration-300 hover:scale-105"
                            >
                                Let's Work Together
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
