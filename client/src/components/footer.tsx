import { Linkedin, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-serif text-xl font-medium text-foreground mb-2">Will Comb</div>
            <p className="text-sm text-muted-foreground">Product Design Leader</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors"
              data-testid="footer-linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-accent transition-colors"
              data-testid="footer-dribbble"
              aria-label="Dribbble Profile"
            >
              <Dribbble className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Will Comb. All rights reserved. • Built with care and attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
}
