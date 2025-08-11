import Link from "next/link"
import { Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="text-lg font-bold">ResQNet</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting communities in times of need. Help when it matters most.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/sos" className="block hover:text-primary">
                Emergency SOS
              </Link>
              <Link href="/volunteer" className="block hover:text-primary">
                Become Volunteer
              </Link>
              <Link href="/donate" className="block hover:text-primary">
                Donate
              </Link>
              <Link href="/community" className="block hover:text-primary">
                Community
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-2 text-sm">
              <Link href="/help" className="block hover:text-primary">
                Help Center
              </Link>
              <Link href="/safety" className="block hover:text-primary">
                Safety Guidelines
              </Link>
              <Link href="/privacy" className="block hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:text-primary">
                About the App
              </Link>
              <Link href="/team" className="block hover:text-primary">
                Meet the Team
              </Link>
              <Link href="/contact" className="block hover:text-primary">
                Contact Us
              </Link>
              <Link href="/careers" className="block hover:text-primary">
                Careers
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +91-911-HELP-NOW
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                ResQNet@gmail.com
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Ahmedabad, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ResQNet. All rights reserved. Built with ❤️ for humanity.</p>
        </div>
      </div>
    </footer>
  )
}
