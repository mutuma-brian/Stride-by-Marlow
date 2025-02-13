import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-orange-500" />
            <span>info@stridemarlow.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-orange-500" />
            <span>+254 714 470576</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-orange-500" />
            <span>Imenti House, First Floor, Stall No: A19, Nairobi, Kenya</span>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="text-orange-500" />
            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Connect With Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Facebook className="text-blue-600" />
            <a href="https://facebook.com/stridemarlow" className="hover:underline">
              Facebook
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Instagram className="text-pink-600" />
            <a href="https://instagram.com/stridemarlow" className="hover:underline">
              Instagram
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Twitter className="text-sky-500" />
            <a href="https://twitter.com/stridemarlow" className="hover:underline">
              Twitter
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

