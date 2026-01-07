import { motion } from "framer-motion";
import { School, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const schoolCategories = [
  {
    city: "北京",
    schools: ["人大附中", "北京四中", "北师大附属实验中学", "清华附中", "十一学校"],
  },
  {
    city: "上海",
    schools: ["上海中学", "华师大二附中", "复旦附中", "交大附中", "建平中学"],
  },
  {
    city: "广州",
    schools: ["华南师大附中", "广雅中学", "执信中学", "广州二中", "六中"],
  },
  {
    city: "深圳",
    schools: ["深圳中学", "深圳外国语", "深圳实验", "深圳高级中学", "红岭中学"],
  },
];

const Schools = () => {
  return (
    <section id="schools" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            覆盖学校
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            200+ 重点学校全覆盖
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            深入研究各校历年真题，精准把握出题风格和难度分布
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolCategories.map((category, index) => (
            <motion.div
              key={category.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                  <School className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.city}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.schools.map((school) => (
                  <li
                    key={school}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {school}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group border-primary/30 hover:border-primary hover:bg-primary/5"
          >
            查看全部学校列表
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Schools;