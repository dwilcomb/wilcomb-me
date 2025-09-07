import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import traditionalProductSuiteImg from "@assets/Product Interfaces_1757273171854.jpg";

export default function InvisibleProducts() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Invisible Products - Daniel Wilcomb";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Why the future of SaaS belongs to companies that organize around user journeys, not org charts.');
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
              Strategic Product Design
            </span>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6 tracking-tight leading-tight">
              Invisible Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
              Why the future of SaaS belongs to companies that organize around user journeys, not org charts.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">Published:</span><br />
                <span className="text-sm">January 2, 2025</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Platform:</span><br />
                <span className="text-sm">Medium</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Read Time:</span><br />
                <span className="text-sm">5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Opening */}
          <div className="mb-16">
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              Every mid-to-large SaaS company faces the same invisible crises: either their customers are using some components of their suite but won't leave the competition for others, or they're paying for multiple products but adoption is anemic on all but one.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              You know the story. Company starts with a core product, grows by adding adjacent functionality through internal builds and strategic acquisitions. (A payments processor builds analytics and buys a fraud solution. An EMR provider develops patient engagement and acquires practice management. And so on.) The business logic is sound — expand the total addressable market, increase customer lifetime value, build competitive moats.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              But something breaks in translation.
            </p>
          </div>

          {/* The Problem */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The $2.3 Million Problem</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Users are forced to understand your organizational chart as a prerequisite to using your "suite". The interface friction between products — different interaction patterns, visual languages, mental models — keeps customers from adopting your full suite. They stick with your core product and buy complementary solutions from competitors.
            </p>
            
            <div className="bg-red-500/10 p-8 rounded-sm border border-red-500/20 mb-8">
              <p className="font-serif text-xl text-foreground">
                <strong>The math is brutal:</strong> Customers using multiple products typically show 40% lower churn and 60% higher lifetime value, but only 23% of most SaaS customer bases use more than one product. Interface friction isn't just a usability problem — it's costing companies millions in lost expansion revenue.
              </p>
            </div>
          </div>

          {/* NextGen Fails */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Why "NextGen" Always Fails</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Every executive has been here: some visionary leader proposes a unified platform initiative. "NorthStar 2025" or "NextGen Experience" or something equally forgettable. Months later, after burning through engineering bandwidth and missing product roadmaps, the initiative gets quietly reduced to cosmetic brand consistency.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              <strong className="text-foreground">The fundamental flaw:</strong> these projects try to rebuild everything to look the same, rather than truly unifying workflows.
            </p>
          </div>

          {/* Interface Inversion Strategy */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The Interface Inversion Strategy</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              What if instead of forcing product teams to rebuild their interfaces, we built workflow-specific interfaces that sit above existing products?
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Imagine this: You're a hyper-large retail chain that's constantly hiring across the board, and you're using a top SaaS recruiting platform to do it. Now imagine you hourly hiring managers had an interface optimized for retail/restaurant workflows, but your corporate recruiters got a different interface optimized for complex hiring processes. Both are powered by the same underlying products, but each community sees only the functionality they need, organized the way they think about their work.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              This isn't about making everything look the same. <strong className="text-foreground">It's about making user journeys coherent.</strong>
            </p>
          </div>

          {/* Breakthrough Moment */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The Breakthrough Moment</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              I experienced this firsthand in just such a large enterprise recruiting platform. We had built sophisticated software for corporate hiring, but hourly managers at retail locations were drowning in complexity they didn't need. Every proposed solution involved dumbing down the core product.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Then our QA lead asked the right question: <strong className="text-foreground">"Why does it have to be in the product?"</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              We built a purpose-designed interface alongside the existing product. Same powerful functionality underneath, but organized around how hourly managers actually think about hiring. The results were immediate — higher adoption, lower support burden, faster time-to-value, thrilled customers.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              That's when the bigger opportunity became clear: extend this approach across all products, for all user communities.
            </p>
          </div>

          {/* Interface Comparison */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Traditional vs. Interface Inversion</h2>
            
            <div className="grid md:grid-cols-1 gap-8 mb-8">
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-serif text-xl font-normal text-foreground mb-4">Traditional Product Suite</h3>
                <div className="mb-6">
                  <img 
                    src={traditionalProductSuiteImg} 
                    alt="Traditional Product Suite diagram showing separate product interfaces with minimal integration"
                    className="w-full h-auto rounded-sm"
                  />
                </div>
                <p className="text-muted-foreground font-light mb-4">
                  Products each have their own interface, and are internally organized around their own feature set. Consistency between products tends to be limited to look-and-feel.
                </p>
              </div>
              
              <div className="bg-accent/10 p-6 rounded-sm border border-accent/20">
                <h3 className="font-serif text-xl font-normal text-foreground mb-4">Interface Inversion</h3>
                {/* Placeholder for second image */}
                <div className="mb-6 h-64 bg-muted/30 rounded-sm flex items-center justify-center border-2 border-dashed border-muted">
                  <span className="text-muted-foreground text-sm">Interface Inversion diagram coming soon</span>
                </div>
                <p className="text-muted-foreground font-light">
                  Interfaces are tailored to distinct communities of users that share similar workflows within and across products. The lines between what functionality is being handled by which product becomes invisible.
                </p>
              </div>
            </div>
          </div>

          {/* Why Executives Should Care */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Why Executives Should Care (And It's Not About UX)</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-3">Customer Retention Math</h3>
                <p className="text-muted-foreground font-light text-sm">
                  Multi-product customers have dramatically higher retention rates, but interface friction prevents expansion adoption. A unified workflow layer directly drives expansion revenue.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-3">Competitive Displacement</h3>
                <p className="text-muted-foreground font-light text-sm">
                  While competitors rebuild entire platforms, you deliver integrated workflows in months. Customers see comprehensive solutions, not feature lists.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-3">Sales Acceleration</h3>
                <p className="text-muted-foreground font-light text-sm">
                  Enterprise deals close 60% faster when prospects can see integrated workflows in demos, rather than separate product presentations.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-3">Support Cost Elimination</h3>
                <p className="text-muted-foreground font-light text-sm">
                  73% of Level 1 support tickets stem from navigation confusion, not functionality issues. Unified workflows reduce support burden while improving satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Advantage */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The Technical Advantage</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              This isn't just a UI layer — it's an integration platform that happens to include optimized interfaces. The middleware required for workflow orchestration becomes a strategic asset that could eventually be productized or enable partnership opportunities.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              More importantly, it provides unprecedented visibility into cross-product user journeys. You'll finally understand how customers actually use your full suite, informing both product strategy and competitive positioning.
            </p>
          </div>

          {/* AI Native Opportunity */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The AI Native Opportunity</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              Here's the unexplored territory: rather than retrofitting AI into existing products, workflow-layer interfaces can be AI-native from the ground up. Imagine customer success workflows that intelligently surface insights across your entire product suite, or sales workflows that automatically pull relevant data from multiple systems based on deal stage.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              Traditional products constrain AI to product-specific use cases. Workflow interfaces enable AI to operate across functional silos, creating experiences that feel genuinely intelligent rather than feature-specific.
            </p>
          </div>

          {/* Risk Mitigation */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Risk Mitigation That Actually Works</h2>
            
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-2">Parallel Path Strategy</h3>
                <p className="text-muted-foreground font-light text-sm">
                  Existing products continue unchanged while you build incremental value on top. Product teams maintain their roadmaps and autonomy.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-2">Metrics-Driven Rollout</h3>
                <p className="text-muted-foreground font-light text-sm">
                  A/B test with specific customer segments, measuring adoption, retention, and expansion rates before broader deployment.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-2">Modular Implementation</h3>
                <p className="text-muted-foreground font-light text-sm">
                  Start with the highest-friction user journeys that span multiple products. Prove the concept before attempting comprehensive unification.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-2">Graceful Evolution</h3>
                <p className="text-muted-foreground font-light text-sm">
                  As workflow interfaces reach critical mass, you gain clear data about which legacy features provide real value versus organizational inertia.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mb-16 bg-card p-8 rounded-sm border border-border">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The Bottom Line</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              Most SaaS companies are optimizing for feature velocity when they should be optimizing for workflow coherence. The companies that figure out how to organize interfaces around user journeys rather than product boundaries will capture disproportionate market share in their categories.
            </p>
            <p className="text-foreground leading-relaxed font-light text-lg font-medium">
              The question isn't whether this approach will work. The question is whether you'll implement it before your competitors do.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-accent/10 p-8 rounded-sm border border-accent/20">
            <p className="font-serif text-xl text-foreground mb-4">
              <strong>Ready to stop building products and start building workflows?</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The interface inversion strategy might be exactly what your SaaS company needs to unlock expansion revenue that's hiding in plain sight.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}