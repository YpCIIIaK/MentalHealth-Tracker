import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';

function Goals() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newGoal.trim()) {
      setGoals([
        { id: Date.now(), text: newGoal, completed: false },
        ...goals
      ]);
      setNewGoal('');
    }
  };

  const toggleGoal = (id) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
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
          <h1 className="text-4xl font-bold text-text-primary mb-4">Wellness Goals</h1>
          <p className="text-text-secondary">
            Set and track your personal mental health and wellness goals.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mb-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
            placeholder="Add a new goal..."
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary-200 text-white rounded-lg hover:bg-primary-300 transition-colors"
          >
            Add Goal
          </button>
        </motion.form>

        <div className="space-y-4">
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleGoal(goal.id)}
                  className={`text-2xl ${goal.completed ? 'text-primary-200' : 'text-gray-300'}`}
                >
                  <FaCheckCircle />
                </button>
                <span className={`text-text-primary ${goal.completed ? 'line-through' : ''}`}>
                  {goal.text}
                </span>
              </div>
              <button
                onClick={() => deleteGoal(goal.id)}
                className="text-red-400 hover:text-red-600"
              >
                <FaTrash />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Goals;