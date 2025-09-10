const AboutSection = () => {
  return (
    <section className="section-padding bg-surface-elevated/30">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Building Tomorrow's{" "}
            <span className="text-gradient-red">Technology</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Objecx is dedicated to creating cutting-edge tools and products that empower developers, 
                designers, and tech enthusiasts. We believe in making technology accessible, innovative, 
                and beautifully crafted.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">What We Do</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From developer tools to design systems, we focus on building products that solve real 
                problems and enhance workflows. Every project reflects our commitment to quality, 
                performance, and user experience.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 border border-border rounded-2xl bg-card/50">
            <blockquote className="text-2xl font-medium text-foreground italic">
              "Empowering developers with tools that make the impossible, possible."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;