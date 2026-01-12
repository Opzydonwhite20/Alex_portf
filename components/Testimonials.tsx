'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
    {
        id: 1,
        quote: 'Alex Dee Media captured our day perfectly! The energy, the professionalism, the delivery — everything was top-notch.',
        author: 'Tolu A.',
        role: 'Bride',
    },
    {
        id: 2,
        quote: 'He brought our old family pictures back to life. We cried. Thank you!',
        author: 'Mrs. Adeyemi',
        role: 'Client',
    },
    {
        id: 3,
        quote: 'Working with Alex Dee Media was an absolute pleasure. The attention to detail and creative vision exceeded our expectations.',
        author: 'Chidi O.',
        role: 'Brand Manager',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding bg-offwhite" ref={ref}>
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-12 text-center">
                        Client Feedback
                    </h2>

                    {/* Testimonial Slider */}
                    <div className="relative min-h-[300px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center px-4 md:px-12"
                            >
                                <blockquote className="text-2xl md:text-3xl font-serif text-charcoal mb-8 leading-relaxed">
                                    "{testimonials[current].quote}"
                                </blockquote>
                                <div>
                                    <p className="text-gold font-medium text-lg">
                                        {testimonials[current].author}
                                    </p>
                                    <p className="text-warmgray">
                                        {testimonials[current].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-charcoal hover:text-gold transition-colors duration-300"
                            aria-label="Previous testimonial"
                        >
                            <HiChevronLeft size={32} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-charcoal hover:text-gold transition-colors duration-300"
                            aria-label="Next testimonial"
                        >
                            <HiChevronRight size={32} />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current ? 'bg-gold w-8' : 'bg-warmgray/40'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
