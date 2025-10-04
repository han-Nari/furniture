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
        intro="We go beyond just furniture. At Furni, our services are designed to make your journey easy — from personalized design guidance to seamless delivery and aftercare. We’re here to ensure every step feels effortless."
      />

      <MyServices />

      <Items />

      <Testimonials />

      <Footer />
    </>
  );
}
