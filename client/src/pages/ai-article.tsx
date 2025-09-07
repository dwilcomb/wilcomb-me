import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function AIArticle() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Stop Panicking about AI - Daniel Wilcomb";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A message to the UX community about using AI as a tool to enhance user experience design and reduce cognitive overhead.');
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
              Thought Leadership
            </span>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-6 tracking-tight leading-tight">
              Stop Panicking about AI. Start using it.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
              A Message to the UX Community
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">Published:</span><br />
                <span className="text-sm">August 25, 2025</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Platform:</span><br />
                <span className="text-sm">Medium</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Read Time:</span><br />
                <span className="text-sm">3 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16 prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              Let me start with what this isn't: another breathless think-piece about AI disruption in UX. I'm as tired of AI hysteria as you probably are.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              Every podcast, article, and product launch screams about artificial intelligence. Behind all that noise sits fear — fear of being left behind, of losing relevance, of missing the boat. UX professionals, already fighting to prove their value in organizations, are scrambling to sound AI-savvy.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              Here's the problem: everyone's shouting "Follow me!" while frantically treading water. No one seems to know where they're going.
            </p>
          </div>

          {/* The Real Story */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The Real Story About AI and UX</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              I've spent the past year stepping back from the chaos and doing three things:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-3">Looking back</h3>
                <p className="text-muted-foreground font-light">
                  to UX fundamentals — understanding people, designing for intent, and remembering that technology isn't always the answer. (My favorite recent solution involved a Nerf gun, cardboard, and a Sharpie.)
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-3">Looking around</h3>
                <p className="text-muted-foreground font-light">
                  at the familiar pattern of disruption panic. Remember all those misguided concepts that followed the first iPhone? We're there again.
                </p>
              </div>
              <div className="bg-card p-6 rounded-sm border border-border">
                <h3 className="font-medium text-foreground mb-3">Looking ahead</h3>
                <p className="text-muted-foreground font-light">
                  through the tangle of distracting trends to find what's actually useful.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              After going deep into generative AI, agentic systems, and experimental development approaches, I have news for you: <strong className="text-foreground">This isn't something we need to struggle to adapt to. It's something we've been waiting for.</strong>
            </p>
          </div>

          {/* Your Products */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Your Products: The Wires Are Showing</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Every interface is a translation between human intent and system capability. Users shouldn't need to understand your product's internal complexity to achieve their goals.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Think about a home theater system: 7.1 surround sound, multiple devices, universal remotes. To watch Netflix, you need to know inputs, settings, device chains. The technical wires are showing, creating cognitive overhead.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Remember the Harmony Remote? It solved this by hiding complexity behind simple commands like "Watch Netflix." It handled the technical choreography automatically.
            </p>
            
            <div className="bg-accent/10 p-8 rounded-sm border border-accent/20 mb-8">
              <p className="font-serif text-xl text-foreground text-center">
                <strong>For UX, AI is our Harmony Remote.</strong>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Instead of brainstorming AI-powered features, audit how much cognitive load your current product places on users. Where do they need to understand SQL syntax to write business rules? Where do they manually navigate complex workflows that could be automated? Where are your wires showing?
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              In a recent FinTech project, stakeholders wanted AI to help users with SQL syntax. They missed the bigger opportunity: users shouldn't need to know SQL exists. AI could translate business intent directly into results, with natural language explanations like "Where is this interest rate coming from?" replacing technical query inspection.
            </p>
          </div>

          {/* Your Process */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">Your Process: Beyond Prototyping</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Prototyping consumes enormous time — wiring screens, building states, creating dummy data, manufacturing realistic flows. You spend more time on prototype mechanics than on the concepts you're testing.
            </p>
            
            <div className="bg-accent/10 p-8 rounded-sm border border-accent/20 mb-8">
              <p className="font-serif text-xl text-foreground text-center">
                <strong>"Vibe coding" has changed this equation entirely.</strong>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              I'm not a developer. I'm a 25-year UX veteran who understands enough technology to be conversant — API calls, databases, markup languages — but can't build working systems from scratch.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Recently, I described a production management system concept to an AI agent. I explained workflows, dependencies, roles, and constraints through detailed conversation. Then I asked it to build a working prototype using IBM's Carbon Design System.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              The result was impressive: a TypeScript/React application with navigation, workflow logic, realistic data, and suggested adjacent features. Not perfect; we debugged display issues, refined logic, and improved modal implementations, but functional enough for real user testing.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-8">
              Halfway through refinement, I realized this had crossed from prototype to actual product. <strong className="text-foreground">This was a system users could test freely without having to "stay between-the-lines" like traditional prototypes require.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              The implications are profound: with solid problem understanding, design structure and guidance, basic technical literacy, and firm agent management, you can create fully functional prototypes for demos, testing, and iteration in a fraction of the time. (We'll talk about Vibe design later ;)
            </p>
          </div>

          {/* The Bottom Line */}
          <div className="mb-16 bg-card p-8 rounded-sm border border-border">
            <h2 className="font-serif text-3xl font-normal text-foreground tracking-tight mb-8">The Bottom Line</h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              AI doesn't threaten UX — it amplifies what we've always tried to do. It removes technical barriers between user intent and goal achievement. It lets us prototype concepts as working systems, not clever smoke-and-mirrors. There are genuine, lasting innovations coming from the intelligent application of AI technologies — ambient computing, AGI on-the-horizon — but a huge part of its impact comes from re-envisioning what we already do.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light text-lg mb-6">
              While everyone else panics about keeping up with AI trends, focus on using it to solve the problems you already know exist: cognitive overhead in your products and time overhead in your process.
            </p>
            <p className="text-foreground leading-relaxed font-light text-lg font-medium">
              The future belongs to UX professionals who see AI as their Harmony Remote — not another complex system to master, but a tool that hides complexity so users (and we) can focus on what actually matters.
            </p>
          </div>

          {/* Closing */}
          <div className="text-center bg-accent/10 p-8 rounded-sm border border-accent/20">
            <p className="font-serif text-xl text-foreground">
              Stop swimming in circles with the crowd. Pick a direction and start moving purposefully. 
              <br />
              <strong>The water's fine once you stop thrashing.</strong>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}