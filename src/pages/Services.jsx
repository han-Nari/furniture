import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import MyServices from "../components/MyServices";
import Items from "../components/Items";

export default function Services() {
  return (
    <>
      <Header />

      <HeroSection
        title="Services"
        intro="At Furni, we make furniture shopping easy — from custom design to delivery and care."
      />

      <MyServices />

      <Items />

      <Testimonials />

      <Footer />
    </>
  );
}
