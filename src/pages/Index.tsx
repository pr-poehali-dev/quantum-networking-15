import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Prices from "@/components/Prices";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Prices />
      <Reviews />
      <ContactForm />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;