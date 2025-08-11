"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangle, Users, Heart } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Help When It <span className="text-red-600">Matters Most</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your community in times of need. Send SOS alerts, volunteer to help others, and make a
              difference when it counts.
            </p>
          </div>

          {/* Large SOS Button */}
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-32 w-32 rounded-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/sos" className="flex flex-col items-center">
                <AlertTriangle className="h-8 w-8 mb-2" />
                SOS
              </Link>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="outline" className="min-w-48 bg-transparent">
              <Link href="/volunteer" className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Join as Volunteer
              </Link>
            </Button>
            <Button asChild size="lg" className="min-w-48">
              <Link href="/donate" className="flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">2,847</div>
              <div className="text-sm text-muted-foreground">Lives Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1,234</div>
              <div className="text-sm text-muted-foreground">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">₹5.2L</div>
              <div className="text-sm text-muted-foreground">Donations Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
