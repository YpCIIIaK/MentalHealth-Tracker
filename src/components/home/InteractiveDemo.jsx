import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSmile, FaMeh, FaSadTear, FaAngry, FaHeart } from 'react-icons/fa';

function MoodButton({ icon: Icon, label, selected, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col items-center p-4 rounded-lg ${
        selected ? 'bg-primary-200 text-white' : 'bg-white text-text-primary hover:bg-primary-100'
      }`}
      onClick={onClick}
    >
      <Icon className="w-8 h-8 mb-2" />
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  );
}

function InteractiveDemo() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { icon: FaSmile, label: 'Happy', message: 'Wonderful! Keep spreading that positive energy!' },
    { icon: FaMeh, label: 'Neutral', message: 'Taking things as they come - that\'s mindful!' },
    { icon: FaSadTear, label: 'Sad', message: 'It\'s okay to feel down. Remember, this too shall pass.' },
    { icon: FaAngry, label: 'Frustrated', message: 'Take a deep breath. You\'ve got this!' },
    { icon: FaHeart, label: 'Grateful', message: 'Gratitude is a powerful mood lifter!' }
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
          <h2 className="text-3xl font-bold text-text-primary mb-4">How are you feeling today?</h2>
          <p className="text-text-secondary">Track your mood and receive personalized encouragement.</p>
        </motion.div>

        <div className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {moods.map((mood, index) => (
              <MoodButton
                key={index}
                icon={mood.icon}
                label={mood.label}
                selected={selectedMood === index}
                onClick={() => setSelectedMood(index)}
              />
            ))}
          </div>

          {selectedMood !== null && (
            <motion.div
              className="mt-8 p-4 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-text-primary text-center font-medium">
                {moods[selectedMood].message}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default InteractiveDemo;