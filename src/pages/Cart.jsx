import Carts from "../components/Carts";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <>
      <Header />

      <HeroSection
        title="Your Cart"
        intro="Here’s what you’ve added! Double-check your favorites before completing your order."
      />
      <Carts />

      <Footer />
    </>
  );
}
