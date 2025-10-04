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
        intro="Stay inspired with our curated articles on interior design, craftsmanship, and lifestyle. Learn how to transform your space with timeless elegance."
      />

      <MyBlogs />

      <Testimonials />

      <Footer />
    </>
  );
}
