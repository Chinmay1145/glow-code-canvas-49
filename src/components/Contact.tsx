
import { useState, useEffect, useRef, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

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

    if (contactRef.current) {
      const elements = contactRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (contactRef.current) {
        const elements = contactRef.current.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="contact" className="bg-dark" ref={contactRef}>
      <div className="container mx-auto">
        <h2 className="section-title reveal">Contact</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: '100ms' }}>
          Interested in working together? Let's get in touch!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-6 text-light">Let's Talk</h3>
            <p className="text-slate mb-8">
              I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, I'll do my best to get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-muted/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-slate">Email</p>
                  <a href="mailto:hello@johndeveloper.com" className="text-light hover:text-teal transition-colors">
                    hello@johndeveloper.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-muted/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-slate">Phone</p>
                  <a href="tel:+12345678900" className="text-light hover:text-teal transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light mb-2 font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="bg-muted/20 border-muted text-light focus:border-teal transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-light mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="bg-muted/20 border-muted text-light focus:border-teal transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-light mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  required
                  className="bg-muted/20 border-muted text-light focus:border-teal transition-colors min-h-[150px]"
                />
              </div>

              <Button 
                type="submit"
                variant="outline"
                disabled={isSubmitting}
                className="btn btn-primary w-full group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
