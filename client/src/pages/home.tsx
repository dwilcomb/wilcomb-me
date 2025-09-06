import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PhilosophySection from "@/components/philosophy-section";
import WorkSection from "@/components/work-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Update page title for SEO
    document.title = "Daniel Wilcomb - Product Design Leader | Confidently Understated Design";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Product Design Leader specializing in collaboration, inclusiveness, communication, and transparency. Building compelling visions through team-building and hands-on delivery.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Product Design Leader specializing in collaboration, inclusiveness, communication, and transparency. Building compelling visions through team-building and hands-on delivery.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Add Open Graph tags
    const addMetaTag = (property: string, content: string) => {
      const existing = document.querySelector(`meta[property="${property}"]`);
      if (existing) {
        existing.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
    };

    addMetaTag('og:title', 'Daniel Wilcomb - Product Design Leader');
    addMetaTag('og:description', 'Product Design Leader specializing in collaboration, inclusiveness, communication, and transparency.');
    addMetaTag('og:type', 'website');
    addMetaTag('og:url', window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
