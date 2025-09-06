export default function AboutSection() {
  const expertise = [
    "Product Strategy",
    "Design Leadership", 
    "User Experience",
    "Design Systems",
    "Team Building",
    "Innovation Process"
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-mono text-sm tracking-wide uppercase mb-4 block">
              About
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Player-Coach Approach
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a Product Design Leader, I believe in leading by example. I'm equally comfortable setting strategic vision and rolling up my sleeves to execute alongside my team.
              </p>
              <p>
                My approach combines deep design craft with strong leadership skills, fostering environments where creativity thrives and teams deliver exceptional results.
              </p>
              <p>
                I specialize in building bridges between design, product, and engineering teams, ensuring that great ideas translate into great experiences.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium text-foreground mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="text-sm text-muted-foreground" data-testid={`expertise-${index}`}>
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Will Comb, Product Design Leader" 
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
