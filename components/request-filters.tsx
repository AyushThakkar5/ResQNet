"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

const filterOptions = [
  { id: "all", label: "All Requests", count: 12 },
  { id: "medical", label: "Medical", count: 4 },
  { id: "food", label: "Food", count: 3 },
  { id: "transport", label: "Transport", count: 2 },
  { id: "rescue", label: "Rescue", count: 3 },
]

const urgencyFilters = [
  { id: "all", label: "All Priority" },
  { id: "high", label: "High Priority" },
  { id: "medium", label: "Medium Priority" },
  { id: "low", label: "Low Priority" },
]

export function RequestFilters() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [urgencyFilter, setUrgencyFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search requests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium mb-2">Request Type</p>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                variant={activeFilter === option.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(option.id)}
                className="text-xs"
              >
                {option.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {option.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Priority Level</p>
          <div className="flex flex-wrap gap-2">
            {urgencyFilters.map((option) => (
              <Button
                key={option.id}
                variant={urgencyFilter === option.id ? "default" : "outline"}
                size="sm"
                onClick={() => setUrgencyFilter(option.id)}
                className="text-xs"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
