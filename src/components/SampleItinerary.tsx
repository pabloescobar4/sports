import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import hospitalityImage from "@/assets/hospitality.jpg";
import meetGreetImage from "@/assets/meet-greet.jpg";
import transportImage from "@/assets/exclusive-transport.jpg";
import cityTourImage from "@/assets/city-tour.jpg";

const itineraryItems = [
  {
    id: 1,
    title: "Hospitality Pass",
    location: "Nigeria",
    tag: "Luxury",
    image: hospitalityImage,
  },
  {
    id: 2,
    title: "Meet & Greet",
    location: "Germany",
    tag: "Exclusive",
    image: meetGreetImage,
  },
  {
    id: 3,
    title: "Exclusive Line Treats",
    location: "Netherlands (Arrival)",
    tag: "Premium",
    image: transportImage,
  },
  {
    id: 4,
    title: "City Tour",
    location: "Australia",
    tag: "Explore",
    image: cityTourImage,
  },
];

export const SampleItinerary = () => {
  return (
    <section id="itinerary" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-2">
              SAMPLE ITINERARY
            </h2>
            <p className="text-muted-foreground text-lg">
              Your journey from start to finish
            </p>
          </div>
          <a 
            href="#itinerary" 
            className="hidden md:block text-secondary hover:text-secondary/80 font-semibold transition-colors"
          >
            Explore →
          </a>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-4">
            {itineraryItems.map((item, index) => (
              <Card 
                key={item.id}
                className="flex-shrink-0 w-80 md:w-auto overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-secondary-foreground font-semibold">
                      {item.tag}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
