import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, MessageCircle } from "lucide-react"

const activeMissions = [
  {
    id: 1,
    title: "Medical Emergency - Elderly Care",
    type: "Medical",
    location: "Satellite, Ahmedabad",
    timeAccepted: "30 min ago",
    status: "in-progress",
    urgency: "high",
    description: "Elderly person needs assistance with medication and basic care.",
  },
  {
    id: 2,
    title: "Food Delivery for Family",
    type: "Food",
    location: "Nikol, Ahmedabad",
    timeAccepted: "1 hour ago",
    status: "claimed",
    urgency: "medium",
    description: "Family with young children needs grocery supplies.",
  },
]

export function ActiveMissions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Missions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeMissions.map((mission) => (
          <div key={mission.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="font-medium">{mission.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline">{mission.type}</Badge>
                  <Badge variant={mission.urgency === "high" ? "destructive" : "default"}>
                    {mission.urgency} priority
                  </Badge>
                  <Badge variant="secondary">{mission.status}</Badge>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <MessageCircle className="h-4 w-4 mr-1" />
                Contact
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">{mission.description}</p>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {mission.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {mission.timeAccepted}
                </div>
              </div>
              <Button size="sm">Mark Complete</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
