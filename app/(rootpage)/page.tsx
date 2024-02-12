import Hero from "@/components/rootpage/hero/Hero";
import Header from "@/components/rootpage/header/Header";
import Pillars from "@/components/rootpage/pillars/Pillars";
import Spaces from "@/components/rootpage/spaces/Spaces";
import Faq from "@/components/rootpage/faq/Faq";
import Footer from "@/components/rootpage/footer/Footer";
import Projects from "@/components/rootpage/projects/Projects";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Pillars/>
      <Spaces/>
      <Projects/>
      <Faq/>
      <Footer/>
    </main>
  )
}
