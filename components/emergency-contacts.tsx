"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const emergencyContacts = [
  { name: "Police", number: "100", color: "bg-blue-600" },
  { name: "Fire", number: "101", color: "bg-red-600" },
  { name: "Ambulance", number: "108", color: "bg-green-600" },
  { name: "Emergency", number: "112", color: "bg-orange-600" },
]

export function EmergencyContacts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Emergency Contacts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {emergencyContacts.map((contact) => (
            <Button
              key={contact.number}
              variant="outline"
              className="h-16 flex flex-col bg-transparent"
              onClick={() => window.open(`tel:${contact.number}`)}
            >
              <Phone className="h-4 w-4 mb-1" />
              <span className="text-xs">{contact.name}</span>
              <span className="font-bold">{contact.number}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
