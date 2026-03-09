import Logo from "../assets/pngs/logo.png";
import { useState, useEffect } from "react";
import TopLayer from "../assets/pngs/topLayer.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Reason to love us", href: "#reasons" },
    // { name: "Art of making tea", href: "#art" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="w-full flex justify-between items-center relative z-50"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img
            src={Logo}
            alt="Chaaye Khana Logo"
            className="w-28 h-28 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain ml-2 lg:ml-12 xl:ml-20 -mt-2 lg:-mt-4"
          />

          <div className="hidden lg:block relative">
            <img
              src={TopLayer}
              alt=""
              className="fixed pointer-events-none"
              style={{
                top: "-15px",
                left: "20%",
                width: "80vw",
                minWidth: "1100px",
                maxWidth: "1500px",
                height: "auto",
                objectFit: "contain",
                objectPosition: "top left",
                zIndex: 0,
              }}
            />

            <motion.nav
              className="relative z-10 flex flex-row items-center gap-5 xl:gap-7 2xl:gap-9 px-8 pb-4 pr-20"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`font-bold text-[20px] whitespace-nowrap text-[#FFDDB0] transition-all duration-300 relative group hover:scale-105 active:scale-95 ${
                    item.active ? "border-b-2 border-[#FFDDB0] pb-1" : ""
                  }`}
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {item.name}

                  {!item.active && (
                    <span className="absolute bottom-0 left-0 h-[2px] bg-[#FFDDB0] w-0 group-hover:w-full transition-all duration-300 ease-out" />
                  )}
                </a>
              ))}
            </motion.nav>
          </div>

          <div className="hidden md:block lg:hidden relative">
            <img
              src={TopLayer}
              alt=""
              className="fixed pointer-events-none"
              style={{
                top: "-15px",
                left: "0px",
                width: "85vw",
                minWidth: "900px",
                maxWidth: "1200px",
                height: "auto",
                objectFit: "contain",
                objectPosition: "top left",
                zIndex: 0,
              }}
            />

            <motion.nav
              className="relative z-10 flex flex-row items-center gap-3 px-6 py-3 pr-14 pt-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`font-semibold text-xs whitespace-nowrap transition-all duration-300 relative group hover:scale-105 ${
                    item.active
                      ? "text-[#FFDDB0] border-b-2 border-[#FFDDB0] pb-1"
                      : "text-[#FFDDB0] hover:text-white"
                  }`}
                >
                  {item.name}

                  {!item.active && (
                    <span className="absolute bottom-0 left-0 h-[2px] bg-[#FFDDB0] w-0 group-hover:w-full transition-all duration-300 ease-out" />
                  )}
                </a>
              ))}
            </motion.nav>
          </div>

          <div className="md:hidden pr-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#5E2F0F] p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            className={`absolute top-full right-0 w-full md:hidden bg-[#3D1810]/95 backdrop-blur-sm z-50 overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <motion.nav
              className="flex flex-col items-center py-4 gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,

                y: mobileMenuOpen ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: mobileMenuOpen ? 1 : 0,

                    x: mobileMenuOpen ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.4,

                    delay: mobileMenuOpen ? index * 0.1 : 0,

                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className={`font-bold text-base py-2 transition-colors duration-300 ${
                    item.active
                      ? "text-[#FFDDB0] border-b-2 border-[#FFDDB0]"
                      : "text-[#FFDDB0] hover:text-white"
                  }`}
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
