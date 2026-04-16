import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Intelligent Learning Platform
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg" style={{ background: "var(--gradient-primary)" }}>
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              Navira
            </h1>
          </div>

          <p className="font-display text-xl md:text-2xl font-medium text-primary mb-6">
            A New Way to Navigate Learning
          </p>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            A syllabus-driven system that combines structured learning, intelligent assistance, and career support — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-primary-foreground font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl shadow-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-lg transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "4+", label: "AI Models" },
            { value: "100%", label: "Free Access" },
            { value: "24/7", label: "AI Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-muted-foreground text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
