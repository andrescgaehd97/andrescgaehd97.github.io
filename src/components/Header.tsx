import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg shadow-primary-500/10 border-b border-primary-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-400 flex items-center space-x-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span>Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          
        </div>
      </nav>
    </header>
  );
};

export default Header;
