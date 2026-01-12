import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <Hero />
            <About />
            <Portfolio />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
