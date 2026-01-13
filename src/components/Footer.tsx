import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = {
    产品: [
      { label: "功能介绍", href: "#features" },
      { label: "免费使用", href: "#pricing" },
      { label: "更新日志", href: "/" },
    ],
    资源: [
      { label: "使用教程", href: "/" },
      { label: "常见问题", href: "#faq" },
      { label: "案例分享", href: "/" },
    ],
    公司: [
      { label: "关于我们", href: "#about" },
      { label: "加入我们", href: "/" },
      { label: "联系我们", href: "/" },
    ],
    法律: [
      { label: "用户协议", href: "/user-agreement" },
      { label: "隐私政策", href: "/privacy-policy" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold">TutorJolly</span>
            </div>
            <p className="text-background/60 mb-6 leading-relaxed">
              智能出题平台，助力私人导师高效备课。
              让每位学生都能获得精准匹配目标校的专属练习。
            </p>
            <div className="space-y-3 text-sm text-background/60">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>customerservices@itutorai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>0755-82472601</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>深圳市罗湖区国际商品交易大厦7C11</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
              {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-background/60 hover:text-accent transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © 2024 TutorJolly. All rights reserved. 京ICP备xxxxxxxx号
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-background/40 hover:text-accent text-sm transition-colors">
              微信公众号
            </Link>
            <Link to="/" className="text-background/40 hover:text-accent text-sm transition-colors">
              小红书
            </Link>
            <Link to="/" className="text-background/40 hover:text-accent text-sm transition-colors">
              微博
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;