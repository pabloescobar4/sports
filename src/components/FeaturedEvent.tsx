import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import f1Image from "@/assets/f1-japan.jpg";

export const FeaturedEvent = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden max-w-5xl mx-auto border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
          <div className="relative h-[400px] md:h-[500px]">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${f1Image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
              <div className="animate-slide-up">
                <h2 className="text-5xl md:text-7xl font-black text-primary-foreground mb-4">
                  F1 JAPAN
                </h2>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2">
                  Price: About £2,168.09 / $2,838
                </p>
                <p className="text-lg text-primary-foreground/80 mb-6">
                  Meeting at BST. COO geodis
                </p>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Proceed to Purchase
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
