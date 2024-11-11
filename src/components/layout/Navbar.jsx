import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-poppins text-2xl font-bold text-primary-200">MyWellness</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-text-primary hover:text-primary-200 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/journal" className="text-text-primary hover:text-primary-200 px-3 py-2 rounded-md font-medium">
              Journal
            </Link>
            <Link to="/goals" className="text-text-primary hover:text-primary-200 px-3 py-2 rounded-md font-medium">
              Goals
            </Link>
            <Link to="/resources" className="text-text-primary hover:text-primary-200 px-3 py-2 rounded-md font-medium">
              Resources
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-primary-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary-200"
          >
            Home
          </Link>
          <Link
            to="/journal"
            className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary-200"
          >
            Journal
          </Link>
          <Link
            to="/goals"
            className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary-200"
          >
            Goals
          </Link>
          <Link
            to="/resources"
            className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary-200"
          >
            Resources
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;