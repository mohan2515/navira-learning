import { motion } from "framer-motion";
import { MousePointerClick, Cpu, Zap } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Select Content", description: "Choose your subject, unit, and topic from the structured syllabus." },
  { icon: Cpu, title: "Use Intelligent Tools", description: "Chat with AI, analyze resumes, or explore career paths." },
  { icon: Zap, title: "Get Instant Results", description: "Receive answers, feedback, and recommendations immediately." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 px-6 bg-muted/40">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase mb-4">
          Process
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          How It Works
        </h2>
        <p className="text-muted-foreground text-lg">Three simple steps to smarter learning.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 bg-border" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-primary-foreground shadow-lg relative z-10" style={{ background: "var(--gradient-primary)" }}>
              <step.icon className="w-8 h-8" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-display text-xs font-bold mb-3">
              Step {i + 1}
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
