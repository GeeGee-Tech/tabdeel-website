import { motion } from 'framer-motion';
import { Building2, Briefcase, ShoppingBag, Home, GraduationCap, Heart, Hotel } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Construction & Workforce Housing',
    description: 'Smart solutions for worker housing & large-scale projects. Tabdeel delivers affordable WiFi, CCTV, and electrical systems tailored for labour camps and staff accommodations. Our solutions ensure compliance, safety, and reliable performance across the UAE.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Offices',
    description: 'Modern workplaces built on security and connectivity. From smart automation and reliable networking to advanced security, we design solutions that boost productivity and protect your office environment.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Malls',
    description: 'Smart systems for high-traffic spaces. Tabdeel provides PA systems, CCTV, and networking solutions designed for large malls and retail outlets, ensuring safety and seamless communication.',
  },
  {
    icon: Home,
    title: 'Residential & Communities',
    description: 'Smart Safer living spaces. We bring home automation, electrical works, and surveillance systems to residences and communities, enhancing comfort and peace of mind.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Secure and connected learning environments. From CCTV and PA systems to networking and attendance tracking, we create smarter, safer, and more efficient schools and universities.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Reliable infrastructure for critical care facilities. Hospitals and clinics trust Tabdeel for secure IT networks, CCTV, and automation that keep healthcare environments safe and connected.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    description: 'Technology that enhances every guest experience. Deliver seamless stays with guest WiFi, automation, and 24/7 surveillance that ensure comfort, convenience, and safety in hotels and resorts.',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Industries We Serve
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted Across Multiple Sectors
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-background p-6 rounded-xl border border-border hover:border-primary transition-colors group"
            >
              <industry.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            Explore Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
