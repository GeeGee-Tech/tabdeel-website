import { motion } from 'framer-motion';
import { CheckCircle, Users, Zap, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Affordable Innovation',
    description: 'Advanced solutions designed to fit your budget.',
  },
  {
    icon: CheckCircle,
    title: 'Faster Service',
    description: 'Quick response times and efficient project delivery.',
  },
  {
    icon: Shield,
    title: 'Trusted Reliability',
    description: 'Consistently delivering secure, future-ready solutions.',
  },
  {
    icon: Users,
    title: 'Certified Engineers',
    description: 'A team of qualified professionals who get it right the first time.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2">WHY TABDEEL?</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Businesses & Homeowners<br className="hidden sm:block" /> Across the UAE Trust Tabdeel
          </h3>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover-elevate">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            At Tabdeel, we go beyond solutions — shaping smarter, safer, and more connected spaces across the UAE. With affordable innovation, certified engineers, and faster service, we empower homes and businesses with electrical works, CCTV security, home automation, networking, and time-attendance systems.
          </p>
          <p className="text-lg text-muted-foreground">
            Our UAE-wide presence makes us the trusted partner for clients in Dubai, Sharjah, Abu Dhabi, and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
