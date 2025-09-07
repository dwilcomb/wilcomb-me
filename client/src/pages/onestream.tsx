import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import financeHeroImg from "@assets/images/finance-hero.png";
import legacyInterface1Img from "@assets/images/legacy-interface-1.png";
import legacyInterface2Img from "@assets/images/legacy-interface-2.png";
import clumsyPredictiveAnalyticsImg from "@assets/Clumsy predictive analytics_1757269155038.png";
import forgeStudioImg from "@assets/images/forge-studio.jpeg";
import uxMaturityImg from "@assets/images/ux-maturity.jpg";
import atomicDesignImg from "@assets/images/atomic-design.jpg";
import quicksilverSystemImg from "@assets/images/quicksilver-system.png";
import newInterface1Img from "@assets/images/new-interface-1.png";
import newInterface2Img from "@assets/images/new-interface-2.png";
import iconLibraryImg from "@assets/images/icon-library.png";
import commonElementsImg from "@assets/images/common-elements.png";

export default function OneStream() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "OneStream Software - Daniel Wilcomb";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Enterprise Financial Planning & Analysis platform design at OneStream Software. Creating user-friendly financial interfaces and comprehensive design systems.');
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
          
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6 tracking-tight leading-tight">
              OneStream Software
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
              Enterprise Financial Planning & Analysis
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">Role:</span><br />
                <span className="text-sm">UI/UX Manager</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Duration:</span><br />
                <span className="text-sm">2021-2024</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Team:</span><br />
                <span className="text-sm">The Forge - Design Thinking & UX Practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Overview */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Overview</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              OneStream's product ecosystem is founded on the concept of <em>Extensible Dimensionality</em> - the ability to automatically consolidate and align financial and operational information from any number of systems of record and use a single version of the truth for everything from forecasting and modeling to strategic planning, operational accounting, multi-region financial reporting, and more.
            </p>
          </div>

          {/* Legacy Application Challenge */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Legacy Application Challenge</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              The legacy OneStream system is a Windows-only thick client assembled with stock .Net components out of the necessity of having some kind of interface for the technical innovations developed by the engineers that founded the company. As a result, the application is arranged and presented in a way that makes sense to the engineers who built it, but customers require extensive training. An in-depth knowledge of the data concepts, interdependency of modules, and even SQL code is needed for even the most rudimentary activities, and a 1920x1080 monitor is the minimum supported size, leading competitors to criticize (successfully) "OneStream is for coders. We are for closers."
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <img 
                  src={legacyInterface1Img} 
                  alt="Legacy OneStream Interface - Complex Data Management" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Dense, Developer-style interface</p>
              </div>
              <div>
                <img 
                  src={clumsyPredictiveAnalyticsImg} 
                  alt="Legacy OneStream Interface - Clumsy Business Simplification" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Clumsy attempts at business simplification</p>
              </div>
            </div>
          </div>

          {/* The Forge at OneStream */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The Forge at OneStream</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src={forgeStudioImg} 
                  alt="The Forge - OneStream's UX Studio" 
                  className="w-full rounded-sm shadow-xl"
                />
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
                  I created The Forge - OneStream's User Experience studio - not only to correct the enormous UX debt behind the product, but to act as a new center of gravity in product strategy and execution, effectively reconfiguring OneStream's product development DNA from its engineering-driven ethos to a true user-first set of principles.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  A comprehensive and continuous research and testing framework. Full agile process and scrum team integration. An atomic design system managed as a product. The Forge rapidly became a rallying point for consistency, collaboration, and process maturity, all leading to superior product and user outcomes.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="max-w-md">
                <img 
                  src={uxMaturityImg} 
                  alt="UX Maturity Framework" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide text-center">UX Maturity</p>
              </div>
            </div>
          </div>

          {/* Early Insight */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Early Insight</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              One of the first insights gathered from intense user and internal expert consultation was a clear division of users into two broadly-defined but distinct communities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-serif text-xl font-normal text-foreground mb-4">Technical Data Administrators</h3>
                <p className="text-muted-foreground font-light">
                  Highly technical users consisting of expert consultants and customer personnel who managed the flow and structure of information between systems of record, built and maintained complex business rules and security structures, and created specialized views for various business user reporting and operational tasks.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-serif text-xl font-normal text-foreground mb-4">Business Users</h3>
                <p className="text-muted-foreground font-light">
                  Beneficiaries of the work done by the technical community who were using the consolidated data for operations, reporting, planning, analysis, and more. The majority of OneStream's Extensible Dimensionality innovation was intended to provide this group with Exponential Value.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              The difference in the mental models and user journeys between these two broadly-defined communities was enormous, but the existing one-size-fits-all product had them tripping over each other's functionality and nomenclature. While there were advanced business users who straddled the line performing complex data analysis, it was clear that these groups, while sharing the underlying technology, looked at it through very different lenses and needed to stop sharing a single pair of glasses and each get their own prescription.
            </p>
          </div>

          {/* A New Vision */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">A New Vision</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              It was clear that business users needed an environment tailored to their needs; shoe-horning their mental model and operational workflows into an engineering-centric application simply wouldn't work. It was also clear that a flexible front end was needed with access across devices and platforms.
            </p>
            
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              A large, browser-based strategic initiative took shape. Business user functionality was mapped out in detail, and matrixed with user archetypes to identify a set of high impact user groups that largely overlapped in their functional needs. This "sweet spot" formed the first target in a multigenerational roadmap that would continue to roll in additional groups.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <img 
                  src={newInterface1Img} 
                  alt="New Browser-Based Interface - Business User View" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Business-focused interface design</p>
              </div>
              <div>
                <img 
                  src={newInterface2Img} 
                  alt="New Browser-Based Interface - Streamlined Workflow" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Marketplace-style Third-party app ecosystem</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              Keep in mind that none of the underlying technical innovation needed to change as a result. The power of the platform remained intact, and continued to expand with enhancements and new features according to its established roadmap. All that was changed was the "lens" that business users saw it through. In many ways, the browser application streamlined product development on both the technical and business platforms, by avoiding collisions in perspectives and priorities that had dramatically encumbered forward movement.
            </p>
          </div>

          {/* The QuickSilver Design System */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The QuickSilver Design System</h2>
            
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              As important as it was to have a mature design system in place to guide OneStream's own product design efforts, with the App Store it became exponentially more critical to allow third parties to create coherent and consistent experiences that looked and acted like they belonged together.
            </p>
            
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              In this context, the design system served a purpose much like the Integrated Truss Structure of the International Space Station, providing detailed guidelines for how new modules should be constructed to interact effectively with the structure as-a-whole. Semantic use of colors, menu system incorporation, navigational paradigms, accessibility standards, libraries of interactive controls, iconography, typography, and more all gave third parties a blueprint for creating seamless, smooth, and delightful interactions for their users on the platform.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <img 
                  src={atomicDesignImg} 
                  alt="Atomic Design Methodology" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Atomic Design</p>
              </div>
              <div>
                <img 
                  src={quicksilverSystemImg} 
                  alt="QuickSilver Design System Editions" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">QuickSilver Design System</p>
              </div>
              <div>
                <img 
                  src={iconLibraryImg} 
                  alt="QuickSilver Icon Library" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Icon Library</p>
              </div>
              <div>
                <img 
                  src={commonElementsImg} 
                  alt="QuickSilver Common Elements" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Common Elements</p>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-20 bg-card p-8 rounded-sm border border-border">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-normal text-foreground mb-4">User Experience Transformation</h3>
                <ul className="space-y-3 text-muted-foreground font-light">
                  <li>• Eliminated SQL requirement for basic business user tasks</li>
                  <li>• Created tailored experiences for distinct user communities</li>
                  <li>• Established comprehensive design system for consistency</li>
                  <li>• Implemented user-first development methodology</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-normal text-foreground mb-4">Business Results</h3>
                <ul className="space-y-3 text-muted-foreground font-light">
                  <li>• Launched browser-based platform for business users</li>
                  <li>• Enabled third-party App Store ecosystem</li>
                  <li>• Streamlined product development process</li>
                  <li>• Reduced customer training requirements significantly</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}