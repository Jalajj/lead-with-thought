import { Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight text-foreground">Lead with <span className="text-primary">Thought.</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              We help executives and founders transform their expertise into industry-defining thought leadership.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/lead-with-thought/" target="_blank"
  rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a href="mailto:jalaj@leadwiththought.com" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          

          
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 LeadWithThought. All rights reserved.</p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;