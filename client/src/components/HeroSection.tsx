import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Security_control_room_technology_5ae5b945.png';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Smarter Infrastructure.<br />
              Safer Communities.<br />
              Stronger Connections.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              From power to protection, Tabdeel delivers the change you need — smarter, scalable, and future-ready IT & security solutions trusted across the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                data-testid="button-hero-get-quote"
              >
                Get Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                data-testid="button-hero-contact"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Modern security control room with advanced IT infrastructure and monitoring systems"
              className="rounded-xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
