import { Github, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/objecxhq",
      icon: Github
    },
    {
      name: "Vercel",
      url: "https://vercel.com/objecx",
      icon: ExternalLink
    }
  ];

  return (
    <footer className="border-t border-border bg-surface-elevated/20">
      <div className="container-width py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 px-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <img 
                src="/placeholder.svg" 
                alt="Objecx Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Objecx. All rights reserved.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom Border Effect */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Built with modern web technologies. Designed for the future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;