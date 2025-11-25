import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import wimbledonImage from "@/assets/wimbledon.jpg";
import nbaImage from "@/assets/nba-finals.jpg";
import olympicsImage from "@/assets/olympics-athens.jpg";

const packages = [
  {
    id: 1,
    title: "Wimbledon",
    price: "£71,990",
    location: "London",
    image: wimbledonImage,
  },
  {
    id: 2,
    title: "NBA Finals",
    price: "$5,550",
    location: "USA",
    image: nbaImage,
  },
  {
    id: 3,
    title: "Olympics Athens 2024",
    price: "€4,200",
    location: "Greece",
    image: olympicsImage,
  },
  {
    id: 4,
    title: "Olympics Athens 2024",
    price: "€6,850",
    location: "Greece (Premium)",
    image: olympicsImage,
  },
];

export const TopPackages = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-2">
              TOP PACKAGES
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose from our exclusive sports travel experiences
            </p>
          </div>
          <a 
            href="#packages" 
            className="hidden md:block text-secondary hover:text-secondary/80 font-semibold transition-colors"
          >
            Browse All Packages →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground mb-4">{pkg.location}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting</p>
                    <p className="text-2xl font-bold text-secondary">{pkg.price}</p>
                  </div>
                  <Button 
                    onClick={scrollToContact}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full"
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
