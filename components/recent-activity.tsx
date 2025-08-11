import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, User } from "lucide-react"

const recentActivities = [
  {
    id: 1,
    type: "help_completed",
    title: "Medical emergency resolved",
    location: "Panchvati,Ahmedabas",
    volunteer: "Dr. Sarah Wilson",
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "donation",
    title: "Food relief donation",
    amount: "₹5,000",
    donor: "Anonymous",
    time: "4 hours ago",
    status: "received",
  },
  {
    id: 3,
    type: "volunteer_joined",
    title: "New volunteer registered",
    volunteer: "Amit Kumar",
    location: "Rajkot",
    time: "6 hours ago",
    status: "active",
  },
]

export function RecentActivity() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Recent Community Activity</h2>
          <p className="text-muted-foreground">See how our community is making a difference every day</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {recentActivities.map((activity) => (
            <Card key={activity.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{activity.title}</h3>
                      <Badge variant="outline">{activity.status}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {activity.location && (
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {activity.location}
                        </div>
                      )}
                      {activity.volunteer && (
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {activity.volunteer}
                        </div>
                      )}
                      {activity.amount && <div className="font-medium text-green-600">{activity.amount}</div>}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {activity.time}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
