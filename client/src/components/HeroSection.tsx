import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Background Image - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <img
          src="/src/assets/TESTHERO.png"
          alt="Tabdeel Hero - Smarter Infrastructure Solutions"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-auto object-contain"
        />
      </div>
      
      <div className="pt-24 relative">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Smarter Infrastructure.<br />
                Safer Communities.<br />
                Stronger Connections.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                From power to protection, Tabdeel delivers the change you need — smarter, scalable, and future-ready IT & security solutions trusted across the UAE.
              </p>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="hover:scale-105 transition-transform"
                data-testid="button-hero-get-quote"
              >
                Get Quote
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Why Tabdeel Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
            <span>Why TABDEEL ?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
