import { motion } from 'framer-motion';
import { FaBook, FaHeadphones, FaDumbbell } from 'react-icons/fa';

function ResourceCard({ icon: Icon, title, description, link }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary-100 p-3 rounded-full">
          <Icon className="w-6 h-6 text-primary-200" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-text-primary">{title}</h3>
      <p className="text-text-secondary mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-200 hover:text-primary-300 font-medium"
      >
        Learn More →
      </a>
    </motion.div>
  );
}

function Resources() {
  const resources = [
    {
      icon: FaBook,
      title: 'Mental Health Articles',
      description: 'Curated articles about mental wellness, self-care, and personal growth.',
      link: '#'
    },
    {
      icon: FaHeadphones,
      title: 'Guided Meditations',
      description: 'Collection of meditation exercises for stress relief and mindfulness.',
      link: '#'
    },
    {
      icon: FaDumbbell,
      title: 'Wellness Exercises',
      description: 'Simple exercises and stretches to improve your physical and mental well-being.',
      link: '#'
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-text-primary mb-4">Mental Health Resources</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore our collection of resources designed to support your mental health journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;