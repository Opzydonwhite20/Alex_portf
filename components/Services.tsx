'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCamera, HiVideoCamera, HiPencilAlt, HiPhotograph, HiFilm, HiColorSwatch, HiPrinter, HiSparkles } from 'react-icons/hi';

const services = [
    {
        icon: HiCamera,
        title: 'Commercial Photography',
        description: 'Events, weddings, portraits, lifestyle, and product photography.',
    },
    {
        icon: HiVideoCamera,
        title: 'Brand Videos',
        description: 'Weddings, documentaries, interviews, and celebration videos.',
    },
    {
        icon: HiSparkles,
        title: 'Social Media Content',
        description: 'Engaging content creation for your social platforms.',
    },
    {
        icon: HiColorSwatch,
        title: 'Creative Direction',
        description: 'Visual storytelling and brand content strategy.',
    },
    {
        icon: HiPencilAlt,
        title: 'Photo Editing & Retouching',
        description: 'Professional editing to bring out the best in your shots.',
    },
    {
        icon: HiPhotograph,
        title: 'Old Photo Restoration',
        description: 'Give faded memories a new life with expert restoration.',
    },
    {
        icon: HiFilm,
        title: 'Video Editing',
        description: 'Highlight reels, promos, recap videos, and more.',
    },
    {
        icon: HiPrinter,
        title: 'Prints & Souvenirs',
        description: 'Frames, albums, photobooks, and custom gifts.',
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="services" className="section-padding bg-charcoal text-offwhite" ref={ref}>
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">
                        Services
                    </h2>
                    <p className="text-warmgray text-lg max-w-2xl mx-auto">
                        No matter your budget — we have a package for you
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="group p-6 bg-offwhite/5 backdrop-blur-sm rounded-sm hover:bg-offwhite/10 transition-all duration-300 hover:-translate-y-2 border border-warmgray/20"
                            >
                                <div className="mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={40} />
                                </div>
                                <h3 className="text-xl font-serif text-offwhite mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-warmgray text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
