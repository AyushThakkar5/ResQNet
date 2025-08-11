"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"

// Mock data for ongoing SOS alerts
const mockAlerts = [
  {
    id: 1,
    type: "Medical Emergency",
    location: "Parimal Garden, Ahmedabad",
    time: "2 min ago",
    status: "active",
    volunteers: 3,
  },
  {
    id: 2,
    type: "Food Assistance",
    location: "Vijar Cross Road, Ahmedabad",
    time: "15 min ago",
    status: "claimed",
    volunteers: 1,
  },
  {
    id: 3,
    type: "Transport Help",
    location: "Gandhinagar Sector GH-4",
    time: "32 min ago",
    status: "active",
    volunteers: 2,
  },
]

export function LiveMap() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Live Help Requests</h2>
          <p className="text-muted-foreground">Real-time map of ongoing SOS alerts in your area</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <Card className="h-96">
            <CardContent className="p-0 h-full">
              <div className="h-full bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Google Maps Integration</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Alerts List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Active Alerts</h3>
            {mockAlerts.map((alert) => (
              <Card key={alert.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant={alert.status === "active" ? "destructive" : "secondary"}>{alert.type}</Badge>
                        <Badge variant="outline">{alert.volunteers} volunteers</Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {alert.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {alert.time}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
