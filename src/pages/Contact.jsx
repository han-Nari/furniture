import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function Contact() {
  return (
    <>
      <Header />

      <HeroSection
        title="Contact Us"
        intro="Have questions or need assistance? Get in touch with us — we’re always ready to support you."
      />

      <ContactForm />

      <Footer />
    </>
  );
}
