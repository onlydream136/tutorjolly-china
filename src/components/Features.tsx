import { motion } from "framer-motion";
import { Target, Zap, Brain, Shield, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "精准匹配目标校",
    description: "AI 分析各校历年真题风格，生成高度匹配的模拟试卷，让学生提前适应考试。",
  },
  {
    icon: Zap,
    title: "一分钟极速生成",
    description: "告别繁琐的手动组卷，选择科目和学校，AI 自动生成完整试卷，大幅节省备课时间。",
  },
  {
    icon: Brain,
    title: "智能题库更新",
    description: "题库持续更新，紧跟最新考纲和命题趋势，确保每份试卷都符合最新要求。",
  },
  {
    icon: Shield,
    title: "题目质量保证",
    description: "每道题目经过严格审核，确保准确性和科学性，避免错题困扰。",
  },
  {
    icon: BarChart3,
    title: "难度智能调控",
    description: "根据学生水平自定义难度分布，从基础巩固到冲刺拔高，灵活满足各阶段需求。",
  },
  {
    icon: Users,
    title: "多学生管理",
    description: "一个账号管理所有学生，记录学习轨迹，针对性调整教学策略。",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            核心功能
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            为私人导师量身打造
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TutorJolly 深入理解导师的需求，提供全方位的出题支持
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
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

export default Features;