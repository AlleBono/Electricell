import { useEffect, useRef, useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, Instagram, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+57 314 4153870',
      link: 'tel:+573144153870',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Dirección',
      value: 'Cra. 15 #n4-31, Garagoa, Boyacá',
      link: 'https://maps.google.com/?q=Cra.+15+%23n4-31,+Garagoa,+Boyacá,+Colombia',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Clock,
      title: 'Horario',
      value: 'Lun - Sáb: 8:00 AM - 6:00 PM',
      link: null,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      link: 'https://wa.me/573144153870',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Music2,
      name: 'TikTok',
      link: 'https://tiktok.com/@electricellcaraudio',
      color: 'bg-black hover:bg-neutral-800 border border-neutral-700',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      link: '#',
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90',
    },
  ];

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-neutral-950"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/30 to-neutral-950" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
            <MessageCircle className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-400">Contáctanos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">¿Listo para </span>
            <span className="text-gradient">Transformar</span>
            <span className="text-white"> tu Auto?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            Contáctanos hoy mismo y recibe asesoría personalizada. Estamos listos para
            llevar la experiencia de sonido de tu vehículo al siguiente nivel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link || '#'}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-500 mb-1">{info.title}</h4>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
              <h4 className="text-lg font-bold text-white mb-4">Síguenos en Redes</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl ${social.color} text-white font-medium transition-all hover:scale-105`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <a
              href="https://wa.me/573144153870"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-6 h-6" />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800">
              <h3 className="text-2xl font-bold text-white mb-2">Envíanos un Mensaje</h3>
              <p className="text-neutral-400 mb-6">
                Completa el formulario y te responderemos lo antes posible.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-neutral-400">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-neutral-400 mb-2">Nombre</label>
                      <Input
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:ring-orange-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-400 mb-2">Teléfono</label>
                      <Input
                        type="tel"
                        placeholder="Tu teléfono"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-400 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-400 mb-2">Mensaje</label>
                    <Textarea
                      placeholder="¿En qué podemos ayudarte?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={4}
                      className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white font-bold py-6 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/30 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div
          className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative aspect-video max-h-96 rounded-3xl overflow-hidden border border-neutral-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0794811!2d-73.3681897!3d5.0794811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6aa5c92d8a0807%3A0xb250171f44a31b4a!2sCENTRO%20DE%20CAR%20AUDIO%20ELECTRICELL!5e0!3m2!1ses!2sco!4v1709830400000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Electricell"
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-orange-500/30 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
