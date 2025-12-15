const stats = [{
  value: "50M+",
  label: "Content Impressions"
}, {
  value: "200+",
  label: "Leaders Elevated"
}, {
  value: "85%",
  label: "LinkedIn Growth Rate"
}, {
  value: "3x",
  label: "Avg. Engagement Increase"
}];
const Stats = () => {
  return <section id="results" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">The Results</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Numbers that Speak</h2>
          <p className="text-lg text-background/70">
            We don't just create content—we build influence that compounds.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-background/60 font-medium">
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Stats;