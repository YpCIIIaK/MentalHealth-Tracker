import { useState } from 'react';
import { motion } from 'framer-motion';

function Journal() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.trim()) {
      setEntries([
        { id: Date.now(), text: newEntry, date: new Date().toLocaleDateString() },
        ...entries
      ]);
      setNewEntry('');
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-text-primary mb-4">Daily Journal</h1>
          <p className="text-text-secondary">
            Write down your thoughts, feelings, and reflections.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
            rows="4"
            placeholder="How are you feeling today?"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-primary-200 text-white rounded-lg hover:bg-primary-300 transition-colors"
          >
            Save Entry
          </button>
        </motion.form>

        <div className="space-y-4">
          {entries.map((entry) => (
            <motion.div
              key={entry.id}
              className="p-4 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm text-text-secondary mb-2">{entry.date}</p>
              <p className="text-text-primary">{entry.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journal;