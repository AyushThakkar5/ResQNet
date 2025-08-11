import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const weeklyData = [
  { name: "Mon", alerts: 12, resolved: 10 },
  { name: "Tue", alerts: 19, resolved: 16 },
  { name: "Wed", alerts: 15, resolved: 14 },
  { name: "Thu", alerts: 22, resolved: 20 },
  { name: "Fri", alerts: 18, resolved: 15 },
  { name: "Sat", alerts: 25, resolved: 23 },
  { name: "Sun", alerts: 16, resolved: 14 },
]

const categoryData = [
  { name: "Medical", value: 35, color: "#ef4444" },
  { name: "Food", value: 25, color: "#22c55e" },
  { name: "Transport", value: 20, color: "#3b82f6" },
  { name: "Rescue", value: 20, color: "#f59e0b" },
]

export function Analytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Weekly Alert Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="alerts" fill="#ef4444" name="Total Alerts" />
              <Bar dataKey="resolved" fill="#22c55e" name="Resolved" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alert Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
