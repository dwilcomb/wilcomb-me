import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, TrendingUp, Target, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function RapidHirePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "RapidHire: Enterprise Recruiting - Daniel Wilcomb";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border/40 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/#work">
              <span className="inline-flex items-center text-foreground hover:text-accent transition-colors duration-300 text-sm font-normal tracking-wide group cursor-pointer" data-testid="back-to-work">
                <ArrowLeft className="mr-3 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Work
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-accent/10 text-accent font-mono text-xs tracking-widest uppercase">User Research</Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent font-mono text-xs tracking-widest uppercase">Product Strategy</Badge>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-normal text-foreground tracking-tight leading-tight mb-8">
              RapidHire: Transforming Enterprise Recruiting
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              As Principal Product Designer at Kenexa (IBM), I led the complete reimagining of our recruiting platform for hourly workers, transforming a complex enterprise tool into an intuitive, purpose-built solution.
            </p>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <TrendingUp className="h-8 w-8 text-accent mx-auto mb-4" />
                <div className="text-3xl font-serif font-normal text-foreground mb-2">40%</div>
                <p className="text-muted-foreground font-light">Reduction in usability-related support requests</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="h-8 w-8 text-accent mx-auto mb-4" />
                <div className="text-3xl font-serif font-normal text-foreground mb-2">16,000+</div>
                <p className="text-muted-foreground font-light">Retail locations deployed nationwide</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-8 w-8 text-accent mx-auto mb-4" />
                <div className="text-3xl font-serif font-normal text-foreground mb-2">$1.4B</div>
                <p className="text-muted-foreground font-light">Market segment addressed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Executive Summary */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Executive Summary</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                This initiative generated measurable business impact across a $1.4-1.7 billion market segment while establishing new organizational practices in user research and cross-functional collaboration. The project drove cultural transformation toward user-centered design practices throughout the organization.
              </p>
            </div>

            {/* The Challenge */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">The Challenge</h2>
              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Understanding the Problem Space</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Kenexa's recruiting platform served dual markets with fundamentally different needs. While the system excelled for corporate recruiting, it created significant friction for hourly hiring managers at retail locations, restaurants, and hospitality venues. These users—managing hiring for companies like Target, Home Depot, Darden Foods, and Domino's Pizza—faced an interface designed for HR professionals, not operational managers.
              </p>
              
              <h4 className="font-serif text-lg font-normal text-foreground mb-4">Core Issues Identified:</h4>
              <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6 space-y-2">
                <li>Over-engineered workflows requiring extensive setup for simple hiring tasks</li>
                <li>Information architecture misaligned with hourly hiring mental models</li>
                <li>Compliance and approval processes irrelevant to location-level hiring</li>
                <li>10% higher support costs per revenue dollar for hourly hiring customers</li>
              </ul>
            </div>

            {/* Research Strategy */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Research Strategy</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Recognizing the limitations of third-hand feedback, I designed an unconventional but effective research approach. Rather than waiting for formal research budget approval, I initiated guerrilla research sessions at client locations—visiting Darden properties (Capital Grille, Olive Garden) and Home Depot stores to conduct contextual interviews with actual users.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                This approach yielded rich, unfiltered insights about real-world pain points and mental models, while demonstrating genuine commitment to understanding user needs.
              </p>
            </div>

            {/* Design Process */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Design Process & Methodology</h2>
              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Discovery & Synthesis</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Working with a cross-functional team, I facilitated intensive synthesis sessions using our "fishbowl" conference room setup—one wall displaying current platform interfaces, the other serving as our ideation whiteboard. This transparent process attracted organic participation from across the organization, including developers, QA leads, and system architects.
              </p>

              <h4 className="font-serif text-lg font-normal text-foreground mb-4">Key Design Insights:</h4>
              <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6 space-y-2">
                <li>Custom dashboards wouldn't address core complexity issues</li>
                <li>Disabling modules broke critical business rule dependencies</li>
                <li>The solution required architectural thinking, not just interface optimization</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-sm mb-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg font-normal text-foreground mb-2">The Breakthrough Question</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      The pivotal moment came from a QA Lead's "crazy question": "Does it really have to be in Brassring?" This reframed our approach from modification to abstraction—maintaining backend functionality while creating a purpose-built interface layer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Architecture */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Solution Architecture</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                I proposed RapidHire: a companion interface leveraging existing platform functionality through a custom abstraction layer. This approach delivered:
              </p>
              <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6 space-y-2">
                <li><strong className="text-foreground">User Experience:</strong> Workflows tailored specifically to hourly hiring managers</li>
                <li><strong className="text-foreground">Technical Efficiency:</strong> Minimal backend changes, leveraging existing business rules</li>
                <li><strong className="text-foreground">Business Value:</strong> Addressed underserved market without cannibalizing core product</li>
              </ul>
            </div>

            {/* Leadership & Collaboration */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Leadership & Collaboration</h2>
              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Building Cross-Functional Alignment</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                I secured executive buy-in by presenting comprehensive user research alongside quantified business impact projections. The "don't bring problems, bring solutions" culture required not just identifying issues, but proposing viable paths forward with clear ROI.
              </p>

              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Fostering Innovation Culture</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Moving our working sessions to high-visibility common areas created an "open innovation" environment where anyone could contribute. This approach:
              </p>
              <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6 space-y-2">
                <li>Accelerated iteration cycles (Monday ideas became Wednesday prototypes)</li>
                <li>Democratized the design process across organizational levels</li>
                <li>Built organizational investment in user-centered thinking</li>
              </ul>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Business Impact & Outcomes</h2>
              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Quantified Results</h3>
              <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6 space-y-2">
                <li><strong className="text-foreground">Market Impact:</strong> Addressed 60-70% of ATS revenue ($1.4-1.7B market segment)</li>
                <li><strong className="text-foreground">Operational Efficiency:</strong> 40% reduction in usability-related support requests</li>
                <li><strong className="text-foreground">Scale:</strong> Successfully deployed across 16,000+ retail locations</li>
                <li><strong className="text-foreground">Customer Satisfaction:</strong> Account managers reported client enthusiasm and expanded engagement</li>
              </ul>

              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Organizational Transformation</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Beyond product metrics, RapidHire catalyzed cultural change toward user-centered design practices:
              </p>
              <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6 space-y-2">
                <li>Established guerrilla research as acceptable methodology</li>
                <li>Normalized cross-functional collaboration in design processes</li>
                <li>Created expectation for rapid iteration and user validation</li>
                <li>Introduced concept of "Interface Inversion"—tailoring experiences to specific user roles</li>
              </ul>
            </div>

            {/* Key Learnings */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6">Key Learnings & Applications</h2>
              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Design Leadership Lessons</h3>
              <ul className="list-disc list-inside text-muted-foreground font-light leading-relaxed mb-6 space-y-2">
                <li><strong className="text-foreground">Research Innovation:</strong> When formal research processes create barriers, creative approaches can deliver superior insights while building stakeholder investment</li>
                <li><strong className="text-foreground">Collaborative Design:</strong> Transparent, inclusive design processes accelerate both solution quality and organizational buy-in</li>
                <li><strong className="text-foreground">Technical Partnership:</strong> Deep collaboration with engineering teams enables solutions that pure design thinking cannot achieve alone</li>
                <li><strong className="text-foreground">Business Case Development:</strong> User experience improvements must be translated into business metrics that leadership can act upon</li>
              </ul>

              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Scalable Methodologies</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                The RapidHire approach established replicable patterns for addressing complex enterprise UX challenges through abstraction layers, user-centered research methods, and cross-functional collaboration frameworks that continued to influence product development across Kenexa's portfolio.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-normal text-foreground mb-6">
            Interested in Learning More?
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            I'd be happy to discuss the strategic methodologies and design approaches that made RapidHire successful.
          </p>
          <Link href="/#contact">
            <span className="inline-flex items-center bg-accent text-accent-foreground px-8 py-3 rounded-sm hover:bg-accent/90 transition-colors duration-300 cursor-pointer" data-testid="contact-cta">
              Get in Touch
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}