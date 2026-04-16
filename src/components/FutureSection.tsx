import { motion } from "framer-motion";
import { Smartphone, BarChart3, BrainCircuit } from "lucide-react";

const items = [
  { icon: Smartphone, title: "Mobile App", description: "Cross-platform app built with Flutter and Dart for learning on the go." },
  { icon: BarChart3, title: "Personalized Content", description: "Adaptive learning paths based on individual student performance." },
  { icon: BrainCircuit, title: "Smart Assessments", description: "Intelligent question generation for accurate performance evaluation." },
];

const FutureSection = () => (
  <section id="roadmap" className="py-24 px-6 bg-muted/40">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase mb-4">
          Roadmap
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          What's Coming Next
        </h2>
        <p className="text-muted-foreground text-lg">Future improvements on the roadmap.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg hover:border-primary/20 transition-all"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 bg-primary/10 text-primary">
              <item.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FutureSection;
