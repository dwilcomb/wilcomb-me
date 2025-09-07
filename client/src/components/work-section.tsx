import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import innovationWorkImg from "@assets/images/innovation-work.jpg";
import healthcareWorkImg from "@assets/images/healthcare-work.jpg";
import financeWorkImg from "@assets/images/finance-work.jpg";
import oneStreamWorkImg from "@assets/images/new-interface-1.png";
import bankAmericaWorkImg from "@assets/images/bank-america.png";
import designSystemsWorkImg from "@assets/images/design-systems-work.jpg";
import biopharmaWorkImg from "@assets/images/biopharma-work.jpg";

export default function WorkSection() {
  const projects = [
    {
      title: "Innovation & Design Thinking",
      category: "Innovation",
      tags: ["Design Thinking", "Lean Design"],
      description: "Lean design methodologies and innovative thinking to solve complex product challenges.",
      image: innovationWorkImg,
      url: "/innovation",
      available: true
    },
    {
      title: "Healthcare Solutions", 
      category: "Healthcare",
      tags: ["Healthcare"],
      description: "Designing intuitive healthcare experiences that improve patient outcomes and provider efficiency.",
      image: healthcareWorkImg,
      url: "/healthcare",
      available: true
    },
    {
      title: "OneStream Software",
      category: "Enterprise FinTech", 
      tags: ["Enterprise", "Financial Planning"],
      description: "Transforming financial planning & analysis with user-centered design and comprehensive design systems.",
      image: oneStreamWorkImg,
      url: "/onestream", 
      available: true
    },
    {
      title: "Bank of America",
      category: "Financial Services", 
      tags: ["Customer Service", "Integration"],
      description: "Integrated customer service platform connecting disparate business lines for comprehensive client relationships.",
      image: bankAmericaWorkImg,
      url: "/bank-america", 
      available: true
    },
    {
      title: "Design Systems",
      category: "Design Systems",
      tags: ["Design Systems"], 
      description: "Scalable atomic design systems that ensure consistency and efficiency across product teams.",
      image: designSystemsWorkImg,
      url: "https://wilcomb.me/design-systems",
      available: false
    },
    {
      title: "Biopharma Solutions",
      category: "Biopharma",
      tags: ["Biopharma"],
      description: "Designing tools and experiences for the biotechnology and pharmaceutical industry.",
      image: biopharmaWorkImg,
      url: "https://wilcomb.me/biopharma",
      available: false
    }
  ];

  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-accent font-mono text-xs tracking-widest uppercase mb-6 block opacity-75 font-medium">
            Selected Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground tracking-tight leading-tight">
            Areas of <em className="font-light italic">Focus</em>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.slice(0, 4).map((project, index) => (
            <div key={index} className="project-card group">
              {project.available ? (
                <Link href={project.url} className="block">
                  <div className="relative overflow-hidden rounded-sm mb-6 cursor-pointer">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              ) : (
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-accent font-mono text-xs tracking-widest uppercase opacity-75 font-medium">
                      {tag}
                    </span>
                  ))}
                  {!project.available && (
                    <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase opacity-50">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-foreground tracking-tight leading-tight" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-light" data-testid={`project-desc-${index}`}>
                  {project.description}
                </p>
                
                {project.available ? (
                  <Link href={project.url}>
                    <span className="inline-flex items-center text-foreground hover:text-accent transition-colors duration-300 text-sm font-normal tracking-wide group/link cursor-pointer"
                      data-testid={`project-link-${index}`}
                    >
                      View Case Study
                      <ArrowRight className="ml-3 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </Link>
                ) : (
                  <span className="inline-flex items-center text-muted-foreground text-sm font-normal tracking-wide opacity-50 cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
