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
            Comprehensive healthcare experiences that improve patient outcomes through connected devices, coordinated care, and intuitive interfaces.
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



            <div className="bg-card rounded-sm p-8 border border-border mb-16">
              <h2 className="font-serif text-3xl font-normal text-foreground mb-6 tracking-tight">
                Connected <em className="font-light italic">Health</em>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light mb-4">
                An innovative, patient-centric approach worth $600-Million
              </p>
              <p className="text-sm text-accent font-mono tracking-wide uppercase">
                Alere Accountable Care Solutions
                <br/>
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

            {/* Step 1: Prescription and Kit Delivery */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
              <div className="space-y-6">
                <h4 className="font-serif text-xl font-normal text-foreground tracking-tight">Day 1: The Package Arrives</h4>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  The morning after his discharge home, Mark receives a package. Inside the package are two boxes. The first contains Mark's first month of prescriptions, pre-portioned for his three-times-a-day regimen - and his monitoring kit, customized to his particular health monitoring needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/69a3503d-e0b1-4f62-b97f-ce67be249246_rw_600.png?h=0d6b7c8a728bf97db3ba95d508390928" 
                    alt="Precision medication regimen" 
                    className="w-full rounded-sm shadow-lg mb-2"
                  />
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">Precision medication regimen</p>
                </div>
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/480f189a-2c2b-4f15-bf1e-20683d6be4ae_rw_1920.jpeg?h=6733fd32b6d158023e599b78f36a9750" 
                    alt="Connected Health Home Hub Device" 
                    className="w-full rounded-sm shadow-lg mb-2"
                  />
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">Home Hub Device</p>
                </div>
              </div>
            </div>

            {/* Packaging Development Process */}
            <div className="mb-20">
              <h4 className="font-serif text-xl font-normal text-foreground tracking-tight mb-8">Packaging Design Process</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/15b33e5d-53d1-4aab-b23a-e9fca7513832_rw_1920.jpeg?h=abf72f6cb8c30300ca3f1a548b44c2e7" 
                    alt="Packaging prototype in-progress" 
                    className="w-full rounded-sm shadow-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground font-mono tracking-wide">Prototype in-progress</p>
                </div>
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/fc000874-6e78-44ec-8d63-3191c8d05c28_rw_1920.jpeg?h=a597b38c8a9d29accf1590d06bd16a27" 
                    alt="Packaging Prototype - exterior" 
                    className="w-full rounded-sm shadow-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground font-mono tracking-wide">Exterior design</p>
                </div>
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/7b1eb544-71c9-4cfe-b974-783856ff6951_rw_1920.jpeg?h=cc96459184a41d3c5c109757c727c772" 
                    alt="Packaging Prototype - interior" 
                    className="w-full rounded-sm shadow-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground font-mono tracking-wide">Interior layout</p>
                </div>
              </div>
            </div>

            {/* Step 2: Daily Monitoring */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/f7dfd2f9-98f2-42e5-b47c-521cc80ef0b1_rw_600.png?h=7068590368d7d9fe2ee94b63a66b8e38" 
                    alt="Patient App" 
                    className="w-full rounded-sm shadow-lg mb-2"
                  />
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">Patient App</p>
                </div>
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/5ec15f67-9e57-4d7b-8e5e-b636a9e777b6_rw_1200.png?h=9fe7a7c5464d0f1a6d913f3b62b67914" 
                    alt="Connected Devices" 
                    className="w-full rounded-sm shadow-lg mb-2"
                  />
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">Connected Devices</p>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="font-serif text-xl font-normal text-foreground tracking-tight">Daily Health Monitoring</h4>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Throughout the day, Mark's home hub device (or the app on his phone) prompts him to use the devices in his kit (such as the pulse oximeter, blood pressure monitor, glucose meter, etc.) and to take his medications at the prescribed times.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  The devices automatically communicate readings to his medical record, available to his surgeon, primary care physician, and all the members of his care team, who can also receive proactive notifications of any out-of-range results, prompting a phone call, tele-health visit, or intervention in the case of a dangerous situation.
                </p>
              </div>
            </div>

            {/* Step 3: Care Team Coordination */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
              <div className="space-y-6">
                <h4 className="font-serif text-xl font-normal text-foreground tracking-tight">Coordinated Care Team</h4>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Mark's case is monitored daily by a nurse in a dedicated call center, who coordinates his care, checks in to review his status and ask and answer questions related to his health maintenance. The home hub device or phone app also prompt him with questions about key warning signs (shortness of breath, trouble sleeping, surgical site pain or swelling, etc.), as well as reminders about dietary restrictions and upcoming visits.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/57cb7d90-cfdb-48c5-bd72-cb654000666e_rw_600.png?h=309f1cfef3935de7224d82970e513b76" 
                    alt="Call center nurse coordination" 
                    className="w-full rounded-sm shadow-lg mb-2"
                  />
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">Call center nurse coordination</p>
                </div>
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/d469676f-fcac-4e82-b681-1c4fb0f7399e_rw_600.png?h=70ef1f1fd6212c4eeaf1a2fa28ee0ec6" 
                    alt="Coordinated Care Team" 
                    className="w-full rounded-sm shadow-lg mb-2"
                  />
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">Coordinated Care Team</p>
                </div>
              </div>
            </div>

            {/* Step 4: Home Visits and Telehealth */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/dde42f3e-bf9b-476c-9d2f-55ef0458159b_rw_600.png?h=0c641cb73f39b2d7a020343ef869c4b7" 
                    alt="Home Health Aide Visits" 
                    className="w-full rounded-sm shadow-lg mb-2"
                  />
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">Home Health Aide Visits</p>
                </div>
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/6a87159f-598f-4ae3-821c-e9c7f02fde48_rw_1920.jpeg?h=be6a04a1834ef08a4f000e8cec04253e" 
                    alt="Tele-health Visits" 
                    className="w-full rounded-sm shadow-lg mb-2"
                  />
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">Tele-health Visits</p>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="font-serif text-xl font-normal text-foreground tracking-tight">In-Home & Virtual Care</h4>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Mark receives regular visits from a home health aide and tele-health appointments with his primary care physician and members of his care team, reducing the need for trips to the office or hospital, which, in addition to being inconvenient and strenuous for a post-surgical patient - carry a dangerous risk of nosocomial infections.
                </p>
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-20">
              <h4 className="font-serif text-2xl font-normal text-foreground tracking-tight mb-8">Development Process</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/2de65998-f0fb-4b4e-bddd-5b4401c9d4e9_rw_1920.jpeg?h=005d53c6c305d7ae7685a5bc9c28f973" 
                    alt="Software design brainstorming" 
                    className="w-full rounded-sm shadow-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground font-mono tracking-wide">Software design brainstorming</p>
                </div>
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/f668bf43-556e-4b3f-95ed-599134228718_rw_1920.jpeg?h=eae6208e1dfc29deacbe75b9e762a280" 
                    alt="Cross-disciplinary participation" 
                    className="w-full rounded-sm shadow-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground font-mono tracking-wide">Cross-disciplinary participation</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/5e86a366-9f18-4735-897f-612f20da5191_rw_1920.jpeg?h=0b2d45d49e8a3f0c460516eefab6adfc" 
                    alt="Miles of whiteboards" 
                    className="w-full rounded-sm shadow-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground font-mono tracking-wide">Miles of whiteboards</p>
                </div>
                <div>
                  <img 
                    src="https://cdn.myportfolio.com/f98d89b9-2eb4-403b-8020-142a97564cf2/5ccc6178-73af-49ee-a9d6-0dc798947f2e_rw_1920.jpeg?h=0c120f4776d42b9a0b8dcb72192ae81b" 
                    alt="Iterative design review" 
                    className="w-full rounded-sm shadow-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground font-mono tracking-wide">Iterative design review</p>
                </div>
              </div>
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