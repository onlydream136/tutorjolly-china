import { motion } from "framer-motion";
import { Upload, Zap, Target, TrendingUp, FileText, BarChart3, BookOpen, Users } from "lucide-react";

const parentSteps = [
  {
    number: "01",
    icon: Upload,
    title: "上传参考试卷",
    description: "拍照或上传孩子的学校试卷、考卷，支持手写和打印版本。",
    highlight: "1秒上传",
  },
  {
    number: "02",
    icon: Zap,
    title: "一键生成模拟卷",
    description: "AI智能分析试卷结构，自动生成同类型模拟试卷，针对性练习。",
    highlight: "智能出题",
  },
  {
    number: "03",
    icon: Target,
    title: "补强增弱",
    description: "基于错题精准推送变式题，哪里薄弱补哪里，真正吃透知识点。",
    highlight: "精准补弱",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "稳步提分",
    description: "可视化追踪学习进度，看到每一次进步，让努力有迹可循。",
    highlight: "看见成长",
  },
];

const teacherSteps = [
  {
    number: "01",
    icon: FileText,
    title: "上传作业/试卷",
    description: "批量上传学生的作业、作文、试卷，支持手写和打印版本。",
    highlight: "批量上传",
  },
  {
    number: "02",
    icon: Zap,
    title: "AI一键批改",
    description: "智能识别题目和答案，一秒完成批改，自动标注错题和薄弱知识点。",
    highlight: "解放双手",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "获取分析报告",
    description: "生成详细的班级/个人分析报告，一目了然掌握学生学习情况。",
    highlight: "数据洞察",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "错题巩固练习",
    description: "错题自动汇成个人题库，生成自主学习练习，持续巩固提升。",
    highlight: "个性化练",
  },
];

const StepCard = ({ step, index, totalSteps }: { step: typeof parentSteps[0], index: number, totalSteps: number }) => (
  <motion.div
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
    {index < totalSteps - 1 && (
      <div className="hidden lg:block absolute top-1/2 -right-4 w-3 h-3 bg-accent rounded-full -translate-y-1/2 z-20 shadow-glow" />
    )}
  </motion.div>
);

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
            两大场景，一键提效
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            无论是家长辅导还是老师教学，都能轻松上手
          </p>
        </motion.div>

        {/* 家长流程 */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">家长使用流程</h3>
            <span className="text-sm text-muted-foreground">— 一键生成模拟卷，为孩子补强增弱</span>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-border -translate-y-1/2" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {parentSteps.map((step, index) => (
                <StepCard key={step.number} step={step} index={index} totalSteps={parentSteps.length} />
              ))}
            </div>
          </div>
        </div>

        {/* 老师流程 */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground">老师使用流程</h3>
            <span className="text-sm text-muted-foreground">— AI批改+分析报告，错题变巩固练习</span>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-border -translate-y-1/2" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {teacherSteps.map((step, index) => (
                <StepCard key={step.number} step={step} index={index} totalSteps={teacherSteps.length} />
              ))}
            </div>
          </div>
        </div>

        {/* 产品逻辑说明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                🎯 核心价值：从效率工具到提分刚需
              </h4>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">家长端：</span>上传试卷 → 生成模拟卷 → 针对性练习 → 稳步提分 | 
                <span className="text-accent font-medium ml-2">老师端：</span>批量批改 → 智能分析 → 错题归集 → 个性化巩固
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;