import { motion } from "framer-motion";

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
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
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
          className="p-8 rounded-2xl bg-card border border-border"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Core Technologies</h3>
          <div className="space-y-4">
            {techItems.map((group) => (
              <div key={group.category}>
                <span className="text-sm font-semibold text-primary">{group.category}</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium text-foreground">
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
          className="p-8 rounded-2xl bg-card border border-border"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">Intelligent Models</h3>
          <div className="space-y-4">
            {aiModels.map((model) => (
              <div key={model.name} className="flex items-start gap-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold text-primary-foreground shrink-0" style={{ background: "var(--gradient-primary)" }}>
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
