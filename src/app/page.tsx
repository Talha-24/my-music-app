import Featurecards from "@/components/Featurecards";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import Testimonialcards from "@/components/Testimonialcards";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import { WhyChoseUs } from "@/components/Whychoseus";

export default function Home() {


  return (
    <main className="bg-black/[0.96] min-h-screen bg-grid-white/[0.88] w-full">
      <Herosection />
      <Featurecards/>
      <WhyChoseUs/>
      <Testimonialcards/>
      <Upcomingwebinars/>
      <Instructors/>
      <Footer/>
    </main>

  )
}