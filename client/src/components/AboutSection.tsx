import { motion } from 'framer-motion';
import { Zap, Home, Network, Eye, MapPin } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Affordable Innovation',
    description: 'Advanced solutions designed to fit your budget.',
  },
  {
    icon: Home,
    title: 'Faster Service',
    description: 'Quick response times and efficient project delivery.',
  },
  {
    icon: Network,
    title: 'Trusted Reliability',
    description: 'Consistently delivering secure, future-ready solutions.',
  },
  {
    icon: Eye,
    title: 'Certified Engineers',
    description: 'A team of qualified professionals who get it right the first time.',
  },
  {
    icon: MapPin,
    title: 'UAE-Wide Presence',
    description: 'Local expertise wherever your project is located.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=800&fit=crop"
              alt="Tabdeel team at work"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4"
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore Button */}
            <div>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#45a049] transition-colors inline-flex items-center gap-2"
                data-testid="button-explore-services"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Explore Our Services
              </button>
            </div>

            {/* Green Info Card */}
            <div className="bg-[#4CAF50] text-white p-6 rounded-xl">
              <p className="leading-relaxed">
                Tabdeel delivers The Change You Need in electrical, security, and automation systems. From powering your operations to protecting your people and connecting your spaces, we provide future-ready solutions trusted across the UAE.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
