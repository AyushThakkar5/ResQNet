import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Shield, Smartphone, MapPin, Bell, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const features = [
    {
      icon: Smartphone,
      title: "One-Tap SOS",
      description: "Send emergency alerts instantly with location sharing and live streaming capabilities.",
    },
    {
      icon: MapPin,
      title: "Location-Based Help",
      description: "Connect with verified volunteers and helpers within your immediate vicinity.",
    },
    {
      icon: Bell,
      title: "Real-Time Notifications",
      description: "Get instant updates on help requests, volunteer responses, and community activities.",
    },
    {
      icon: Award,
      title: "Gamified Volunteering",
      description: "Earn karma points, badges, and recognition for helping others in your community.",
    },
  ]

  const howItWorks = [
    {
      step: "01",
      title: "Download & Register",
      description: "Create your account and choose your role: Helper, Volunteer, or Donor.",
    },
    {
      step: "02",
      title: "Verify Your Profile",
      description: "Complete verification to build trust and ensure community safety.",
    },
    {
      step: "03",
      title: "Start Helping",
      description: "Send SOS alerts, volunteer for missions, or donate to verified causes.",
    },
    {
      step: "04",
      title: "Build Community",
      description: "Earn karma, gain recognition, and strengthen your local community network.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">About ResQNet</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A revolutionary community platform that connects people in need with local volunteers, creating a network
              of support that's always ready to respond when help matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/auth/signup">Join Our Community</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* App Features */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Powerful Features for Community Support</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HelpConnect combines cutting-edge technology with human compassion to create the most effective
                community support platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">How ResQNet Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Getting started with HelpConnect is simple. Follow these four easy steps to become part of our growing
                community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Built with Modern Technology</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HelpConnect leverages the latest technologies to ensure fast, reliable, and secure community support
                services.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">React</div>
                  <div className="text-sm text-muted-foreground">Frontend</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-600 mb-2">Node.js</div>
                  <div className="text-sm text-muted-foreground">Backend</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-600 mb-2">MongoDB</div>
                  <div className="text-sm text-muted-foreground">Database</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-600 mb-2">WebRTC</div>
                  <div className="text-sm text-muted-foreground">Live Stream</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Safety & Security */}
          <div className="bg-muted/50 rounded-lg p-8">
            <div className="text-center space-y-6">
              <Shield className="mx-auto h-12 w-12 text-green-600" />
              <h2 className="text-3xl font-bold">Safety & Security First</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Your safety is our top priority. All volunteers undergo thorough verification, and our platform includes
                multiple safety features including real-time tracking, emergency contacts integration, and 24/7
                monitoring.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-muted-foreground">Verified Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-muted-foreground">Platform Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">256-bit</div>
                  <div className="text-sm text-muted-foreground">SSL Encryption</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of community members who are already making their neighborhoods safer and more connected
              through HelpConnect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/auth/signup">Start Helping Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
