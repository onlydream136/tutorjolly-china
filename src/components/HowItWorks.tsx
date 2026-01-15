import { motion } from "framer-motion";
import { Upload, Zap, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "上传试卷",
    description: "拍照或上传孩子的学校试卷、作业，支持手写和打印版本。",
    highlight: "1秒上传",
  },
  {
    number: "02",
    icon: Zap,
    title: "AI秒批改",
    description: "智能识别题目和答案，一秒完成批改，自动标注错题和薄弱知识点。",
    highlight: "解放双手",
  },
  {
    number: "03",
    icon: Target,
    title: "举一反三",
    description: "基于错题自动生成变式题，同类型题目反复练习，真正吃透知识点。",
    highlight: "精准补弱",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "持续提分",
    description: "可视化追踪学习进度，看到每一次进步，让努力有迹可循。",
    highlight: "看见成长",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            使用流程
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            四步开启提分之旅
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            从批改到提分，形成完整闭环
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border relative z-10 h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 left-6">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                      步骤 {step.number}
                    </span>
                  </div>

                  <div className="pt-4">
                    <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-4 shadow-glow">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                        {step.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector dot for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-3 h-3 bg-accent rounded-full -translate-y-1/2 z-20 shadow-glow" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 漏斗逻辑说明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                🎯 产品逻辑：从效率工具到提分刚需
              </h4>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">第一步：</span>用"一秒批改"解决家长即时痛点，零门槛吸引用户 →
                <span className="text-accent font-medium"> 第二步：</span>用"举一反三"揭示提分价值，将错题转化为付费动力
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;