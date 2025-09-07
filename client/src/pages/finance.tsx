import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Finance() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Financial Technology - Daniel Wilcomb";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Enterprise Financial Planning & Analysis platform design. Creating user-friendly financial interfaces and comprehensive design systems for complex data.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="font-serif text-lg font-normal text-foreground tracking-tight hover:text-accent transition-colors duration-300">
              Daniel Wilcomb
            </Link>
            
            <Button
              variant="ghost"
              onClick={() => setLocation('/')}
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 font-normal text-sm tracking-wide"
            >
              <ArrowLeft className="mr-2 h-3 w-3" />
              Back to Portfolio
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-accent font-mono text-xs tracking-widest uppercase font-medium opacity-75">
              Case Study
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[0.9] mb-8 text-foreground tracking-tight">
            Financial <br />
            <em className="font-light italic">Technology</em>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            Creating user-friendly financial interfaces that make complex data accessible and actionable for enterprise financial planning and analysis.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-16">
              <img 
                src="/attached_assets/images/finance-hero.png" 
                alt="Enterprise Financial Planning & Analysis Platform" 
                className="w-full rounded-sm shadow-lg"
              />
            </div>

            <div className="bg-card rounded-sm p-8 border border-border mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6 tracking-tight">
                Enterprise Financial <br />
                <em className="font-light italic">Planning & Analysis</em>
              </h2>
              <p className="text-sm text-accent font-mono tracking-wide uppercase mb-4">
                Role: Product Design Director
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                OneStream's product ecosystem is founded on the concept of Extensible Dimensionality - the ability to automatically consolidate and align financial and operational information from any number of systems of record and use a single version of the truth for everything from forecasting and modeling to strategic planning, operational accounting, multi-region financial reporting, and more.
              </p>
            </div>

            <div className="space-y-8 mb-16">
              <h3 className="font-serif text-2xl font-normal text-foreground tracking-tight">
                The <em className="font-light italic">Challenge</em>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                The legacy OneStream system is a Windows-only thick client assembled with stock .Net components out of the necessity of having some kind of interface for the technical innovations developed by the engineers that founded the company. As a result, the application is arranged and presented in a way that makes sense to the engineers who built it, but customers require extensive training.
              </p>

              <blockquote className="border-l-4 border-accent/30 pl-6 py-4 bg-muted/30 rounded-sm">
                <p className="text-lg italic text-foreground font-light">
                  "OneStream is for coders. We are for closers." — Competitor criticism
                </p>
              </blockquote>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <img 
                  src="/attached_assets/images/legacy-interface-1.png" 
                  alt="Legacy OneStream Interface" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
              </div>
              <div>
                <img 
                  src="/attached_assets/images/legacy-interface-2.png" 
                  alt="Complex Legacy Interface" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
              </div>
            </div>

            <div className="mb-16">
              <img 
                src="/attached_assets/images/forge-studio.jpeg" 
                alt="The Forge at OneStream" 
                className="w-full rounded-sm shadow-lg mb-4"
              />
              <p className="text-sm text-muted-foreground font-mono tracking-wide">The Forge at OneStream</p>
            </div>

            <div className="space-y-8 mb-16">
              <h3 className="font-serif text-2xl font-normal text-foreground tracking-tight">
                The Forge: UX <em className="font-light italic">Revolution</em>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                I created The Forge - OneStream's User Experience studio - not only to correct the enormous UX debt behind the product, but to act as a new center of gravity in product strategy and execution, effectively reconfiguring OneStream's product development DNA from its engineering-driven ethos to a true user-first set of principles.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                A comprehensive and continuous research and testing framework. Full agile process and scrum team integration. An atomic design system managed as a product. The Forge rapidly became a rallying point for consistency, collaboration, and process maturity, all leading to superior product and user outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div>
                <img 
                  src="/attached_assets/images/ux-maturity.jpg" 
                  alt="UX Maturity" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">UX Maturity</p>
              </div>
              <div>
                <img 
                  src="/attached_assets/images/atomic-design.jpg" 
                  alt="Atomic Design" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Atomic Design</p>
              </div>
              <div>
                <img 
                  src="/attached_assets/images/quicksilver-system.png" 
                  alt="QuickSilver Design System Editions" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">QuickSilver Design System</p>
              </div>
            </div>

            <div className="bg-card rounded-sm p-8 border border-border mb-16">
              <h3 className="font-serif text-xl font-normal text-foreground mb-4 tracking-tight">Early Insight: Two User Communities</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Technical Data Administrators</h4>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    Expert consultants and customer personnel who managed data flow, built complex business rules, and created specialized views for business users.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Business Users</h4>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    Beneficiaries using consolidated data for operations, reporting, planning, and analysis—freed from system mechanics to focus on their core responsibilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 mb-16">
              <h3 className="font-serif text-2xl font-normal text-foreground tracking-tight">
                A New <em className="font-light italic">Vision</em>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                It was clear that business users needed an environment tailored to their needs; shoe-horning their mental model and operational workflows into an engineering-centric application simply wouldn't work. A large, browser-based strategic initiative took shape.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Business user functionality was mapped out in detail, and matrixed with user archetypes to identify a set of high impact user groups that largely overlapped in their functional needs. This "sweet spot" formed the first target in a multigenerational roadmap.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <img 
                  src="/attached_assets/images/new-interface-1.png" 
                  alt="New Business User Interface" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
              </div>
              <div>
                <img 
                  src="/attached_assets/images/new-interface-2.png" 
                  alt="Modern Financial Interface" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
              </div>
            </div>

            <div className="space-y-8 mb-16">
              <h3 className="font-serif text-2xl font-normal text-foreground tracking-tight">
                QuickSilver Design <em className="font-light italic">System</em>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                As important as it was to have a mature design system in place to guide OneStream's own product design efforts, with the App Store it became exponentially more critical to allow third parties to create coherent and consistent experiences that looked and acted like they belonged together.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                The design system served a purpose much like the Integrated Truss Structure of the International Space Station, providing detailed guidelines for how new modules should be constructed to interact effectively with the structure as-a-whole.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <img 
                  src="/attached_assets/images/icon-library.png" 
                  alt="Icon Library" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Icon Library</p>
              </div>
              <div>
                <img 
                  src="/attached_assets/images/common-elements.png" 
                  alt="Common Elements" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Common Elements</p>
              </div>
            </div>

            <div className="mb-16">
              <img 
                src="/attached_assets/images/bank-america.png" 
                alt="Client Connections Integrated Desktop" 
                className="w-full rounded-sm shadow-lg mb-4"
              />
              <p className="text-sm text-muted-foreground font-mono tracking-wide">Client Connections Integrated Desktop</p>
            </div>

            <div className="bg-card rounded-sm p-8 border border-border mb-16">
              <h3 className="font-serif text-2xl font-normal text-foreground mb-6 tracking-tight">
                Bank of America: Client Connections <br />
                <em className="font-light italic">Integrated Desktop</em>
              </h3>
              <p className="text-sm text-accent font-mono tracking-wide uppercase mb-4">
                Role: Principal User Experience Architect
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                The Client Connections Integrated Desktop is a core component of Bank of America customer service. Prior to CCID, representatives in each of the business lines could only see their own accounts with the customer with no visibility into the customer's full relationship with the Bank. CCID was designed to improve customer satisfaction and increase customer assets by connecting disparate teams, CRM systems, accounting systems, and data sources.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation Footer */}
      <section className="py-16 bg-card border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/innovation">
              <Button variant="ghost" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 font-normal text-sm tracking-wide">
                <ArrowLeft className="mr-2 h-3 w-3" />
                Innovation & Design Thinking
              </Button>
            </Link>
            
            <Link href="/healthcare">
              <Button variant="ghost" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 font-normal text-sm tracking-wide">
                Healthcare Solutions
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}