import Hero from "@/components/rootpage/hero/Hero";
import Pillars from "@/components/rootpage/pillars/Pillars";
import Spaces from "@/components/rootpage/spaces/Spaces";
import Faq from "@/components/rootpage/faq/Faq";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Pillars/>
      <Spaces/>
      <Faq/>
    </main>
  )
}
