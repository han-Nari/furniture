import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function ThankYou() {
  return (
    <>
      <Header />

      <HeroSection
        title="Payment Successfull!"
        intro="Thank you for your purchase — your order has been received and is being processed."
      />

      <div className="flex flex-col gap-10 justify-center text-center h-[70vh] py-30">
        <h1 className="lg:text-7xl md:text-7xl text-5xl">Thank you!</h1>
        <p className="text-[#222222]/70 text-2xl">
          You order was successfuly completed.
        </p>
        <button className="self-center cursor-pointer text-white rounded-3xl w-fit bg-[#2F2F2F] px-7 py-2.5 font-bold hover:bg-[#222222]">
          <Link to="/shop">Back To Shop</Link>
        </button>
      </div>

      <Footer />
    </>
  );
}
