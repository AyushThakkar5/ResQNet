"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Shield, MapPin, Plus, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface EmergencyContact {
  id: string
  name: string
  phone: string
  relationship: string
}

export function SafetySettings() {
  const { toast } = useToast()
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([
    { id: "1", name: "Mom", phone: "+91-9876543210", relationship: "Mother" },
    { id: "2", name: "Dad", phone: "+91-9876543211", relationship: "Father" },
  ])

  const [safetySettings, setSafetySettings] = useState({
    autoLocationSharing: true,
    emergencyAutoCall: true,
    safetyCheckIn: true,
    checkInInterval: "30",
    trustedContacts: true,
    locationHistory: true,
  })

  const [isAddingContact, setIsAddingContact] = useState(false)
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    relationship: "",
  })

  const addEmergencyContact = () => {
    if (newContact.name && newContact.phone) {
      const contact: EmergencyContact = {
        id: Date.now().toString(),
        name: newContact.name,
        phone: newContact.phone,
        relationship: newContact.relationship || "Emergency Contact",
      }
      setEmergencyContacts([...emergencyContacts, contact])
      setNewContact({ name: "", phone: "", relationship: "" })
      setIsAddingContact(false)
      toast({
        title: "Emergency Contact Added",
        description: `${newContact.name} has been added to your emergency contacts.`,
      })
    }
  }

  const removeEmergencyContact = (id: string) => {
    setEmergencyContacts(emergencyContacts.filter((contact) => contact.id !== id))
    toast({
      title: "Contact Removed",
      description: "Emergency contact has been removed.",
    })
  }

  const handleSafetySettings = () => {
    toast({
      title: "Safety Settings Updated",
      description: "Your safety preferences have been saved successfully.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="h-5 w-5 mr-2 text-green-600" />
          Safety & Security
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Emergency Contacts */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Emergency Contacts</h3>
            {!isAddingContact && emergencyContacts.length < 5 && (
              <Button onClick={() => setIsAddingContact(true)} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            )}
          </div>

          <div className="space-y-2">
            {emergencyContacts.map((contact) => (
              <div key={contact.id} className="flex items-center justify-between p-2 border rounded">
                <div className="flex-1">
                  <p className="text-sm font-medium">{contact.name}</p>
                  <p className="text-xs text-muted-foreground">{contact.relationship}</p>
                  <p className="text-xs text-muted-foreground">{contact.phone}</p>
                </div>
                <Button onClick={() => removeEmergencyContact(contact.id)} size="sm" variant="ghost">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {isAddingContact && (
            <div className="space-y-3 p-3 border-2 border-dashed rounded">
              <Input
                placeholder="Contact name"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              />
              <Input
                placeholder="Phone number"
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
              />
              <Input
                placeholder="Relationship"
                value={newContact.relationship}
                onChange={(e) => setNewContact({ ...newContact, relationship: e.target.value })}
              />
              <div className="flex space-x-2">
                <Button onClick={addEmergencyContact} size="sm" className="flex-1">
                  Add Contact
                </Button>
                <Button onClick={() => setIsAddingContact(false)} size="sm" variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Safety Settings */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Safety Preferences</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Auto Location Sharing</Label>
                <p className="text-xs text-muted-foreground">Share location automatically during SOS</p>
              </div>
              <Switch
                checked={safetySettings.autoLocationSharing}
                onCheckedChange={(checked) => setSafetySettings({ ...safetySettings, autoLocationSharing: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Emergency Auto Call</Label>
                <p className="text-xs text-muted-foreground">Auto call emergency services during SOS</p>
              </div>
              <Switch
                checked={safetySettings.emergencyAutoCall}
                onCheckedChange={(checked) => setSafetySettings({ ...safetySettings, emergencyAutoCall: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Safety Check-in</Label>
                <p className="text-xs text-muted-foreground">Regular safety status updates</p>
              </div>
              <Switch
                checked={safetySettings.safetyCheckIn}
                onCheckedChange={(checked) => setSafetySettings({ ...safetySettings, safetyCheckIn: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Location History</Label>
                <p className="text-xs text-muted-foreground">Keep location history for safety</p>
              </div>
              <Switch
                checked={safetySettings.locationHistory}
                onCheckedChange={(checked) => setSafetySettings({ ...safetySettings, locationHistory: checked })}
              />
            </div>
          </div>
        </div>

        {/* Safety Status */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Safety Status</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <Shield className="h-6 w-6 mx-auto text-green-600 mb-1" />
              <div className="text-sm font-medium text-green-800 dark:text-green-400">Verified</div>
              <div className="text-xs text-green-600">Profile Verified</div>
            </div>
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <MapPin className="h-6 w-6 mx-auto text-blue-600 mb-1" />
              <div className="text-sm font-medium text-blue-800 dark:text-blue-400">Active</div>
              <div className="text-xs text-blue-600">Location Sharing</div>
            </div>
          </div>
        </div>

        <Button onClick={handleSafetySettings} className="w-full">
          Save Safety Settings
        </Button>
      </CardContent>
    </Card>
  )
}
