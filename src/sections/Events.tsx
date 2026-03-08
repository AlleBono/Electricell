import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, Music, Trophy, Flame, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
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

  const upcomingEvents = [
    {
      title: 'Loudness Fest Garagoa',
      date: 'Próximamente',
      location: 'Garagoa, Boyacá',
      description: 'El evento de car audio más grande de la región. Competencias SPL, tuning y música en vivo.',
      status: 'Próximo',
    },
  ];

  const pastEvents = [
    {
      title: 'Competencia SPL Boyacá',
      date: '2024',
      location: 'Duitama, Boyacá',
      attendees: '500+',
      highlight: 'El Chapulín ganó primer lugar',
    },
    {
      title: 'Car Audio Show Tunja',
      date: '2024',
      location: 'Tunja, Boyacá',
      attendees: '300+',
      highlight: 'Mejor sistema de sonido',
    },
    {
      title: 'Festival del Sonido',
      date: '2023',
      location: 'Garagoa, Boyacá',
      attendees: '800+',
      highlight: 'Evento organizado por Electricell',
    },
  ];

  const services = [
    {
      icon: Music,
      title: 'Sonido Profesional',
      description: 'Equipos de alta fidelidad para eventos de cualquier tamaño',
    },
    {
      icon: Trophy,
      title: 'Competencias SPL',
      description: 'Organización de competencias de sonido con jueces certificados',
    },
    {
      icon: Users,
      title: 'Eventos Corporativos',
      description: 'Sonido para eventos empresariales y lanzamientos',
    },
  ];

  return (
    <section
      id="eventos"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-red-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
            <Flame className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-400">Eventos & Shows</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Organizamos </span>
            <span className="text-gradient">Eventos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            Somos pioneros en la organización de eventos de car audio en Boyacá. Desde
            competencias SPL hasta festivales de sonido, llevamos la experiencia al
            siguiente nivel.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-neutral-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-orange-500" />
            Próximos Eventos
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 overflow-hidden group"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-orange-500 text-xs font-bold text-white animate-pulse">
                  {event.status}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-3">{event.title}</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-neutral-400 text-sm mb-6">{event.description}</p>

                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                    onClick={() => {
                      const element = document.querySelector('#contacto');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Más Información
                  </Button>
                </div>

                {/* Decorative */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-orange-500/10 blur-2xl" />
              </div>
            ))}

            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 border-dashed flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
                <Music className="w-8 h-8 text-neutral-500" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">¿Tienes un evento?</h4>
              <p className="text-neutral-400 text-sm mb-4">
                Contáctanos para organizar tu evento de car audio
              </p>
              <Button
                variant="outline"
                className="border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white"
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Contáctanos
              </Button>
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Eventos Anteriores
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-neutral-500">{event.date}</span>
                  <div className="flex items-center gap-1 text-sm text-neutral-400">
                    <Users className="w-4 h-4" />
                    {event.attendees}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{event.title}</h4>
                <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-neutral-300">{event.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
