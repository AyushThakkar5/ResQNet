"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Calendar, Clock, Heart, AlertTriangle } from "lucide-react"

const sosHistory = [
  {
    id: 1,
    type: "Medical Emergency",
    date: "2024-01-20",
    time: "14:30",
    location: "Usmanpura, Ahmedabad",
    status: "resolved",
    responseTime: "3 min",
    volunteers: 2,
    description: "Needed immediate medical assistance for chest pain",
  },
  {
    id: 2,
    type: "Transport Help",
    date: "2024-01-15",
    time: "09:15",
    location: "Navrangpura, Ahmedabad",
    status: "resolved",
    responseTime: "5 min",
    volunteers: 1,
    description: "Car broke down, needed ride to office",
  },
]

const volunteerHistory = [
  {
    id: 1,
    type: "Food Assistance",
    date: "2024-01-22",
    time: "18:45",
    location: "Ghosar, Ahmedabad",
    status: "completed",
    duration: "45 min",
    rating: 5,
    feedback: "Very helpful and kind. Delivered food quickly and safely.",
    karmaEarned: 30,
  },
  {
    id: 2,
    type: "Medical Emergency",
    date: "2024-01-18",
    time: "11:20",
    location: "Gandhinagar Sector CH-2",
    status: "completed",
    duration: "1.5 hours",
    rating: 5,
    feedback: "Life saver! Quick response and professional help.",
    karmaEarned: 75,
  },
  {
    id: 3,
    type: "Transport Help",
    date: "2024-01-12",
    time: "16:30",
    location: "SBR, Ahmedabad",
    status: "completed",
    duration: "30 min",
    rating: 4,
    feedback: "Good help, arrived on time.",
    karmaEarned: 25,
  },
]

const donationHistory = [
  {
    id: 1,
    cause: "Medical Emergency Fund",
    amount: 2000,
    date: "2024-01-25",
    status: "completed",
    transactionId: "TXN123456789",
  },
  {
    id: 2,
    cause: "Food Relief Program",
    amount: 1500,
    date: "2024-01-10",
    status: "completed",
    transactionId: "TXN987654321",
  },
]

export function ActivityHistory() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity History</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="volunteer" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="volunteer">Volunteer Work</TabsTrigger>
            <TabsTrigger value="sos">SOS Requests</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
          </TabsList>

          {/* Volunteer History */}
          <TabsContent value="volunteer" className="space-y-4">
            {volunteerHistory.map((activity) => (
              <div key={activity.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{activity.type}</h3>
                      <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                      <Badge variant="secondary">+{activity.karmaEarned} karma</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {activity.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {activity.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {activity.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{activity.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">"{activity.feedback}"</p>
                <div className="text-xs text-muted-foreground">Duration: {activity.duration}</div>
              </div>
            ))}
          </TabsContent>

          {/* SOS History */}
          <TabsContent value="sos" className="space-y-4">
            {sosHistory.map((sos) => (
              <div key={sos.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <h3 className="font-medium">{sos.type}</h3>
                      <Badge className={getStatusColor(sos.status)}>{sos.status}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {sos.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {sos.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {sos.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium text-green-600">Response: {sos.responseTime}</div>
                    <div className="text-muted-foreground">{sos.volunteers} volunteers helped</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{sos.description}</p>
              </div>
            ))}
          </TabsContent>

          {/* Donations History */}
          <TabsContent value="donations" className="space-y-4">
            {donationHistory.map((donation) => (
              <div key={donation.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-600" />
                      <h3 className="font-medium">{donation.cause}</h3>
                      <Badge className={getStatusColor(donation.status)}>{donation.status}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {donation.date}
                      </div>
                      <div>Transaction ID: {donation.transactionId}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">₹{donation.amount.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center py-4">
              <div className="text-2xl font-bold text-green-600">₹3,500</div>
              <div className="text-sm text-muted-foreground">Total Donated</div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
