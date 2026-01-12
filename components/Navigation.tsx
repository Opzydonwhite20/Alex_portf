'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-offwhite/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20 px-6 md:px-12">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#home');
                        }}
                        className="text-2xl font-serif font-semibold text-charcoal"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Alex Dee Media
                    </motion.a>

                    {/* Desktop Navigation */}
                    <motion.div
                        className="hidden md:flex items-center space-x-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="text-charcoal hover:text-gold transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-charcoal hover:text-gold transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm md:hidden"
                            style={{ top: '80px' }}
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed right-0 top-20 bottom-0 w-64 bg-offwhite shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col p-8 space-y-6">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.href);
                                        }}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="text-lg text-charcoal hover:text-gold transition-colors duration-300 font-medium"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
