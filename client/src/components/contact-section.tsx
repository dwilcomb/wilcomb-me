import { Mail, Linkedin, Download } from "lucide-react";
import resumePdf from "@assets/Wilcomb Resume 2025_1759595572077.pdf";
import profilePhotoImg from "@assets/images/profile-photo.jpg";

export default function ContactSection() {

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-accent font-mono text-xs tracking-widest uppercase mb-6 block opacity-75 font-medium">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-8 tracking-tight leading-tight">
            Let's Work <em className="font-light italic">Together</em>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Interested in collaborating or learning more about my approach to product design? I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={profilePhotoImg} 
                  alt="Daniel Wilcomb, Product Design Leader" 
                  className="w-20 h-20 rounded-sm shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  <a 
                    href="mailto:daniel@wilcomb.me" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    data-testid="contact-email"
                  >
                    daniel@wilcomb.me
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-4 w-4 text-accent" />
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/dwilcomb" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    data-testid="link-linkedin"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Download className="h-4 w-4 text-accent" />
                  </div>
                  <a 
                    href={resumePdf} 
                    download="Daniel_Wilcomb_Resume_2025.pdf"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    data-testid="link-resume"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond to messages within 24 hours.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                Open to full-time positions, consulting opportunities, speaking engagements, and strategic partnerships. Let's discuss how we can work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
