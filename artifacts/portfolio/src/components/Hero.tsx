import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, ChevronDown } from "lucide-react";
import profilePic from "@assets/LinkedIn_Profile_Pic_1778420368603.jpg";

export function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = [
    "SAP Ariba SLP & Sourcing Specialist",
    "Source-to-Pay Expert",
    "SAP S/4HANA Integration",
    "Procurement Expert",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Blobs — contained so they don't overflow the section */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-600/15 blur-3xl rounded-full animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-cyan-400">Available for Full Time & Freelance Opportunities</span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-cyan-500 font-semibold tracking-wider uppercase text-sm">
                SAP Ariba & MM Consultant
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600"
              style={{ fontFamily: 'var(--app-font-sans)' }} // Enforce sans here
            >
              Santosh Akula
            </motion.h1>

            <motion.div variants={itemVariants} className="h-8 md:h-10 mb-6 relative w-full overflow-hidden flex justify-center lg:justify-start">
              {subtitles.map((subtitle, idx) => (
                <motion.h2
                  key={subtitle}
                  className="text-xl md:text-2xl font-medium text-muted-foreground absolute"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: subtitleIndex === idx ? 1 : 0,
                    y: subtitleIndex === idx ? 0 : -20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {subtitle}
                </motion.h2>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Driving enterprise procurement transformation through SAP Ariba SLP, Sourcing, SAP MM, and S/4HANA integration expertise.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <a href="/Santosh_Akula_Resume.pdf" download="Santosh_Akula_Resume.pdf" data-testid="link-download-resume-hero">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all rounded-full px-6 py-6"
                  data-testid="button-download-resume"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full px-6 py-6 glass-card"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
              <div className="flex items-center gap-2 ml-2">
                <a
                  href="mailto:nagasantosh.akula@gmail.com"
                  data-testid="link-mail"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Mail className="h-5 w-5 text-cyan-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/santosh-a-b48121245"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-linkedin"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-cyan-400" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Avatar Content */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0 pb-20 lg:pb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Pulsing ring */}
            <div className="absolute w-56 h-56 lg:w-72 lg:h-72 bg-cyan-500/20 rounded-full animate-ping opacity-20" />
            
            {/* Orbital ring */}
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 border-2 border-dashed border-cyan-400/40 rounded-full animate-[spin_20s_linear_infinite]" />

            {/* Avatar Circle */}
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.5)] z-10 overflow-hidden ring-4 ring-cyan-500/40">
              <img
                src={profilePic}
                alt="Santosh Akula"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              className="absolute -top-4 right-2 lg:right-6 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-300 z-20 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              SAP Ariba SLP
            </motion.div>
            <motion.div
              className="absolute top-8 -right-2 lg:-right-6 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300 z-20 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.8 }}
            >
              SAP Ariba Sourcing
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-0 lg:-left-6 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-purple-500/30 rounded-full text-xs font-semibold text-purple-300 z-20 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
            >
              SAP MM
            </motion.div>
            <motion.div
              className="absolute -bottom-4 right-4 lg:right-8 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-green-500/30 rounded-full text-xs font-semibold text-green-300 z-20 shadow-[0_0_10px_rgba(34,197,94,0.2)]"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1.5 }}
            >
              S/4HANA
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-2 lg:-left-8 -translate-y-1/2 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-amber-500/30 rounded-full text-xs font-semibold text-amber-300 z-20 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
              animate={{ x: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1 }}
            >
              CIG Integration
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-cyan-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
