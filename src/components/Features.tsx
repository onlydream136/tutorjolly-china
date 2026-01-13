import { motion } from "framer-motion";
import { PenTool, FileText, BarChart3, BookOpen, CheckCircle, Users } from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "智能作文批改",
    description: "AI深度分析作文内容、结构、语言，提供详细批注和修改建议，秒出评分报告。",
  },
  {
    icon: FileText,
    title: "高效试卷生成",
    description: "一键生成符合教学目标的试卷，支持多科目、多题型，节省80%组卷时间。",
  },
  {
    icon: BarChart3,
    title: "数据化教学报告",
    description: "可视化学生学习轨迹，精准定位薄弱环节，数据驱动教学决策更科学。",
  },
  {
    icon: BookOpen,
    title: "作业发布与管理",
    description: "在线发布作业，学生APP提交，自动归档整理，教学管理更轻松。",
  },
  {
    icon: CheckCircle,
    title: "快速作业批改",
    description: "支持拍照上传试卷和作业，AI辅助批改，效率提升10倍。",
  },
  {
    icon: Users,
    title: "多学生统一管理",
    description: "一个账号管理所有学生，查看每位学生的学习进度和成绩变化。",
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
            为私教老师量身打造
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TutorJolly 提供Web端教师工具 + 学生APP，让教学管理更便捷
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