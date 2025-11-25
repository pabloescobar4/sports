import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-foreground">SPORTS</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("packages")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("itinerary")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Itinerary
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6"
            >
              Plan My Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection("packages")}
              className="block w-full text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("itinerary")}
              className="block w-full text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
            >
              Itinerary
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              Plan My Trip
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
