
import { useEffect, useRef } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales reporting.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Firebase'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Travel Companion App',
      description: 'A mobile-friendly travel app that helps users plan trips, find accommodations, and discover local attractions.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['Next.js', 'React Query', 'Google Maps API', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      description: 'A web application that allows users to track workouts, set fitness goals, and visualize their progress over time.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      const elements = projectsRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (projectsRef.current) {
        const elements = projectsRef.current.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="projects" className="bg-dark/50" ref={projectsRef}>
      <div className="container mx-auto">
        <h2 className="section-title reveal">Projects</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: '100ms' }}>
          Here are some of the projects I've worked on
        </p>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <div 
              key={project.id}
              className={`relative flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 reveal`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <div className="w-full lg:w-3/5 rounded-lg overflow-hidden group">
                <div className="relative w-full h-0 pb-[56.25%] bg-muted/30">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/50 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className={`w-full lg:w-2/5 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <p className="text-teal mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4 text-light">{project.title}</h3>
                <div className="bg-dark/80 backdrop-blur-sm p-6 rounded-lg mb-4 shadow-lg">
                  <p className="text-slate">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-6 ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className={`flex gap-4 ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  {project.github && (
                    <a href={project.github} aria-label="GitHub Repository" className="text-slate hover:text-teal transition-colors" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} aria-label="Live Demo" className="text-slate hover:text-teal transition-colors" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal" style={{ transitionDelay: '500ms' }}>
          <h3 className="text-xl font-semibold mb-6">Interested in my work?</h3>
          <Button 
            asChild
            variant="outline" 
            className="btn btn-primary text-lg group"
          >
            <a href="#contact">
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
