import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import About from "./sections/About";
import Services from "./sections/Services";
import TechSkills from "./sections/TechSkills";

const App = () => (
  <>
    <div className="bg-[url('images/herobg.png')] z-50 relative bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <ShowcaseSection />
    <LogoShowcase />
    <Services />
    <FeatureCards />
    <Experience />
    <TechSkills />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
