import { Users, Heart, MessageCircle, Eye } from "lucide-react";

export default function PhilosophySection() {
  const principles = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve shared goals"
    },
    {
      icon: Heart,
      title: "Inclusiveness", 
      description: "Ensuring every voice is heard and valued"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Clear, open dialogue across all levels"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Honest, open sharing of process and decisions"
    }
  ];

  return (
    <section className="py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-12 text-foreground tracking-tight leading-tight">
            Core <em className="font-light italic">Principles</em>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 font-light max-w-3xl mx-auto">
            The foundation of my approach centers on collaboration, inclusiveness, communication, and transparency—creating environments of infectious enthusiasm around compelling shared visions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-accent/5 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-accent opacity-75" />
                  </div>
                  <h3 className="font-serif text-lg font-normal text-foreground mb-3 tracking-tight" data-testid={`principle-title-${index}`}>
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed" data-testid={`principle-desc-${index}`}>
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
