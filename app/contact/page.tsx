import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle, AlertTriangle, Heart, Users } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      details: "+91-911-HELP-NOW",
      description: "24/7 emergency support for urgent situations",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
    },
    {
      icon: Mail,
      title: "General Support",
      details: "ResQNet@gmail.com",
      description: "General inquiries and support requests",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: MessageCircle,
      title: "Partnership Inquiries",
      details: "partnerships@ResQNet.com",
      description: "Collaborate with us to expand our impact",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      icon: Users,
      title: "Volunteer Support",
      details: "volunteers@ResQNet.com",
      description: "Support for volunteers and community coordinators",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: "Gift City, Gujarat, India",
      description: "Main office and operations center",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      description: "Emergency support available 24/7",
    },
  ]

  const faqs = [
    {
      question: "How quickly do volunteers respond to SOS alerts?",
      answer:
        "Most SOS alerts receive responses within 2-5 minutes. Our system notifies all verified volunteers within a 5km radius of the emergency location, ensuring rapid response times.",
    },
    {
      question: "How are volunteers verified on the platform?",
      answer:
        "All volunteers undergo a comprehensive verification process including identity verification, background checks, skill validation, and reference checks. We also conduct periodic re-verification to maintain safety standards.",
    },
    {
      question: "Is there any cost to ResQNet?",
      answer:
        "HelpConnect is completely free to use for sending SOS alerts, volunteering, and accessing community support. Donations are optional and go directly to verified causes with full transparency.",
    },
    {
      question: "What types of emergencies can I report?",
      answer:
        "You can report medical emergencies, food assistance needs, transport help, rescue situations, natural disaster support, and other community support needs. Our platform covers a wide range of emergency and non-emergency situations.",
    },
    {
      question: "How do you ensure the safety of users?",
      answer:
        "We implement multiple safety measures including volunteer verification, real-time tracking, emergency contacts integration, 24/7 monitoring, and direct integration with local emergency services.",
    },
    {
      question: "Can organizations partner with ResQNet?",
      answer:
        "Yes! We welcome partnerships with NGOs, government agencies, healthcare providers, and other organizations. Contact our partnerships team to discuss collaboration opportunities.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help and answer any questions you might have. Reach out to us and we'll respond as soon as
              possible.
            </p>
          </div>

          {/* Emergency Notice */}
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Emergency Situations</h3>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  If you're experiencing a life-threatening emergency, please call your local emergency services
                  immediately (112, 100, 101, 108) or use our SOS feature in the app for immediate community assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the best way to reach us based on your needs. We're committed to responding promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`mx-auto w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center mb-4`}
                    >
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className={`font-medium ${info.color} mb-2`}>{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Office Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officeInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-muted rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="font-medium text-primary">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Support</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="volunteer">Volunteer Support</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Brief description of your inquiry" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-muted/50">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 mx-auto text-red-600 mb-3" />
                  <h3 className="font-semibold mb-2">Still have questions?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold">Ready to Join Our Community?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't wait for an emergency to get started. Join HelpConnect today and become part of a community that's
              always ready to help when it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Join as Volunteer</Button>
              <Button variant="outline" size="lg">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
