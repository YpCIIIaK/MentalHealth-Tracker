import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

function TestimonialCard({ name, location, quote, delay }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <FaQuoteLeft className="text-primary-200 text-3xl mb-4" />
      <p className="text-text-secondary mb-4">{quote}</p>
      <div>
        <p className="font-medium text-text-primary">{name}</p>
        <p className="text-sm text-text-secondary">{location}</p>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, NY',
      quote: 'MyWellness has helped me stay connected to my emotions and set positive intentions. The daily journaling feature has become an essential part of my routine.'
    },
    {
      name: 'Michael Chen',
      location: 'San Francisco, CA',
      quote: 'The mood tracking feature gives me valuable insights into my emotional patterns. It\'s helped me make positive changes in my daily life.'
    },
    {
      name: 'Emma Thompson',
      location: 'London, UK',
      quote: 'The daily affirmations uplift me, even on difficult days. This app has been a wonderful support system in my mental health journey.'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">What Our Users Say</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Read about how MyWellness has helped others in their mental health journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;