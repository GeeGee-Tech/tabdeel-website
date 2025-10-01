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
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Background Image - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <img
          src="/src/assets/TESTHERO.png"
          alt="Tabdeel Hero - Smarter Infrastructure Solutions"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-auto object-contain"
        />
      </div>
      
      <div className="pt-24 relative flex items-center min-h-screen">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
                <span className="text-[#198749]">Smarter Infrastructure.</span><br />
                <span className="text-[#198749]">Safer Communities.</span><br />
                <span className="text-[#198749]">Stronger Connections.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                From power to protection, Tabdeel delivers the change you need — smarter, scalable, and future-ready IT & security solutions trusted across the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-[#198749] hover:bg-[#146639] text-white px-8 py-3 rounded-full font-semibold"
                  data-testid="button-hero-get-quote"
                >
                  GET QUOTE
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-[#198749] text-[#198749] hover:bg-[#198749]/10 px-8 py-3 rounded-full font-semibold"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
