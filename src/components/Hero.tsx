import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {

   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }};

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background pointer-events-none" />
      
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Geometric accent lines */}
      <div className="absolute top-20 right-10 w-px h-32 bg-gradient-to-b from-primary/40 to-transparent" />
      <div className="absolute bottom-32 left-16 w-24 h-px bg-gradient-to-r from-primary/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Trusted by 200+ Industry Leaders</span>
          </div>*/}

          {/* Main headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Build Authority. Lead Conversations.
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Close Deals.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The first thought leadership agency that treats your authority like a product.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
               <a
  href="https://calendly.com/jalaj-leadwiththought/30min"
  target="_blank"
  rel="noopener noreferrer"
>
            <Button variant="hero" size="xl" className="group w-full sm:w-auto">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </a>
            <Button variant="heroOutline" size="xl" className="group w-full sm:w-auto">
              <Play className="w-4 h-4 fill-current" to="#casestudy" />
              <a href="#case-study" onClick={(e) => scrollToSection(e, "#case-study")}>See Our Work</a>
            </Button>
          </div>

          {/* Trust indicators 
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center text-xs font-medium text-primary">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>200+ clients served</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">4.9/5</span>
              <span>average rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">$2.3B+</span>
              <span>client revenue influenced</span>
            </div>
          </div>*/}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;