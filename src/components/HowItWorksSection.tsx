import { motion } from "framer-motion";
import { MousePointerClick, Cpu, Zap } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Select Content", description: "Choose your subject, unit, and topic." },
  { icon: Cpu, title: "Use Intelligent Tools", description: "Chat with AI, analyze resumes, or explore careers." },
  { icon: Zap, title: "Get Instant Results", description: "Receive answers, feedback, and recommendations immediately." },
];

const HowItWorksSection = () => (
  <section className="py-24 px-6 bg-muted/50">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          How It Works
        </h2>
        <p className="text-muted-foreground text-lg">Three simple steps to smarter learning.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
              <step.icon className="w-7 h-7" />
            </div>
            <div className="font-display text-sm font-semibold text-primary mb-2">Step {i + 1}</div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
