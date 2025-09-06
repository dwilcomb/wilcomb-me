import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          <div className="mb-6 animate-fade-in">
            <span className="text-accent font-mono text-sm tracking-wide uppercase">
              Product Design Leader
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 text-foreground animate-fade-in">
            Building compelling visions through collaboration and craft
          </h1>
          
          <div className="max-w-2xl mb-12 animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I am a player-coach, equally adept at building and championing a product vision, guiding it in execution through team-building and partnership, and contributing to its delivery hands-on.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              onClick={() => scrollToSection('work')}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-view-work"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
