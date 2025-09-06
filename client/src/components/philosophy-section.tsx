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
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 text-foreground">
            Core Principles
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            The core principles of my approach are collaboration, inclusiveness, communication, and transparency. The result is an environment of infectious enthusiasm around a compelling shared vision that extends well beyond the design and even the product teams.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2" data-testid={`principle-title-${index}`}>
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`principle-desc-${index}`}>
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
