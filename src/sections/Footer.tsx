import { MapPin, Phone, Mail, Instagram, Music2, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'El Chapulín', href: '#chapulin' },
    { name: 'Productos', href: '#productos' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Sistemas de Sonido',
    'Iluminación LED',
    'Accesorios',
    'Instalación Profesional',
    'Cámaras de Reversa',
    'Plumillas para Parabrisas',
    'Sonido para Eventos',
  ];

  const socialLinks = [
    { icon: MessageCircle, href: 'https://wa.me/573144153870', label: 'WhatsApp' },
    { icon: Music2, href: 'https://tiktok.com/@electricellcaraudio', label: 'TikTok' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-800">
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }} className="block mb-6">
              <img
                src="/logo-electricell.png"
                alt="Electricell Car Audio"
                className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Somos distribuidores e instaladores de artículos de car audio e iluminación.
              Más de 10 años transformando vehículos en Garagoa, Boyacá.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500" />
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-neutral-400 hover:text-orange-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-orange-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500" />
              Nuestros Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-neutral-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500" />
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Cra.+15+%23n4-31,+Garagoa,+Boyacá,+Colombia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Cra. 15 #n4-31, Garagoa, Boyacá, Colombia</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+573144153870"
                  className="flex items-center gap-3 text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">+57 314 4153870</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-neutral-400">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">electricellcaraudio@gmail.com</span>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/573144153870"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 hover:bg-green-500 hover:text-white transition-all text-sm font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © {currentYear} CENTRO DE CAR AUDIO ELECTRICELL. Todos los derechos reservados.
            </p>
            <p className="text-neutral-500 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Garagoa, Boyacá
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
    </footer>
  );
};

export default Footer;
