"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Smartphone, Building } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function DonationForm() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const { toast } = useToast()

  const predefinedAmounts = [100, 500, 1000, 2000, 5000]

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Donation Successful!",
      description: `Thank you for your donation of ₹${amount}. Your contribution will make a difference.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleDonate} className="space-y-6">
          <div className="space-y-2">
            <Label>Select Amount</Label>
            <div className="grid grid-cols-3 gap-2">
              {predefinedAmounts.map((preset) => (
                <Button
                  key={preset}
                  type="button"
                  variant={amount === preset.toString() ? "default" : "outline"}
                  onClick={() => setAmount(preset.toString())}
                  className="text-sm"
                >
                  ₹{preset}
                </Button>
              ))}
            </div>
            <Input
              placeholder="Custom amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
          </div>

          <div className="space-y-3">
            <Label>Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Credit/Debit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex items-center">
                  <Smartphone className="h-4 w-4 mr-2" />
                  UPI
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="netbanking" id="netbanking" />
                <Label htmlFor="netbanking" className="flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  Net Banking
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea id="message" placeholder="Leave a message of support..." className="min-h-20" />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Donate ₹{amount || "0"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
