import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
