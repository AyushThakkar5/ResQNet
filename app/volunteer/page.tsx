import { Header } from "@/components/header"
import { VolunteerProfile } from "@/components/volunteer-profile"
import { ActiveMissions } from "@/components/active-missions"
import { MissionHistory } from "@/components/mission-history"
import { Achievements } from "@/components/achievements"

export default function VolunteerDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <VolunteerProfile />
            <div className="mt-6">
              <Achievements />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <ActiveMissions />
            <MissionHistory />
          </div>
        </div>
      </main>
    </div>
  )
}
