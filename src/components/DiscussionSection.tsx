import { MessageCircle, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const DiscussionSection = () => {
  return (
    <section className="section-padding bg-surface-elevated/30">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-2xl">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold">2.3k+</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold">890+</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the{" "}
            <span className="text-gradient-red">Conversation</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with our community of developers, designers, and tech enthusiasts. 
            Share ideas, get help, and contribute to our growing ecosystem.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Ask Questions</h3>
              <p className="text-muted-foreground">
                Get help from our community and core team members.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Share Ideas</h3>
              <p className="text-muted-foreground">
                Propose new features and discuss project directions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Contribute</h3>
              <p className="text-muted-foreground">
                Help improve our projects and build amazing tools together.
              </p>
            </div>
          </div>
          
          <Button
            className="btn-hero group"
            asChild
          >
            <a 
              href="https://github.com/objecxhq/objecx-public-discussion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <span>Join the Conversation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscussionSection;