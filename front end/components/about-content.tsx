import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Stride by Marlow was founded in 2020 by a group of passionate sneaker enthusiasts who believed that everyone
            deserves to walk in comfort and style. Our journey began in a small workshop in Nairobi, where we crafted
            our first pair of sneakers with meticulous attention to detail and a commitment to quality.
          </p>
          <p>
            Today, we've grown into a beloved brand, known for our innovative designs and dedication to customer
            satisfaction. We continue to push the boundaries of sneaker technology while staying true to our roots of
            craftsmanship and style.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            At Stride by Marlow, our mission is to provide our customers with the perfect blend of style, comfort, and
            performance. We believe that the right pair of sneakers can elevate your everyday experiences, whether
            you're hitting the gym, exploring the city, or simply going about your day.
          </p>
          <Image
            src="/about-image.jpg"
            alt="Stride by Marlow workshop"
            width={400}
            height={300}
            className="rounded-lg mt-4"
          />
        </CardContent>
      </Card>
    </div>
  )
}

