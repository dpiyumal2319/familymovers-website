import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{BUSINESS_INFO.name}</h3>
            <p className="text-sm text-muted-foreground">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-sm text-muted-foreground">
              Professional moving services in Auckland, New Zealand. We handle residential, commercial moves, and furniture delivery with care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/request-a-quotation"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                {BUSINESS_INFO.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Business Hours</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">7AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">8AM - 5PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">9AM - 4PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed - Placeholder */}
        <div className="mt-12 rounded-lg overflow-hidden border">
          <div className="w-full h-64 bg-muted-foreground/10 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">
              Google Maps Embed - To be added with actual location
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
