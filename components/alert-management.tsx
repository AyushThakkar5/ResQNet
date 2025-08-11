import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, CheckCircle, XCircle, MapPin, Clock } from "lucide-react"

const activeAlerts = [
  {
    id: 1,
    type: "Medical Emergency",
    location: "Smruti Vaan, Gandhinagar",
    time: "5 min ago",
    status: "active",
    priority: "high",
    volunteers: 3,
    verified: false,
  },
  {
    id: 2,
    type: "Food Assistance",
    location: "Vejalpur, Ahmedabad",
    time: "15 min ago",
    status: "claimed",
    priority: "medium",
    volunteers: 1,
    verified: true,
  },
  {
    id: 3,
    type: "Transport Help",
    location: "Sarita Udhayan, Gandhinagar",
    time: "32 min ago",
    status: "in-progress",
    priority: "high",
    volunteers: 2,
    verified: true,
  },
]

export function AlertManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alert Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeAlerts.map((alert) => (
          <div key={alert.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="font-medium">{alert.type}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant={alert.priority === "high" ? "destructive" : "default"}>
                    {alert.priority} priority
                  </Badge>
                  <Badge variant="outline">{alert.status}</Badge>
                  {alert.verified ? (
                    <Badge variant="secondary">Verified</Badge>
                  ) : (
                    <Badge variant="outline">Pending Verification</Badge>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4" />
                </Button>
                {!alert.verified && (
                  <>
                    <Button size="sm" variant="outline">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <XCircle className="h-4 w-4 text-red-600" />
                    </Button>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {alert.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {alert.time}
                </div>
              </div>
              <div className="text-sm">{alert.volunteers} volunteers responding</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
