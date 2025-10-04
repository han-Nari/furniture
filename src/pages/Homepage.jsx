import Blogs from "../components/Blogs";
import ChooseUs from "../components/ChooseUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ItemDetails from "../components/ItemDetails";
import Items from "../components/Items";
import ModernDesign from "../components/ModernDesign";
import Testimonials from "../components/Testimonials";

export default function Homepage() {
  return (
    <>
      <Header />

      <HeroSection
        title="Make Your Home Feel Like You"
        intro="From cozy sofas to timeless tables, find furniture that brings comfort, beauty, and balance to your everyday life."
      />

      <Items intro="We choose only the finest woods, fabrics, and finishes — creating furniture that feels as good as it looks." />

      <ChooseUs
        fee="Get your furniture delivered quickly and safely — at no
                      extra cost."
        shop=" A smooth, simple shopping experience from browsing to
                      checkout."
        support="Our friendly team is always here to help, day or night."
        return="Changed your mind? Enjoy quick and easy returns with no stress."
      />

      <ModernDesign />

      <ItemDetails />

      <Testimonials />

      <Blogs />

      <Footer />
    </>
  );
}
