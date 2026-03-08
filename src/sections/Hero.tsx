import { useEffect, useRef, useState } from 'react';
import { Volume2, Zap, Music, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [soundWaveAnimations] = useState<Array<{ height: number; duration: number }>>(() =>
    [...Array(30)].map(() => ({
      height: Math.random() * 60 + 20,
      duration: 0.8 + Math.random() * 0.6,
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#f97316', '#ef4444', '#eab308', '#fb923c'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5" />

      {/* Animated Sound Waves */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] flex items-end justify-center gap-1 h-40 opacity-30">
        {soundWaveAnimations.map((animation, i) => (
          <div
            key={i}
            className={`w-2 bg-gradient-to-t from-orange-500 to-red-500 rounded-t-full sound-wave`}
            style={{
              height: `${animation.height}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${animation.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-orange-400">
            Distribuidores e Instaladores Autorizados
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          <span className="block text-white mb-2">CENTRO DE</span>
          <span className="block text-gradient mb-2">CAR AUDIO</span>
          <span className="block text-white">ELECTRICELL</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-neutral-400 mb-4 font-light">
          Garagoa, Boyacá - Colombia
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-neutral-500 mb-12 text-lg">
          Somos distribuidores e instaladores de artículos de car audio e iluminación.
          Transformamos tu vehículo con la mejor tecnología en sonido y accesorios.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contáctanos Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToServices}
            className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 font-bold px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            <Music className="w-5 h-5 mr-2" />
            Ver Servicios
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Volume2, value: '+15', label: 'Años de Experiencia' },
            { icon: Music, value: '+20000', label: 'Instalaciones' },
            { icon: Zap, value: '+50', label: 'Eventos Realizados' },
            { icon: Phone, value: '4.7', label: 'Calificación Clientes' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-orange-500 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-red-500/10 blur-3xl" />
    </section>
  );
};

export default Hero;
