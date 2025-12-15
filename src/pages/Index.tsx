import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CaseStudy from "./CaseStudy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
          {/*<Stats />*/}
          <CaseStudy />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
