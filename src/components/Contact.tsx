
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data for sending email
      const mailtoLink = `mailto:waghmareswapnil563@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open the email client
      window.open(mailtoLink, '_blank');
      
      // Show success toast
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully!",
      });
      
      // Reset the form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Feel free to reach out to me for opportunities, collaborations, or just to say hello! I'm currently looking for internship opportunities in Data Science, AI/ML, and Electronics Engineering.
              </p>

              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:waghmareswapnil563@gmail.com" 
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span>waghmareswapnil563@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+918010393594" 
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <span>+91 8010393594</span>
                </a>
                
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/swapnilwaghmare2004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/swapnil-waghmare-103b93259" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://x.com/home?lang=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Twitter/X"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Hello Swapnil, I'd like to discuss..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
