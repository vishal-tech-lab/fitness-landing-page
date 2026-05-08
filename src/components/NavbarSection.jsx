import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';

const NavbarSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const navigate = useNavigate();
  const { saveScrollPosition } = useNavigation();

  // ✅ IMPORTANT SECTIONS ONLY
  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'program', label: 'Program' },
    { id: 'faq', label: 'FAQ' }
  ];

  // ✅ SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 30);

      // ACTIVE SECTION
      for (const item of navItems) {
        const element = document.getElementById(item.id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ SCROLL FUNCTION
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setMobileMenuOpen(false);
  };

  // ✅ CTA BUTTON
  const handleStartTrial = () => {
    saveScrollPosition(window.scrollY, 'Navbar');
    navigate('/form');
  };

  // ✅ LOGO
  const CoreXLogo = () => (
    <div className="flex items-center space-x-3 cursor-pointer group">

      {/* LOGO BOX */}
      <div className="relative">

        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#111] to-[#1f1f1f] border border-[#C5A100]/20 flex items-center justify-center shadow-xl transition duration-500 group-hover:scale-110 group-hover:rotate-90">

          <svg
            className="w-6 h-6 text-[#FFE085]"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6M6 15l6-6 6 6"
            />
          </svg>
        </div>

        {/* GLOW */}
        <div className="absolute inset-0 bg-[#C5A100]/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10 rounded-2xl"></div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tight text-white">
          CORE<span className="text-[#C5A100]">X</span>
        </span>

        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 -mt-1">
          Fitness
        </span>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-[#C5A100]/10 shadow-2xl'
          : 'bg-black/50 backdrop-blur-lg'
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* NAVBAR */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          >
            <CoreXLogo />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-3">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-[#C5A100]/20 border border-[#C5A100]/30 text-[#FFE085]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* CTA */}
            <button
              onClick={handleStartTrial}
              className="ml-4 relative overflow-hidden px-7 py-3 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-500 hover:scale-105"
              style={{
                background:
                  'linear-gradient(90deg, #C5A100 0%, #FFE085 100%)',
                color: '#191800',
                boxShadow: '0 0 15px rgba(197,161,0,0.35)',
              }}
            >
              <span className="relative z-10 flex items-center">

                Start Free Trial

                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>

              {/* SHINE */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)',
                  transform: 'translateX(-100%) skewX(-20deg)',
                  animation: 'shineMove 6s infinite ease-in-out',
                }}
              />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              mobileMenuOpen
                ? 'bg-[#C5A100]/20 text-[#FFE085]'
                : 'bg-white/5 text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >

            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >

        <div className="bg-black/95 backdrop-blur-xl border-t border-[#C5A100]/10 px-6 py-6 space-y-4">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-5 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[#C5A100]/20 border border-[#C5A100]/30 text-[#FFE085]'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* MOBILE CTA */}
          <button
            onClick={handleStartTrial}
            className="w-full mt-4 px-6 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all duration-300"
            style={{
              background:
                'linear-gradient(90deg, #C5A100 0%, #FFE085 100%)',
              color: '#191800',
              boxShadow: '0 0 15px rgba(197,161,0,0.35)',
            }}
          >
            Start Free Trial
          </button>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes shineMove {
          0% {
            transform: translateX(-100%) skewX(-20deg);
          }

          60% {
            transform: translateX(300%) skewX(-20deg);
          }

          100% {
            transform: translateX(300%) skewX(-20deg);
          }
        }
      `}</style>
    </nav>
  );
};

export default NavbarSection;