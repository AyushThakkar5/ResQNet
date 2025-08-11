import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar } from "lucide-react"

const causes = [
  {
    id: 1,
    title: "Medical Emergency Fund",
    description: "Help cover medical expenses for emergency cases in our community",
    target: 100000,
    raised: 67500,
    donors: 45,
    daysLeft: 15,
    verified: true,
    category: "Medical",
  },
  {
    id: 2,
    title: "Food Relief Program",
    description: "Provide meals and groceries to families facing food insecurity",
    target: 50000,
    raised: 32000,
    donors: 28,
    daysLeft: 22,
    verified: true,
    category: "Food",
  },
  {
    id: 3,
    title: "Education Support Initiative",
    description: "Support children's education with books, supplies, and resources",
    target: 75000,
    raised: 18500,
    donors: 12,
    daysLeft: 30,
    verified: true,
    category: "Education",
  },
]

export function DonationCauses() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Active Causes</h3>
      {causes.map((cause) => (
        <Card key={cause.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-lg">{cause.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{cause.category}</Badge>
                  {cause.verified && (
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{cause.description}</p>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>₹{cause.raised.toLocaleString()} raised</span>
                <span>₹{cause.target.toLocaleString()} goal</span>
              </div>
              <Progress value={(cause.raised / cause.target) * 100} className="h-2" />
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {cause.donors} donors
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {cause.daysLeft} days left
                </div>
              </div>
              <div className="text-sm font-medium">{Math.round((cause.raised / cause.target) * 100)}% funded</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
