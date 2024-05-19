import Hero from "@/components/rootpage/hero/Hero";
import Pillars from "@/components/rootpage/pillars/Pillars";
import Spaces from "@/components/rootpage/spaces/Spaces";
import Faq from "@/components/rootpage/faq/Faq";
import Projects from "@/components/rootpage/projects/Projects";

export default function Home() {
  return (
    <>
      <Hero/>
      <Pillars/>
      <Spaces/>
      <Projects/>
      <Faq/>
    </>
  )
}
