import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import oneStreamHeroImg from "@assets/images/finance-hero.png";
import bankAmericaHeroImg from "@assets/images/bank-america.png";

export default function Finance() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Financial Technology - Daniel Wilcomb";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Financial technology case studies including OneStream Software and Bank of America. Enterprise financial planning, analysis, and customer service platform design.');
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
              Case Studies
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[0.9] mb-8 text-foreground tracking-tight">
            Financial <br />
            <em className="font-light italic">Technology</em>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl">
            Designing user-centered financial interfaces that transform complex enterprise data into accessible, actionable insights. From financial planning platforms to integrated customer service systems.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* OneStream Case Study */}
            <div className="group">
              <Link href="/onestream" className="block">
                <div className="relative overflow-hidden rounded-sm mb-8 cursor-pointer">
                  <img 
                    src={oneStreamHeroImg} 
                    alt="OneStream Software Financial Planning Platform" 
                    className="w-full h-64 md:h-80 object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-accent font-mono text-xs tracking-widest uppercase opacity-75 font-medium">
                    Enterprise FinTech
                  </span>
                  <span className="text-accent font-mono text-xs tracking-widest uppercase opacity-75 font-medium">
                    Financial Planning
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground tracking-tight leading-tight">
                  OneStream Software
                </h2>
                
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  Transforming financial planning & analysis with user-centered design and comprehensive design systems. Creating The Forge - OneStream's UX studio to establish user-first development principles.
                </p>
                
                <div className="space-y-4">
                  <div className="text-muted-foreground">
                    <span className="font-medium text-foreground">Role:</span> Product Design Director
                  </div>
                  <div className="text-muted-foreground">
                    <span className="font-medium text-foreground">Focus:</span> Extensible Dimensionality • Browser Platform • Design Systems
                  </div>
                </div>
                
                <Link href="/onestream">
                  <span className="inline-flex items-center text-foreground hover:text-accent transition-colors duration-300 text-sm font-normal tracking-wide group/link cursor-pointer">
                    View Case Study
                    <ArrowRight className="ml-3 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Bank of America Case Study */}
            <div className="group">
              <Link href="/bank-america" className="block">
                <div className="relative overflow-hidden rounded-sm mb-8 cursor-pointer">
                  <img 
                    src={bankAmericaHeroImg} 
                    alt="Bank of America Client Connections Platform" 
                    className="w-full h-64 md:h-80 object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-accent font-mono text-xs tracking-widest uppercase opacity-75 font-medium">
                    Financial Services
                  </span>
                  <span className="text-accent font-mono text-xs tracking-widest uppercase opacity-75 font-medium">
                    Integration
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground tracking-tight leading-tight">
                  Bank of America
                </h2>
                
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  Integrated customer service platform connecting disparate business lines for comprehensive client relationships. Creating 360-degree customer views for enhanced service delivery.
                </p>
                
                <div className="space-y-4">
                  <div className="text-muted-foreground">
                    <span className="font-medium text-foreground">Role:</span> Principal User Experience Architect
                  </div>
                  <div className="text-muted-foreground">
                    <span className="font-medium text-foreground">Focus:</span> System Integration • Customer Journey • Service Design
                  </div>
                </div>
                
                <Link href="/bank-america">
                  <span className="inline-flex items-center text-foreground hover:text-accent transition-colors duration-300 text-sm font-normal tracking-wide group/link cursor-pointer">
                    View Case Study
                    <ArrowRight className="ml-3 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-8">
            Financial Technology Expertise
          </h2>
          
          <p className="text-muted-foreground leading-relaxed font-light text-lg mb-12 max-w-3xl mx-auto">
            Over a decade of experience designing enterprise financial technology solutions, from comprehensive financial planning platforms to integrated customer service systems. Specializing in transforming complex financial data into intuitive, actionable user experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Enterprise Platforms</h3>
              <p className="text-muted-foreground font-light text-sm">
                Large-scale financial planning and analysis systems serving Fortune 500 companies with complex data consolidation needs.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Customer Experience</h3>
              <p className="text-muted-foreground font-light text-sm">
                Integrated service platforms that connect disparate business lines to provide comprehensive customer relationship views.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-xl font-normal text-foreground mb-4">Design Systems</h3>
              <p className="text-muted-foreground font-light text-sm">
                Comprehensive design systems enabling consistent experiences across complex financial product ecosystems and third-party integrations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}