import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                background: scrolled ? 'rgba(4, 8, 20, 0.8)' : (mobileMenuOpen ? 'rgba(4, 8, 20, 0.95)' : 'transparent'),
                backdropFilter: scrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
                borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                zIndex: 100,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s ease'
            }}
        >
            <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', zIndex: 101 }}>
                Orgo<span className="text-gradient">techai</span>
            </div>

            {/* Desktop Menu */}
            <div className="mobile-hidden" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="#about" style={{ fontWeight: 500, transition: 'color 0.2s' }}>About</a>
                <a href="#products" style={{ fontWeight: 500 }}>Products</a>
                <a href="#services" style={{ fontWeight: 500 }}>Services</a>
                <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', display: 'inline-block' }}>Contact Us</a>
            </div>

            {/* Mobile Menu Toggle button */}
            <div className="mobile-visible-block" style={{ zIndex: 101 }}>
                <button onClick={toggleMenu} style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            background: 'rgba(4, 8, 20, 0.98)',
                            backdropFilter: 'blur(10px)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '2rem 0',
                            gap: '2rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}
                    >
                        <a href="#about" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: 'white' }}>About</a>
                        <a href="#products" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: 'white' }}>Products</a>
                        <a href="#services" onClick={toggleMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: 'white' }}>Services</a>
                        <a href="#contact" onClick={toggleMenu} className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'inline-block', marginTop: '1rem' }}>Contact Us</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
