import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WorkSection() {
  const projects = [
    {
      title: "Innovation & Design Thinking",
      category: "Innovation",
      tags: ["Design Thinking", "Lean Design"],
      description: "Lean design methodologies and innovative thinking to solve complex product challenges.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      url: "https://wilcomb.me/innovation",
      available: true
    },
    {
      title: "Healthcare Solutions", 
      category: "Healthcare",
      tags: ["Healthcare"],
      description: "Designing intuitive healthcare experiences that improve patient outcomes and provider efficiency.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      url: "https://wilcomb.me/healthcare",
      available: true
    },
    {
      title: "Financial Technology",
      category: "Finance", 
      tags: ["Finance"],
      description: "Creating user-friendly financial interfaces that make complex data accessible and actionable.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      url: "https://wilcomb.me/finance", 
      available: true
    },
    {
      title: "Design Systems",
      category: "Design Systems",
      tags: ["Design Systems"], 
      description: "Scalable design systems that ensure consistency and efficiency across product teams.",
      image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      url: "https://wilcomb.me/design-systems",
      available: false
    },
    {
      title: "Biopharma Solutions",
      category: "Biopharma",
      tags: ["Biopharma"],
      description: "Designing tools and experiences for the biotechnology and pharmaceutical industry.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      url: "https://wilcomb.me/biopharma",
      available: false
    }
  ];

  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wide uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Areas of Focus
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card bg-card rounded-xl overflow-hidden shadow-sm border border-border">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-accent font-mono text-xs tracking-wide uppercase">
                      {tag}
                    </Badge>
                  ))}
                  {!project.available && (
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      Coming Soon
                    </Badge>
                  )}
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid={`project-desc-${index}`}>
                  {project.description}
                </p>
                {project.available ? (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                    data-testid={`project-link-${index}`}
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                ) : (
                  <span className="inline-flex items-center text-muted-foreground text-sm font-medium cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
