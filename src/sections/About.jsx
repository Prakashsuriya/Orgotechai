import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const chars = textRef.current.querySelectorAll('.char');

            gsap.fromTo(chars,
                { color: 'var(--glass-border)' },
                {
                    color: '#ffffff',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1,
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const text = "We are Orgotechai. A visionary collective of engineers and designers crafting Next-Gen digital products and services.";

    return (
        <section id="about" ref={sectionRef} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="glass-panel" style={{ padding: '4rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--accent-blue)', marginBottom: '2rem', fontSize: '1.2rem', letterSpacing: '2px' }}>// WHO WE ARE</h2>
                    <p ref={textRef} style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 600, lineHeight: 1.4, fontFamily: 'var(--font-heading)' }}>
                        {text.split('').map((char, i) => (
                            <span key={i} className="char" style={{ display: 'inline' }}>{char}</span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
