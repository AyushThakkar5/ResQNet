import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail, Github } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Krupanshi Patel",
      role: "Founder & CEO",
      description:
        "Visionary leader in social impact technology. Former manager at tech startups, passionate about building communities that care.",
      image: "/Krupanshi Photo.jpeg?height=200&width=200&text=AS",
      skills: ["Strategic thinking", "Product Strategy", "Community Building"],
      social: {
        linkedin: "https://www.linkedin.com/in/krupanshipatel/",
        email: "krupanshi@helpconnect.com",
      },
    },
    {
      name: "Ayush Thakkar",
      role: "Co-Founder & CTO",
      description:
        "Full-stack engineer and tech architect. Expert in scalable systems, real-time applications, and mobile development.",
      image: "/Ayush Photo.jpeg?height=200&width=200&text=PP",
      skills: ["Full-Stack Development", "System Architecture", "Mobile Apps"],
      social: {
        linkedin: "https://www.linkedin.com/in/ayush-thakkar-49a240306/",
        email: "a16thakkar@gmail.com.com",
      },
    },
    {
      name: "Harshvardhan Parikh",
      role: "Chief Head of Operations",
      description:
        "Operations specialist with expertise in emergency response systems. Former management coordinator of field experience.",
      image: "/Harsh Photo.jpeg?height=200&width=200&text=RG",
      skills: ["Operations Management", "Emergency Response", "Process Optimization"],
      social: {
        linkedin: "https://www.linkedin.com/in/harshvardhan-parikh-a6b8762b4/",
        email: "harshvardhan@helpconnect.com",
      },
    },
    {
      name: "Aarya Shah",
      role: "Head of Design & UX",
      description:
        "Creative designer focused on human-centered design. Specializes in creating intuitive interfaces for critical applications. Design thinking advocate.",
      image: "/Aarya Photo.jpeg?height=200&width=200&text=SR",
      skills: ["UI/UX Design", "Design Systems", "User Research"],
      social: {
        linkedin: "https://www.linkedin.com/in/aaryshah?",
        email: "aarya@helpconnect.com",
      },
    },
    {
      name: "Vidhit Agrawal",
      role: "Head of Community & Partnerships",
      description:
        "Community builder and partnership strategist. Expert in volunteer management, stakeholder relations, and building sustainable community networks.",
      image: "/Vidhit Photo.jpeg?height=200&width=200&text=VS",
      skills: ["Community Management", "Partnerships", "Volunteer Coordination"],
      social: {
        linkedin: "https://www.linkedin.com/in/vidhitagrawal/",
        email: "vidhit.agrawal2004@gmail.com",
      },
    },
  ]

  const companyValues = [
    {
      title: "Compassion First",
      description: "Every decision we make is guided by empathy and genuine care for human welfare.",
    },
    {
      title: "Community Driven",
      description: "We believe in the power of people helping people and building stronger communities.",
    },
    {
      title: "Innovation for Good",
      description: "We leverage cutting-edge technology to solve real-world social problems.",
    },
    {
      title: "Transparency & Trust",
      description: "We operate with complete transparency and prioritize building trust with our users.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of technologists, designers, and community builders united by a common mission:
              making help accessible when it matters most.
            </p>
          </div>

          {/* Team Members */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">The People Behind HelpConnect</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse team brings together expertise from technology, emergency response, design, and community
                building to create a platform that truly serves people.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <Avatar className="w-24 h-24 mx-auto">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="text-lg font-semibold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>

                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-center space-x-3 pt-2">
                        {member.social.linkedin && (
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={member.social.linkedin}>
                              <Linkedin className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`mailto:${member.social.email}`}>
                            <Mail className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Values */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape how we build HelpConnect.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyValues.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Us Section */}
          <div className="text-center space-y-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold">Want to Join Our Mission?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference. If you're interested in
              joining our team or collaborating with us, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:careers@helpconnect.com">View Open Positions</Link>
              </Button>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">5</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">2024</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">2,847</div>
              <div className="text-sm text-muted-foreground">Lives Helped</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">1,234</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
