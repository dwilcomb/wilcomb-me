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
          <div className="mb-8 animate-fade-in">
            <span className="text-accent font-mono text-xs tracking-widest uppercase font-medium opacity-75">
              Product Design Leadership
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[0.9] mb-12 text-foreground animate-fade-in tracking-tight">
            Strategy, vision, 
            <br />
            <em className="font-light italic">collaboration</em> & craft
          </h1>
          
          <div className="max-w-xl mb-16 animate-fade-in">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              A player-coach in product innovation—equal parts strategic direction and hands-on teamwork.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
            <Button 
              onClick={() => scrollToSection('work')}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-300 font-normal text-sm tracking-wide"
              data-testid="button-view-work"
            >
              Selected Work
              <ArrowRight className="ml-3 h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 text-muted-foreground hover:text-foreground transition-all duration-300 font-normal text-sm tracking-wide"
              data-testid="button-get-in-touch"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
