import { type NextRequest, NextResponse } from "next/server"

// Mock donations database
const donations = [
  {
    id: 1,
    donorName: "Anonymous",
    amount: 5000,
    cause: "Medical Emergency Fund",
    message: "Hope this helps someone in need",
    timestamp: new Date().toISOString(),
    status: "completed",
  },
  {
    id: 2,
    donorName: "Rahul Kumar",
    amount: 2000,
    cause: "Food Relief Program",
    message: "For the hungry families",
    timestamp: new Date().toISOString(),
    status: "completed",
  },
]

const causes = [
  {
    id: 1,
    title: "Medical Emergency Fund",
    description: "Help cover medical expenses for emergency cases",
    target: 100000,
    raised: 67500,
    donors: 45,
    verified: true,
  },
  {
    id: 2,
    title: "Food Relief Program",
    description: "Provide meals to families in need",
    target: 50000,
    raised: 32000,
    donors: 28,
    verified: true,
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")

  if (type === "causes") {
    return NextResponse.json({
      success: true,
      data: causes,
    })
  }

  return NextResponse.json({
    success: true,
    data: donations,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newDonation = {
      id: donations.length + 1,
      donorName: body.donorName || "Anonymous",
      amount: body.amount,
      cause: body.cause,
      message: body.message || "",
      timestamp: new Date().toISOString(),
      status: "completed",
    }

    donations.push(newDonation)

    // Update cause raised amount
    const cause = causes.find((c) => c.title === body.cause)
    if (cause) {
      cause.raised += body.amount
      cause.donors += 1
    }

    return NextResponse.json({
      success: true,
      data: newDonation,
      message: "Donation processed successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process donation",
      },
      { status: 500 },
    )
  }
}
