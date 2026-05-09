import { AnimatedSection } from "./AnimatedSection";
import { Server, Settings, Database, Activity, Users, ShieldCheck, BookOpen, Clock } from "lucide-react";

export function About() {
  const metrics = [
    { icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />, title: "SAP Ariba SLP", desc: "Supplier Lifecycle & Performance" },
    { icon: <Database className="w-6 h-6 text-blue-400" />, title: "SAP MM / P2P", desc: "Procure-to-Pay Workflows" },
    { icon: <Server className="w-6 h-6 text-purple-400" />, title: "SAP S/4HANA", desc: "Enterprise ERP Integration" },
    { icon: <Activity className="w-6 h-6 text-green-400" />, title: "CIG Integration", desc: "Cloud Integration Gateway" },
    { icon: <Users className="w-6 h-6 text-amber-400" />, title: "Supplier Lifecycle Mgmt", desc: "Qualification & Onboarding" },
    { icon: <Settings className="w-6 h-6 text-rose-400" />, title: "Workflow Automation", desc: "Multi-level Approval Flows" },
    { icon: <BookOpen className="w-6 h-6 text-indigo-400" />, title: "User Trainings", desc: "End-user Enablement" },
    { icon: <Clock className="w-6 h-6 text-emerald-400" />, title: "UAT & Hypercare", desc: "Go-live Support" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-cyan-500 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection delay={0.2} className="flex items-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Experienced SAP Ariba & MM Consultant with hands-on expertise in Source-to-Pay processes, SAP Ariba SLP & Sourcing implementations, SAP S/4HANA integration, and procurement workflow optimization. Currently contributing to enterprise-level implementations at Tech Mahindra, with a proven track record of delivering end-to-end SAP solutions, conducting user trainings, troubleshooting complex integrations, and supporting UAT & Hypercare phases.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-4 flex flex-col gap-3 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-300"
                  data-testid={`card-metric-${idx}`}
                >
                  <div className="p-2.5 rounded-lg bg-white/5 w-fit">
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{metric.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{metric.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
