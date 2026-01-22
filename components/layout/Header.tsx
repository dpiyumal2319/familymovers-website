"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { NAV_LINKS, BUSINESS_INFO } from "@/lib/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Phone, Facebook, Instagram, Twitter } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 md:h-24 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/logo.png"
                alt={`${BUSINESS_INFO.name} Logo`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 64px, 80px"
              />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">
                Family Movers
              </span>
              <span className="text-xs text-muted-foreground">
                Auckland
              </span>
            </div>
          </Link>

          {/* Desktop Navigation & Contact */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
            {/* Navigation Links */}
            <nav
              className="flex items-center gap-6"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="flex items-center gap-4 border-l pl-6">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 border-l pl-4">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>

            {/* CTA Button */}
            <Link href="/request-a-quotation">
              <Button size="lg" className="ml-2">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile: Phone + Menu */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
