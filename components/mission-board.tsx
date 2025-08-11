"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const mockRequests = [
  {
    id: 1,
    title: "Medical Emergency - Elderly Person Needs Help",
    type: "Medical",
    location: "Gift City, Gandhinagar",
    time: "5 min ago",
    description: "Elderly person fell down and needs immediate medical assistance.",
    urgency: "high",
    volunteers: 0,
    status: "open",
  },
  {
    id: 2,
    title: "Food Delivery for Family in Need",
    type: "Food",
    location: "Maninagar, Ahmedabad",
    time: "20 min ago",
    description: "Family with young children needs food supplies.",
    urgency: "medium",
    volunteers: 2,
    status: "claimed",
  },
  {
    id: 3,
    title: "Transport Help - Hospital Visit",
    type: "Transport",
    location: "South Bopal, Ahmedabad",
    time: "45 min ago",
    description: "Need transport to take patient to hospital for treatment.",
    urgency: "high",
    volunteers: 1,
    status: "in-progress",
  },
  {
    id: 4,
    title: "Rescue - Cat Stuck in Tree",
    type: "Rescue",
    location: "Sargasan, Gandhinagar",
    time: "1 hour ago",
    description: "Cat has been stuck in a tall tree for several hours.",
    urgency: "low",
    volunteers: 0,
    status: "open",
  },
]

export function MissionBoard() {
  const { toast } = useToast()

  const handleClaimTask = (requestId: number, title: string) => {
    toast({
      title: "Task Claimed!",
      description: `You have successfully claimed: ${title}`,
    })
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "default"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "outline"
      case "claimed":
        return "default"
      case "in-progress":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-4">
      {mockRequests.map((request) => (
        <Card key={request.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-lg">{request.title}</CardTitle>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant={getUrgencyColor(request.urgency)}>{request.urgency} priority</Badge>
                  <Badge variant="outline">{request.type}</Badge>
                  <Badge variant={getStatusColor(request.status)}>{request.status}</Badge>
                </div>
              </div>
              {request.status === "open" && (
                <Button onClick={() => handleClaimTask(request.id, request.title)} size="sm">
                  Claim Task
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{request.description}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {request.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {request.time}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {request.volunteers} volunteers
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
