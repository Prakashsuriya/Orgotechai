import React from 'react';

const Footer = ({ onOpenTerms }) => {
    return (
        <footer style={{
            position: 'relative',
            zIndex: 10,
            padding: '2rem',
            textAlign: 'center',
            borderTop: '1px solid var(--glass-border)',
            background: 'var(--bg-primary)',
            color: 'var(--text-secondary)'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <p style={{ fontWeight: 500 }}>© 2026 All copyrights reserved Orgotechai</p>
                <button
                    onClick={onOpenTerms}
                    style={{
                        color: 'var(--accent-blue)',
                        textDecoration: 'underline',
                        fontSize: '0.9rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Terms and Conditions
                </button>
            </div>
        </footer>
    );
};

export default Footer;
