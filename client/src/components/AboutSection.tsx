import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const reasons = [
  'Affordable Innovation - Advanced solutions designed to fit your budget.',
  'Faster Service - Quick response times and efficient project delivery.',
  'Trusted Reliability - Consistently delivering secure, future-ready solutions.',
  'Certified Engineers - A team of qualified professionals who get it right the first time.',
  'UAE-Wide Presence - Local expertise wherever your project is located.',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Orange Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent text-accent-foreground p-8 md:p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Businesses & Homeowners Across the UAE Trust Tabdeel?
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="h-4 w-4" />
                    </div>
                  </div>
                  <span className="text-lg">{reason}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Explore Our Services
            </button>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                alt="Tabdeel team working on electrical installation"
                className="rounded-2xl w-full shadow-lg"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Future-Driven Solutions For Smarter, Safer Businesses
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Tabdeel, we go beyond solutions — shaping smarter, safer, and more connected spaces across the UAE. With affordable innovation, certified engineers, and faster service, we empower homes and businesses with electrical works, CCTV security, home automation, networking, and time-attendance systems.
            </p>
            <p className="text-muted-foreground">
              Our UAE-wide presence makes us the trusted partner for clients in Dubai, Sharjah, Abu Dhabi, and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
