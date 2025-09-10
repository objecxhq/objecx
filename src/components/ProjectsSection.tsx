import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  name: string;
  description: string;
  language: string;
  githubUrl: string;
}

// Mock data - this can be replaced with real GitHub API integration later
const mockProjects: Project[] = [
  {
    name: "Design System UI",
    description: "A comprehensive design system built for scalable applications with beautiful components.",
    language: "React",
    githubUrl: "https://github.com/objecxhq/design-system-ui"
  },
  {
    name: "API Gateway",
    description: "Lightweight and fast API gateway with advanced routing and security features.",
    language: "Python",
    githubUrl: "https://github.com/objecxhq/api-gateway"
  },
  {
    name: "Data Visualizer",
    description: "Interactive data visualization library with customizable charts and graphs.",
    language: "TypeScript",
    githubUrl: "https://github.com/objecxhq/data-visualizer"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-red">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our open-source projects and contributions to the developer community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <div key={project.name} className="project-card group flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">{project.language}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex items-center space-x-3 mt-auto">
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex items-center space-x-2"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;