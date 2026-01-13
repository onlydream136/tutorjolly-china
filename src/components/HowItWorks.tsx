import { motion } from "framer-motion";
import { UserPlus, Upload, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "注册登录",
    description: "老师在Web端注册账号，创建班级并添加学生，学生下载APP使用老师分配的账号登录。",
  },
  {
    number: "02",
    icon: Upload,
    title: "布置与提交",
    description: "老师发布作业或试卷，学生在APP端完成并提交，支持拍照上传手写作业。",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "批改与报告",
    description: "AI辅助快速批改，自动生成详细的学情分析报告，精准定位学生薄弱点。",
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
            简单三步，开启智能教学
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            老师Web端 + 学生APP，教学管理更轻松
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