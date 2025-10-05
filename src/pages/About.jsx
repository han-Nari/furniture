import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ChooseUs from "../components/ChooseUs";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

export default function About() {
  return (
    <>
      <Header />

      <HeroSection
        title="About us"
        intro="At Furni, we believe that great design should be both beautiful and functional. "
      />

      <ChooseUs
        fee="Get your furniture delivered quickly and safely — at no
                      extra cost."
        shop=" A smooth, simple shopping experience from browsing to
                      checkout."
        support="Our friendly team is always here to help, day or night."
        return="Changed your mind? Enjoy quick and easy returns with no stress."
      />

      <Team />

      <Testimonials />

      <Footer />
    </>
  );
}
