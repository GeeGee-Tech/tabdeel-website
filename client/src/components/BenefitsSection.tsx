import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Clock, DollarSign, BarChart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = text.split('');
  
  return (
    <span>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ color: '#6b7280' }}
          whileInView={{ color: '#ffffff' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.03,
            ease: 'easeOut'
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Streamline operations with reliable IT and infrastructure solutions that keep your business running without downtime.',
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description: 'Deliver smarter, faster, and more secure services that enhance satisfaction and build long-term loyalty.',
  },
  {
    icon: Zap,
    title: 'Scalability & Growth',
    description: 'Flexible solutions that grow with your business, supporting expansion across Dubai and the UAE.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock support and monitoring ensure your business is always connected and protected.',
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Cut operational costs with efficient, scalable systems designed to maximize ROI.',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Insights',
    description: 'Gain real-time visibility and smarter decision-making through connected, automated systems.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-[hsl(220,13%,15%)] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <AnimatedText text="By partnering with Tabdeel, you unlock" delay={0} />
            <br className="hidden md:block" />
            <AnimatedText text="more than just services" delay={1.5} />
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <AnimatedText 
              text="you gain efficiency, reliability, and growth. Our solutions are designed to reduce costs, improve customer experience, and give you the tools to scale confidently across the UAE." 
              delay={3.0} 
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 p-6 h-full hover:bg-white/10 transition-colors">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
