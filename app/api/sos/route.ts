import { type NextRequest, NextResponse } from "next/server"

// Mock database
const sosAlerts: any[] = [
  {
    id: 1,
    userId: "user1",
    type: "medical",
    location: { lat: 28.5355, lng: 77.391, address: "South Bopal,Ahmedabad" },
    message: "Medical emergency - need immediate help",
    status: "active",
    timestamp: new Date().toISOString(),
    volunteers: [],
  },
]

export async function GET() {
  return NextResponse.json({
    success: true,
    data: sosAlerts,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newAlert = {
      id: sosAlerts.length + 1,
      userId: body.userId || "anonymous",
      type: body.type || "general",
      location: body.location,
      message: body.message || "Emergency assistance needed",
      status: "active",
      timestamp: new Date().toISOString(),
      volunteers: [],
    }

    sosAlerts.push(newAlert)

    // In a real app, you would:
    // 1. Save to database
    // 2. Send real-time notifications to nearby volunteers
    // 3. Integrate with emergency services if needed

    return NextResponse.json({
      success: true,
      data: newAlert,
      message: "SOS alert created successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create SOS alert",
      },
      { status: 500 },
    )
  }
}
