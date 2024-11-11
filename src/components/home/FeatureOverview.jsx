import { motion } from 'framer-motion';
import { FaHeart, FaBook, FaBullseye, FaSun } from 'react-icons/fa';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      className="p-6 bg-white rounded-lg shadow-md"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100">
        <Icon className="w-6 h-6 text-primary-200" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-text-primary">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
  );
}

function FeatureOverview() {
  const features = [
    {
      icon: FaHeart,
      title: 'Mood Tracking',
      description: 'Log and monitor your daily emotions to better understand your mental health patterns.'
    },
    {
      icon: FaBook,
      title: 'Daily Journal',
      description: 'Express your thoughts and feelings through guided journaling prompts.'
    },
    {
      icon: FaBullseye,
      title: 'Goal Setting',
      description: 'Set and track personal wellness goals to maintain focus on your mental health journey.'
    },
    {
      icon: FaSun,
      title: 'Daily Affirmations',
      description: 'Start each day with positive affirmations tailored to your emotional state.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">Features Overview</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover tools and features designed to support your mental well-being journey.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureOverview;