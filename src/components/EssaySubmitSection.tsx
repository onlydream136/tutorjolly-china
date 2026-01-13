import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Send, Sparkles } from "lucide-react";
import ContactQRModal from "@/components/modals/ContactQRModal";

const EssaySubmitSection = () => {
  const [inputMethod, setInputMethod] = useState<"text" | "upload">("text");
  const [essayText, setEssayText] = useState("");
  const [fileName, setFileName] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = () => {
    setShowContactModal(true);
  };

  const canSubmit = inputMethod === "text" ? essayText.trim().length > 0 : fileName.length > 0;

  return (
    <section id="essay-submit" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI智能批改体验</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            立即体验作文批改
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            上传作文PDF或直接输入文字，体验AI秒批作文的神奇效果
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-background rounded-2xl shadow-xl border p-6 md:p-8">
            {/* 切换按钮 */}
            <div className="flex gap-2 mb-6">
              <Button
                variant={inputMethod === "text" ? "default" : "outline"}
                onClick={() => setInputMethod("text")}
                className="flex-1"
              >
                <FileText className="w-4 h-4 mr-2" />
                输入文字
              </Button>
              <Button
                variant={inputMethod === "upload" ? "default" : "outline"}
                onClick={() => setInputMethod("upload")}
                className="flex-1"
              >
                <Upload className="w-4 h-4 mr-2" />
                上传PDF
              </Button>
            </div>

            {/* 输入区域 */}
            {inputMethod === "text" ? (
              <Textarea
                placeholder="请在此输入作文内容...&#10;&#10;例如：&#10;《我的家乡》&#10;&#10;我的家乡是一个美丽的小城市，那里有青山绿水..."
                value={essayText}
                onChange={(e) => setEssayText(e.target.value)}
                className="min-h-[200px] resize-none mb-6"
              />
            ) : (
              <div className="mb-6">
                <label className="block">
                  <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors">
                    <Upload className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                    {fileName ? (
                      <div className="text-primary font-medium">{fileName}</div>
                    ) : (
                      <>
                        <p className="text-muted-foreground mb-1">点击或拖拽上传作文PDF</p>
                        <p className="text-sm text-muted-foreground/70">支持 PDF 格式，最大 10MB</p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            )}

            {/* 提交按钮 */}
            <Button
              size="lg"
              className="w-full"
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              <Send className="w-4 h-4 mr-2" />
              提交批改
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              提交后将由专业销售为您开通免费试用账号
            </p>
          </div>
        </motion.div>
      </div>

      <ContactQRModal open={showContactModal} onOpenChange={setShowContactModal} />
    </section>
  );
};

export default EssaySubmitSection;
