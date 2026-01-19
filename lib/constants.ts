export const BUSINESS_INFO = {
  name: "Family Movers Auckland",
  domain: "familymovers.co.nz",
  email: "sales@familymovers.co.nz",
  phone: "+64 21 123 4567", // TODO: Extract actual phone from WordPress XML
  location: "Auckland, New Zealand",
  tagline: "Your Trusted Local Movers In Auckland",
  logoPlaceholder: "FM", // Temporary until actual logo is added
  address: {
    street: "", // TODO: Extract from WordPress XML
    city: "Auckland",
    country: "NZ",
  },
  // Default coordinates for Auckland CBD (until actual business location is confirmed)
  coordinates: {
    latitude: -36.8485,
    longitude: 174.7633,
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact" },
] as const;
