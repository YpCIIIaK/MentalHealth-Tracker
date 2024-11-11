import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">MyWellness</h3>
            <p className="text-text-secondary">Your journey to mental well-being starts here.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-primary-200">Home</Link>
              </li>
              <li>
                <Link to="/journal" className="text-text-secondary hover:text-primary-200">Journal</Link>
              </li>
              <li>
                <Link to="/goals" className="text-text-secondary hover:text-primary-200">Goals</Link>
              </li>
              <li>
                <Link to="/resources" className="text-text-secondary hover:text-primary-200">Resources</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Contact</h3>
            <p className="text-text-secondary">support@mywellness.com</p>
            <p className="text-text-secondary mt-2">Follow us on social media</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-text-secondary">&copy; {new Date().getFullYear()} MyWellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;