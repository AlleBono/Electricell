import { useEffect, useRef, useState } from 'react';
import { Volume2, Trophy, Flame, Music, Star, Zap } from 'lucide-react';

const Chapulin = () => {
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

  const specs = [
    { icon: Volume2, label: 'Potencia', value: '20,000W' },
    { icon: Music, label: 'Bajos', value: '4x18"' },
    { icon: Zap, label: 'Baterías', value: '8 Unidades' },
    { icon: Flame, label: 'Amplificadores', value: '6 Unidades' },
  ];

  const achievements = [
    'Ganador de múltiples competencias de SPL',
    'Reconocimiento nacional en car audio',
    'Pioneros en eventos de Garagoa y Boyacá',
    'Más de 50 eventos organizados',
  ];

  return (
    <section
      id="chapulin"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-red-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
            <Trophy className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-400">Nuestro Emblema</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Conoce al </span>
            <span className="text-gradient">Chapulín</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            El carro de audio que representa nuestra pasión y dedicación por el sonido de
            alta fidelidad. Una máquina de potencia que ha conquistado eventos en toda la
            región.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Main Car Display */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer Glow Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border-2 border-red-500/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute inset-8 rounded-full border-2 border-yellow-500/20 animate-spin" style={{ animationDuration: '10s' }} />

              {/* Central Circle */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-950 border-4 border-orange-500/50 flex items-center justify-center glow-orange">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 flex items-center justify-center animate-pulse-slow">
                    <Volume2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gradient mb-2">EL CHAPULÍN</h3>
                  <p className="text-neutral-400 text-sm">Car Audio Oficial</p>
                  <div className="mt-4 flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center"
                  style={{
                    top: `${50 + 45 * Math.sin((i * Math.PI) / 3)}%`,
                    left: `${50 + 45 * Math.cos((i * Math.PI) / 3)}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: `orbit ${8 + i * 2}s linear infinite`,
                  }}
                >
                  <Music className="w-6 h-6 text-white" />
                </div>
              ))}
            </div>

            {/* Sound Waves Animation */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-gradient-to-t from-orange-500 to-red-500 rounded-full sound-wave"
                  style={{
                    height: `${20 + Math.random() * 40}px`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right - Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Description */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Flame className="w-6 h-6 text-orange-500" />
                Potencia Sin Límites
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                El Chapulín es nuestro carro de audio emblema, diseñado y construido con
                los mejores componentes del mercado. Con más de 20,000 watts de potencia,
                este sistema de sonido ha sido protagonista de los eventos más importantes
                de car audio en Boyacá y Colombia.
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all group"
                >
                  <spec.icon className="w-6 h-6 text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-white">{spec.value}</div>
                  <div className="text-sm text-neutral-500">{spec.label}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Logros y Reconocimientos
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for orbit animation */}
      <style>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Chapulin;
