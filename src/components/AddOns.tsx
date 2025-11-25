import hospitalityImage from "@/assets/hospitality.jpg";
import meetGreetImage from "@/assets/meet-greet.jpg";
import transportImage from "@/assets/exclusive-transport.jpg";

const addOns = [
  { id: 1, image: hospitalityImage },
  { id: 2, image: meetGreetImage },
  { id: 3, image: transportImage },
  { id: 4, image: hospitalityImage },
  { id: 5, image: meetGreetImage },
  { id: 6, image: transportImage },
];

export const AddOns = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 text-center">
          ADD-ONS & VIP EXPERIENCES
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {addOns.map((addon, index) => (
            <div 
              key={addon.id}
              className="relative h-48 md:h-64 overflow-hidden rounded-lg group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${addon.image})` }}
              >
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enhance your sports travel experience with exclusive VIP add-ons. From behind-the-scenes
            access to premium hospitality, we offer unforgettable experiences to complement your journey.
          </p>
        </div>
      </div>
    </section>
  );
};
