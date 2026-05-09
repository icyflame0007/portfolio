import { AnimatedSection } from "./AnimatedSection";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-cyan-500 rounded-full" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-2xl p-10 border-l-4 border-l-blue-500 max-w-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -z-0" />
            <div className="relative z-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <GraduationCap className="w-9 h-9 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    B.Tech — Computer Science & Business Systems
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                      SRKR Engineering (Autonomous) College, Andhra Pradesh
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="flex items-center gap-1.5 text-sm bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                      <CalendarDays className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">2020 – 2024</span>
                    </span>
                    <span className="text-sm bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 font-semibold text-blue-300">
                      CGPA: 8.40 / 10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
