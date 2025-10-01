import { motion } from 'framer-motion';

const services = [
  {
    title: 'Labour Camp Wi-Fi',
    category: 'Smart Connectivity',
    description: 'Affordable, compliant, high-speed Wi-Fi with unlimited usage and 24/7 support — built for labour accommodations across the UAE.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=400&fit=crop',
  },
  {
    title: 'Staff Accommodation Wi-Fi',
    category: 'Smart Connectivity',
    description: 'Reliable Wi-Fi solutions for staff housing with 99.9% uptime, modern equipment, and cost-effective digital access systems.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=400&fit=crop',
  },
  {
    title: 'Electrical Works',
    category: 'Smart Infrastructure',
    description: 'HV & LV electrical installations and maintenance for commercial, industrial, and residential projects — safe, compliant, and reliable across the UAE.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=400&fit=crop',
  },
  {
    title: 'CCTV & Security',
    category: 'Smart Protection',
    description: '24/7 surveillance and advanced access control systems to keep your people, property, and assets secure.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&h=400&fit=crop',
  },
  {
    title: 'Networking & Telephone',
    category: 'Smart Connectivity',
    description: 'Structured cabling, VoIP, and telephone solutions that keep your business connected without interruptions.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=400&fit=crop',
  },
  {
    title: 'Time Attendance',
    category: 'Smart Workforce',
    description: 'Biometric and RFID-based attendance systems that simplify workforce tracking and improve efficiency.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=400&fit=crop',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building Smarter, Safer<br /> Connected Spaces
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From electrical systems to smart automation and networking, Tabdeel delivers reliable, future-ready solutions in the UAE
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            BOOK A 15-MINI CALL
          </button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
