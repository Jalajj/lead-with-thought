import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
];

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">
              Lead with <span className="text-primary">Thought.</span>
            </span>
          </a>
  {/*
          <nav className="hidden md:flex items-center gap-20"> 
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>  
*/}
          <div className="flex items-center gap-4">
            <Button variant="hero" size="sm">
          <a
  href="https://calendly.com/jalaj-leadwiththought/30min"
  target="_blank"
  rel="noopener noreferrer"
>
              Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;