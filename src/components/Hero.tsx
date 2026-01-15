import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, BarChart3, Zap, Target, Smartphone, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
      
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
              <span className="text-sm font-medium text-white">从错题本到提分引擎 · 智能教学新时代</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              一秒AI批改
              <br />
              <span className="text-accent">错题变提分利器</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
              解放家长和老师的批改负担，基于学校试卷精准生成"举一反三"变式题，
              将每一道错题转化为提分机会，让辅导真正做到针对性补弱。
            </p>

            {/* 三大核心功能 */}
            <div className="grid grid-cols-3 gap-3 mb-8 max-w-lg mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
              >
                <Zap className="w-6 h-6 text-accent" />
                <span className="text-white text-xs font-medium text-center">秒速AI批改</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
              >
                <FileText className="w-6 h-6 text-accent" />
                <span className="text-white text-xs font-medium text-center">举一反三推题</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
              >
                <BarChart3 className="w-6 h-6 text-accent" />
                <span className="text-white text-xs font-medium text-center">可视化报告</span>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                免费体验批改
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">10,000+</div>
                <div className="text-white/70 text-sm mt-1">家庭用户</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">500,000+</div>
                <div className="text-white/70 text-sm mt-1">AI批改次数</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">85%</div>
                <div className="text-white/70 text-sm mt-1">用户提分率</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right illustration - 提分引擎卡片 */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative space-y-4">
              {/* AI批改卡片 */}
              <motion.div
                className="glass rounded-2xl p-5 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">一秒完成批改</div>
                    <div className="text-sm text-muted-foreground">数学单元测试 - 小明</div>
                  </div>
                  <div className="ml-auto px-3 py-1 bg-success/20 text-success rounded-full text-xs font-medium">
                    解放家长
                  </div>
                </div>
                <div className="p-3 bg-secondary rounded-lg text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">正确率</span>
                    <span className="text-primary font-bold text-lg">78%</span>
                  </div>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex justify-between"><span>正确题目</span><span className="text-success">18题</span></div>
                    <div className="flex justify-between"><span>错误题目</span><span className="text-destructive">5题</span></div>
                    <div className="flex justify-between"><span>待巩固知识点</span><span className="text-warning">分数运算</span></div>
                  </div>
                </div>
              </motion.div>

              {/* 举一反三推题卡片 */}
              <motion.div
                className="glass rounded-2xl p-5 shadow-lg border-2 border-accent/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">举一反三 · 靶向练习</div>
                    <div className="text-sm text-muted-foreground">基于错题智能推荐</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">变式题推荐</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      检测到「分数加减」薄弱，已生成5道同类型变式题
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">预计提分效果</span>
                    <span className="text-accent font-bold">+15分</span>
                  </div>
                </div>
              </motion.div>

              {/* 提分引擎浮动徽章 */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              >
                <Target className="w-4 h-4" />
                <span className="font-semibold text-sm">提分引擎</span>
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