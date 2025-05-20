
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20" ref={heroRef}>
      <div className="container mx-auto">
        <p className="text-teal mb-5 reveal" style={{ transitionDelay: '100ms' }}>Hi, my name is</p>
        <h1 className="mb-4 leading-tight reveal" style={{ transitionDelay: '200ms' }}>
          John Developer.<br />
          <span className="text-slate">I build things for the web.</span>
        </h1>
        <div className="max-w-xl mb-12 reveal" style={{ transitionDelay: '300ms' }}>
          <p className="text-slate text-lg md:text-xl">
            I'm a front-end developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
        </div>
        <div className="reveal" style={{ transitionDelay: '400ms' }}>
          <Button 
            asChild
            variant="outline" 
            className="btn btn-primary text-lg group"
          >
            <a href="#projects">
              View my work 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
