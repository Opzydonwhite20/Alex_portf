'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import PortfolioModal from './PortfolioModal';
import { HiPlay } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    client?: string;
    year?: string;
    video?: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        title: 'Traditional Wedding',
        category: 'Photography',
        image: '/images/portfolio-wedding-1.png',
        description: 'Capturing the beauty and emotion of a traditional Nigerian wedding ceremony.',
        client: 'Private Client',
        year: '2025',
    },
    {
        id: 2,
        title: 'Editorial Portrait',
        category: 'Photography',
        image: '/images/portfolio-portrait-1.png',
        description: 'Professional editorial portrait with natural lighting and minimal aesthetic.',
        year: '2025',
    },
    {
        id: 3,
        title: 'Brand Campaign 1',
        category: 'Brand Campaigns',
        image: '/images/portfolio-brand-1.jpeg',
        description: 'Professional brand photography showcasing products and lifestyle.',
        year: '2026',
    },
    {
        id: 4,
        title: 'Brand Campaign 2',
        category: 'Brand Campaigns',
        image: '/images/portfolio-brand-2.jpeg',
        description: 'Creative brand storytelling through compelling visuals.',
        year: '2026',
    },
    {
        id: 9,
        title: 'Brand Campaign 3',
        category: 'Brand Campaigns',
        image: '/images/portfolio-brand-3.jpeg',
        description: 'Modern brand photography with authentic moments.',
        year: '2026',
    },
    {
        id: 10,
        title: 'Brand Campaign 4',
        category: 'Brand Campaigns',
        image: '/images/portfolio-brand-4.jpeg',
        description: 'High-end brand campaign with professional execution.',
        year: '2026',
    },
    {
        id: 11,
        title: 'Video Production',
        category: 'Video',
        image: '/images/portfolio-brand-1.jpeg',
        video: '/videos/portfolio-video-1.mp4',
        description: 'Professional video production showcasing creative storytelling.',
        year: '2026',
    },
    {
        id: 5,
        title: 'Social Content',
        category: 'Social Content',
        image: '/images/portfolio-social-1.png',
        description: 'Lifestyle content creation for social media platforms.',
        year: '2025',
    },
    {
        id: 6,
        title: 'Corporate Event',
        category: 'Photography',
        image: '/images/portfolio-event-1.png',
        description: 'Professional event photography capturing candid moments and atmosphere.',
        client: 'Corporate Client',
        year: '2025',
    },
    {
        id: 7,
        title: 'Lifestyle Portrait',
        category: 'Photography',
        image: '/images/WhatsApp Image 2026-01-06 at 12.06.22 PM.jpeg',
        description: 'Natural lifestyle portrait with vibrant colors and authentic moments.',
        year: '2026',
    },
    {
        id: 8,
        title: 'Personal Branding',
        category: 'Brand Campaigns',
        image: '/images/WhatsApp Image 2026-01-06 at 12.06.23 PM.jpeg',
        description: 'Personal branding photography for creative professionals.',
        year: '2026',
    },
];

const categories = ['All', 'Photography', 'Video', 'Brand Campaigns', 'Social Content'];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const filteredItems =
        selectedCategory === 'All'
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === selectedCategory);

    return (
        <>
            <section id="portfolio" className="section-padding bg-offwhite" ref={ref}>
                <div className="container-custom">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
                            Portfolio
                        </h2>
                        <p className="text-warmgray text-lg">
                            Let the work speak for itself
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-gold text-charcoal'
                                    : 'bg-charcoal/10 text-charcoal hover:bg-charcoal/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Portfolio Grid - Desktop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-sm bg-charcoal"
                                onClick={() => setSelectedItem(item)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />

                                {/* Video Play Icon */}
                                {item.video && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="bg-gold/90 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                                            <HiPlay className="text-charcoal" size={48} />
                                        </div>
                                    </div>
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-offwhite font-serif text-2xl mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gold text-sm">{item.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Portfolio Carousel - Mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:hidden"
                    >
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={16}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            className="portfolio-swiper"
                            style={{
                                paddingBottom: '50px',
                            }}
                        >
                            {filteredItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div
                                        className="group cursor-pointer relative aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-sm bg-charcoal"
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-all duration-500 group-active:scale-105"
                                            sizes="100vw"
                                        />

                                        {/* Video Play Icon */}
                                        {item.video && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="bg-gold/90 rounded-full p-6">
                                                    <HiPlay className="text-charcoal" size={48} />
                                                </div>
                                            </div>
                                        )}

                                        {/* Overlay - Always visible on mobile */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex flex-col justify-end p-6">
                                            <h3 className="text-offwhite font-serif text-2xl mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-gold text-sm">{item.category}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <PortfolioModal
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </>
    );
}
