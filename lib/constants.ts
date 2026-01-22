export const BUSINESS_INFO = {
  name: "Family Movers Auckland",
  domain: "familymovers.co.nz",
  email: "sales@familymovers.co.nz",
  phone: "+64 22 094 9988",
  phoneDisplay: "022 094 9988",
  location: "Auckland, New Zealand",
  tagline: "Your Trusted Local Movers In Auckland",
  logoPlaceholder: "FM", // Temporary until actual logo is added
  social: {
    facebook: "https://facebook.com/familymoversauckland",
    instagram: "https://instagram.com/familymoversauckland",
    twitter: "https://twitter.com/familymovers",
  },
  address: {
    street: "31D Stanniland Street, Sunnyhills",
    city: "Auckland",
    postalCode: "2010",
    country: "NZ",
  },
  // Coordinates for Sunnyhills, Auckland
  coordinates: {
    latitude: -36.9166,
    longitude: 174.8977,
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact" },
] as const;
