import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Intelligent Learning Platform
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-4">
            Navira
          </h1>
          <p className="font-display text-xl md:text-2xl font-medium text-primary mb-6">
            A New Way to Navigate Learning
          </p>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A syllabus-driven system that combines structured learning, intelligent assistance, and career support — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-border text-foreground font-semibold text-lg transition-all hover:border-primary hover:text-primary"
            >
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
