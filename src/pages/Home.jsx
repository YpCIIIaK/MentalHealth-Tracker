import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import FeatureOverview from '../components/home/FeatureOverview';
import InteractiveDemo from '../components/home/InteractiveDemo';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeatureOverview />
      <InteractiveDemo />
      <Testimonials />
      <FAQ />
    </motion.div>
  );
}

export default Home;