import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the sports travel packages?",
    answer: "Our packages typically include event tickets, accommodation, transfers, and hospitality services. Specific inclusions vary by package - contact us for detailed information about your chosen event.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 3-6 months in advance for major sporting events. Popular events like Wimbledon and F1 races can sell out quickly, so early booking ensures the best availability and pricing.",
  },
  {
    question: "Can I customize my package?",
    answer: "Absolutely! We offer fully customizable packages. You can add extra nights, upgrade accommodations, include VIP experiences, or add city tours. Our team will work with you to create your perfect sports travel experience.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellation policies vary by event and package. Generally, cancellations made 90+ days before the event receive a full refund minus a small admin fee. Please review the specific terms for your chosen package.",
  },
  {
    question: "Do you offer group bookings?",
    answer: "Yes! We specialize in group travel for sports events. Whether it's a corporate outing or friends traveling together, we offer special rates and dedicated service for groups of 10 or more.",
  },
  {
    question: "Are the tickets guaranteed?",
    answer: "Yes, all our packages include guaranteed event tickets. As official partners with major sporting organizations, we ensure authentic tickets and access to premium seating areas.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            FAQ
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our sports travel packages.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary transition-colors">
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
};
