import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-display">O</span>
            </div>
            <span className="text-xl font-bold font-display text-foreground">Objecx</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button variant="default" className="shadow-warm">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;