import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">AI智能出题 · 精准匹配目标校</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              一分钟生成
              <br />
              <span className="text-accent">专属模拟试卷</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
              TutorJolly 帮助私人导师快速生成符合目标学校风格的高质量试卷，
              让备课更轻松，教学更高效。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                立即免费试用
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              >
                观看演示视频
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">10,000+</div>
                <div className="text-white/70 text-sm mt-1">注册导师</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">50,000+</div>
                <div className="text-white/70 text-sm mt-1">生成试卷</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">200+</div>
                <div className="text-white/70 text-sm mt-1">覆盖学校</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                className="glass rounded-2xl p-6 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">数学模拟卷 - 初三</div>
                    <div className="text-sm text-muted-foreground">目标校：人大附中</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-3 bg-primary/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">AI 正在生成试卷...</span>
                    <span className="text-primary font-medium">完成</span>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <div className="text-sm font-medium mb-2">试卷内容</div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      选择题 × 12
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      填空题 × 6
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      解答题 × 5
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              >
                <Clock className="w-4 h-4" />
                <span className="font-semibold text-sm">仅需1分钟</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120V60C240 20 480 0 720 20C960 40 1200 80 1440 60V120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;