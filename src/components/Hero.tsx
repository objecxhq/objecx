import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground mb-6 animate-fade-in">
            Organize and showcase your{" "}
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              projects beautifully
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Transform your creative workflow with Objecx. The modern platform that helps you organize, 
            manage, and showcase your projects with elegance and simplicity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-warm hover:shadow-card transition-all duration-300 transform hover:scale-105"
            >
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 hover:bg-secondary/50 transition-all duration-300"
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;