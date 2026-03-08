import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Package, Headphones, Lightbulb, Wrench, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
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

  const categories = [
    {
      icon: Headphones,
      name: 'Audio',
      items: [
        { name: 'Subwoofers', price: 'Desde $280.000', popular: true },
        { name: 'Amplificadores', price: 'Desde $350.000', popular: true },
        { name: 'Parlantes', price: 'Desde $120.000', popular: false },
        { name: 'Radio DVD', price: 'Desde $450.000', popular: true },
        { name: 'Tweeters', price: 'Desde $80.000', popular: false },
        { name: 'Crossovers', price: 'Desde $150.000', popular: false },
      ],
    },
    {
      icon: Lightbulb,
      name: 'Iluminación',
      items: [
        { name: 'Tiras LED', price: 'Desde $45.000', popular: true },
        { name: 'Neones', price: 'Desde $120.000', popular: false },
        { name: 'Faros LED', price: 'Desde $280.000', popular: true },
        { name: 'Luces Interior', price: 'Desde $65.000', popular: false },
        { name: 'Strobe Lights', price: 'Desde $95.000', popular: false },
        { name: 'Underglow', price: 'Desde $180.000', popular: true },
      ],
    },
    {
      icon: Wrench,
      name: 'Accesorios',
      items: [
        { name: 'Plumillas', price: 'Desde $35.000', popular: true },
        { name: 'Organizadores', price: 'Desde $25.000', popular: false },
        { name: 'Protectores', price: 'Desde $55.000', popular: false },
        { name: 'Cargadores', price: 'Desde $45.000', popular: true },
        { name: 'Soportes', price: 'Desde $30.000', popular: false },
        { name: 'Cables y Conectores', price: 'Desde $15.000', popular: false },
      ],
    },
    {
      icon: Zap,
      name: 'Instalación',
      items: [
        { name: 'Instalación Básica', price: 'Desde $150.000', popular: true },
        { name: 'Instalación Completa', price: 'Desde $450.000', popular: true },
        { name: 'Aislante Acústico', price: 'Desde $280.000', popular: false },
        { name: 'Cableado Profesional', price: 'Desde $200.000', popular: false },
        { name: 'Tuning Avanzado', price: 'Desde $350.000', popular: true },
        { name: 'Diagnóstico', price: 'Desde $50.000', popular: false },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-neutral-950"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
            <Package className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-400">Nuestros Productos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Catálogo de </span>
            <span className="text-gradient">Productos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            Encuentra todo lo que necesitas para tu vehículo. Productos de alta calidad
            con garantía y los mejores precios de la región.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {categories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              style={{
                animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none',
              }}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-xs font-bold text-white">
                  POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-7 h-7 text-orange-500" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-2xl font-bold text-gradient mb-4">{item.price}</p>

              {/* CTA */}
              <Button
                variant="outline"
                size="sm"
                className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white transition-all"
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cotizar
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-neutral-500 text-sm">
            * Los precios pueden variar según el modelo y marca. Contáctanos para cotizaciones
            personalizadas.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
