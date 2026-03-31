import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    { id: 1, title: 'Web Development', desc: 'Custom, high-performance websites and web applications tailored to your business needs.', img: '/images/service_web_dev.png' },
    { id: 2, title: 'App Development', desc: 'Native and cross-platform mobile experiences for iOS and Android architecture.', img: '/images/service_app_dev.png' },
    { id: 3, title: 'AI Agents', desc: 'Custom intelligent agents to automate tasks and boost operational efficiency.', img: '/images/service_ai_agent.png' },
    { id: 4, title: 'Poster & Brochure', desc: 'Creative, eye-catching visual branding materials and graphic designs.', img: '/images/service_design.png' },
    { id: 5, title: 'Cloud Support', desc: 'Reliable infrastructure deployment, maintenance, and scalable cloud deployments.', img: '/images/service_cloud.png' },
];

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="services" style={{ minHeight: '100vh', background: 'var(--bg-secondary)', padding: '8rem 0', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div className="container" style={{ padding: '0 2rem', width: '100%' }}>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Expert <span className="text-gradient">Services</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
                        Beyond products, we offer consulting and development services to help you build the future.
                    </p>
                </motion.div>

                {/* Dynamic Accordion Layout */}
                <div style={{
                    display: 'flex',
                    height: '60vh',
                    minHeight: '400px',
                    gap: '1rem',
                    width: '100%',
                    flexDirection: window.innerWidth < 768 ? 'column' : 'row' // Basic responsive fallback
                }}>
                    {services.map((s, i) => {
                        const isHovered = hoveredIndex === i;

                        return (
                            <motion.div
                                key={s.id}
                                onHoverStart={() => setHoveredIndex(i)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    flex: { type: "spring", stiffness: 200, damping: 20 },
                                    opacity: { duration: 0.5, delay: i * 0.1 },
                                    x: { duration: 0.5, delay: i * 0.1 }
                                }}
                                style={{
                                    flex: isHovered ? 3 : 1,
                                    background: isHovered ? 'var(--glass-bg)' : 'rgba(255, 255, 255, 0.01)',
                                    border: '1px solid',
                                    borderColor: isHovered ? 'var(--accent-blue)' : 'var(--glass-border)',
                                    borderRadius: '24px',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    boxShadow: isHovered ? '0 10px 40px rgba(0, 210, 255, 0.15)' : 'none'
                                }}
                                className={isHovered ? "active-panel" : ""}
                            >
                                {/* Background Image Layer */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        scale: isHovered ? 1.05 : 1,
                                        opacity: isHovered ? 0.6 : 0.3
                                    }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${s.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        zIndex: 0,
                                        filter: 'brightness(0.7) contrast(1.2)'
                                    }}
                                />

                                {/* Gradient Overlay for Text Visibility */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to top, rgba(4,8,20,0.9) 0%, rgba(4,8,20,0.2) 60%, rgba(4,8,20,0.8) 100%)',
                                    zIndex: 0
                                }} />

                                {/* Background Glow Effect on Active */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'radial-gradient(circle at 50% 100%, rgba(0,210,255,0.4) 0%, transparent 60%)',
                                                zIndex: 0,
                                                mixBlendMode: 'screen'
                                            }}
                                        />
                                    )}
                                </AnimatePresence>

                                <div style={{ position: 'relative', zIndex: 1, minWidth: '200px' }}>
                                    <motion.h3
                                        layout="position"
                                        style={{
                                            fontSize: isHovered ? '1.8rem' : '1.2rem',
                                            color: isHovered ? 'var(--accent-neon)' : '#fff',
                                            marginBottom: '1rem',
                                            transition: 'all 0.3s ease',
                                            whiteSpace: isHovered ? 'normal' : 'nowrap'
                                        }}
                                    >
                                        {s.title}
                                    </motion.h3>

                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 20, height: 0 }}
                                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                exit={{ opacity: 0, y: 20, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}
                                            >
                                                {s.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;
