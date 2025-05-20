
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@johndeveloper.com', label: 'Email' },
  ];

  return (
    <footer className="bg-dark/90 text-slate py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-slate hover:text-teal transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm">
              © {currentYear} John Developer. All rights reserved.
            </p>
            <p className="text-xs mt-2 text-slate/70">
              Designed & Built with ♥
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
