import { motion } from 'framer-motion';
import { Zap, Users, Shield, MapPin, Home } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Affordable Innovation',
    description: 'Advanced solutions designed to fit your budget.',
    color: 'bg-red-500',
  },
  {
    icon: Users,
    title: 'Certified Engineers',
    description: 'A team of qualified professionals who get it right the first time.',
    color: 'bg-red-500',
  },
  {
    icon: Home,
    title: 'Faster Service',
    description: 'Quick response times and efficient project delivery.',
    color: 'bg-red-500',
  },
  {
    icon: MapPin,
    title: 'UAE-Wide Presence',
    description: 'Local expertise wherever your project is located.',
    color: 'bg-red-500',
  },
  {
    icon: Shield,
    title: 'Trusted Reliability',
    description: 'Consistently delivering secure, future-ready solutions.',
    color: 'bg-red-500',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Why TABDEEL Badge */}
          <div className="inline-flex items-center gap-2 bg-[#198749] hover:bg-red-500 text-white px-6 py-3 rounded-lg font-semibold mb-8 transition-colors cursor-pointer">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Why TABDEEL ?</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-6">
            Why Businesses & Homeowners Across the UAE Trust Tabdeel?
          </h2>
          
          {/* Decorative line */}
          <div className="w-32 h-0.5 bg-gray-300 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left: Professional Image - Full Height */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <div className="relative w-full">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&crop=face"
                alt="Tabdeel professional team consultation"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
              {/* TAB-DEEL logo overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Right: Features Grid and Green Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            {/* Features Grid - 2x2 Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-3 items-start"
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex-shrink-0">
                    <div className={`h-10 w-10 rounded-full ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#198749] text-lg mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-snug font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore Button */}
            <div className="mb-4">
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#198749] text-white px-8 py-3 rounded-full font-medium hover:bg-[#146639] transition-colors inline-flex items-center gap-2"
                data-testid="button-explore-services"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Explore Our Services
              </button>
            </div>

            {/* Green Info Card - Now on Right Side */}
            <div className="bg-[#198749] text-white p-5 rounded-2xl shadow-xl">
              <p className="text-base leading-snug font-normal">
                <span className="font-medium">Tabdeel delivers The Change You Need</span> in electrical, security, and automation systems. From powering your operations to protecting your people and connecting your spaces, we provide future-ready solutions trusted across the UAE.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
