import { AnimatedSection } from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillBar = ({ name, percent, delay }: { name: string, percent: number, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-cyan-400 font-mono text-sm">{percent}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export function Skills() {
  const coreSkills = [
    { name: "SAP Ariba SLP / Sourcing", percent: 92 },
    { name: "Source-to-Pay (P2P)", percent: 88 },
    { name: "SAP MM", percent: 85 },
    { name: "SAP S/4HANA", percent: 80 },
    { name: "CIG Integration", percent: 78 },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection delay={0.2} className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-8 text-foreground">Core Proficiency</h3>
            {coreSkills.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} percent={skill.percent} delay={0.3 + (idx * 0.1)} />
            ))}
          </AnimatedSection>

          <div className="space-y-8">
            {categories.map((cat, idx) => (
              <AnimatedSection key={idx} delay={0.4 + (idx * 0.1)}>
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">{cat.title}</h3>
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
