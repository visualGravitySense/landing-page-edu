// import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import ForEducators from '../components/ForEducators';
import ForStudents from '../components/ForStudents';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <Features />
      <div id="for-educators">
        <ForEducators />
      </div>
      <div id="for-students">
        <ForStudents />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default Home;