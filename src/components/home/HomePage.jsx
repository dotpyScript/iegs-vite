import Hero from './Hero';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import ContactCTA from './ContactCTA';
import Partnership from './Partnership';
import FeaturedProjects from './FeaturedProjects';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Partnership />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default HomePage;
