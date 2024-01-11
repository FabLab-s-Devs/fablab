import Hero from "@/components/hero/Hero";
import Header from "../components/header/Header";
import Pillars from "@/components/pillars/Pillars";
import Spaces from "@/components/spaces/Spaces";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Pillars/>
      <Spaces/>
      <Faq/>
      <Footer/>
    </main>
  )
}
