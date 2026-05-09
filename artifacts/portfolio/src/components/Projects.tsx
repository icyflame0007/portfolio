import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "SAP Ariba SLP & Sourcing Implementation & Support",
      badge: "Enterprise",
      badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
      glowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
      desc: "End-to-end implementation of SAP Ariba Supplier Lifecycle & Performance module and Sourcing events, enabling supplier onboarding automation and procurement workflow digitization.",
      highlights: [
        "Supplier qualification questionnaires",
        "Approval workflow configuration",
        "Integration via CIG",
        "Sourcing event management"
      ],
      tech: ["SAP Ariba SLP", "SAP Ariba Sourcing", "CIG Integration", "XML", "S/4HANA"]
    },
    {
      title: "SAP S/4HANA MM Implementation & Support",
      badge: "Enterprise",
      badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
      glowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
      desc: "SAP S/4HANA Materials Management implementation and post-go-live support covering full Procure-to-Pay cycle, Business Partner replication, and Ariba integration.",
      highlights: [
        "End-to-end P2P cycle support",
        "Business Partner replication",
        "Defect resolution & Hypercare",
        "User training delivery"
      ],
      tech: ["SAP MM", "SAP S/4HANA", "SAP Fiori", "Workflow Config", "Procurement"]
    },
    {
      title: "FitTrack BloodLink — Android App",
      badge: "Mobile",
      badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
      glowColor: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      desc: "Android health tracking application combining fitness monitoring with blood group tracking, built using modern Android development practices.",
      highlights: [
        "Health metrics tracking",
        "Blood donor matching feature",
        "Local SQLite data storage",
        "Interactive UI design"
      ],
      tech: ["Android", "Java", "SQLite", "Mobile Dev"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1.5 bg-cyan-500 rounded-full" />
        </AnimatedSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`glass-card rounded-2xl p-6 md:p-8 flex flex-col h-full transition-all duration-300 ${project.glowColor}`}
              data-testid={`card-project-${idx}`}
            >
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm flex-grow">{project.desc}</p>
              
              <div className="mb-6 space-y-2">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 bg-white/5 rounded-md text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
