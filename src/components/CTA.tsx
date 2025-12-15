import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Lead the Conversation?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join executives and founders who've transformed their expertise into industry-defining influence. Let's discuss your thought leadership journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
  href="https://calendly.com/jalaj-leadwiththought/30min"
  target="_blank"
  rel="noopener noreferrer"
>
            <Button variant="hero" size="xl" className="group">
              Schedule Your Strategy Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Free 30-minute consultation • No commitment required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
