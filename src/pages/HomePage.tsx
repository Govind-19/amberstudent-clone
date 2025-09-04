import { HeroSection } from '../components/HeroSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FeaturedCities } from '../components/FeaturedCities';
import { Testimonials } from '../components/Testimonials';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <FeaturedCities />
      <Testimonials />
    </main>
  );
};

export default HomePage;