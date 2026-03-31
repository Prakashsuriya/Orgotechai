import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: 'ParkNest App',
        desc: 'Find parking and PG/rooms nearby your location.',
        icon: '🅿️',
        status: 'Launching / Coming Soon'
    }
];

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass-panel"
            style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                cursor: 'pointer',
                height: '100%',
                minHeight: '280px',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '1rem',
                right: '-2rem',
                background: 'var(--gradient-glow)',
                color: '#040814',
                padding: '0.4rem 3rem',
                fontWeight: 700,
                fontSize: '0.8rem',
                transform: 'rotate(45deg)',
                boxShadow: '0 4px 10px rgba(0,255,204,0.3)'
            }}>
                {product.status}
            </div>

            <div style={{ fontSize: '3.5rem' }}>{product.icon}</div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-blue)' }}>{product.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>{product.desc}</p>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-neon)', fontWeight: 600 }}>Get Notified →</span>
            </div>
        </motion.div>
    );
};

const Products = () => {
    return (
        <section id="products" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Our <span className="text-gradient">Products</span></h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {products.map((p, i) => (
                        <motion.div key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            style={{ perspective: 1000 }}
                        >
                            <ProductCard product={p} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
