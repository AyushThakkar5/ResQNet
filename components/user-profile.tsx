"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Star, MapPin, Calendar, Camera, Shield } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"

export function UserProfile() {
  const { user } = useAuth()
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const { toast } = useToast()

  // Mock user data - in real app, this would come from API
  const userStats = {
    karmaPoints: 1250,
    level: "Gold Helper",
    completedMissions: 47,
    rating: 4.8,
    totalRatings: 23,
    joinDate: "January 2024",
    location: "Delhi, India",
    verified: true,
    badges: [
      { name: "First Responder", icon: "🚨", earned: true },
      { name: "Life Saver", icon: "❤️", earned: true },
      { name: "Community Hero", icon: "🏆", earned: false, progress: 94 },
      { name: "Trusted Helper", icon: "🛡️", earned: true },
    ],
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file.",
          variant: "destructive",
        })
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB.",
          variant: "destructive",
        })
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string
        setProfileImage(imageUrl)
        // In a real app, you would upload to a server here
        localStorage.setItem("profileImage", imageUrl)
        toast({
          title: "Profile image updated",
          description: "Your profile picture has been updated successfully.",
        })
      }
      reader.readAsDataURL(file)
    }
  }

  // Add useEffect to load saved image on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage")
    if (savedImage) {
      setProfileImage(savedImage)
    }
  }, [])

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Gold Helper":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20"
      case "Silver Helper":
        return "text-gray-600 bg-gray-100 dark:bg-gray-900/20"
      case "Bronze Helper":
        return "text-orange-600 bg-orange-100 dark:bg-orange-900/20"
      default:
        return "text-blue-600 bg-blue-100 dark:bg-blue-900/20"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Profile Picture and Basic Info */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={profileImage || "/placeholder.svg?height=96&width=96"}
                alt="Profile picture"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl">
                {user?.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("") || "U"}
              </AvatarFallback>
            </Avatar>
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 p-1 bg-primary text-primary-foreground rounded-full cursor-pointer hover:bg-primary/90"
            >
              <Camera className="h-4 w-4" />
            </label>
            <input id="profile-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl font-bold">{user?.name || "User Name"}</h2>
              {userStats.verified && <Shield className="h-5 w-5 text-green-600" />}
            </div>
            <Badge className={getLevelColor(userStats.level)}>{userStats.level}</Badge>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              {userStats.location}
            </div>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              Member since {userStats.joinDate}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{userStats.karmaPoints}</div>
            <div className="text-xs text-muted-foreground">Karma Points</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{userStats.completedMissions}</div>
            <div className="text-xs text-muted-foreground">Missions</div>
          </div>
        </div>

        {/* Rating */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Rating</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{userStats.rating}</span>
              <span className="text-xs text-muted-foreground ml-1">({userStats.totalRatings} reviews)</span>
            </div>
          </div>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.floor(userStats.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : star <= userStats.rating
                      ? "fill-yellow-200 text-yellow-200"
                      : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Achievements</h3>
          <div className="space-y-2">
            {userStats.badges.map((badge, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{badge.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{badge.name}</p>
                    {!badge.earned && badge.progress && (
                      <div className="space-y-1">
                        <Progress value={badge.progress} className="h-1 w-20" />
                        <p className="text-xs text-muted-foreground">{badge.progress}% complete</p>
                      </div>
                    )}
                  </div>
                </div>
                {badge.earned ? (
                  <Badge variant="secondary" className="text-xs">
                    Earned
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-xs">
                    In Progress
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
