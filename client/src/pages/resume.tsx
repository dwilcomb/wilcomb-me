import { useEffect } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import resumePdf from "@assets/Wilcomb Resume 2025_1759595572077.pdf";

export default function Resume() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Résumé - Daniel Wilcomb";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional résumé of Daniel Wilcomb, Product Design Leader with expertise in healthcare, finance, AI/ML, and design systems.');
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Daniel_Wilcomb_Resume_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="font-serif text-lg font-normal text-foreground tracking-tight hover:text-accent transition-colors duration-300">
              Daniel Wilcomb
            </Link>
            
            <div className="flex items-center gap-4">
              <Button
                onClick={handleDownload}
                className="inline-flex items-center bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 font-normal text-sm tracking-wide"
                data-testid="download-resume"
              >
                <Download className="mr-2 h-3 w-3" />
                Download PDF
              </Button>
              <Button
                variant="ghost"
                onClick={() => setLocation('/')}
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 font-normal text-sm tracking-wide"
                data-testid="back-to-portfolio"
              >
                <ArrowLeft className="mr-2 h-3 w-3" />
                Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-normal text-foreground mb-4 tracking-tight">
              Daniel Wilcomb
            </h1>
            <h2 className="text-xl text-muted-foreground font-light mb-8">
              Product Design Leader
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed font-light text-lg">
                I am a player-coach, equally adept at building and championing a product vision, guiding it in 
                execution through team-building and partnership, and contributing to its delivery hands-on. 
                The core principles of my approach are collaboration, inclusiveness, communication, and 
                transparency. The result is an environment of infectious enthusiasm around a compelling 
                shared vision that extends well beyond the design and even the product teams.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mb-16 pb-8 border-b border-border">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-muted-foreground">
              <span>daniel@wilcomb.me</span>
              <span className="hidden md:block">•</span>
              <span>617-974-6960</span>
              <span className="hidden md:block">•</span>
              <span>LinkedIn | Portfolio</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Domain Expertise */}
            <div>
              <h3 className="font-serif text-2xl font-normal text-foreground mb-6 tracking-tight">Domain Expertise</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Healthcare",
                  "Biopharmaceuticals", 
                  "Financial Services",
                  "AI and Machine Learning Solutions",
                  "Manufacturing",
                  "Human Capital Management (HCM)",
                  "Retail / Personalization",
                  "Higher Education",
                  "SAAS software"
                ].map((skill, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Skills */}
            <div>
              <h3 className="font-serif text-2xl font-normal text-foreground mb-6 tracking-tight">Leadership Skills</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Strategic Planning and Program Management",
                  "User Advocacy",
                  "Design Thinking Methodology",
                  "Team Composition and Mentorship",
                  "Cross-Functional Collaboration",
                  "Communication and Presentation",
                  "Distributed Team Management"
                ].map((skill, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* User Experience Skills */}
            <div>
              <h3 className="font-serif text-2xl font-normal text-foreground mb-6 tracking-tight">User Experience Skills</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "User and Domain Research",
                  "Lean and Agile Design Processes",
                  "Atomic Design Systems",
                  "Rapid, iterative Wireframing, Prototyping, and Usability Testing",
                  "Responsive Web, native mobile (iOS, Android), and physical product design",
                  "Accessibility (WCAG, ADA, 508)",
                  "SAAS and white-labeled product design"
                ].map((skill, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="font-serif text-2xl font-normal text-foreground mb-6 tracking-tight">Soft Skills</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Workshop Facilitation",
                  "Coalition and Consensus Building", 
                  "Negotiation",
                  "Public Speaking and Presentation",
                  "Executive Interaction and Communication",
                  "Strategy and Process Evangelism",
                  "Sales & Marketing Support",
                  "Vendor Management"
                ].map((skill, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Toolset */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-normal text-foreground mb-6 tracking-tight">Toolset</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid grid-cols-1 gap-3">
                {[
                  "UX Design & Prototyping (Figma, XD, Sketch, Axure, InVision)",
                  "Design Systems (Zeroheight, Figma, Storybook)",
                  "Product Management (Jira, Confluence, Trello, MS Project)",
                  "Usability Testing & Analytics (UserTesting, Hubble, Loop11)"
                ].map((tool, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {tool}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Adobe Creative Cloud (XD, Illustrator, Photoshop, InDesign)",
                  "Presentation Software (Keynote, PowerPoint, Prezi)",
                  "Source Control (GitHub, BitBucket)",
                  "Collaborative Whiteboards (FigJam, Miro)",
                  "Microsoft Office (Word, Excel, PowerPoint, Outlook, Teams, Sharepoint)"
                ].map((tool, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h3 className="font-serif text-3xl font-normal text-foreground mb-8 tracking-tight">Experience</h3>
            
            {/* Independent AI Strategy */}
            <div className="mb-12 pb-8 border-b border-border">
              <div className="mb-4">
                <h4 className="font-serif text-xl font-normal text-foreground mb-1">Independent AI Product Design & Strategy</h4>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-accent font-medium">PRINCIPAL DESIGNER, AI PRODUCT STRATEGIST</p>
                  <p className="text-muted-foreground font-light">2024 - 2025</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                Bleeding-edge AI product exploration, design, and development. Conducting intensive user
                research and AI-driven product design in manufacturing, finance, and product management.
              </p>
              <div className="space-y-4">
                <div className="text-muted-foreground font-light">
                  • Operational assessment and process optimization at a large building materials
                  manufacturer, leading to ShopFloor - a custom-tailored, AI-powered and accelerated
                  workflow management system providing cross-departmental order fulfillment tracking
                  down to individual components of each unit, as well as management analytics and AI-
                  powered production, revenue, and cost forecasting - resulting in an 80% reduction in
                  status-related administrative overhead, and 150% increase in responsiveness to
                  customer order inquiries.
                </div>
                <div className="text-muted-foreground font-light">
                  • Ongoing design and development of Greenlight - an AI-driven product validation and
                  product roadmap toolset for evaluating new product concepts as well as enhancements to
                  existing products in the context of existing and planned functionality. (Competitive
                  analysis, market fit, revenue potential, comparative opportunity costing, et-cetera.)
                </div>
              </div>
            </div>

            {/* OneStream Software */}
            <div className="mb-12 pb-8 border-b border-border">
              <div className="mb-4">
                <h4 className="font-serif text-xl font-normal text-foreground mb-1">OneStream Software</h4>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-accent font-medium">UI/UX MANAGER</p>
                  <p className="text-muted-foreground font-light">2021-2024</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                I created and led The Forge - OneStream's Design Thinking and User Experience practice -
                leading comprehensive UX activities including research, product strategy, ideation, design,
                development, and testing. Spearheaded the SaaS design strategy for new Web and
                Marketplace initiatives, directly responsible for a 30% increase in subscription revenue and
                35% increase in year-over-year total revenue. Incorporated UX principles and design
                thinking into OneStream's cultural DNA, revolutionized methodologies, and established UX as
                a core competitive differentiator.
              </p>
              <div className="space-y-3">
                {[
                  "Catalyzed OneStream's mission of delivering Exponential Value - providing an integrated SaaS financial ecosystem for the Enterprise - consolidating financial data and planning functionality across disparate systems, allowing the business to focus on its core value proposition rather than operational minutiae.",
                  "Built and supervised a cross-functional team comprised of designers, researchers, and front-end developers, fostering collaboration and attaining cohesive project delivery in close partnership with an entire spectrum of participants from Scrum teams to executive.",
                  "Balanced an intricate combination of business goals, customer needs, and user understanding to create innovative, user-centered product design.",
                  "Created and optimized flexible end-to-end UX processes that enhanced Agile and continually adapted to evolving project requirements.",
                  "Organized company-wide Agile practices around a user-first approach from early conceptualization and roadmapping through iterative design, testing, development, release, and evolution.",
                  "Developed and implemented a comprehensive design system to drive consistency and efficiency across all projects."
                ].map((achievement, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {achievement}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottomline Technologies */}
            <div className="mb-12 pb-8 border-b border-border">
              <div className="mb-4">
                <h4 className="font-serif text-xl font-normal text-foreground mb-1">Bottomline Technologies</h4>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-accent font-medium">DIRECTOR OF PRODUCT DESIGN</p>
                  <p className="text-muted-foreground font-light">2019-2021</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                Led the ideation of new mobile and Web products across multiple product lines, while
                transforming existing SaaS offerings into white-labeled solutions for Bottomline's financial
                customers. Championed development of a robust design system for uniformity across
                internally developed products as well as products acquired in strategic mergers.
              </p>
              <div className="space-y-3">
                {[
                  "Applied state-of-the-art UX methodologies to combine machine learning solutions and steer mobile engagement strategies, propelling Bottomline to industry leadership.",
                  "Crafted a visionary product ecosystem strategy to drive \"incumbent\" sales incentives for organic product upselling.",
                  "Conceptualized the product design strategy and managed teams through research, detailed design, and implementation."
                ].map((achievement, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {achievement}
                  </div>
                ))}
              </div>
            </div>

            {/* Birdzi */}
            <div className="mb-12 pb-8 border-b border-border">
              <div className="mb-4">
                <h4 className="font-serif text-xl font-normal text-foreground mb-1">Birdzi, Inc.</h4>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-accent font-medium">USER EXPERIENCE DESIGN CHIEF</p>
                  <p className="text-muted-foreground font-light">2014-2019</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                Led the user experience effort from concept through continuous releases with multinational
                teams on white-labeled native mobile (Android / iOS) shopper applications offering
                personalized, location-aware shopping features, targeted offers, and wellness-based product
                recommendations. Spearheaded design and development of retailer-facing analytics and
                catalog/offer management tools for three-tier monetization.
              </p>
              <div className="space-y-3">
                {[
                  "Customers realized a 25% increase in customer retention, 60% increase in coupon-based revenue, and 15% increase in basket sizes in users of the mobile application.",
                  "Oversaw a comprehensive customer engagement ecosystem using machine learning for personalized shopper experiences.",
                  "Improved targeting and promotional ROI - boosting redemption rates and promotional effectiveness, resulting on a higher return on marketing spend and greater incremental revenue from optimized discounts."
                ].map((achievement, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {achievement}
                  </div>
                ))}
              </div>
            </div>

            {/* Alere */}
            <div className="mb-12 pb-8 border-b border-border">
              <div className="mb-4">
                <h4 className="font-serif text-xl font-normal text-foreground mb-1">Alere Accountable Care Solutions</h4>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-accent font-medium">DIRECTOR OF PRODUCT DESIGN</p>
                  <p className="text-muted-foreground font-light">2013-2014</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                Built and guided a dynamic design team to spearhead the groundbreaking Connected Health
                initiative, focused on comprehensive patient care and at-home monitoring in post-surgical,
                chronic condition, and other high-risk populations. Operated end-to-end efforts in user
                research, software design and development, service design, packaging design, and physical
                device design. The ecosystem included tools addressing providers, patients, and payers
                through mobile and desktop apps, in-home diagnostic devices, professional care
                management, real-time communication, and AI analysis of health conditions and patient
                interactions.
              </p>
              <div className="space-y-3">
                {[
                  "Catalyzed efforts that prompted a $600MM acquisition by United Health's Optum division, highlighting the strategic impact of the Connected Health initiative.",
                  "Designed an ecosystem of software, physical devices, and services that resulted in a nearly 90% reduction in emergency visits and hospital readmission and a commensurate 30% decrease in overall healthcare costs.",
                  "Supervised a cross-functional effort to create mobile and responsive Web applications for physicians, care providers, and patients"
                ].map((achievement, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {achievement}
                  </div>
                ))}
              </div>
            </div>

            {/* Kenexa */}
            <div className="mb-12 pb-8 border-b border-border">
              <div className="mb-4">
                <h4 className="font-serif text-xl font-normal text-foreground mb-1">Kenexa (an IBM Company)</h4>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-accent font-medium">PRINCIPAL USER EXPERIENCE DESIGNER AND MANAGER</p>
                  <p className="text-muted-foreground font-light">2009-2013</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                I led a team driving the creation and evolution of Smarter Workforce solutions from the earliest
                stages of conception and research through delivery, testing, and ongoing enhancement. I
                operated at the executive level setting product vision and market strategy, through product
                management, and to the producer level, working hands-on with design and development. The
                IBM Smarter Workforce platform consists of software, data, and services for strategic human
                capital management. With over 8,900 customers in 21 countries, the platform enabled
                companies like Walmart, Target, and Disney to hire, train, compensate, and evolve their entire
                workforce.
              </p>
              <div className="space-y-3">
                {[
                  "Conceived and executed the vision for RapidHire, the first in a series of cross-product experiences designed for a specific user community (in this case, hourly hiring managers). The solution increased Kenexa's addressable ATS market by 65% ($1.4B - $1.7B), and headlined the company's 2012 new product releases.",
                  "Reduced usability-related support requests by 40%",
                  "Oversaw a large UX-driven effort based on the RapidHire Interface Inversion strategy - creating targeted experiences for distinct user communities that elegantly incorporated functionality across separate products into a tailored and seamless workflow. The strategy was credited even in its earliest stages with a 40% lower customer churn and an estimated 60% higher lifetime value."
                ].map((achievement, index) => (
                  <div key={index} className="text-muted-foreground font-light">
                    • {achievement}
                  </div>
                ))}
              </div>
            </div>

            {/* Consulting Experience */}
            <div className="mb-12">
              <h4 className="font-serif text-xl font-normal text-foreground mb-4">Consulting Experience</h4>
              <div className="space-y-2">
                <div className="text-muted-foreground font-light">• Senior User Experience Designer & Project Manager - Axis Technology - (2004-2009)</div>
                <div className="text-muted-foreground font-light">• User Experience Designer & Information Architect - netNumina Solutions - (2000-2004)</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-serif text-3xl font-normal text-foreground mb-8 tracking-tight">Education</h3>
            <div>
              <h4 className="font-serif text-xl font-normal text-foreground mb-2">Bachelor of Arts in English</h4>
              <p className="text-muted-foreground font-light mb-2">
                Concentration in Writing, Minor in Natural Sciences
              </p>
              <p className="text-muted-foreground font-light mb-2">
                Internships in Web Design & Development and Infectious Disease Research
              </p>
              <p className="text-muted-foreground font-light">
                Worcester State University, Worcester, MA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}