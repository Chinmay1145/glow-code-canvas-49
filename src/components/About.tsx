
import { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (aboutRef.current) {
        const elements = aboutRef.current.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="about" className="bg-dark/50" ref={aboutRef}>
      <div className="container mx-auto">
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: '100ms' }}>
          Here you'll find more information about me, what I do, and my current skills
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-light">Get to know me!</h3>
            <div className="space-y-4 text-slate">
              <p>
                I'm a <span className="text-light">Front-End Web Developer</span> building responsive 
                websites and web applications that lead to the success of the overall product. Check out some of my work in the 
                <span className="text-light"> Projects</span> section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have learned over the years in 
                <span className="text-light"> Web Development</span> so it can help other people of the Dev Community.
              </p>
              <p>
                I'm open to <span className="text-light">Job</span> opportunities where I can contribute, learn and grow. If 
                you have a good opportunity that matches my skills and experience then don't hesitate to 
                <span className="text-light"> contact</span> me.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-4 text-light">My Background</h3>
            
            <div className="space-y-6">
              <div className="card">
                <div className="card-content">
                  <h4 className="text-lg font-medium text-light mb-1">BS in Computer Science</h4>
                  <p className="text-slate mb-2">University of Technology (2015-2019)</p>
                  <p className="text-sm text-slate">Studied algorithms, data structures, and software engineering principles.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h4 className="text-lg font-medium text-light mb-1">Front-End Developer</h4>
                  <p className="text-slate mb-2">Tech Solutions Inc. (2019-2021)</p>
                  <p className="text-sm text-slate">Developed responsive user interfaces and implemented interactive features using React.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h4 className="text-lg font-medium text-light mb-1">Senior Front-End Developer</h4>
                  <p className="text-slate mb-2">Digital Creations (2021-Present)</p>
                  <p className="text-sm text-slate">Leading front-end development and mentoring junior developers while building complex web applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
