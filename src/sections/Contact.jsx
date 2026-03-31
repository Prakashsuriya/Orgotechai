import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '6rem' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                maxWidth: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(58,123,213,0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{ padding: '4rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>Ready to <span className="text-gradient">Transform?</span></h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                        Get in touch with our team to discuss your next big idea.
                    </p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <input type="text" placeholder="First Name" style={{ ...inputStyle, flex: '1 1 200px' }} />
                            <input type="text" placeholder="Last Name" style={{ ...inputStyle, flex: '1 1 200px' }} />
                        </div>
                        <input type="email" placeholder="Email Address" style={inputStyle} />
                        <textarea placeholder="Your Message" rows="5" style={{ ...inputStyle, resize: 'vertical' }}></textarea>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary"
                            style={{ marginTop: '1rem', width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}
                            type="button"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1.2rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid var(--glass-border)',
    borderRadius: '12px',
    color: 'white',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s, background 0.3s'
};

export default Contact;
