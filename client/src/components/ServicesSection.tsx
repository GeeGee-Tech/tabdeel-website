import { motion } from 'framer-motion';
import { Wifi, Zap, Camera, Network, Clock, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Wifi,
    title: 'Labour Camp Wi-Fi',
    category: 'Smart Connectivity',
    description: 'Affordable, compliant, high-speed Wi-Fi with unlimited usage and 24/7 support — built for labour accommodations across the UAE.',
  },
  {
    icon: Building,
    title: 'Staff Accommodation Wi-Fi',
    category: 'Smart Connectivity',
    description: 'Reliable Wi-Fi solutions for staff housing with 99.9% uptime, modern equipment, and cost-effective digital access systems.',
  },
  {
    icon: Zap,
    title: 'Electrical Works',
    category: 'Smart Infrastructure',
    description: 'HV & LV electrical installations and maintenance for commercial, industrial, and residential projects — safe, compliant, and reliable across the UAE.',
  },
  {
    icon: Camera,
    title: 'CCTV & Security',
    category: 'Smart Protection',
    description: '24/7 surveillance and advanced access control systems to keep your people, property, and assets secure.',
  },
  {
    icon: Network,
    title: 'Networking & Telephone',
    category: 'Smart Connectivity',
    description: 'Structured cabling, VoIP, and telephone solutions that keep your business connected without interruptions.',
  },
  {
    icon: Clock,
    title: 'Time Attendance',
    category: 'Smart Workforce',
    description: 'Biometric and RFID-based attendance systems that simplify workforce tracking and improve efficiency.',
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2">SERVICES</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building Smarter, Safer<br className="hidden sm:block" /> Connected Spaces
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From electrical systems to smart automation and networking, Tabdeel delivers reliable, future-ready solutions in the UAE
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Card className="p-8 h-full hover-elevate transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary mb-2">
                    {service.category}
                  </span>
                  <h4 className="text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
