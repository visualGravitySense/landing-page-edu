// import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Advantages from '../components/Advantages';
import AdvantagesBlock from '../components/AdvantagesBlock';
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
      <AdvantagesBlock />
      <Features />
      <Prices />
      {/* <SpecialOffers /> */}
      <CTA />
      <Reviews />
      <ProcessDescription />
      <Footer />
    </>
  );
};

export default Home;