import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Can you improve weak WiFi signals in multi-floor buildings?',
    answer: 'Yes. Tabdeel provides advanced WiFi and cellular coverage solutions in the UAE, designed for offices, residential towers, labor camps, and retail spaces. Our engineers ensure seamless indoor and outdoor connectivity with minimal dead zones.',
  },
  {
    question: 'Do you provide CCTV installation and maintenance?',
    answer: 'Absolutely. We deliver CCTV security solutions including installation, configuration, remote monitoring, and preventive maintenance — helping businesses and homeowners across Dubai, Sharjah, Abu Dhabi, and beyond stay secure.',
  },
  {
    question: 'Can Tabdeel handle both residential and commercial projects?',
    answer: 'Yes. From villas and apartments to corporate offices, retail outlets, industrial facilities, and staff accommodations, we provide end-to-end electrical, networking, and security services tailored to your needs.',
  },
  {
    question: 'How quickly can your engineers respond to service requests?',
    answer: 'Our certified engineers offer 24/7 support across the UAE. For urgent issues, we respond immediately, while planned services are delivered with guaranteed timelines to minimize downtime.',
  },
  {
    question: 'Do you offer UAE-wide coverage (Dubai, Abu Dhabi, Sharjah, etc.)?',
    answer: 'Yes. Tabdeel operates across all seven emirates with strong coverage in Dubai, Sharjah, and Abu Dhabi. We serve residential, commercial, and industrial clients nationwide.',
  },
  {
    question: 'What certifications do your engineers and services comply with?',
    answer: 'Our solutions follow UAE regulatory standards and international best practices. Our engineers hold certifications in low voltage (LV), high voltage (HV), networking, safety compliance, and IT infrastructure.',
  },
  {
    question: 'Do you provide AMC (Annual Maintenance Contracts) for IT and security systems?',
    answer: 'Yes. We offer comprehensive AMC packages for ongoing maintenance, monitoring, and support of your IT infrastructure, CCTV systems, networking equipment, and electrical installations to ensure optimal performance year-round.',
  },
  {
    question: 'How does Tabdeel help businesses reduce costs?',
    answer: 'Our solutions are designed for efficiency and scalability. We help reduce operational costs through energy-efficient systems, preventive maintenance, reliable infrastructure that minimizes downtime, and scalable solutions that grow with your business.',
  },
  {
    question: 'Can your services scale as my business grows?',
    answer: 'Absolutely. Our solutions are built with scalability in mind. Whether you\'re expanding to new locations, adding more employees, or upgrading your infrastructure, we design systems that can easily adapt and grow with your business needs across the UAE.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick Answers. Clear Solutions.<br />
            Looking for electrical, security, or automation solutions? Tell us about your project, and our team will respond quickly with the next steps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-card-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Didn't find your question?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
