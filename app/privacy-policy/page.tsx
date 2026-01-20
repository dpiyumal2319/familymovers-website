import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Family Movers Auckland privacy policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Family Movers Auckland",
    description: "Our commitment to protecting your privacy and personal data.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-primary py-16 md:py-24">
        <Container>
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Your privacy is important to us
            </p>
          </div>
        </Container>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <p className="text-muted-foreground text-sm mb-8">
              Last updated: {new Date().toLocaleDateString("en-NZ")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Family Movers Auckland (&quot;we&quot;, &quot;our&quot;, or
                &quot;us&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name and contact information (email, phone number)</li>
                <li>
                  Moving details (addresses, dates, property information)
                </li>
                <li>Service preferences and special requirements</li>
                <li>
                  Payment information (processed securely through third-party
                  payment processors)
                </li>
                <li>
                  Communication records (emails, phone calls, messages)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our moving services</li>
                <li>Process your quotes and bookings</li>
                <li>Communicate with you about our services</li>
                <li>Send you updates, reminders, and customer surveys</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
                <li>
                  Protect against fraud and ensure the security of our services
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Service providers who assist us in operating our business
                  (e.g., payment processors, communication tools)
                </li>
                <li>
                  Professional advisors (lawyers, accountants) when necessary
                </li>
                <li>
                  Law enforcement or regulatory authorities when required by law
                </li>
                <li>
                  Third parties with your consent or at your direction
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under New Zealand&apos;s Privacy Act 2020, you have the right
                to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing</li>
                <li>Withdraw consent where we rely on it</li>
                <li>Lodge a complaint with the Privacy Commissioner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to improve your
                experience on our website, analyze usage patterns, and deliver
                personalized content. You can control cookies through your
                browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this policy, comply with legal
                obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-foreground">
                  <strong>Family Movers Auckland</strong>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:sales@familymovers.co.nz"
                    className="text-primary hover:underline"
                  >
                    sales@familymovers.co.nz
                  </a>
                  <br />
                  Phone:{" "}
                  <a
                    href="tel:+64220949988"
                    className="text-primary hover:underline"
                  >
                    +64 22 094 9988
                  </a>
                  <br />
                  Address: 31D Stanniland Street, Sunnyhills, Auckland 2010, New
                  Zealand
                </p>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
