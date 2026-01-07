import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white text-sm font-medium">限时优惠 · 首月免费</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            让出题不再成为负担
            <br />
            <span className="text-accent">今天就开始高效备课</span>
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            加入10,000+导师的行列，用 TutorJolly 为学生创造更好的学习体验。
            注册即送30份免费试卷额度。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              立即免费注册
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
            >
              预约演示
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-8">
            无需绑定信用卡 · 随时可取消 · 7×24小时客服支持
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;