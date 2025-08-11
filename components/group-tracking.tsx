"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MapPin, Plus, X, AlertTriangle, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface GroupMember {
  id: string
  name: string
  phone: string
  status: "safe" | "danger" | "offline"
  lastLocation?: string
  avatar?: string
}

export function GroupTracking() {
  const [groupName, setGroupName] = useState("")
  const [newMemberName, setNewMemberName] = useState("")
  const [newMemberPhone, setNewMemberPhone] = useState("")
  const [isGroupActive, setIsGroupActive] = useState(false)
  const [groupMembers, setGroupMembers] = useState<GroupMember[]>([
    {
      id: "1",
      name: "You",
      phone: "+91-9876543210",
      status: "safe",
      lastLocation: "Current Location",
    },
  ])
  const { toast } = useToast()

  const addMember = () => {
    if (newMemberName && newMemberPhone && groupMembers.length < 5) {
      const newMember: GroupMember = {
        id: Date.now().toString(),
        name: newMemberName,
        phone: newMemberPhone,
        status: "offline",
        lastLocation: "Not available",
      }
      setGroupMembers([...groupMembers, newMember])
      setNewMemberName("")
      setNewMemberPhone("")
      toast({
        title: "Member Added",
        description: `${newMemberName} has been added to your group.`,
      })
    }
  }

  const removeMember = (id: string) => {
    if (id !== "1") {
      // Can't remove yourself
      setGroupMembers(groupMembers.filter((member) => member.id !== id))
    }
  }

  const startGroupTracking = () => {
    if (groupName && groupMembers.length >= 2) {
      setIsGroupActive(true)
      // Simulate sending invites to group members
      toast({
        title: "Group Tracking Started",
        description: `Invitations sent to all ${groupMembers.length - 1} members. They will receive SMS invites to join "${groupName}".`,
      })
    }
  }

  const stopGroupTracking = () => {
    setIsGroupActive(false)
    toast({
      title: "Group Tracking Stopped",
      description: "All group members have been notified that tracking has ended.",
    })
  }

  const simulateDangerAlert = () => {
    toast({
      title: "⚠️ DANGER ZONE ALERT",
      description: "A group member has entered a danger zone! All members have been notified with location details.",
      variant: "destructive",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe":
        return "bg-green-500"
      case "danger":
        return "bg-red-500"
      case "offline":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "safe":
        return "Safe"
      case "danger":
        return "In Danger"
      case "offline":
        return "Offline"
      default:
        return "Unknown"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Group Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isGroupActive ? (
          <>
            {/* Group Setup */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="groupName">Group Name</Label>
                <Input
                  id="groupName"
                  placeholder="e.g., Family Trip, Office Outing"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Group Members ({groupMembers.length}/5)</Label>
                  <Badge variant="outline">{5 - groupMembers.length} slots left</Badge>
                </div>

                {/* Current Members */}
                <div className="space-y-2">
                  {groupMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.phone}</p>
                        </div>
                      </div>
                      {member.id !== "1" && (
                        <Button variant="ghost" size="sm" onClick={() => removeMember(member.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Add New Member */}
                {groupMembers.length < 5 && (
                  <div className="space-y-3 p-3 border-2 border-dashed rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <Input
                        placeholder="Member name"
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                      />
                      <Input
                        placeholder="Phone number"
                        value={newMemberPhone}
                        onChange={(e) => setNewMemberPhone(e.target.value)}
                      />
                    </div>
                    <Button onClick={addMember} size="sm" className="w-full bg-transparent" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Member
                    </Button>
                  </div>
                )}
              </div>

              <Button
                onClick={startGroupTracking}
                disabled={!groupName || groupMembers.length < 2}
                className="w-full"
                size="lg"
              >
                Start Group Tracking
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Active Group Tracking */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{groupName}</h3>
                  <p className="text-sm text-muted-foreground">Group tracking active</p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Shield className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              </div>

              {/* Member Status */}
              <div className="space-y-2">
                {groupMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${getStatusColor(member.status)}`}
                        ></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {member.lastLocation}
                        </div>
                      </div>
                    </div>
                    <Badge variant={member.status === "danger" ? "destructive" : "secondary"}>
                      {getStatusText(member.status)}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Demo Button */}
              <Button onClick={simulateDangerAlert} variant="outline" className="w-full bg-transparent" size="sm">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Simulate Danger Alert (Demo)
              </Button>

              <Button onClick={stopGroupTracking} variant="destructive" className="w-full">
                Stop Group Tracking
              </Button>
            </div>
          </>
        )}

        {/* Info */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">How Group Tracking Works:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• All members receive SMS invites to join the group</li>
            <li>• Real-time location sharing among group members</li>
            <li>• Automatic alerts when someone enters a danger zone</li>
            <li>• Emergency notifications sent to all group members</li>
            <li>• Works even with limited internet connectivity</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
