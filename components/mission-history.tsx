import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar } from "lucide-react"

const missionHistory = [
  {
    id: 1,
    title: "Emergency Transport to Hospital",
    type: "Transport",
    location: "Sindhu Bhanwan",
    completedDate: "2024-01-15",
    rating: 5,
    feedback: "Excellent help! Very prompt and caring.",
    karmaEarned: 50,
  },
  {
    id: 2,
    title: "Food Distribution Drive",
    type: "Food",
    location: "Shilaj, Delhi",
    completedDate: "2024-01-10",
    rating: 4,
    feedback: "Great volunteer, very organized.",
    karmaEarned: 30,
  },
  {
    id: 3,
    title: "Medical First Aid Assistance",
    type: "Medical",
    location: "Vasna, Noida",
    completedDate: "2024-01-05",
    rating: 5,
    feedback: "Life saver! Quick response and professional help.",
    karmaEarned: 75,
  },
]

export function MissionHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mission History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {missionHistory.map((mission) => (
          <div key={mission.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="font-medium">{mission.title}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{mission.type}</Badge>
                  <Badge variant="secondary">+{mission.karmaEarned} karma</Badge>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">{mission.rating}</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">"{mission.feedback}"</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {mission.location}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {mission.completedDate}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
