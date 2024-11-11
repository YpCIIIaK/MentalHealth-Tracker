import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-text-primary">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-text-secondary">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: 'Is MyWellness free to use?',
      answer: 'Yes, MyWellness is completely free to use. We believe mental health resources should be accessible to everyone.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Your privacy is our top priority. All data is encrypted and stored securely. We never share your personal information with third parties.'
    },
    {
      question: 'Can I access MyWellness on mobile?',
      answer: 'Yes, MyWellness is fully responsive and works great on all devices, including smartphones and tablets.'
    },
    {
      question: 'How often should I journal?',
      answer: 'We recommend daily journaling for the best results, but you can journal as often as feels right for you.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-text-secondary">
            Find answers to common questions about MyWellness.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;