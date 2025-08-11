"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Plus, X, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FamilyContact {
  id: string
  name: string
  relationship: string
  phone: string
  isPrimary: boolean
}

const emergencyContacts = [
  { name: "Police", number: "100", color: "bg-blue-600" },
  { name: "Fire", number: "101", color: "bg-red-600" },
  { name: "Ambulance", number: "108", color: "bg-green-600" },
  { name: "Emergency", number: "112", color: "bg-orange-600" },
]

export function FamilyContacts() {
  const [familyContacts, setFamilyContacts] = useState<FamilyContact[]>([
    {
      id: "1",
      name: "Mom",
      relationship: "Mother",
      phone: "+91-9876543210",
      isPrimary: true,
    },
    {
      id: "2",
      name: "Dad",
      relationship: "Father",
      phone: "+91-9876543211",
      isPrimary: false,
    },
  ])

  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newContact, setNewContact] = useState({
    name: "",
    relationship: "",
    phone: "",
  })

  const { toast } = useToast()

  const addContact = () => {
    if (newContact.name && newContact.phone && familyContacts.length < 5) {
      const contact: FamilyContact = {
        id: Date.now().toString(),
        name: newContact.name,
        relationship: newContact.relationship || "Family",
        phone: newContact.phone,
        isPrimary: false,
      }
      setFamilyContacts([...familyContacts, contact])
      setNewContact({ name: "", relationship: "", phone: "" })
      setIsAdding(false)
      toast({
        title: "Contact Added",
        description: `${newContact.name} has been added to your emergency contacts.`,
      })
    }
  }

  const removeContact = (id: string) => {
    setFamilyContacts(familyContacts.filter((contact) => contact.id !== id))
    toast({
      title: "Contact Removed",
      description: "Emergency contact has been removed.",
    })
  }

  const setPrimaryContact = (id: string) => {
    setFamilyContacts(
      familyContacts.map((contact) => ({
        ...contact,
        isPrimary: contact.id === id,
      })),
    )
    toast({
      title: "Primary Contact Updated",
      description: "Primary emergency contact has been updated.",
    })
  }

  const callContact = (phone: string, name: string) => {
    toast({
      title: `Calling ${name}`,
      description: `Dialing ${phone}...`,
    })
    // In a real app, this would initiate a phone call
    window.open(`tel:${phone}`)
  }

  return (
    <div className="space-y-4">
      {/* Official Emergency Numbers */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Official Emergency Numbers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {emergencyContacts.map((contact) => (
              <Button
                key={contact.number}
                variant="outline"
                className="h-16 flex flex-col bg-transparent hover:bg-muted"
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

      {/* Family Emergency Contacts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-500" />
              Family Emergency Contacts
            </CardTitle>
            {!isAdding && familyContacts.length < 5 && (
              <Button onClick={() => setIsAdding(true)} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Existing Contacts */}
          {familyContacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{contact.name}</p>
                  {contact.isPrimary && (
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Primary</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                <p className="text-sm text-muted-foreground">{contact.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => callContact(contact.phone, contact.name)}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Phone className="h-4 w-4" />
                </Button>
                {!contact.isPrimary && (
                  <Button onClick={() => setPrimaryContact(contact.id)} size="sm" variant="outline">
                    Set Primary
                  </Button>
                )}
                <Button onClick={() => removeContact(contact.id)} size="sm" variant="ghost">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          {/* Add New Contact Form */}
          {isAdding && (
            <div className="space-y-3 p-4 border-2 border-dashed rounded-lg">
              <div className="space-y-2">
                <Label htmlFor="contactName">Name *</Label>
                <Input
                  id="contactName"
                  placeholder="e.g., Mom, Dad, Sister"
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="relationship">Relationship</Label>
                <Input
                  id="relationship"
                  placeholder="e.g., Mother, Father, Spouse"
                  value={newContact.relationship}
                  onChange={(e) => setNewContact({ ...newContact, relationship: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Phone Number *</Label>
                <Input
                  id="contactPhone"
                  placeholder="+91-XXXXX-XXXXX"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={addContact} disabled={!newContact.name || !newContact.phone} className="flex-1">
                  Add Contact
                </Button>
                <Button onClick={() => setIsAdding(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {familyContacts.length === 0 && !isAdding && (
            <div className="text-center py-8 text-muted-foreground">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No family contacts added yet</p>
              <p className="text-sm">Add your family members for quick emergency access</p>
            </div>
          )}

          {/* Info */}
          <div className="bg-muted/50 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">
              💡 <strong>Tip:</strong> Your primary contact will be automatically notified when you send an SOS alert.
              All family contacts can be reached with one tap during emergencies.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
