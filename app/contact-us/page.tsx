import type { Metadata } from "next";
import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Family Movers Auckland. Contact us for a free quote or any questions about our moving services. Email, phone, or visit our office in Sunnyhills, Auckland.",
  openGraph: {
    title: "Contact Us | Family Movers Auckland",
    description:
      "Reach out to Family Movers Auckland for professional moving services. We're here to help with your relocation needs.",
  },
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src="/images/contact-hero.png"
          alt="Contact Family Movers"
          fill
          className="object-cover opacity-30"
          priority
        />
        <Container className="relative z-10">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Get in touch for a free quote or to learn more about our services
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our services or need a quote? We&apos;re
                  here to help! Reach out to us using any of the methods below,
                  and we&apos;ll respond as quickly as possible.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mon-Sat: 8:00 AM - 6:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-foreground hover:text-primary transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      Office Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-foreground">
                      {BUSINESS_INFO.address.street}
                      <br />
                      {BUSINESS_INFO.address.city}{" "}
                      {BUSINESS_INFO.address.postalCode}
                      <br />
                      New Zealand
                    </address>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Monday - Friday:
                        </span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday:</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday:</span>
                        <span className="font-medium">By appointment</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you
                    shortly
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
              Find Us
            </h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-lg">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.0!2d${BUSINESS_INFO.coordinates.longitude}!3d${BUSINESS_INFO.coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU1JzAwLjAiUyAxNzTCsDUzJzUyLjAiRQ!5e0!3m2!1sen!2snz!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Family Movers Auckland Office Location"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
