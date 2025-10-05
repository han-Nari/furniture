import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MyBlogs from "../components/MyBlogs";
import Testimonials from "../components/Testimonials";

export default function Blog() {
  return (
    <>
      <Header />

      <HeroSection
        title="Blog"
        intro="Get inspired with tips on design, craftsmanship, and timeless living."
      />

      <MyBlogs />

      <Testimonials />

      <Footer />
    </>
  );
}
