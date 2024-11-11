import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Journal from './pages/Journal';
import Goals from './pages/Goals';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-primary-100 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;