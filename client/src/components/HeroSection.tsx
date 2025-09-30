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
    <section id="home" className="relative min-h-[700px] pt-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Welcome
            </div>
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

          {/* Right Images with Diagonal Frames */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="border-[6px] border-primary bg-white overflow-hidden"
                style={{
                  clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                  alt="Professional working on laptop"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div 
                className="border-[6px] border-accent bg-white overflow-hidden mt-8"
                style={{
                  clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=400&h=300&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>
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
