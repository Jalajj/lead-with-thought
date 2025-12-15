const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We deep-dive into your expertise, goals, and target audience to uncover your unique positioning."
  },
  {
    number: "02",
    title: "Strategy",
    description: "We craft a content strategy that aligns your insights with market demand and platform dynamics."
  },
  {
    number: "03",
    title: "Creation",
    description: "Our writers produce premium content in your voice—articles, posts, and thought pieces that resonate."
  },
  {
    number: "04",
    title: "Amplification",
    description: "We optimize distribution, engage your audience, and continuously refine for maximum impact."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Expert to Authority
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven methodology refined across 200+ thought leadership journeys.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="group flex gap-6 lg:gap-8 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <span className="text-xl lg:text-2xl font-bold text-muted-foreground group-hover:text-primary-foreground transition-colors">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
