import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Building2, Award, Users, Globe } from "lucide-react";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
  const achievements = [
    { icon: Users, value: "10,000+", label: "服务老师" },
    { icon: Award, value: "100,000+", label: "批改作业" },
    { icon: Globe, value: "50+", label: "覆盖城市" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            关于我们
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* 公司简介 */}
          <div className="p-6 rounded-xl bg-muted/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">播闪科技</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              播闪科技是一家专注于教育科技领域的创新公司，致力于用AI技术赋能教育行业。
              我们的核心产品 TutorJolly 是专为私教老师打造的智能教学助手，帮助老师从繁琐的批改工作中解放出来，
              专注于更有价值的教学指导。
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              公司总部位于深圳，拥有一支来自腾讯、阿里、字节的优秀技术团队，
              在自然语言处理、计算机视觉、教育大数据等领域拥有深厚的技术积累。
            </p>
          </div>

          {/* 成绩展示 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服务成绩</h3>
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 产品案例 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">产品服务案例</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border bg-background">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">深圳某知名培训机构</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">教育培训</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  接入TutorJolly后，作业批改效率提升300%，家长满意度提升40%，续费率提升25%。
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">北京独立家教王老师</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">私人教师</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  使用TutorJolly管理20+学生，每周节省10小时批改时间，学生成绩平均提升15分。
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">上海英语工作室</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">语言培训</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  通过数据化报告，帮助家长可视化了解孩子进步，招生转化率提升35%。
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
