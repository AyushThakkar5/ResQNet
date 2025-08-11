import { Header } from "@/components/header"
import { DonationCauses } from "@/components/donation-causes"
import { DonationForm } from "@/components/donation-form"
import { DonationStats } from "@/components/donation-stats"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Make a Difference</h1>
            <p className="text-muted-foreground">Support verified causes and help those in need</p>
          </div>

          <DonationStats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DonationCauses />
            <DonationForm />
          </div>
        </div>
      </main>
    </div>
  )
}
