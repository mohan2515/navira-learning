import { motion } from "framer-motion";
import { Code2, BrainCog } from "lucide-react";

const techItems = [
  { category: "Frontend", items: ["React.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
];

const aiModels = [
  { name: "DCWSSA", purpose: "Syllabus structuring & organization" },
  { name: "CACRCF + T5", purpose: "Context-aware chatbot responses" },
  { name: "SVM + T5", purpose: "Resume evaluation & suggestions" },
  { name: "PSARA", purpose: "Career recommendation engine" },
];

const TechStackSection = () => (
  <section id="tech-stack" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
          Technology
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built with Intelligence
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Modern technologies and intelligent models powering every feature.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">Core Technologies</h3>
          </div>
          <div className="space-y-5">
            {techItems.map((group) => (
              <div key={group.category}>
                <span className="text-xs font-bold text-primary tracking-wider uppercase">{group.category}</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-foreground border border-border">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <BrainCog className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">Intelligent Models</h3>
          </div>
          <div className="space-y-4">
            {aiModels.map((model) => (
              <div key={model.name} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <span className="px-3 py-1 rounded-md text-xs font-bold text-primary-foreground shrink-0" style={{ background: "var(--gradient-primary)" }}>
                  {model.name}
                </span>
                <span className="text-muted-foreground text-sm pt-0.5">{model.purpose}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TechStackSection;
