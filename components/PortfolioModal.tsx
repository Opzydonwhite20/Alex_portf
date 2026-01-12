'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiX } from 'react-icons/hi';
import type { PortfolioItem } from './Portfolio';

interface PortfolioModalProps {
    item: PortfolioItem | null;
    onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (item) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [item, onClose]);

    return (
        <AnimatePresence>
            {item && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="relative bg-offwhite rounded-sm max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-charcoal/80 text-offwhite rounded-full hover:bg-charcoal transition-colors duration-300"
                            aria-label="Close modal"
                        >
                            <HiX size={20} className="sm:w-6 sm:h-6" />
                        </button>

                        {/* Image or Video */}
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-charcoal">
                            {item.video ? (
                                <video
                                    controls
                                    className="w-full h-full object-contain"
                                    poster={item.image}
                                >
                                    <source src={item.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    quality={95}
                                    sizes="(max-width: 1024px) 100vw, 1024px"
                                />
                            )}
                        </div>

                        {/* Details */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gold text-base sm:text-lg mb-3 sm:mb-4">{item.category}</p>

                            {(item.client || item.year) && (
                                <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6 text-sm sm:text-base text-warmgray">
                                    {item.client && (
                                        <div>
                                            <span className="font-medium text-charcoal">Client:</span> {item.client}
                                        </div>
                                    )}
                                    {item.year && (
                                        <div>
                                            <span className="font-medium text-charcoal">Year:</span> {item.year}
                                        </div>
                                    )}
                                </div>
                            )}

                            <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
