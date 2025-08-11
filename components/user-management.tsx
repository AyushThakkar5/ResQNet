import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Shield, ShieldCheck, Ban, Eye } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Mr. Thakkar",
    email: "alex@example.com",
    role: "volunteer",
    status: "active",
    verified: true,
    karmaPoints: 1250,
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    role: "user",
    status: "active",
    verified: false,
    karmaPoints: 45,
    joinDate: "2024-01-20",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    email: "rahul@example.com",
    role: "donor",
    status: "suspended",
    verified: true,
    karmaPoints: 890,
    joinDate: "2024-01-10",
  },
]

export function UserManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{user.name}</p>
                  {user.verified && <ShieldCheck className="h-4 w-4 text-green-600" />}
                </div>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{user.role}</Badge>
                  <Badge variant={user.status === "active" ? "secondary" : "destructive"}>{user.status}</Badge>
                  <span className="text-xs text-muted-foreground">{user.karmaPoints} karma</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline">
                <Eye className="h-4 w-4" />
              </Button>
              {!user.verified && (
                <Button size="sm" variant="outline">
                  <Shield className="h-4 w-4 text-blue-600" />
                </Button>
              )}
              <Button size="sm" variant="outline">
                <Ban className="h-4 w-4 text-red-600" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
