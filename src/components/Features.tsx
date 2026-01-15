import { motion } from "framer-motion";
import { Zap, BarChart3, BookOpen, MessageSquare, Target, Clock, Users, GraduationCap } from "lucide-react";

// 家长痛点
const parentPains = [
  {
    icon: Zap,
    title: "批改太耗时",
    description: "每天下班后还要逐题检查作业，身心俱疲。一秒AI批改，立即解放双手。",
    solution: "一秒AI批改",
    audience: "家长",
  },
  {
    icon: Target,
    title: "不知道怎么补弱",
    description: "孩子错了，但不知道该练什么。基于错题智能推荐变式题，精准靶向练习。",
    solution: "举一反三推题",
    audience: "家长",
  },
  {
    icon: BarChart3,
    title: "看不到进步",
    description: "感觉一直在学，却不知道有没有效果。可视化学习报告，进步清晰可见。",
    solution: "数据化报告",
    audience: "家长",
  },
];

// 老师痛点
const teacherPains = [
  {
    icon: Clock,
    title: "批改效率低",
    description: "逐字逐句批改作文、试卷，占用大量时间。AI秒出详细评语，效率提升10倍。",
    solution: "智能批改",
    audience: "老师",
  },
  {
    icon: BookOpen,
    title: "题库资源匮乏",
    description: "出卷找题费时费力，缺乏优质资源。海量题库一键生成高质量试卷。",
    solution: "高效出卷",
    audience: "老师",
  },
  {
    icon: MessageSquare,
    title: "家长沟通难",
    description: "难以向家长展示孩子的进步。自动生成可视化进步报告，一键分享。",
    solution: "进步报告",
    audience: "老师",
  },
  {
    icon: Users,
    title: "个性化教学难",
    description: "每个学生情况不同，难以因材施教。AI分析薄弱点，推荐针对性练习。",
    solution: "精准推题",
    audience: "老师",
  },
  {
    icon: GraduationCap,
    title: "进度难追踪",
    description: "多个学生同时辅导，难以记住每个人的情况。学情追踪一目了然。",
    solution: "学情追踪",
    audience: "老师",
  },
  {
    icon: Target,
    title: "无暇招生",
    description: "教辅工作繁重，没精力开拓新生源。自动化处理，腾出招生时间。",
    solution: "教辅减负",
    audience: "老师",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* 家长痛点 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            家长痛点 · 效率工具 → 提分刚需
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            从"维生素"升级为"止痛药"
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            不只是解放双手，更是将错题转化为提分机会
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {parentPains.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:shadow-elegant hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <pain.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {pain.solution}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {pain.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 老师痛点 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            老师痛点 · 专为私教/家教解决
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            六大痛点，一站式解决
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            让您从繁琐的教辅工作中解放，专注教学与招生
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teacherPains.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-elegant hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <pain.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {pain.solution}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {pain.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;