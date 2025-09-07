import { useState } from "react";
import { Mail, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import resumePdf from "@assets/Wilcomb Resume 2025_1757209813353.pdf";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    submitContactMutation.mutate(formData);
  };

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
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card rounded-xl border border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your name"
                    className="w-full"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your company (optional)"
                    className="w-full"
                    data-testid="input-company"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Tell me about your project or how I can help..."
                    className="w-full resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                  disabled={submitContactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {submitContactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
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
