import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Quote from "@/components/Quote";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { Footer, WhatsAppFab } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main><Hero /><About /><Services /><Quote /><Faq /><Contact /></main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
