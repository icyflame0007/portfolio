import { AnimatedSection } from "./AnimatedSection";
import { GraduationCap, Trophy, Award } from "lucide-react";

export function EducationAchievements() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Achievements</h2>
          <div className="w-20 h-1.5 bg-cyan-500 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <AnimatedSection delay={0.2} className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-8 h-full border-t-4 border-t-blue-500">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">B.Tech in Computer Science & Business Systems</h3>
              <p className="text-muted-foreground mb-4">SRKR Engineering College, Bhimavaram, Andhra Pradesh</p>
              <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center text-sm font-mono">
                <span className="text-cyan-400">2020 – 2024</span>
                <span className="bg-white/10 px-3 py-1 rounded-md">CGPA: 8.40 / 10</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Achievements */}
          <AnimatedSection delay={0.4} className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <div className="glass-card rounded-2xl p-8 border-t-4 border-t-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-amber-400">Standing Ovation Award</h3>
                <p className="text-sm font-medium mb-3 text-white">Tech Mahindra</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Recognition for exceptional performance and contribution in early career, demonstrating quick learning and high impact delivery.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 border-t-4 border-t-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-yellow-400">Bravo Award</h3>
                <p className="text-sm font-medium mb-3 text-white">Tech Mahindra</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Awarded for outstanding teamwork and delivery excellence in SAP project implementation, ensuring smooth go-live phases.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
