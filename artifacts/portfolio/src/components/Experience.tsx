import { AnimatedSection } from "./AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export function Experience() {
  const points = [
    "Led SAP Ariba SLP & Sourcing implementation — supplier onboarding, qualification questionnaires",
    "Configured multi-level approval workflows for supplier qualification and sourcing events",
    "Supported SAP MM Procure-to-Pay (P2P) — PR to PO to MIRO workflows",
    "Troubleshot Ariba-S/4HANA integration — XML payload analysis, CIG monitoring",
    "Performed Business Partner replication validation between SAP S/4HANA and SAP Ariba",
    "Resolved defects during SIT, UAT, and Hypercare phases",
    "Supported procurement automation and workflow optimization initiatives"
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1.5 bg-cyan-500 rounded-full mx-auto lg:mx-0" />
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto lg:mx-0">
          {/* Timeline Line */}
          <div className="absolute left-[19px] md:left-8 top-0 bottom-0 w-0.5 bg-cyan-500/20" />

          <AnimatedSection delay={0.2} className="relative pl-12 md:pl-20 py-4">
            {/* Timeline Dot */}
            <div className="absolute left-[11px] md:left-[24px] top-6 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-black shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

            <div className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="font-bold text-white text-sm">TM</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">SAP Ariba & MM Consultant</h3>
                    <div className="text-cyan-400 font-medium mt-1">Tech Mahindra</div>
                  </div>
                </div>
                <div className="text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full w-fit">
                  Sep 2024 – Present • Hyderabad, India
                </div>
              </div>

              <ul className="space-y-3">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
