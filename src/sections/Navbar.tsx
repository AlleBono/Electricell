import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'El Chapulín', href: '#chapulin' },
    { name: 'Productos', href: '#productos' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-orange-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              className="flex items-center gap-3 group"
            >
              <img
                src="/logo-electricell.png"
                alt="Electricell Car Audio"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-orange-500 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#contacto')}
                className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
              >
                Cotizar Ahora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-neutral-950/95 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 p-6 transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-4 py-4 text-lg font-medium text-neutral-300 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-300 border border-transparent hover:border-orange-500/30"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#contacto')}
              className="mt-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white font-semibold px-6 py-4 rounded-full transition-all duration-300"
            >
              Cotizar Ahora
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
