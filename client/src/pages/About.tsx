import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Handshake, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* About Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About S&S International
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading manufacturer and exporter of high-quality handicrafts with
              years of experience in delivering exceptional craftsmanship to
              global markets.
            </p>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                We are pleased to introduce S&S International, a leading,
                well-established manufacturer and exporter specialising in
                high-quality handicrafts. With years of experience in the
                industry, we take pride in delivering exceptional craftsmanship
                and innovative designs to meet the diverse needs of our global
                clientele.
              </p>
              <p className="text-gray-600 mb-6">
                We are committed to building long-term relationships based on
                trust, reliability, and mutual success. Our dedication to
                quality and customer satisfaction has established us as a
                trusted partner in the handicrafts export industry.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Professional team at S&S International"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Our Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="S&S International manufacturing facility"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/WnoeDEFAVUXrrdE9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  View Factory Location
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-6">
                At S&S International, our motto is "Fair Business & Excellence
                in Craftsmanship." As a leading manufacturer and exporter of
                high-quality handicrafts, we are dedicated to delivering
                products that reflect precision, creativity, and timeless
                artistry.
              </p>
              <p className="text-gray-600 mb-6">
                Renowned for our consistent quality, competitive pricing, and
                on-time delivery, we have built a reputation as a trusted
                partner for clients worldwide. Our commitment to innovation
                drives us to continuously evolve, ensuring we meet the changing
                demands of global markets.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Where We Are Located
              </h3>
              <p className="text-gray-600">
                <strong>SEDEX Compliant Factory</strong>
                <br />
                Export Zone Greater Noida
                <br />
                Spread across an area of 27,000 sq ft.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-blue-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality Excellence
                </h3>
                <p className="text-gray-600">
                  Consistent high-quality products meeting international
                  standards and client expectations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-blue-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Serving clients worldwide with efficient export services and
                  timely delivery.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-blue-50">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fair Business
                </h3>
                <p className="text-gray-600">
                  Building long-term relationships based on trust, reliability,
                  and mutual success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
