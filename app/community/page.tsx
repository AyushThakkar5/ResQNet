import { Header } from "@/components/header"
import { MissionBoard } from "@/components/mission-board"
import { RequestFilters } from "@/components/request-filters"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Community Mission Board</h1>
            <p className="text-muted-foreground">Help your community by claiming and completing help requests</p>
          </div>

          <RequestFilters />
          <MissionBoard />
        </div>
      </main>
    </div>
  )
}
