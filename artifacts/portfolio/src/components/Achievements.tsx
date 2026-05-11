import { AnimatedSection } from "./AnimatedSection";
import { Trophy, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: Trophy,
    title: "Standing Ovation Award",
    org: "Tech Mahindra",
    color: "amber",
    description:
      "Recognized for successfully delivering the SAP Ariba SLP & Sourcing implementation end-to-end, demonstrating exceptional performance and high-impact contribution in early career.",
    glowColor: "rgba(245,158,11,0.15)",
    borderColor: "border-t-amber-500",
    bgColor: "bg-amber-500/20",
    textColor: "text-amber-400",
    badgeBg: "bg-amber-500/10",
    badgeBorder: "border-amber-500/30",
  },
  {
    icon: Award,
    title: "Bravo Award",
    org: "Tech Mahindra",
    color: "yellow",
    description:
      "Awarded for demonstrating outstanding functional expertise in resolving critical SAP MM P2P workflow issues under production conditions, ensuring smooth go-live delivery.",
    glowColor: "rgba(250,204,21,0.15)",
    borderColor: "border-t-yellow-400",
    bgColor: "bg-yellow-400/20",
    textColor: "text-yellow-400",
    badgeBg: "bg-yellow-400/10",
    badgeBorder: "border-yellow-400/30",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1.5 bg-cyan-500 rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={0.2 + index * 0.15}>
                <motion.div
                  className={`glass-card rounded-2xl p-8 border-t-4 ${item.borderColor} h-full flex flex-col relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${item.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div className={`absolute top-4 right-4 opacity-40 ${item.textColor}`}>
                    <Star className="w-20 h-20 fill-current" />
                  </div>
                  <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-5 border border-white/10`}>
                    <Icon className={`w-7 h-7 ${item.textColor}`} />
                  </div>
                  <div className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full ${item.badgeBg} border ${item.badgeBorder} ${item.textColor} mb-3 self-start`}>
                    {item.org}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${item.textColor}`}>{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
