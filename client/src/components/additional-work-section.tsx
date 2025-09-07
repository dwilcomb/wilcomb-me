export default function AdditionalWorkSection() {
  const additionalAreas = [
    "Biopharmaceuticals",
    "Human Capital Management", 
    "Retail",
    "Manufacturing",
    "Location-based Mobile",
    "Whitelabeled SaaS",
    "Digital Rights Management",
    "Private Equity",
    "Agentic AI",
    "Machine Learning",
    "Business Payments",
    "Consumer Applications"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-xs tracking-widest uppercase mb-6 block opacity-75 font-medium">
            Additional Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground tracking-tight leading-tight">
            Other Areas of <em className="font-light italic">Work</em>
          </h2>
          <p className="text-muted-foreground mt-6 font-light leading-relaxed max-w-2xl mx-auto">
            I've had the privilege of working across diverse industries and domains, 
            bringing user-centered design thinking to complex challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {additionalAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-background p-4 rounded-sm border border-border/50 text-center hover:bg-card transition-colors duration-300"
              data-testid={`additional-area-${index}`}
            >
              <span className="text-foreground font-light text-sm">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}