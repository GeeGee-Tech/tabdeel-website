import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

export default function SupportSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-muted px-4 py-2 rounded-full mb-6">
              <Handshake className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Support</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Future-Driven Solutions
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              For Smarter, Safer Businesses
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Tabdeel, we go beyond solutions — shaping smarter, safer, and more connected spaces across the UAE. With affordable innovation, certified engineers, and faster service, we empower homes and businesses with electrical works, CCTV security, home automation, networking, and time-attendance systems. Our UAE-wide presence makes us the trusted partner for clients in Dubai, Sharjah, Abu Dhabi, and beyond.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              alt="Team collaboration and support"
              className="rounded-2xl w-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
