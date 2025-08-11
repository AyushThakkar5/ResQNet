import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LiveMap } from "@/components/live-map"
import { HowItWorks } from "@/components/how-it-works"
import { RecentActivity } from "@/components/recent-activity"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LiveMap />
        <HowItWorks />
        <RecentActivity />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
