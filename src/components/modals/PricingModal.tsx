import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, Gift, Crown } from "lucide-react";

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PricingModal = ({ open, onOpenChange }: PricingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            使用方案
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* 免费版 */}
          <div className="relative p-6 rounded-2xl border-2 border-muted bg-muted/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">免费版</h3>
                <p className="text-muted-foreground text-sm">永久免费使用</p>
              </div>
            </div>

            <div className="text-3xl font-bold mb-4">
              ¥0
              <span className="text-base font-normal text-muted-foreground">/永久</span>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">每週可免費使用 <strong>3次</strong> 發佈作業+批改作業</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">发布与批改合计共3次/周</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">基础数据报告</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">学生APP无限使用</span>
              </li>
            </ul>
          </div>

          {/* 付费版 */}
          <div className="relative p-6 rounded-2xl border-2 border-primary bg-primary/5">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              推荐
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Crown className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">年费订阅</h3>
                <p className="text-muted-foreground text-sm">按学生账号付费</p>
              </div>
            </div>

            <div className="text-3xl font-bold mb-4">
              ¥50
              <span className="text-base font-normal text-muted-foreground">/学生/年</span>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">每学生 <strong>200次</strong> OCR批改作业</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">无限发布作业次数</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">高级数据分析报告</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">优先客服支持</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">家长沟通报告导出</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          如需咨询更多详情，请联系我们的销售团队
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
