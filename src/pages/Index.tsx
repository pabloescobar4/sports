import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedEvent } from "@/components/FeaturedEvent";
import { TopPackages } from "@/components/TopPackages";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SampleItinerary } from "@/components/SampleItinerary";
import { AddOns } from "@/components/AddOns";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedEvent />
      <TopPackages />
      <WhyChooseUs />
      <SampleItinerary />
      <AddOns />
      <ContactForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
