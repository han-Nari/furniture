import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ShopList from "../components/ShopList";

export default function Shop() {
  return (
    <>
      <Header />

      <HeroSection
        title="Shop"
        intro="Find the perfect pieces to make your home feel cozy, stylish, and truly yours."
      />

      <ShopList />

      <Footer />
    </>
  );
}
