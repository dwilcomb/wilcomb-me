import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import bankAmericaImg from "@assets/images/bank-america.png";

export default function BankAmerica() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Bank of America - Daniel Wilcomb";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Client Connections Integrated Desktop at Bank of America. Principal UX Architect for customer service platform integrating disparate business lines.');
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
              Bank of America
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
              Client Connections Integrated Desktop
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">Role:</span><br />
                <span className="text-sm">Principal User Experience Architect</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Platform:</span><br />
                <span className="text-sm">Enterprise Customer Service System</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Scope:</span><br />
                <span className="text-sm">Multi-Business Line Integration</span>
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
              The Client Connections Integrated Desktop is a core component of Bank of America customer service. Prior to CCID, representatives in each of the business lines could only see their own accounts with the customer (Banking, Brokerage, Lending, Business, et-cetera) with no visibility into the customer's full relationship with the Bank.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              CCID was designed to improve customer satisfaction and increase customer assets by connecting disparate teams, CRM systems, accounting systems, and data sources into a new approach to tracking customer account and transaction data, and interactions among Bank associates.
            </p>
          </div>

          {/* Strategic Challenge */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Strategic Challenge</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              The initial release of CCID was a massive strategic undertaking involving system architecture, User Experience, service design, customer strategy, and multi-generational roadmapping.
            </p>
            
            <div className="bg-card p-8 rounded-sm border border-border mb-8">
              <h3 className="font-serif text-xl font-normal text-foreground mb-6">The Problem</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Siloed Information</h4>
                  <p className="text-muted-foreground font-light text-sm">
                    Each business line operated independently with no visibility into other customer relationships
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Limited Customer View</h4>
                  <p className="text-muted-foreground font-light text-sm">
                    Associates could only access accounts within their specific business domain
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Missed Opportunities</h4>
                  <p className="text-muted-foreground font-light text-sm">
                    Lack of comprehensive customer data prevented cross-selling and relationship building
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Inconsistent Service</h4>
                  <p className="text-muted-foreground font-light text-sm">
                    Customers received fragmented service across different Bank touchpoints
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* UX Research & Strategy */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">UX Research & Strategy</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              From a UX perspective, the effort involved extensive initial and ongoing research at every level of every line of business - from executive leadership to call center representatives - to understand the business strategy, the customer journey across traditionally-segmented business lines, legal requirements, and the nuanced needs of a wide variety of Bank users.
            </p>
            
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              This effort operated in concert with an equally-complex system architecture and data consolidation/reconciliation effort, incorporating new technologies and enhancing the timely and accurate flow of information between systems of record.
            </p>

            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              The effort was intensely collaborative, with each discipline being both a recipient and provider of requirements to the other - user needs drove the selection and implementation of technologies as much as the evolving system landscape informed the logical staged rollout of integrations and functionality.
            </p>
          </div>

          {/* User Types & Interfaces */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">User Types & Specialized Interfaces</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              The system was designed to serve multiple types of Bank associates, each with specialized interfaces tailored to their specific workflows and information needs.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-serif text-lg font-normal text-foreground mb-3">Banking Associate</h3>
                <p className="text-muted-foreground font-light text-sm mb-4">
                  Focused on traditional banking services, account management, and transaction processing.
                </p>
                <div className="aspect-video bg-muted rounded-sm flex items-center justify-center">
                  <span className="text-muted-foreground text-xs font-mono">Banking Interface</span>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-serif text-lg font-normal text-foreground mb-3">Brokerage Associate</h3>
                <p className="text-muted-foreground font-light text-sm mb-4">
                  Specialized in investment services, portfolio management, and trading activities.
                </p>
                <div className="aspect-video bg-muted rounded-sm flex items-center justify-center">
                  <span className="text-muted-foreground text-xs font-mono">Brokerage Interface</span>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-serif text-lg font-normal text-foreground mb-3">Investment Center Associate</h3>
                <p className="text-muted-foreground font-light text-sm mb-4">
                  Comprehensive view combining banking and investment services for high-value clients.
                </p>
                <div className="aspect-video bg-muted rounded-sm flex items-center justify-center">
                  <span className="text-muted-foreground text-xs font-mono">Investment Interface</span>
                </div>
              </div>
            </div>
          </div>

          {/* Consolidated Views */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">360-Degree Customer View</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              In addition to providing a 360-degree view of each customer's relationship with the Bank, Client Connections for the first time provided associates with a consolidated view of their own "universe" and the customers in it.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-serif text-lg font-normal text-foreground mb-3">Consolidated Activities</h3>
                <p className="text-muted-foreground font-light text-sm mb-4">
                  Real-time view of all customer interactions, transactions, and touchpoints across business lines.
                </p>
                <div className="aspect-video bg-muted rounded-sm flex items-center justify-center">
                  <span className="text-muted-foreground text-xs font-mono">Activities Dashboard</span>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-serif text-lg font-normal text-foreground mb-3">Consolidated Opportunities</h3>
                <p className="text-muted-foreground font-light text-sm mb-4">
                  Identification of cross-selling opportunities and relationship expansion possibilities.
                </p>
                <div className="aspect-video bg-muted rounded-sm flex items-center justify-center">
                  <span className="text-muted-foreground text-xs font-mono">Opportunities View</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              The top level for associates in each line of business is customized for the needs of that line, following a common "day-planner" paradigm, including a consolidated Book of Business, Activities, Opportunities, and more.
            </p>
          </div>

          {/* Book of Business */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Consolidated Book of Business</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Associates gained access to a comprehensive view of their entire customer portfolio, enabling better relationship management and strategic customer development.
            </p>
            
            <div className="bg-card p-8 rounded-sm border border-border">
              <div className="aspect-video bg-muted rounded-sm flex items-center justify-center mb-6">
                <span className="text-muted-foreground font-mono">Book of Business Interface</span>
              </div>
              <p className="text-muted-foreground font-light text-center">
                Day-planner paradigm with comprehensive customer portfolio view
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-20 bg-card p-8 rounded-sm border border-border">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Impact & Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-normal text-foreground mb-4">Customer Experience</h3>
                <ul className="space-y-3 text-muted-foreground font-light">
                  <li>• Unified view of customer relationships across all business lines</li>
                  <li>• Improved customer satisfaction through comprehensive service</li>
                  <li>• Reduced customer effort in explaining needs across touchpoints</li>
                  <li>• Enhanced personalization based on complete relationship data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-normal text-foreground mb-4">Business Results</h3>
                <ul className="space-y-3 text-muted-foreground font-light">
                  <li>• Increased cross-selling opportunities identification</li>
                  <li>• Enhanced associate productivity and effectiveness</li>
                  <li>• Improved customer asset growth and retention</li>
                  <li>• Streamlined operations across business divisions</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}