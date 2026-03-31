import React, { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <SmoothScroll>
      <div className="app-container">
        <div className="canvas-container">
          <AmbientBackground />
        </div>

        <Navbar />
        <Hero />
        <About />
        <Products />
        <Services />
        <WhyChooseUs />
        <Contact />
        <Footer onOpenTerms={() => setShowTerms(true)} />

        <TermsAndConditions isOpen={showTerms} onClose={() => setShowTerms(false)} />
      </div>
    </SmoothScroll>
  );
}

export default App;
