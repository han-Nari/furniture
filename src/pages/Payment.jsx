import Checkout from "../components/Checkout";
import Carts from "../components/Carts";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Payment() {
  return (
    <>
      <Header />

      <HeroSection
        title="Payment"
        intro="Secure your order with a quick and easy payment."
      />

      <Checkout />

      <Footer />
    </>
  );
}
