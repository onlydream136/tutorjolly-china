import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Smartphone, Target, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white text-sm font-medium">每周3次免费体验 · 立即开始</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            别让孩子的错题白错
            <br />
            <span className="text-accent">让每一道题都变成提分机会</span>
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            TutorJolly 不只是批改工具，更是智能提分引擎。
            基于学校试卷精准推题，让补习真正做到有的放矢。
          </p>

          {/* 双重价值展示 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-white text-sm">家长：一秒批改，解放双手</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/30">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-white text-sm">提分：错题变式，精准补弱</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Zap className="w-5 h-5 mr-2" />
              免费体验批改
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              下载学生APP
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-8">
            每周免费3次 · 支持iOS和Android · 扫码即可下载
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;