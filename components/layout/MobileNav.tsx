"use client";

import Link from "next/link";
import { Menu, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { NAV_LINKS, BUSINESS_INFO } from "@/lib/constants";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-primary"
          aria-label="Open mobile menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-75 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-a-quotation"
            onClick={() => setOpen(false)}
            className="mt-2"
          >
            <Button className="w-full" size="lg">
              Get Free Quote
            </Button>
          </Link>
        </nav>

        <Separator className="my-6" />

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase">
            Contact Us
          </h3>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="text-xs break-all">{BUSINESS_INFO.email}</span>
          </a>
        </div>

        <Separator className="my-6" />

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
              onClick={() => setOpen(false)}
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={BUSINESS_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
              onClick={() => setOpen(false)}
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={BUSINESS_INFO.social.email}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
              onClick={() => setOpen(false)}
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
