"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SOSButton() {
  const [isActivated, setIsActivated] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const { toast } = useToast()

  const handleSOSClick = () => {
    if (isActivated) return

    setIsActivated(true)
    setCountdown(5)

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          sendSOSAlert()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const sendSOSAlert = () => {
    // Simulate SOS alert sending
    toast({
      title: "SOS Alert Sent!",
      description: "Emergency alert has been sent to nearby volunteers and authorities.",
    })

    setTimeout(() => {
      setIsActivated(false)
    }, 3000)
  }

  const cancelSOS = () => {
    setIsActivated(false)
    setCountdown(0)
    toast({
      title: "SOS Cancelled",
      description: "Emergency alert has been cancelled.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="relative">
        <Button
          onClick={handleSOSClick}
          disabled={isActivated}
          size="sm"
          className={`h-48 w-48 rounded-full text-xl font-bold transition-all duration-300 ${
            isActivated
              ? "bg-orange-600 hover:bg-orange-700 animate-pulse"
              : "bg-red-600 hover:bg-red-700 hover:scale-105"
          } shadow-2xl`}
        >
          <div className="flex flex-col items-center">
            <AlertTriangle className="h-12 w-12 mb-2" />
            {isActivated ? (
              <div>
                <div>SENDING</div>
                <div className="text-lg">{countdown}s</div>
              </div>
            ) : (
              "EMERGENCY SOS"
            )}
          </div>
        </Button>

        {isActivated && <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-ping" />}
      </div>

      {isActivated && (
        <Button onClick={cancelSOS} variant="outline" size="lg" className="w-full bg-transparent">
          Cancel SOS
        </Button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button variant="outline" size="lg" className="flex items-center bg-transparent">
          <Phone className="mr-2 h-5 w-5" />
          Call 112
        </Button>
        <Button variant="outline" size="lg" className="flex items-center bg-transparent">
          <Phone className="mr-2 h-5 w-5" />
          Call 108
        </Button>
      </div>
    </div>
  )
}
