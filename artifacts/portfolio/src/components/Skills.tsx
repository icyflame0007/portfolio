import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export function Skills() {
  const categories = [
    {
      title: "SAP Functional",
      tags: ["SAP Ariba SLP", "SAP Ariba Sourcing", "SAP MM", "SAP S/4HANA", "SAP Ariba Network", "Source-to-Pay"]
    },
    {
      title: "Integration & Technical",
      tags: ["CIG Integration", "XML Payload Analysis", "SAP Fiori", "Workflow Configuration", "Business Partner Replication"]
    },
    {
      title: "Process & Delivery",
      tags: ["UAT & Hypercare", "Supplier Lifecycle Mgmt", "User Trainings", "Defect Resolution", "SIT Support", "Procurement Operations"]
    },
    {
      title: "Technical",
      tags: ["SQL", "Android Development", "Java"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-cyan-500 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <AnimatedSection key={idx} delay={0.2 + (idx * 0.1)}>
              <div className="glass-card p-6 rounded-2xl h-full">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400 border-b border-white/10 pb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="glass-card px-4 py-2 rounded-lg text-sm font-medium hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-colors cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
