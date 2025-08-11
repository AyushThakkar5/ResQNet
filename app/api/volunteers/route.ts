import { type NextRequest, NextResponse } from "next/server"

// Mock volunteer database
const volunteers = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+91-9876543210",
    location: { lat: 28.5355, lng: 77.391, address: "Ahmedabad, India" },
    skills: ["medical", "transport"],
    karmaPoints: 1250,
    rating: 4.8,
    verified: true,
    status: "available",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91-9876543211",
    location: { lat: 28.4595, lng: 77.0266, address: "Gandhinanger, India" },
    skills: ["food", "rescue"],
    karmaPoints: 890,
    rating: 4.6,
    verified: true,
    status: "busy",
    joinDate: "2024-02-20",
  },
]

export async function GET() {
  return NextResponse.json({
    success: true,
    data: volunteers,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newVolunteer = {
      id: volunteers.length + 1,
      name: body.name,
      email: body.email,
      phone: body.phone,
      location: body.location,
      skills: body.skills || [],
      karmaPoints: 0,
      rating: 0,
      verified: false,
      status: "available",
      joinDate: new Date().toISOString(),
    }

    volunteers.push(newVolunteer)

    return NextResponse.json({
      success: true,
      data: newVolunteer,
      message: "Volunteer registered successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to register volunteer",
      },
      { status: 500 },
    )
  }
}
