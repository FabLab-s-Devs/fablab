import Hero from "@/components/rootpage/hero/Hero";
import Pillars from "@/components/rootpage/pillars/Pillars";
import Spaces from "@/components/rootpage/spaces/Spaces";
import Faq from "@/components/rootpage/faq/Faq";
import Projects from "@/components/rootpage/projects/Projects";
import News from "@/components/news/News";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Pillars/>
      <Spaces/>
      <Projects/>
      <News/>
      <Faq/>
    </div>
  )
}
