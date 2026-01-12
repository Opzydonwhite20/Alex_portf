'use client';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-charcoal text-offwhite border-t border-warmgray/20">
            <div className="container-custom section-padding">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif text-gold mb-4">
                            Alex Dee Media
                        </h3>
                        <p className="text-warmgray leading-relaxed">
                            Where memories become masterpieces. Capturing life, one frame at a time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(`#${link.toLowerCase()}`);
                                    }}
                                    className="text-warmgray hover:text-gold transition-colors duration-300"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-medium mb-4">Connect</h4>
                        <div className="flex gap-4 mb-4">
                            <a
                                href="https://instagram.com/alex_deeimage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-offwhite/10 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="https://wa.me/2348105105364"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-offwhite/10 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 hover:scale-110"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={20} />
                            </a>
                            <a
                                href="mailto:aduragbemiadeyemo1@gmail.com"
                                className="p-3 bg-offwhite/10 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300 hover:scale-110"
                                aria-label="Email"
                            >
                                <HiMail size={20} />
                            </a>
                        </div>
                        <p className="text-warmgray text-sm">
                            Ibadan, Nigeria
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-warmgray/20 text-center text-warmgray text-sm">
                    <p>
                        © {currentYear} Alex Dee Media. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
