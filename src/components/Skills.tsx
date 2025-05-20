
import { useEffect, useRef } from 'react';

type Skill = {
  name: string;
  level: number;
  color: string;
};

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const frontendSkills: Skill[] = [
    { name: 'HTML & CSS', level: 95, color: '#E44D26' },
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'React', level: 88, color: '#61DAFB' },
    { name: 'TypeScript', level: 85, color: '#007ACC' },
    { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
    { name: 'Next.js', level: 80, color: '#000000' },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git & GitHub', level: 90, color: '#F05032' },
    { name: 'Figma', level: 85, color: '#F24E1E' },
    { name: 'VS Code', level: 92, color: '#007ACC' },
    { name: 'Webpack', level: 75, color: '#8DD6F9' },
    { name: 'Jest', level: 78, color: '#C21325' },
    { name: 'npm/yarn', level: 88, color: '#CB3837' },
  ];

  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach((bar) => {
      const targetWidth = bar.getAttribute('data-width');
      if (targetWidth) {
        (bar as HTMLElement).style.width = `${targetWidth}%`;
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.id === 'skills-section') {
              setTimeout(animateProgressBars, 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
      const elements = skillsRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
        const elements = skillsRef.current.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-light">{skill.name}</span>
        <span className="text-slate">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full">
        <div
          className="progress-bar-fill h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%', backgroundColor: skill.color }}
          data-width={skill.level.toString()}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={skillsRef} className="bg-dark">
      <div id="skills-section" className="container mx-auto">
        <h2 className="section-title reveal">My Skills</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: '100ms' }}>
          Here are my technical skills and the tools I use
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-6 text-light">Front-end Development</h3>
            <div className="space-y-2">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-6 text-light">Tools & Technologies</h3>
            <div className="space-y-2">
              {toolsSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 reveal" style={{ transitionDelay: '400ms' }}>
          <h3 className="text-xl font-semibold mb-6 text-light">Other Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['Responsive Design', 'UI/UX', 'SEO', 'Performance Optimization', 'Accessibility', 'PWA', 'GraphQL', 'REST APIs', 'Authentication', 'State Management', 'CSS Animation', 'Cross-browser Compatibility'].map((tag) => (
              <span key={tag} className="tag hover:bg-muted/50 hover:text-light transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
