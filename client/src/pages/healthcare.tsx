import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Healthcare() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Healthcare Solutions - Daniel Wilcomb";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Connected Health: A comprehensive patient-centric healthcare platform worth $600-Million. Product design for medical devices, software, and patient experiences.');
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
              Case Study
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[0.9] mb-8 text-foreground tracking-tight">
            Healthcare <br />
            <em className="font-light italic">Solutions</em>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            Designing comprehensive healthcare experiences that improve patient outcomes through connected devices, coordinated care, and intuitive interfaces.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Designing for healthcare is a particularly challenging field, encompassing all the complexities of medicine, finance, patient care, insurance, hospitals, regulation, and law. It is also particularly rewarding, touching real people in a very tangible way - patients, doctors, caregivers - giving them all tools to work together to achieve one ultimate goal:
              </p>
              <p className="text-2xl font-serif font-light text-foreground mt-6 mb-12 italic text-center">
                improving or in many cases saving a life.
              </p>
            </div>

            <div className="mb-16">
              <img 
                src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/ffc45fa1-1bed-4ad8-9528-9adddf226595_rw_1920.jpeg?h=7f4bf42ffa370e8a5ae1017d2fac0ae2" 
                alt="Connected Health Platform" 
                className="w-full rounded-sm shadow-lg"
              />
            </div>

            <div className="bg-card rounded-sm p-8 border border-border mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6 tracking-tight">
                Connected <em className="font-light italic">Health</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light mb-4">
                An innovative, patient-centric approach worth $600-Million
              </p>
              <p className="text-sm text-accent font-mono tracking-wide uppercase">
                Role: Product Design Director
              </p>
            </div>

            <div className="space-y-8 mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                The Connected Health initiative - then part of Alere Accountable Care Solutions (ACS) - is the single purest and most comprehensive example of prioritizing the health and wellbeing of patients. Initially focused on patients in high-risk populations such as post-surgical care and chronic health condition management, Connected Health involved every aspect of providing for patients in those situations.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                The power and scope of the initiative is best demonstrated by a brief narrative.
              </p>
            </div>

            <div className="bg-muted/30 rounded-sm p-8 mb-16">
              <h3 className="font-serif text-xl font-normal text-foreground mb-4 tracking-tight">Patient Journey: Mark's Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Mark is a 78-year old patient who just had major heart surgery. While the surgery went without complications, Mark's age and hypertension will make his recovery a very sensitive one. His cardiac specialist schedules follow-up visits with herself and Mark's primary care physician, regular check-ins from a visiting nurse, and prescribes both a medication regimen and an in-home health monitoring kit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/9634ada1-d991-4db9-83c0-cc943c50ae05_rw_1200.png?h=473c0df608bc2b2d0ab983c32f88bd76" 
                  alt="Medication Management System" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/70a11e69-0670-4843-b4d4-0e5fe1c09e4b_rw_1200.png?h=2e747a4a286a6d104d9199302ac2c474" 
                  alt="Connected Health Devices" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
              </div>
            </div>

            <div className="space-y-8 mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                The morning after his discharge home, Mark receives a package. Inside the package are two boxes. The first contains Mark's first month of prescriptions, pre-portioned for his three-times-a-day regimen - and his monitoring kit, customized to his particular health monitoring needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/69a3503d-e0b1-4f62-b97f-ce67be249246_rw_600.png?h=0d6b7c8a728bf97db3ba95d508390928" 
                  alt="Precision medication regimen" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Precision medication regimen</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/480f189a-2c2b-4f15-bf1e-20683d6be4ae_rw_1920.jpeg?h=6733fd32b6d158023e599b78f36a9750" 
                  alt="Connected Health Home Hub Device" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Connected Health Home Hub Device</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/15b33e5d-53d1-4aab-b23a-e9fca7513832_rw_1920.jpeg?h=abf72f6cb8c30300ca3f1a548b44c2e7" 
                  alt="Packaging prototype in-progress" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Packaging prototype in-progress</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/fc000874-6e78-44ec-8d63-3191c8d05c28_rw_1920.jpeg?h=a597b38c8a9d29accf1590d06bd16a27" 
                  alt="Packaging Prototype - exterior" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Packaging Prototype - exterior</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/7b1eb544-71c9-4cfe-b974-783856ff6951_rw_1920.jpeg?h=cc96459184a41d3c5c109757c727c772" 
                  alt="Packaging Prototype - interior" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Packaging Prototype - interior</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/f7dfd2f9-98f2-42e5-b47c-521cc80ef0b1_rw_600.png?h=7068590368d7d9fe2ee94b63a66b8e38" 
                  alt="Patient App" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Patient App</p>
              </div>
              <div>
                <img 
                  src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/5ec15f67-9e57-4d7b-8e5e-b636a9e777b6_rw_1200.png?h=9fe7a7c5464d0f1a6d913f3b62b67914" 
                  alt="Connected Devices" 
                  className="w-full rounded-sm shadow-lg mb-4"
                />
                <p className="text-sm text-muted-foreground font-mono tracking-wide">Connected Devices</p>
              </div>
            </div>

            <div className="space-y-8 mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Throughout the day, Mark's home hub device (or the app on his phone) prompts him to use the devices in his kit (such as the pulse oximeter, blood pressure monitor, glucose meter, etc.) and to take his medications at the prescribed times.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                The devices automatically communicate readings to his medical record, available to his surgeon, primary care physician, and all the members of his care team, who can also receive proactive notifications of any out-of-range results, prompting a phone call, tele-health visit, or intervention in the case of a dangerous situation.
              </p>
            </div>

            <div className="bg-card rounded-sm p-8 border border-border mb-16">
              <h3 className="font-serif text-2xl font-normal text-foreground mb-6 tracking-tight">
                Results & <em className="font-light italic">Impact</em>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light mb-6">
                Put quite simply, this is one of those rare but gratifying situations in which everybody involved wins.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2">•</span>
                  <span className="text-muted-foreground font-light">Mark's care is seamless, proactive, and well-coordinated, resulting in a smooth recovery and ongoing high-quality care.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2">•</span>
                  <span className="text-muted-foreground font-light">Care teams have a complete view of patient progress with coordinated communication and treatment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2">•</span>
                  <span className="text-muted-foreground font-light">Insurers dramatically reduce costs associated with emergency room visits and hospital readmission.</span>
                </li>
              </ul>
              <p className="text-lg text-foreground font-medium mt-8">
                The initiative grew to include organizations from Britain's National Health Service to United Healthcare, culminating in United's strategic acquisition of Connected Health for $600-Million.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation Footer */}
      <section className="py-16 bg-card border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/finance">
              <Button variant="ghost" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 font-normal text-sm tracking-wide">
                <ArrowLeft className="mr-2 h-3 w-3" />
                Financial Technology
              </Button>
            </Link>
            
            <Link href="/innovation">
              <Button variant="ghost" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 font-normal text-sm tracking-wide">
                Innovation & Design Thinking
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}