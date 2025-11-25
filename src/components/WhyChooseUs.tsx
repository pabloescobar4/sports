import { Trophy, Users, Award, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "12,000+",
    label: "Happy Travelers",
  },
  {
    icon: Trophy,
    number: "68%",
    label: "Free Transfers",
  },
  {
    icon: Award,
    number: "Official",
    label: "Partners",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Rated Experiences",
  },
];

const steps = [
  {
    number: "1",
    title: "Choose your event",
    description: "Browse our curated selection of premium sports packages",
  },
  {
    number: "2",
    title: "We arrange your travel + tickets",
    description: "Sit back while we handle all the logistics and bookings",
  },
  {
    number: "3",
    title: "Enjoy a seamless sports experience",
    description: "Experience world-class events without any hassle",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="how-it-works" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            WHY CHOOSE US
          </h2>
          <p className="text-center text-primary-foreground/80 text-lg mb-12">
            Trusted by thousands of sports enthusiasts worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2 text-accent">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            HOW IT WORKS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary text-secondary-foreground text-3xl font-black mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/80">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-secondary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
