import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BUSINESS_INFO } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for Family Movers Auckland moving services. Read our policies on bookings, deposits, liability, cancellations, and more.",
  openGraph: {
    title: "Terms and Conditions | Family Movers Auckland",
    description:
      "Read our terms and conditions for moving services including booking policies, liability, and cancellations.",
  },
};

const terms = [
  {
    id: 1,
    title: "Booking & Deposits",
    items: [
      "A booking is confirmed only once the required deposit (minimum one hour of service) has been received.",
      "Deposits are non-refundable if cancelled within 48 hours of the scheduled move.",
      "Date or time changes are subject to availability.",
    ],
  },
  {
    id: 2,
    title: "Charges & Payment",
    items: [
      "All charges are calculated on an hourly basis, unless a fixed price has been agreed in writing.",
      "Time starts from arrival at the pickup location and ends once unloading is completed.",
      "A minimum charge may apply depending on the service type.",
      "Final payment is due on the day of the move, immediately upon completion.",
    ],
  },
  {
    id: 3,
    title: "Access, Parking & Delays",
    items: [
      "The client must ensure clear and legal access for our vehicles at all locations.",
      "Any delays caused by parking issues, restricted access, stairs, lifts, or waiting time will be charged as part of the hourly rate.",
      "If elevators are required or booked, it is the client's responsibility to ensure they are available at the scheduled time.",
    ],
  },
  {
    id: 4,
    title: "Goods Preparation",
    items: [
      "All items must be packed, sealed, and ready prior to our arrival unless packing services were booked.",
      "We are not responsible for damage to items packed by the client unless caused by our negligence.",
      "Appliances must be disconnected, drained, and prepared before the move.",
    ],
  },
  {
    id: 5,
    title: "Items Not Accepted",
    items: [
      "We do not transport hazardous, flammable, or explosive materials.",
      "We do not transport perishable food items.",
      "We do not transport cash, jewellery, valuables, or important documents. These items must be transported by the client.",
    ],
  },
  {
    id: 6,
    title: "Damage & Liability",
    items: [
      "We take reasonable care; however, minor scuffs or marks can occur during moving, especially in tight access or stair-access properties.",
      "Our Public Liability Insurance covers damage to property caused by our negligence.",
      "Contents insurance is the client's responsibility unless otherwise agreed in writing.",
      "Any concerns or claims should be reported within 24 hours of the move, with supporting photos where possible.",
    ],
  },
  {
    id: 7,
    title: "Furniture & Fragile Items",
    items: [
      "We are not responsible for pre-existing damage.",
      "Flat-pack or self-assembled furniture is moved at the client's risk.",
      "Glass, stone, marble, and fragile items are moved with care but are carried at the owner's risk unless professionally crated or otherwise agreed in writing.",
    ],
  },
  {
    id: 8,
    title: "Stairs, Heavy & Oversized Items",
    items: [
      "Additional charges may apply for items that require extra labour, special handling, or exceed safe lifting limits.",
      "The client must disclose heavy or unusual items (e.g., pianos, safes, large stone tables) in advance.",
    ],
  },
  {
    id: 9,
    title: "Cancellations",
    items: [
      "Cancellations within 48 hours of the booking may result in forfeiture of the deposit.",
      "Same-day cancellations may incur the applicable minimum charge.",
    ],
  },
  {
    id: 10,
    title: "Weather & Unforeseen Events",
    items: [
      "We are not liable for delays or cancellations caused by weather, accidents, breakdowns, or events beyond our control.",
      "In such cases, we will make reasonable efforts to reschedule.",
    ],
  },
  {
    id: 11,
    title: "Customer Responsibilities",
    items: [
      "The client warrants that they have authority to move the goods.",
      "Children and pets must be kept clear of working areas for safety.",
      "Accurate information must be provided at the time of booking.",
    ],
  },
  {
    id: 12,
    title: "Governing Law",
    items: [
      "These Terms & Conditions are governed by the laws of New Zealand.",
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-primary py-16 md:py-24">
        <Container>
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Please read these terms carefully before using our services
            </p>
          </div>
        </Container>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms & Conditions apply to all services provided by{" "}
                  <strong>Family Movers Pvt Ltd</strong> (&quot;we&quot;,
                  &quot;us&quot;, &quot;our&quot;) to the customer
                  (&quot;you&quot;, &quot;the client&quot;). By accepting a
                  quote, paying a deposit, or proceeding with a booking, you
                  agree to the terms outlined below.
                </p>
              </CardContent>
            </Card>

            {/* Terms Sections */}
            <div className="space-y-8">
              {terms.map((section) => (
                <div key={section.id} className="scroll-mt-24" id={`section-${section.id}`}>
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {section.id}
                    </span>
                    {section.title}
                  </h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {section.items.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <Separator className="my-12" />

            {/* Company Details */}
            <div id="section-13">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  13
                </span>
                Company Details
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-semibold text-foreground">
                      Family Movers Pvt Ltd
                    </p>
                    <p>
                      <strong>Phone:</strong> 09 971 1313 |{" "}
                      {BUSINESS_INFO.phoneDisplay}
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-primary hover:underline"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href={`https://${BUSINESS_INFO.domain}`}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {BUSINESS_INFO.domain}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Last Updated */}
            <p className="text-sm text-muted-foreground text-center mt-12">
              Last updated: January 2026
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
