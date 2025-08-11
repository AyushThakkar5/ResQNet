import { Header } from "@/components/header"
import { AdminStats } from "@/components/admin-stats"
import { AlertManagement } from "@/components/alert-management"
import { UserManagement } from "@/components/user-management"
import { Analytics } from "@/components/analytics"

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage alerts, users, and platform analytics</p>
          </div>

          <AdminStats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AlertManagement />
            <UserManagement />
          </div>
          <Analytics />
        </div>
      </main>
    </div>
  )
}
