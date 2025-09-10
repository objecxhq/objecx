import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-8">
            Built for{" "}
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              creatives
            </span>
            , by creatives
          </h2>
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Objecx was born from the frustration of juggling multiple tools and platforms to manage creative projects. 
              We believe that organizing and showcasing your work should be as beautiful and intuitive as the work itself.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our platform emphasizes simplicity without sacrificing power, creativity without compromising functionality, 
              and ease of use without limiting possibilities. Whether you're a designer, developer, artist, or entrepreneur, 
              Objecx adapts to your workflow, not the other way around.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="shadow-warm hover:shadow-card transition-all duration-300"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-secondary/50 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;