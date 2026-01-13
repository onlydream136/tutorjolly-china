import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import PricingModal from "@/components/modals/PricingModal";
import AboutModal from "@/components/modals/AboutModal";
import FAQModal from "@/components/modals/FAQModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "功能特点", href: "#features" },
    { label: "如何使用", href: "#how-it-works" },
    { label: "覆盖学校", href: "#schools" },
    { label: "免费使用", href: "#pricing", isModal: true },
    { label: "关于我们", href: "#about", isModal: true },
    { label: "常见问题", href: "#faq", isModal: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (link.label === "免费使用") {
      setShowPricingModal(true);
      return;
    }
    if (link.label === "关于我们") {
      setShowAboutModal(true);
      return;
    }
    if (link.label === "常见问题") {
      setShowFAQModal(true);
      return;
    }
    
    if (location.pathname !== "/") {
      navigate("/" + link.href);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={handleLogoClick} className="flex items-center gap-2">
              <img src={logo} alt="TutorJolly" className="w-10 h-10 object-contain rounded-sm" />
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                TutorJolly
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    isScrolled ? "text-foreground/80" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                className={`font-medium ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80 hover:bg-white/10"
                }`}
              >
                登录
              </Button>
              <Button
                className={`font-semibold ${
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white text-primary hover:bg-white/90"
                }`}
              >
                免费注册
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-foreground" : "text-white"} />
              ) : (
                <Menu className={isScrolled ? "text-foreground" : "text-white"} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-background shadow-lg border-t"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    className="block text-foreground/80 hover:text-primary font-medium py-2"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t space-y-3">
                  <Button variant="outline" className="w-full">
                    登录
                  </Button>
                  <Button className="w-full">免费注册</Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      <PricingModal open={showPricingModal} onOpenChange={setShowPricingModal} />
      <AboutModal open={showAboutModal} onOpenChange={setShowAboutModal} />
      <FAQModal open={showFAQModal} onOpenChange={setShowFAQModal} />
    </>
  );
};

export default Header;