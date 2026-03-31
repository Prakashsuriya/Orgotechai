import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '50+', label: 'Users Reached' },
    { value: '10+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'Support' }
];

const WhyChooseUs = () => {
    return (
        <section>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Why <span className="text-gradient">Choose Us</span></h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                            className="glass-panel"
                            style={{ padding: '3.5rem 2rem', textAlign: 'center' }}
                        >
                            <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--accent-neon)', marginBottom: '1rem' }}>
                                {stat.value}
                            </div>
                            <div style={{ color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
