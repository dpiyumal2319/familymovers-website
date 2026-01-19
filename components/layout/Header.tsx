"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { NAV_LINKS, BUSINESS_INFO } from "@/lib/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              {/* TODO: Replace with actual logo when available */}
              <div className="w-full h-full bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl">
                {BUSINESS_INFO.logoPlaceholder}
              </div>
            </div>
            <span className="font-semibold text-base md:text-lg hidden sm:inline-block">
              {BUSINESS_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/request-a-quotation">
              <Button size="default" className="ml-2">
                Get Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
