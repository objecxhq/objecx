import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-tech" />
      
      {/* Red Glow Effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-red rounded-full blur-3xl animate-float" />
      
      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        <div className="container-width">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 animate-fade-in">
            Innovation, in{" "}
            <span className="text-gradient-red">Objecx</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
            We build tools and technology for the future of development.
          </p>
          
          <Button
            onClick={() => scrollToSection('projects')}
            className="btn-hero animate-glow"
          >
            Explore Our Work
          </Button>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;