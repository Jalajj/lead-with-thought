import {
  Lightbulb,
  PenTool,
  Megaphone,
  FileText,
  Award,
  BarChart3,
  MessageSquare,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Strategy & Positioning",
    description:
      "Brand marketing, Founder voice frameworks, company POVs, content pillars, editorial calendars, and distribution plans tied to clear business KPIs.",
  },
  {
    icon: PenTool,
    title: "Founder Thought Leadership",
    description:
      "LinkedIn ghostwriting, idea research, storytelling briefs, post calendars, and engagement playbooks crafted in the founder’s authentic voice.",
  },
  {
    icon: Megaphone,
    title: "Company Content & Announcements",
    description:
      "Company page strategy, carousel scripts, hiring posts, and launch-ready announcement packs for funding, product, and partnerships.",
  },
  {
    icon: FileText,
    title: "Blogs & Newsletters",
    description:
      "Long-form thought pieces, SEO-minded blogs, founder bylines, and newsletters with clear editorial direction and publishing cadence.",
  },
  {
    icon: MessageSquare,
    title: "Reddit & Community Marketing",
    description:
      "Founder-led Reddit presence, narrative seeding, community-safe engagement, and visibility in high-signal threads without spam or promotion.",
  },
  {
    icon: Award,
    title: "Awards, PR & Credibility",
    description:
      "Award research, narrative tailoring, submission management, and follow-ups that turn momentum into external validation.",
  },
  {
    icon: Layers,
    title: "Content Operations",
    description:
      "Notion or Excel CMS, approvals workflows, content batching systems, and delivery infrastructure built for consistency at scale.",
  },
  {
    icon: BarChart3,
    title: "Measurement & Optimization",
    description:
      "Monthly reporting across impressions, profile visits, engagement, inbound leads, and award progress.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Full-Service Thought Leadership
          </h2>
          <p className="text-lg text-muted-foreground">
            Strategy, content, awards, and publishing engineered to convert momentum into market leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
