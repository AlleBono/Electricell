import { useEffect, useRef, useState } from 'react';
import { Settings, ArrowRight } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Sistemas de Sonido',
      description:
        'Instalación profesional de equipos de audio de alta fidelidad. Subwoofers, amplificadores, parlantes y todo lo que necesitas para sentir la música.',
      features: ['Subwoofers', 'Amplificadores', 'Parlantes', 'Radio DVD'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Iluminación LED',
      description:
        'Luces LED de última generación para interior y exterior de tu vehículo. Neones, tiras LED, faros y más para darle estilo a tu auto.',
      features: ['Tiras LED', 'Neones', 'Faros LED', 'Luces Interior'],
      image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Accesorios',
      description:
        'Amplia variedad de accesorios para tu vehículo. Plumillas, organizadores, protectores y todo lo que necesitas para tu auto.',
      features: ['Plumillas', 'Organizadores', 'Protectores', 'Cargadores'],
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Instalación Profesional',
      description:
        'Servicio de instalación con técnicos certificados. Garantía en todos nuestros trabajos y asesoría personalizada.',
      features: ['Técnicos Expertos', 'Garantía', 'Asesoría', 'Soporte'],
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80',
      color: 'from-orange-400 to-yellow-500',
    },
    {
      title: 'Cámaras de Reversa',
      description:
        'Instalación de cámaras de reversa de alta definición para mayor seguridad al estacionar. Pantallas y sensores de proximidad.',
      features: ['Cámara HD', 'Pantalla LCD', 'Sensores', 'Visión Nocturna'],
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Plumillas para Parabrisas',
      description:
        'Venta e instalación de plumillas de alta calidad para todo tipo de vehículos. Marcas reconocidas y garantía de durabilidad.',
      features: ['Bosch', 'Valeo', 'Trico', 'Genéricas'],
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
      color: 'from-teal-400 to-green-500',
    },
    {
      title: 'Sonido para Eventos',
      description:
        'Instalación de equipos de sonido profesional para áreas de música, eventos y establecimientos comerciales.',
      features: ['Bafles Profesionales', 'Mezcladoras', 'Micrófonos', 'Amplificadores'],
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-neutral-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, orange 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
            <Settings className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-400">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Todo para tu </span>
            <span className="text-gradient">Car Audio</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            Ofrecemos una amplia gama de servicios para transformar la experiencia de
            sonido y estilo de tu vehículo con productos de la más alta calidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all duration-500 overflow-hidden ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                
                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 group-hover:border-orange-500/30 group-hover:text-orange-400 transition-all"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 font-medium transition-colors"
                >
                  Cotizar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-neutral-400 mb-4">
            ¿No encuentras lo que buscas? Contáctanos para servicios personalizados.
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold transition-colors"
          >
            Hablar con un asesor
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
