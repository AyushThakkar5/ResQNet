import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Users, Heart, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: AlertTriangle,
    title: "Send SOS Alert",
    description: "Press the emergency button to send your location and request help from nearby volunteers.",
  },
  {
    icon: Users,
    title: "Volunteers Respond",
    description: "Verified volunteers in your area receive instant notifications and can claim your request.",
  },
  {
    icon: Heart,
    title: "Get Help",
    description: "Connect with volunteers who provide immediate assistance or support during emergencies.",
  },
  {
    icon: CheckCircle,
    title: "Community Impact",
    description: "Help others in return and build a stronger, more connected community network.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform connects people in need with volunteers in their community through a simple, fast process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
