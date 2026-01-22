
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
    facebook: "https://www.facebook.com/profile.php?id=61561245176536",
    instagram: "https://www.instagram.com/familymovers.co.nz",
    email: "mailto:sales@familymovers.co.nz",
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

// ============================================
// PACKAGES & PRICING DATA
// ============================================

export interface HourlyPackage {
  id: string;
  name: string;
  pricePerHour: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface RentalOption {
  id: string;
  name: string;
  truckSize: string;
  pricePerHour: number;
  rucPerKm: number;
  bond: number;
  specs: string[];
  bestFor: string;
}

export interface FixedQuoteFeature {
  id: string;
  title: string;
  description: string;
}

export interface CommercialFeature {
  id: string;
  title: string;
  description: string;
}

export const HOURLY_PACKAGES: HourlyPackage[] = [
  {
    id: "truck-1-mover",
    name: "Truck + 1 Mover",
    pricePerHour: 85,
    description: "Perfect for small moves or single items",
    features: [
      "Small or medium truck with tail lift",
      "1 professional mover",
      "Blankets, trolleys & tools included",
      "No call-out or stair fees",
    ],
  },
  {
    id: "truck-2-movers",
    name: "Truck + 2 Movers",
    pricePerHour: 110,
    description: "Our most popular option for residential moves",
    features: [
      "Small or medium truck with tail lift",
      "2 professional movers",
      "Blankets, trolleys & tools included",
      "No call-out or stair fees",
    ],
    isPopular: true,
  },
  {
    id: "combo-package",
    name: "Combo Package",
    pricePerHour: 150,
    description: "For larger moves requiring more capacity",
    features: [
      "Two trucks (small + medium)",
      "3 professional movers",
      "Full equipment included",
      "No call-out or stair fees",
    ],
  },
];

export const RENTAL_OPTIONS: RentalOption[] = [
  {
    id: "small-truck",
    name: "Small Truck Rental",
    truckSize: "Small",
    pricePerHour: 20,
    rucPerKm: 0.25,
    bond: 300,
    specs: [
      "Class 01 license required",
      "Automatic transmission",
      "Box body (no tail lift)",
      "Trolleys, blankets & tie-downs included",
    ],
    bestFor: "Small apartments or 1-bedroom houses",
  },
  {
    id: "large-truck",
    name: "Large Truck Rental",
    truckSize: "Large",
    pricePerHour: 30,
    rucPerKm: 0.3,
    bond: 500,
    specs: [
      "Equipped with tail lift",
      "Suitable for heavy items",
      "Trolleys, blankets & tie-downs included",
      "Ideal for larger volumes",
    ],
    bestFor: "Larger relocations with heavy furniture",
  },
];

export const FIXED_QUOTE_FEATURES: FixedQuoteFeature[] = [
  {
    id: "evaluation",
    title: "Free Home Evaluation",
    description:
      "A representative visits your home to evaluate furniture, required truck size, and number of movers needed.",
  },
  {
    id: "turnaround",
    title: "24-Hour Quote Turnaround",
    description:
      "Receive your fixed price quote within 24 hours of the evaluation visit.",
  },
  {
    id: "packing",
    title: "Packing Options Available",
    description:
      "Services available with or without packing and unpacking options.",
  },
  {
    id: "coverage",
    title: "Intercity & Nationwide",
    description:
      "We cover both intercity and nationwide moves across New Zealand.",
  },
  {
    id: "fixed-pricing",
    title: "No Surprises",
    description:
      "Pay only the agreed price with no extra charges or hidden fees.",
  },
  {
    id: "winz",
    title: "WINZ Quotes Available",
    description:
      "Financial assistance quotes available for those who qualify.",
  },
];

export const COMMERCIAL_FEATURES: CommercialFeature[] = [
  {
    id: "vehicle",
    title: "Tail Lift Curtain Sider",
    description:
      "Large truck with double-side access for easy loading and unloading.",
  },
  {
    id: "pallets",
    title: "Pallet Pickups",
    description: "Suitable for pallet pickups and regular business deliveries.",
  },
  {
    id: "dangerous-goods",
    title: "Dangerous Goods Endorsed",
    description:
      "Holds a Dangerous Goods delivery endorsement for specialized cargo.",
  },
  {
    id: "alternative",
    title: "Courier Alternative",
    description:
      "Cost-effective alternative to courier companies for bulk logistics.",
  },
];

export const KEY_TERMS = {
  minimumCharge: "Minimum 2-hour charge applies to all bookings",
  noHiddenFees: "Transparent billing with no hidden charges",
  equipmentIncluded: "Trucks come equipped with blankets, trolleys, and tools",
  chargingStart: "Charging starts only when the truck arrives",
  insurance: "$1M Public Liability Insurance",
  rating: "5-star Google ratings with over 145 reviews",
  noCallOutFees: "No call-out or stair fees (limited time offer)",
} as const;
