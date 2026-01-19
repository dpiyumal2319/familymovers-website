import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  className?: string;
}

export function FAQSection({ className }: FAQSectionProps) {
  const faqs = [
    {
      question: "How far in advance should I book my move?",
      answer:
        "We recommend booking your move at least 2-3 weeks in advance, especially during peak moving season (summer months). However, we can often accommodate last-minute moves depending on availability.",
    },
    {
      question: "What are your hourly rates?",
      answer:
        "Our rates vary based on the size of your move and the services required. Contact us for a free, no-obligation quote tailored to your specific needs. We guarantee transparent pricing with no hidden fees.",
    },
    {
      question: "Do you provide packing materials?",
      answer:
        "Yes! We offer a full range of packing materials including boxes, bubble wrap, packing paper, and tape. We can also provide complete packing services if you prefer to have our professionals handle it.",
    },
    {
      question: "Are my belongings insured during the move?",
      answer:
        "Yes, all moves are covered by our comprehensive insurance policy. Your belongings are protected from the moment we load them until they're safely delivered to your new location.",
    },
    {
      question: "Do you move on weekends and holidays?",
      answer:
        "Yes, we offer flexible scheduling including weekends and most holidays. We understand that moving needs to fit your schedule, so we work to accommodate your preferred timing.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We service all of Auckland and surrounding areas, including outer Auckland. We also handle long-distance moves across New Zealand. Contact us to confirm we service your specific location.",
    },
    {
      question: "How long will my move take?",
      answer:
        "The duration depends on several factors including the size of your home, amount of belongings, distance, and accessibility. During your quote, we'll provide an estimated timeframe for your specific move.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including cash, bank transfers, and major credit cards. Payment is typically due upon completion of the move, and we'll provide you with a detailed invoice.",
    },
  ];

  return (
    <section
      className={cn("py-16", className)}
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our moving services. Don&apos;t
            see your question? Feel free to contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
