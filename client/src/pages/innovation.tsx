import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Innovation() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Innovation & Design Thinking - Daniel Wilcomb";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Design Thinking and Lean Design approaches to product innovation. Learn how collaborative frameworks drive breakthrough solutions.');
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
            Innovation &<br />
            <em className="font-light italic">Design Thinking</em>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            Design Thinking and Lean Design are powerful frameworks for product innovation that extend far beyond traditional design teams.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Design Thinking and Lean Design are two zeitgeist phrases that are frequently thrown around with little understanding of what they involve and the power that they can have. The first common mistake is assuming that, because they both have "design" in their titles, they are tools for Mac-toting creatives and not the fundamental shift in product and service innovation that they actually represent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/81461691-82a0-46ff-8b1a-d5b6682c3b67_rw_3840.jpeg?h=0e2d8ca800f730877b3dbbcb64c3341b" 
                  alt="Design Thinking Process" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Design Thinking Process</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/34f04651-ac71-468b-8530-bf2a36ed999f_rw_1920.jpeg?h=e12bce14657e1be0ddb42203eabb730e" 
                  alt="Lean Design Process" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Lean Design Process</p>
              </div>
            </div>

            <div className="space-y-8 mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                The processes of Design Thinking and Lean Design tend to be facilitated by User Experience for the simple reason that creative disciplines innately utilize many of their concepts. Simply put, designers are more used to it, but it's not for them alone. In fact, neither reaches its full potential without involvement from all the disciplines involved in product/service ideation and creation: Engineering, Marketing, Leadership, Sales, Quality Assurance, Product Owners, Customer Support. The list goes on.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Design Thinking and Lean Design both provide frameworks to allow the entire team to challenge assumptions, think outside the box, rapidly iterate and test concepts, toss out what isn't working, and come up with innovations that traditional approaches would be too constrained to allow.
              </p>

              <blockquote className="border-l-4 border-accent/30 pl-6 py-4 bg-muted/30 rounded-sm">
                <p className="text-lg italic text-foreground font-light">
                  Put another way - everything you're using to read this right now was once considered stupid according to status-quo thinking. Personal computers. Mobile Devices. The Internet. Think about that.
                </p>
              </blockquote>
            </div>

            <div className="mb-16">
              <img 
                src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/d7257f73-91b5-4496-8894-70a03eb6b61f_rw_1920.jpeg?h=c3610910a6d18b551e25447ba86e5914" 
                alt="Design Thinking Open Workshop" 
                className="w-full rounded-sm shadow-lg mb-4"
              />
              <p className="text-sm text-muted-foreground font-mono tracking-wide">Design Thinking Open Workshop</p>
            </div>

            <div className="space-y-8 mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6 tracking-tight">
                Collaborative <em className="font-light italic">Innovation</em>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Both processes are meant to be open and collaborative, using similar fast, iterative approaches, that make them natural extensions of one another. Multiple disciplines are involved on equal footing, allowing spontaneous and collaborative insight, ideation, feedback, feasibility checking, brainstorming, and design - all in one egalitarian forum.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                The amount of enthusiasm generated in the free flow of ideas and constructive feedback is infectious. Running workshops in or near high-traffic areas (and/or online using open shared whiteboards) attracts the attention, interest, and involvement of others who "catch the bug" and become valuable contributors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/0f2c6de8-8c43-4962-9b9f-b17ad19f4688_rw_600.png?h=8541068200fe0e2f7eee5bc258e9b025" 
                  alt="Collaborative Brainstorming" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Collaborative Brainstorming</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/cde32bd0-a95b-4c40-a871-dfdbc9454c01_rw_1920.png?h=bfd2c2aaaaaaae9bc541b02159249bc8" 
                  alt="Concept Exploration" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Concept Exploration</p>
              </div>
            </div>

            <div className="space-y-6 mb-16">
              <div className="bg-card rounded-sm p-8 border border-border">
                <h3 className="font-serif text-xl font-normal text-foreground mb-4 tracking-tight">Key Principles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-2">•</span>
                    <span className="text-muted-foreground font-light">There are no stupid ideas. Every non-obvious angle is an opportunity worth exploring.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-2">•</span>
                    <span className="text-muted-foreground font-light">Fail Fast. Even if an approach doesn't pan out, its shortcomings are discovered early and without significant investment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-2">•</span>
                    <span className="text-muted-foreground font-light">Something valuable is always learned from the effort. Innovation requires exploring new territory.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/768feaa7-400d-469c-9b95-755d1a83663d_rw_1920.jpeg?h=b2ef1e4856f990ec3218a763153f3d5d" 
                  alt="Whiteboard Jazz Session" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Whiteboard Jazz Session</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/c27defc5-6031-4b3f-aaf3-f9a23143cab5_rw_600.png?h=fdf2b2a6288b7e2c0fde5aa9b25abffc" 
                  alt="Rapid Prototyping" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Rapid Prototyping</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation Footer */}
      <section className="py-16 bg-card border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/healthcare">
              <Button variant="ghost" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 font-normal text-sm tracking-wide">
                <ArrowLeft className="mr-2 h-3 w-3" />
                Healthcare Solutions
              </Button>
            </Link>
            
            <Link href="/finance">
              <Button variant="ghost" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 font-normal text-sm tracking-wide">
                Financial Technology
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}