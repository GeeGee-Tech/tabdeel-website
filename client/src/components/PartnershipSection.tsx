import { motion } from 'framer-motion';

export default function PartnershipSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-foreground font-light text-[40px] leading-[60px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            By partnering with Tabdeel, you unlock
            <br />
            more than just services
            <br />
            <br />
            you gain efficiency, reliability, and growth. Our solutions are designed to reduce costs, improve customer experience, and give you the tools to scale confidently across the UAE.
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
