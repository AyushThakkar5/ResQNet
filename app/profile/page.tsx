import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserProfile } from "@/components/user-profile"
import { ProfileSettings } from "@/components/profile-settings"
import { ActivityHistory } from "@/components/activity-history"
import { SafetySettings } from "@/components/safety-settings"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">Manage your account settings and view your activity</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-1 space-y-6">
              <UserProfile />
              <SafetySettings />
            </div>

            {/* Right Column - Settings and Activity */}
            <div className="lg:col-span-2 space-y-6">
              <ProfileSettings />
              <ActivityHistory />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
