"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/components/auth-provider"

export function ProfileSettings() {
  const { user } = useAuth()
  const { toast } = useToast()

  const [personalInfo, setPersonalInfo] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+91-9876543210",
    bio: "Passionate about helping others in my community. Available for medical emergencies and transport assistance.",
    location: "Ahmedabad, India",
    dateOfBirth: "1990-01-01",
    gender: "prefer-not-to-say",
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    locationSharing: true,
    profileVisibility: "public",
    availabilityStatus: "available",
    maxDistance: "10",
    preferredCategories: ["medical", "transport"],
  })

  const [privacy, setPrivacy] = useState({
    showRealName: true,
    showLocation: true,
    showContactInfo: false,
    allowDirectMessages: true,
    shareActivityStatus: true,
  })

  const handleSavePersonalInfo = () => {
    toast({
      title: "Profile Updated",
      description: "Your personal information has been saved successfully.",
    })
  }

  const handleSavePreferences = () => {
    toast({
      title: "Preferences Updated",
      description: "Your notification and availability preferences have been saved.",
    })
  }

  const handleSavePrivacy = () => {
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy preferences have been saved successfully.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={personalInfo.name}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={personalInfo.phone}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={personalInfo.location}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={personalInfo.dateOfBirth}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={personalInfo.gender}
                  onValueChange={(value) => setPersonalInfo({ ...personalInfo, gender: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell others about yourself and how you can help..."
                value={personalInfo.bio}
                onChange={(e) => setPersonalInfo({ ...personalInfo, bio: e.target.value })}
                className="min-h-20"
              />
            </div>
            <Button onClick={handleSavePersonalInfo} className="w-full">
              Save Personal Information
            </Button>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={preferences.emailNotifications}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, emailNotifications: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive emergency alerts via SMS</p>
                  </div>
                  <Switch
                    checked={preferences.smsNotifications}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, smsNotifications: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive app notifications</p>
                  </div>
                  <Switch
                    checked={preferences.pushNotifications}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, pushNotifications: checked })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Availability</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Current Status</Label>
                  <Select
                    value={preferences.availabilityStatus}
                    onValueChange={(value) => setPreferences({ ...preferences, availabilityStatus: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="busy">Busy</SelectItem>
                      <SelectItem value="offline">Offline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Max Distance (km)</Label>
                  <Select
                    value={preferences.maxDistance}
                    onValueChange={(value) => setPreferences({ ...preferences, maxDistance: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 km</SelectItem>
                      <SelectItem value="10">10 km</SelectItem>
                      <SelectItem value="20">20 km</SelectItem>
                      <SelectItem value="50">50 km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Location</h3>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Location Sharing</Label>
                  <p className="text-sm text-muted-foreground">Allow others to see your approximate location</p>
                </div>
                <Switch
                  checked={preferences.locationSharing}
                  onCheckedChange={(checked) => setPreferences({ ...preferences, locationSharing: checked })}
                />
              </div>
            </div>

            <Button onClick={handleSavePreferences} className="w-full">
              Save Preferences
            </Button>
          </TabsContent>

          {/* Privacy */}
          <TabsContent value="privacy" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Profile Visibility</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Real Name</Label>
                    <p className="text-sm text-muted-foreground">Display your real name on your profile</p>
                  </div>
                  <Switch
                    checked={privacy.showRealName}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showRealName: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Location</Label>
                    <p className="text-sm text-muted-foreground">Display your city/area on your profile</p>
                  </div>
                  <Switch
                    checked={privacy.showLocation}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showLocation: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Contact Info</Label>
                    <p className="text-sm text-muted-foreground">Allow others to see your contact information</p>
                  </div>
                  <Switch
                    checked={privacy.showContactInfo}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showContactInfo: checked })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Communication</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Allow Direct Messages</Label>
                    <p className="text-sm text-muted-foreground">Let other users send you direct messages</p>
                  </div>
                  <Switch
                    checked={privacy.allowDirectMessages}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, allowDirectMessages: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Share Activity Status</Label>
                    <p className="text-sm text-muted-foreground">Show when you're online or last active</p>
                  </div>
                  <Switch
                    checked={privacy.shareActivityStatus}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, shareActivityStatus: checked })}
                  />
                </div>
              </div>
            </div>

            <Button onClick={handleSavePrivacy} className="w-full">
              Save Privacy Settings
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
