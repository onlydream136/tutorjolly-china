import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageCircle, QrCode } from "lucide-react";

interface ContactQRModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactQRModal = ({ open, onOpenChange }: ContactQRModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            联系我们
          </DialogTitle>
          <DialogDescription className="text-center">
            扫描下方二维码，添加微信销售申请免费使用
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center py-6">
          {/* 二维码占位 - 实际使用时替换为真实二维码图片 */}
          <div className="w-48 h-48 bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
            <div className="text-center">
              <QrCode className="w-16 h-16 text-muted-foreground/50 mx-auto mb-2" />
              <span className="text-sm text-muted-foreground">微信二维码</span>
            </div>
          </div>

          <div className="mt-4 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              微信号：<span className="font-medium text-foreground">TutorJolly_Sales</span>
            </p>
            <p className="text-xs text-muted-foreground">
              工作时间：周一至周五 9:00-18:00
            </p>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground">
            添加微信后，告知您的需求，我们将为您开通
            <span className="text-primary font-medium"> 免费试用账号</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactQRModal;
