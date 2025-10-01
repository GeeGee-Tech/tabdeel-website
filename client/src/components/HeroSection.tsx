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
      {/* Background Image - Full screen with opacity for mobile, original for desktop */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mobile background image */}
        <div className="lg:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/TESTHERO.png)', opacity: 0.3 }}></div>
        
        {/* Desktop background image */}
        <img
          src="/assets/TESTHERO.png"
          alt="Tabdeel Hero - Smarter Infrastructure Solutions"
          className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-auto object-contain"
        />
      </div>
      
      <div className="pt-16 md:pt-20 lg:pt-24 relative flex items-center min-h-[80vh] lg:min-h-screen">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                <span className="text-[#198749] block">Smarter Infrastructure.</span>
                <span className="text-[#198749] block">Safer Communities.</span>
                <span className="text-[#198749] block">Stronger Connections.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From power to protection, Tabdeel delivers the change you need — smarter, scalable, and future-ready IT & security solutions trusted across the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto px-4 sm:px-0">
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
