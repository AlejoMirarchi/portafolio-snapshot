import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WelcomeSection } from "@/components/welcome-section"
import { TeamSection } from "@/components/team-section"
import { GitHubSection } from "@/components/github-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { Footer } from "@/components/footer"
import PreguntasFrecuentes from "@/components/preguntas-frecuentes"
import FeaturedWork from "@/components/featured-work"
import Parallax from "@/components/parallax"
import MultilayerParallax from "@/components/multilayerparallax"
import { ShiftingDropdownMenu } from "@/components/shiftingdropdownmenu"
import Scrollbar from "@/components/scrollbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
  <ShiftingDropdownMenu listenToExternal={true} />
  
      <Header />
      <MultilayerParallax />
      <Hero />
      <AboutSection />
      <ValuesSection />
  <GitHubSection />
      <TeamSection />
      <FeaturedWork />
      <PreguntasFrecuentes />
      <Footer />
      <Scrollbar />    
    </main>
  )
}
