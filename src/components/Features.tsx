import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Layout, Share, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Beautiful Organization",
      description: "Organize your projects with intuitive visual layouts that make sense. Drag, drop, and arrange your work exactly how you envision it."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Showcase",
      description: "Present your work in stunning galleries and portfolios. Customize themes and layouts to match your unique creative style."
    },
    {
      icon: <Share className="w-8 h-8" />,
      title: "Easy Collaboration",
      description: "Share projects with clients, teammates, and stakeholders. Get feedback, track progress, and collaborate seamlessly."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Built for speed and performance. Access your projects instantly, anywhere, anytime. No more waiting around."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Everything you need to{" "}
            <span className="bg-gradient-warm bg-clip-text text-transparent">create</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your creative workflow and help you focus on what matters most.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-display text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;