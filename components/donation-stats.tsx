import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Heart, Target } from "lucide-react"

const stats = [
  {
    title: "Total Donations",
    value: "₹8.2L",
    change: "+12%",
    icon: Heart,
    color: "text-green-600",
  },
  {
    title: "Active Donors",
    value: "1,234",
    change: "+8%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Causes Funded",
    value: "47",
    change: "+15%",
    icon: Target,
    color: "text-purple-600",
  },
  {
    title: "Success Rate",
    value: "94%",
    change: "+2%",
    icon: TrendingUp,
    color: "text-orange-600",
  },
]

export function DonationStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className={`text-xs ${stat.color}`}>{stat.change} from last month</p>
              </div>
              <div className={`p-2 rounded-full bg-muted`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
