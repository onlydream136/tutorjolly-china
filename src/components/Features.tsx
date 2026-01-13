import { motion } from "framer-motion";
import { PenTool, FileText, BarChart3, MessageSquare, Target, Clock } from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "智能作文批改",
    description: "告别逐字逐句批改，AI秒出详细评语和修改建议，批改效率提升10倍。",
    painPoint: "解决：批改效率低",
  },
  {
    icon: BarChart3,
    title: "学习进度追踪",
    description: "可视化学生学习轨迹，自动生成进步曲线，精准定位知识薄弱点。",
    painPoint: "解决：进度难追踪",
  },
  {
    icon: FileText,
    title: "海量题库资源",
    description: "覆盖多学科多年级题库，一键生成高质量试卷，告别题目匮乏困扰。",
    painPoint: "解决：题库资源匮乏",
  },
  {
    icon: MessageSquare,
    title: "家长沟通报告",
    description: "自动生成可视化进步报告，一键分享给家长，让教学成果清晰可见。",
    painPoint: "解决：家长沟通成本高",
  },
  {
    icon: Target,
    title: "个性化教学方案",
    description: "基于数据分析，智能推荐针对性练习，实现因材施教、精准提分。",
    painPoint: "解决：个性化教学难实现",
  },
  {
    icon: Clock,
    title: "教辅工作减负",
    description: "自动化处理批改、出卷、报告等繁琐工作，让您有更多精力专注招生。",
    painPoint: "解决：负担大无暇招生",
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
            解决痛点
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            专为私教老师解决六大痛点
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们深知家教老师的不易，TutorJolly 针对性解决每一个教辅难题
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
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {feature.painPoint}
                </span>
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