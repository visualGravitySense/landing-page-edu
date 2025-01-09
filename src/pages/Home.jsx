// import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Advantages from '../components/Advantages';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import ProcessDescription from '../components/ProcessDescription';
import Prices from '../components/Prices';
// import SpecialOffers from '../components/SpecialOffers';

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <Advantages />
      <Features />
      <ProcessDescription />
      <Prices />
      {/* <SpecialOffers /> */}
      <CTA />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;