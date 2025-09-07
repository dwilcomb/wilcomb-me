import { Linkedin, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-serif text-lg font-normal text-foreground mb-2 tracking-tight">Daniel Wilcomb</div>
            <p className="text-muted-foreground font-light">Product Design Leader</p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a 
              href="https://www.linkedin.com/in/dwilcomb" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 opacity-75 hover:opacity-100"
              data-testid="footer-linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors duration-300 opacity-75 hover:opacity-100"
              data-testid="footer-dribbble"
              aria-label="Dribbble Profile"
            >
              <Dribbble className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground font-light opacity-75">
            © 2025 Daniel Wilcomb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
