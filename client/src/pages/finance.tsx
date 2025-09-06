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
                src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/05501b24-9f35-43a7-b63f-eb1459fc717d_rw_3840.png?h=f58933ce4a5ebc1cc40e40045e5b7a65" 
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
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/1ce74238-5275-4faa-ad34-7e8c35e8ebb8_rw_1200.png?h=228b86d177f2361b20ff500d27995922" 
                  alt="Legacy OneStream Interface" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/6f00a48d-c0cd-4f40-9ad9-1f87066bad22_rw_1200.png?h=8307bc1a23ddf0e5e7a70b89c9fb014d" 
                  alt="Complex Legacy Interface" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
              </div>
            </div>

            <div className="mb-16">
              <img 
                src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/644dfc75-7ad7-4228-bff8-17ad96501354_rw_1920.jpeg?h=3ada9c0ead6e6bf7f22cc68e9bea0348" 
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
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/7318207c-eded-4317-add1-99f223d30261_rw_1200.jpg?h=56b2306455933369e465e4f25a337054" 
                  alt="UX Maturity" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">UX Maturity</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/709bd56a-b6dd-44a9-b3ce-ce2414e88bba_rw_1200.jpg?h=557c643a2432c028cffa5cc8d2eee5ab" 
                  alt="Atomic Design" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Atomic Design</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/d2b3555a-937c-4985-b8e2-d65b9293b644_rw_1200.png?h=9ee8372d39274b4d407a8ee6ab5466f8" 
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
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/379fc0dc-d9b7-4ac6-a072-8eb0ccc7c92e_rw_1920.png?h=827878ccee4570ea149b783f47a7a5a3" 
                  alt="New Business User Interface" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/6cdc8556-4b69-477c-bb8a-c1ccb0ebaaf3_rw_1920.png?h=16c44b6e15076bd3fca8a472571221db" 
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
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/922ff75f-e304-44ec-af3b-241a08f927c8_rw_1200.png?h=09f5ed0d8a1ba805bd1851ff452903f4" 
                  alt="Icon Library" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Icon Library</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/de7c72d5-d328-4aa5-8140-6bb5d8a5f299_rw_1200.png?h=b2608960ee8c4fbfcc0d382a9da7f8c6" 
                  alt="Common Elements" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Common Elements</p>
              </div>
            </div>

            <div className="mb-16">
              <img 
                src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/0af8a9c4-9077-42ae-a137-59ada7699831_rw_3840.png?h=441b1fb28373e7392e1d531d859078fc" 
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