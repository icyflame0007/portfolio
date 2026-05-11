import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Mail, Linkedin, Phone, MapPin, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Santosh,\n\n${message}\n\nBest regards,\n${name}\n${email}`);
    window.location.href = `mailto:nagasantosh.akula@gmail.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening your email client",
      description: "Your message is ready to send via your email app.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-cyan-500 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-10">
                  I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                  <a href="mailto:nagasantosh.akula@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-cyan-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium">nagasantosh.akula@gmail.com</span>
                  </a>

                  <a href="https://www.linkedin.com/in/santosh-a-b48121245" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-cyan-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="font-medium">linkedin.com/in/santosh-a-b48121245</span>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-medium">+91 8374187277</span>
                  </div>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <a href="/Santosh_Akula_Resume.pdf" download="Santosh_Akula_Resume.pdf" data-testid="link-download-resume-contact">
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.4}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Your Name</label>
                  <Input id="name" required placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="bg-black/20 border-white/10 focus:border-cyan-500" data-testid="input-name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Your Email</label>
                  <Input id="email" type="email" required placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-black/20 border-white/10 focus:border-cyan-500" data-testid="input-email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                  <Textarea id="message" required placeholder="Hello, I'd like to discuss..." value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-[150px] bg-black/20 border-white/10 focus:border-cyan-500 resize-none" data-testid="textarea-message" />
                </div>
                <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
