"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function LocationDetector() {
  const [location, setLocation] = useState<{ lat: number; lng: number; address: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const detectLocation = () => {
    setLoading(true)

    if (!navigator.geolocation) {
      toast({
        title: "Geolocation not supported",
        description: "Your browser doesn't support geolocation.",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        // Mock reverse geocoding
        setLocation({
          lat: latitude,
          lng: longitude,
          address: `${latitude.toFixed(4)}, ${longitude.toFixed(4)} (Mock Address)`,
        })
        setLoading(false)
        toast({
          title: "Location detected",
          description: "Your location has been detected successfully.",
        })
      },
      (error) => {
        setLoading(false)
        toast({
          title: "Location access denied",
          description: "Please enable location access to send accurate SOS alerts.",
          variant: "destructive",
        })
      },
    )
  }

  useEffect(() => {
    detectLocation()
  }, [])

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Current Location</p>
              {location ? (
                <p className="text-xs text-muted-foreground">{location.address}</p>
              ) : (
                <p className="text-xs text-muted-foreground">Location not detected</p>
              )}
            </div>
          </div>
          <Button onClick={detectLocation} disabled={loading} variant="outline" size="sm">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Detect"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
