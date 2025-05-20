
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-teal">
          <span className="text-light">J</span>Dev
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-teal mr-1">{index + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="outline" className="btn btn-primary">
            <a href="/resume.pdf" download="resume.pdf">Resume</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-light hover:text-teal transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-dark/95 z-50 flex flex-col justify-center items-center md:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className="mb-8">
            <ul className="flex flex-col space-y-6 items-center">
              {navLinks.map((link, index) => (
                <li key={link.name} className="text-2xl">
                  <a 
                    href={link.href} 
                    className="nav-link" 
                    onClick={closeMenu}
                  >
                    <span className="text-teal mr-1">{index + 1}.</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <Button asChild variant="outline" className="btn btn-primary" onClick={closeMenu}>
            <a href="/resume.pdf" download="resume.pdf">Resume</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
