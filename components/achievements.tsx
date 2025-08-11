import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Heart, Zap } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "First Responder",
    description: "Completed first emergency mission",
    icon: Zap,
    earned: true,
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Life Saver",
    description: "Helped in 10 medical emergencies",
    icon: Heart,
    earned: true,
    date: "2024-01-20",
  },
  {
    id: 3,
    title: "Community Hero",
    description: "Complete 50 missions",
    icon: Trophy,
    earned: false,
    progress: "47/50",
  },
  {
    id: 4,
    title: "Gold Helper",
    description: "Maintain 4.5+ rating for 6 months",
    icon: Award,
    earned: true,
    date: "2024-01-25",
  },
]

export function Achievements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50">
            <div className={`p-2 rounded-full ${achievement.earned ? "bg-primary/10" : "bg-muted"}`}>
              <achievement.icon
                className={`h-4 w-4 ${achievement.earned ? "text-primary" : "text-muted-foreground"}`}
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{achievement.title}</p>
                {achievement.earned ? (
                  <Badge variant="secondary" className="text-xs">
                    Earned
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-xs">
                    {achievement.progress}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
              {achievement.earned && achievement.date && (
                <p className="text-xs text-muted-foreground">Earned on {achievement.date}</p>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
