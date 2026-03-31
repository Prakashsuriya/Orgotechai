import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsAndConditions = ({ isOpen, onClose }) => {
    // Disable body scroll when open (fallback for Lenis if needed)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const containerVars = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1, delayChildren: 0.2 }
        },
        exit: { opacity: 0, y: 50, transition: { duration: 0.4 } }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    data-lenis-prevent="true"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(4, 8, 20, 0.85)',
                        backdropFilter: 'blur(15px)',
                        zIndex: 9999,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        padding: '4rem 2rem'
                    }}
                >
                    <motion.div
                        variants={containerVars}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="container glass-panel"
                        style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', position: 'relative', background: 'var(--bg-secondary)' }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'fixed',
                                top: '2rem',
                                right: '2rem',
                                fontSize: '1.5rem',
                                color: 'var(--text-primary)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '45px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                zIndex: 10000,
                                transition: 'background 0.2s',
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            ✕
                        </button>

                        <motion.h2 variants={itemVars} style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem' }}>
                            Terms and <span className="text-gradient">Conditions</span>
                        </motion.h2>

                        <motion.div variants={itemVars} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.8rem', fontSize: '1.05rem' }}>
                            <p>Welcome to Orgotechai. By accessing or using our platform and services, you agree to be bound by the following terms and conditions.</p>

                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>1. Acceptance of Terms</h3>
                                <p>By engaging with our website, ParkNest App, or consulting services, you accept these terms in full. If you disagree with any part of these terms, do not use our services.</p>
                            </div>

                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>2. Services & Products</h3>
                                <p>Orgotechai provides digital architecture, AI agents, Web/App development, and cloud support. The ParkNest application is currently in development and subject to change prior to official launch.</p>
                            </div>

                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>3. Intellectual Property</h3>
                                <p>All content, designs, graphics, and underlying code are the intellectual property of Orgotechai. Unauthorized reproduction or redistribution is strictly prohibited.</p>
                            </div>

                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>4. Limitation of Liability</h3>
                                <p>Orgotechai is not liable for indirect, incidental, or consequential damages arising from the use of our digital platforms or services.</p>
                            </div>

                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>5. User Obligations</h3>
                                <p>As a user, you agree not to distribute malware, reverse-engineer proprietary platforms, or engage in any behavior that degrades the performance of Orgotechai systems.</p>
                            </div>

                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>6. Termination</h3>
                                <p>We reserve the right to suspend or terminate services tied to your account or IP indefinitely if fundamental terms of conduct are breached without prior notice.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVars} style={{ marginTop: '3.5rem', textAlign: 'center' }}>
                            <button className="btn-primary" onClick={onClose} style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Accept & Close</button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TermsAndConditions;
