import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FAQModal = ({ open, onOpenChange }: FAQModalProps) => {
  const faqs = [
    {
      question: "TutorJolly 是否免费使用？",
      answer: "是的，我们提供免费版本！免费用户每周可以使用3次发布作业+批改作业（合计3次）。如需更多使用次数，可以选择年费订阅，按学生账号付费仅需50元/学生/年，包含200次OCR批改作业。"
    },
    {
      question: "如何布置作业给学生？",
      answer: "登录教师端Web后，点击「发布作业」，选择学生、设置作业内容（可以上传PDF或图片），设定截止时间后发布即可。学生会在APP端收到通知，完成后提交。"
    },
    {
      question: "AI批改后老师还能修改吗？",
      answer: "当然可以！AI批改完成后，老师可以查看批改详情，对评分和评语进行二次编辑和调整。我们的AI只是辅助工具，最终的教学决策权始终在老师手中。"
    },
    {
      question: "支持哪些类型的作业批改？",
      answer: "目前支持作文批改（中英文）、数学试卷批改、英语试卷批改等。系统采用OCR技术识别手写内容，并结合AI进行智能评判和点评。"
    },
    {
      question: "数据报告如何帮助教学？",
      answer: "系统会自动生成学生的学习进度报告，包括错题分析、知识点掌握情况、进步曲线等。您可以将报告导出PDF发送给家长，让家长清晰了解孩子的学习进展。"
    },
    {
      question: "学生如何使用APP？",
      answer: "学生下载TutorJolly学生端APP后，使用老师分配的账号登录。在APP中可以查看作业、提交作业、查看批改结果和报告，还可以进行日常练习。"
    },
    {
      question: "是否支持多个学生管理？",
      answer: "支持！您可以在系统中添加多个学生，分班管理，批量布置作业，统一查看各学生的学习情况和进度。"
    },
    {
      question: "如何保证数据安全？",
      answer: "我们采用银行级加密技术保护用户数据，所有数据存储在国内合规服务器上。我们承诺不会将您和学生的数据用于任何商业用途。"
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            常见问题
          </DialogTitle>
        </DialogHeader>

        <Accordion type="single" collapsible className="mt-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default FAQModal;
