"use client";

import Link from "next/link";
import { Menu, Phone, Mail, Facebook, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, BUSINESS_INFO } from "@/lib/constants";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors lg:hidden"
          aria-label="Open mobile menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[380px] overflow-y-auto p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="px-6 pt-6 pb-4 border-b">
            <SheetTitle className="text-left text-xl">
              {BUSINESS_INFO.name}
            </SheetTitle>
            <p className="text-sm text-muted-foreground text-left">
              {BUSINESS_INFO.tagline}
            </p>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 py-6 flex-1" aria-label="Mobile navigation">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-4 -mx-4 text-base font-medium hover:bg-muted hover:text-primary rounded-md transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/request-a-quotation"
              onClick={() => setOpen(false)}
              className="mt-6"
            >
              <Button className="w-full" size="lg">
                Get Free Quote
              </Button>
            </Link>

            {/* Contact Cards */}
            <div className="mt-8 space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3 p-4 -mx-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Call us</p>
                  <p className="font-medium">{BUSINESS_INFO.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 p-4 -mx-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Email us</p>
                  <p className="font-medium text-sm truncate">{BUSINESS_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-4 -mx-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-medium text-sm">{BUSINESS_INFO.location}</p>
                </div>
              </div>
            </div>
          </nav>

          {/* Footer with Social Links */}
          <div className="px-6 py-6 border-t bg-muted/30">
            <p className="text-xs text-muted-foreground mb-3">Follow Us</p>
            <div className="flex items-center gap-2">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-11 w-11 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                aria-label="Facebook"
                onClick={() => setOpen(false)}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-11 w-11 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                aria-label="Instagram"
                onClick={() => setOpen(false)}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.email}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-11 w-11 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                aria-label="Email"
                onClick={() => setOpen(false)}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
