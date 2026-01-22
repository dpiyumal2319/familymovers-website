import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <Container className="pt-12 md:pt-16 pb-6">
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

        {/* Google Maps */}
        <div className="mt-12 w-full h-[300px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d199.40772458214835!2d174.89286900473869!3d-36.90174372617833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4ba42591fedb%3A0xa0e43e16b89275ad!2s31d%20Stanniland%20Street%2C%20Sunnyhills%2C%20Auckland%202010%2C%20New%20Zealand!5e0!3m2!1sen!2slk!4v1769089781695!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Family Movers Auckland Location"
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
