import { motion } from "framer-motion";
import { MousePointerClick, Settings2, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "选择目标学校",
    description: "从覆盖的200+学校中选择学生的目标校，系统自动匹配该校的出题风格和难度分布。",
  },
  {
    number: "02",
    icon: Settings2,
    title: "自定义设置",
    description: "选择科目、题型、难度等参数，根据学生实际水平进行个性化调整。",
  },
  {
    number: "03",
    icon: Download,
    title: "生成下载",
    description: "AI 一分钟内生成完整试卷，包含标准答案和解析，支持 PDF 和 Word 格式导出。",
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            使用流程
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            三步生成专属试卷
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            简单直观的操作流程，让出题变得轻松高效
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-[16.67%] right-[16.67%] h-0.5 bg-border -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8">
                    <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                      步骤 {step.number}
                    </span>
                  </div>

                  <div className="pt-6">
                    <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6 shadow-glow">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector dot for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-4 h-4 bg-primary rounded-full -translate-y-1/2 z-20 shadow-glow" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;