import { Header } from "@/components/header"
import { SOSButton } from "@/components/sos-button"
import { LocationDetector } from "@/components/location-detector"
import { LiveStream } from "@/components/live-stream"
import { GroupTracking } from "@/components/group-tracking"
import { FamilyContacts } from "@/components/family-contacts"

export default function SOSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-red-600">Emergency SOS</h1>
            <p className="text-lg text-muted-foreground">
              Press the button below to send an emergency alert to nearby volunteers and your family
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - SOS and Location */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <SOSButton />
              </div>
              <LocationDetector />
              <LiveStream />
            </div>

            {/* Right Column - Group Tracking and Contacts */}
            <div className="space-y-6">
              <GroupTracking />
            </div>
          </div>

          {/* Family Contacts - Full Width */}
          <FamilyContacts />
        </div>
      </main>
    </div>
  )
}
