import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(textRef.current, {
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '0'
        }}>
            <div className="container" ref={textRef} style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--accent-blue)',
                        borderRadius: '30px',
                        marginBottom: '2rem',
                        backdropFilter: 'blur(10px)',
                        color: 'var(--accent-neon)',
                        fontWeight: 600,
                        boxShadow: '0 0 20px rgba(0, 210, 255, 0.2)'
                    }}
                >
                    Welcome to the Future of Technology
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
                >
                    Building <span className="text-gradient">Tomorrow's</span><br />
                    Digital Experiences
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto 3rem'
                    }}
                >
                    Orgotechai delivers cutting-edge products and services designed to elevate your brand through immersive 3D web technology.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                        Explore Our World
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
