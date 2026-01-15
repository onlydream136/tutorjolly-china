import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Zap, Target } from "lucide-react";
import ContactQRModal from "./modals/ContactQRModal";

const EssaySubmitSection = () => {
  const [inputMethod, setInputMethod] = useState<"upload" | "text">("upload");
  const [essayText, setEssayText] = useState("");
  const [fileName, setFileName] = useState("");
  const [showQRModal, setShowQRModal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = () => {
    setShowQRModal(true);
  };

  const canSubmit = inputMethod === "upload" ? fileName : essayText.trim();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              免费体验
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              上传试卷，体验一秒批改
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              立即体验AI批改的强大能力，看看您孩子的薄弱点在哪里
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            {/* 价值提示 */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">一秒批改</span>
                </div>
                <p className="text-sm text-muted-foreground">AI智能识别，快速标注错题</p>
              </div>
              <div className="flex-1 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">举一反三</span>
                </div>
                <p className="text-sm text-muted-foreground">基于错题生成变式练习题</p>
              </div>
            </div>

            {/* 输入方式切换 */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setInputMethod("upload")}
                className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all ${
                  inputMethod === "upload"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                <Upload className="w-5 h-5" />
                上传试卷/作业
              </button>
              <button
                onClick={() => setInputMethod("text")}
                className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all ${
                  inputMethod === "text"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                <FileText className="w-5 h-5" />
                输入作文文字
              </button>
            </div>

            {/* 内容区域 */}
            {inputMethod === "upload" ? (
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  id="file-upload"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  {fileName ? (
                    <p className="text-foreground font-medium">{fileName}</p>
                  ) : (
                    <>
                      <p className="text-foreground font-medium mb-2">
                        点击或拖拽上传试卷/作业
                      </p>
                      <p className="text-sm text-muted-foreground">
                        支持 PDF、JPG、PNG 格式，手写或打印版均可
                      </p>
                    </>
                  )}
                </label>
              </div>
            ) : (
              <Textarea
                placeholder="请输入作文内容..."
                className="min-h-[200px] resize-none"
                value={essayText}
                onChange={(e) => setEssayText(e.target.value)}
              />
            )}

            <Button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full mt-6 py-6 text-lg font-semibold bg-accent hover:bg-accent/90"
            >
              <Zap className="w-5 h-5 mr-2" />
              立即体验AI批改
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              提交后添加客服微信，即可获得免费批改体验
            </p>
          </div>
        </motion.div>
      </div>

      <ContactQRModal open={showQRModal} onOpenChange={setShowQRModal} />
    </section>
  );
};

export default EssaySubmitSection;