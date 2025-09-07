import profilePhotoImg from "@assets/images/profile-photo.jpg";

export default function AboutSection() {
  const expertise = [
    "Product Strategy",
    "Design Leadership", 
    "User Experience",
    "Agentic AI",
    "Design Systems",
    "Team Building",
    "Design Thinking"
  ];

  return (
    <section id="about" className="py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent font-mono text-xs tracking-widest uppercase mb-6 block opacity-75 font-medium">
              About
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-8 tracking-tight leading-tight">
              Player-Coach <em className="font-light italic">Philosophy</em>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-lg">
              <p>
                As a Product Design Leader, I believe in leading by example—setting strategic vision and executing alongside my team with hands-on precision.
              </p>
              <p>
                My approach combines deep design craft with strong leadership skills, fostering environments where creativity thrives and teams consistently deliver exceptional results.
              </p>
              <p>
                Building a culture of collaboration and openness is a hallmark of my philosophy, building bridges between teams from executive leadership to customer support and everything in-between, ensuring breakthrough ideas translate into meaningful experiences.
              </p>
            </div>
            
            <div className="mt-12">
              <h3 className="font-serif text-xl font-normal text-foreground mb-6 tracking-tight">Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <div key={index} className="text-muted-foreground font-light" data-testid={`expertise-${index}`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <div className="relative group">
              <img 
                src={profilePhotoImg} 
                alt="Daniel Wilcomb, Product Design Leader" 
                className="w-full rounded-sm shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
