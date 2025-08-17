import React, { useRef } from 'react';
import CardNav from './components/CardNav/CardNav';
import DarkVeil from './components/DarkVeil/DarkVeil';
import MagicBento from './MagicBento';
import VariableProximity from './VariableProximity';
import TextType from './TextType';
import AnimatedContent from './AnimatedContent';
import SpotlightCard from './SpotlightCard';
import TiltedCard from './TiltedCard';

import './App.css';

// Dados de navegação para o CardNav



const navigationItems = [
  {
    label: 'About Us',
    bgColor: 'rgba(22, 33, 62, 0.3)',
    textColor: '#ffffff',
    links: [
      { label: 'Our Services', href: '#services', ariaLabel: 'Services Section' },
      { label: 'Mission, Vision & Values', href: '#services', ariaLabel: 'Mission, Vision & Values' }
    ]
  },
  {
    label: 'Contact',
    bgColor: 'rgba(15, 52, 96, 0.3)',
    textColor: '#ffffff',
    links: [
      { label: 'E-mail', href: '#contact', ariaLabel: 'Contact by Email' },
      { label: 'Instagram', href: '#contact', ariaLabel: 'Contact via Instagram' },
      { label: 'Phone', href: '#contact', ariaLabel: 'Contact by Phone' }
    ]
  },
  {
    label: 'Our Team',
    bgColor: 'rgba(83, 52, 131, 0.3)',
    textColor: '#ffffff',
    links: [
      { label: 'Our Team', href: '#team', ariaLabel: 'Meet Our Team' }
    ]
  }
];

function App() {
  const heroContainerRef = useRef(null);
  const servicesContainerRef = useRef(null);

  return (
    <div className="App">
      {/* Background animado */}
      <div className="background-container" style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <DarkVeil />
      </div>

      {/* Navegação */}
      <CardNav 
        items={navigationItems}
        logo="BASE"
        ctaText="Contact Us"
        ctaLink="#contact"
      />

      {/* Seção Hero */}
      <section className="hero-section" ref={heroContainerRef}>
        <div className="hero-content">
          <h1 className="hero-title">
            <VariableProximity 
              label="BASE"
              containerRef={heroContainerRef}
              radius={120}
              falloff="exponential"
              fromFontVariationSettings="'wght' 300, 'opsz' 14"
              toFontVariationSettings="'wght' 900, 'opsz' 48"
            />
          </h1>
          <h2 className="hero-subtitle">Business Agency of Sports & Entertainment</h2>
          <div className="hero-description">
            <TextType 
              text={[
                "BASE is a consulting and legal services firm focused on the sports and entertainment industries.",
                "We deliver integrated solutions in corporate management and legal advisory.",
                "Serving clubs, federations, investors, and entertainment companies.",
                "Our expertise combines professionalism, innovation, and a strategic approach."
              ]}
              typingSpeed={50}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="services-section" id="services" ref={servicesContainerRef}>
        <div className="section-header">
          <h2 className="section-title">
            <VariableProximity 
              label=""
              containerRef={servicesContainerRef}
              radius={100}
              falloff="linear"
              fromFontVariationSettings="'wght' 400, 'opsz' 16"
              toFontVariationSettings="'wght' 700, 'opsz' 32"
            />
          </h2>
        </div>
        
        {/* Grid de cards interativos */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.4}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.1}
          threshold={0.2}
          delay={0.3}
        >
          <MagicBento 
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={200}
            particleCount={30}
            glowColor="132, 0, 255"
          />
        </AnimatedContent>
      </section>

      {/* Seção de Contato */}
      <section className="contact-section" id="contact">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
        </div>
        
        <div className="contact-grid">
          <SpotlightCard className="contact-card">
            <div className="contact-item">
              <div className="contact-header">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>E-mail</h3>
              </div>
              <p className="contact-subtitle">Send us a message</p>
              <p>contact@ba.se</p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="contact-card">
            <div className="contact-item">
              <div className="contact-header">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth="2"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Instagram</h3>
              </div>
              <p className="contact-subtitle">Follow our updates</p>
              <p><a href="https://ba.se" target="_blank" rel="noopener noreferrer">https://ba.se</a></p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="contact-card">
            <div className="contact-item">
              <div className="contact-header">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.17 2.48 8.17 3.08C8.17 4.43 8.4 5.74 8.83 6.96C8.96 7.34 8.85 7.76 8.54 8.07L6.9 9.71C8.5 12.78 11.22 15.5 14.29 17.1L15.93 15.46C16.24 15.15 16.66 15.04 17.04 15.17C18.26 15.6 19.57 15.83 20.92 15.83C21.52 15.83 22 16.31 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Phone</h3>
              </div>
              <p className="contact-subtitle">Call us directly</p>
              <p>+123-456-7890</p>
            </div>
          </SpotlightCard>


        </div>
      </section>

      {/* Seção Our Team */}
      <section className="team-section" id="team">
        <div className="section-header">
          <h2 className="section-title">Our Team</h2>
        </div>
        
        <div className="team-grid">
          <TiltedCard
            imageSrc="/images/team/jonas_foto.jpg"
            altText="Jonas Marmello"
            captionText="Jonas Marmello"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Jonas Marmello
              </p>
            }
          />
          
          <TiltedCard
            imageSrc="/images/team/rafael_foto.jpg"
            altText="Rafael Simas"
            captionText="Rafael Simas"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Rafael Simas
              </p>
            }
          />
          
          <TiltedCard
            imageSrc="/images/team/miguel_foto.jpg"
            altText="Miguel Abreu"
            captionText="Miguel Abreu"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Miguel Abreu
              </p>
            }
          />
          
          <TiltedCard
            imageSrc="/images/team/rapahel_foto.jpg"
            altText="Raphael Sá"
            captionText="Raphael Sá"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Raphael Sá
              </p>
            }
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 BASE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;