'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Professional photographer at work"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
                <div className="container-custom px-6 md:px-12 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif text-offwhite mb-6 leading-tight"
                    >
                        Visual stories that move people
                        <br />
                        <span className="text-gold">and build brands</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-warmgray mb-12 font-light"
                    >
                        Photography · Videography · Brand Content · Digital Media
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => scrollToSection('#portfolio')}
                            className="px-8 py-4 bg-gold text-charcoal font-medium rounded-sm hover:bg-gold/90 transition-all duration-300 hover:scale-105 min-w-[180px]"
                        >
                            View Work
                        </button>
                        <button
                            onClick={() => scrollToSection('#contact')}
                            className="px-8 py-4 bg-transparent border-2 border-offwhite text-offwhite font-medium rounded-sm hover:bg-offwhite hover:text-charcoal transition-all duration-300 hover:scale-105 min-w-[180px]"
                        >
                            Contact Me
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-offwhite rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-offwhite rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
