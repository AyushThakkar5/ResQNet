"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Award, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export function VolunteerProfile() {
  const volunteer = {
    name: "Mr. Thakkar",
    email: "thakkar@gmail.com",
    location: "Delhi, India",
    joinDate: "January 2024",
    karmaPoints: 1250,
    level: "Gold Helper",
    completedMissions: 47,
    rating: 4.8,
    verified: true,
  }

  const [profileImage, setProfileImage] = useState<string | null>(null)

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage")
    if (savedImage) {
      setProfileImage(savedImage)
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={profileImage || "/placeholder.svg?height=64&width=64"}
              alt="Profile picture"
              className="object-cover"
            />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              {volunteer.name}
              {volunteer.verified && (
                <Badge variant="secondary" className="text-xs">
                  <Award className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{volunteer.email}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              {volunteer.location}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{volunteer.karmaPoints}</div>
            <div className="text-xs text-muted-foreground">Karma Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{volunteer.completedMissions}</div>
            <div className="text-xs text-muted-foreground">Missions</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Level</span>
            <Badge variant="outline">{volunteer.level}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Rating</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{volunteer.rating}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Member Since</span>
            <span className="text-sm text-muted-foreground">{volunteer.joinDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
