import { motion } from "framer-motion";
import { BookOpen, MessageCircle, FileText, Compass } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Structured Syllabus Navigation",
    description: "Organized into subjects, units, and topics for a clear learning path that keeps you on track.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageCircle,
    title: "AI-Powered Chatbot",
    description: "Get context-aware answers to your academic questions instantly using advanced NLP models.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: FileText,
    title: "Resume Analysis",
    description: "Receive detailed feedback and actionable suggestions to strengthen your resume.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Compass,
    title: "Career Recommendations",
    description: "Discover internships and hackathons matched to your skills and interests.",
    color: "bg-primary/10 text-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Navira Offers
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need for smarter learning and career growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border transition-all hover:border-primary/30 hover:shadow-lg"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
