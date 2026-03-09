import { useState, useEffect, useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
          } else {
            setIsAnimated(false);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/src/assets/pngs/footerBG.png')`,
      }}
    >
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:pb-12 md:pt-[210px]">
        <div
          className={`mb-8 sm:mb-10 md:mb-12 ${
            isAnimated ? "animate-fade-in-up-footer" : ""
          }`}
        >
          <img
            src="/src/assets/pngs/whiteLogo.png"
            alt="Chaaye Khana Logo"
            className="h-12 sm:h-14 md:h-16 lg:h-[160px] lg:w-[210px] w-auto"
          />
        </div>

        <div
          className={`lg:hidden relative bg-gradient-to-b from-[#8B4513] to-[#5E250F] rounded-t-3xl -mx-4 px-4 pt-8 pb-6 mb-6 ${
            isAnimated ? "animate-fade-in-up-footer animation-delay-200" : ""
          }`}
        >
          <div className="space-y-4 flex flex-col items-center justify-center">
            <h2
              className={`font-bold leading-tight text-[#FFDDB0] text-[24px] sm:text-[20px] text-center ${
                isAnimated
                  ? "animate-slide-left-footer animation-delay-400"
                  : ""
              }`}
              style={{ fontFamily: "'Britannic', sans-serif" }}
            >
              Can we bring your chai?
            </h2>

            <p
              className={`font-bold leading-relaxed text-[#FFDDB0] text-center text-sm sm:text-base px-2 ${
                isAnimated
                  ? "animate-slide-right-footer animation-delay-600"
                  : ""
              }`}
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              We'll come to you whenever you need a perfect cup of tea. Our home
              delivery service brings fresh chai and delicious snacks right to
              your doorstep. Sit back, relax, and enjoy the taste of Chaaye
              Khana at home
            </p>

            <div
              className={`mt-4 ${
                isAnimated
                  ? "animate-fade-in-up-footer animation-delay-800"
                  : ""
              }`}
            >
              <img
                src="/src/assets/pngs/deliveryBoy.png"
                alt="Delivery Boy"
                className="w-[300px] h-auto object-contain animate-delivery-boy"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-0">
          <div className="hidden lg:block lg:w-1/2 pr-0 lg:pr-8 xl:pr-12">
            <div className="space-y-6 flex flex-col items-center justify-center">
              <h2
                className={`font-bold leading-tight text-[#FFDDB0] text-[20px] md:text-[40px] flex items-center justify-center ${
                  isAnimated
                    ? "animate-slide-left-footer animation-delay-400"
                    : ""
                }`}
                style={{ fontFamily: "'Britannic', sans-serif" }}
              >
                Can we bring your chai?
              </h2>

              <p
                className={`font-bold leading-relaxed text-[#FFDDB0] text-center text-base md:text-[18px] px-14 ${
                  isAnimated
                    ? "animate-slide-right-footer animation-delay-600"
                    : ""
                }`}
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                We'll come to you whenever you need a perfect cup of tea. Our
                home delivery service brings fresh chai and delicious snacks
                right to your doorstep. Sit back, relax, and enjoy the taste of
                Chaaye Khana at home
              </p>

              <div
                className={`mt-8 ${
                  isAnimated
                    ? "animate-fade-in-up-footer animation-delay-800"
                    : ""
                }`}
              >
                <img
                  src="/src/assets/pngs/deliveryBoy.png"
                  alt="Delivery Boy"
                  className="w-[500px] h-[400px] object-contain animate-delivery-boy"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-[#FFDDB0] mx-8"></div>

          <div className="lg:w-1/2 pl-0 lg:pl-8 xl:pl-12">
            <div className="space-y-6 sm:space-y-8">
              <h2
                className={`font-bold text-[32px] sm:text-[40px] md:text-[60px] text-[#FFDDB0] text-center lg:text-left ${
                  isAnimated
                    ? "animate-slide-right-footer animation-delay-1000"
                    : ""
                }`}
                style={{ fontFamily: "'Britannic', sans-serif" }}
              >
                Contact us
              </h2>

              <div
                className={`space-y-2 text-center lg:text-left ${
                  isAnimated
                    ? "animate-fade-in-up-footer animation-delay-1200"
                    : ""
                }`}
              >
                <p
                  className="font-bold text-[#FFDDB0] text-[16px] sm:text-[18px] md:text-[22px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  +92 42 35778284
                </p>
                <p
                  className="font-bold text-[#FFDDB0] text-[16px] sm:text-[18px] md:text-[22px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  +92 327 4876476
                </p>
              </div>

              <div
                className={`text-center lg:text-left ${
                  isAnimated
                    ? "animate-fade-in-up-footer animation-delay-1200"
                    : ""
                }`}
              >
                <a
                  href="https://www.chaayekhana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:opacity-80 transition-opacity text-[#FFDDB0] text-[16px] sm:text-[18px] md:text-[22px]"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  www.chaayekhana.com
                </a>
              </div>

              <div
                className={`grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 ${
                  isAnimated
                    ? "animate-fade-in-up-footer animation-delay-1200"
                    : ""
                }`}
              >
                <div>
                  <h3
                    className="font-bold mb-3 sm:mb-4 text-[#FFDDB0] text-[16px] sm:text-[18px] md:text-[22px] text-center lg:text-left"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Company
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => handleScrollToSection("about")}
                        className="font-bold hover:opacity-80 transition-opacity text-[#FFDDB0] text-[14px] sm:text-[16px] md:text-[18px] w-full text-center lg:text-left"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        About us
                      </button>
                    </li>
                    <li>
                      <a
                        onClick={() => handleScrollToSection("reasons")}
                        className="font-bold hover:opacity-80 transition-opacity text-[#FFDDB0] text-[14px] sm:text-[16px] md:text-[18px] cursor-pointer w-full text-center lg:text-left ml-3 md:ml-0"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        Reason To Love Us
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => handleScrollToSection("menu")}
                        className="font-bold hover:opacity-80 transition-opacity text-[#FFDDB0] text-[14px] sm:text-[16px] md:text-[18px] w-full text-center lg:text-left"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        Menu
                      </button>
                    </li>
                    <li>
                      {/* <button
                        onClick={() => handleScrollToSection("address")}
                        className="font-bold hover:opacity-80 transition-opacity text-[#FFDDB0] text-[14px] sm:text-[16px] md:text-[18px] w-full text-center lg:text-left"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        Address
                      </button> */}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3
                    className="font-bold mb-3 sm:mb-4 text-[#FFDDB0] text-[16px] sm:text-[18px] md:text-[22px] text-center lg:text-left"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Services
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => handleScrollToSection("packages")}
                        className="font-bold hover:opacity-80 transition-opacity text-[#FFDDB0] text-[14px] sm:text-[16px] md:text-[18px] w-full text-center lg:text-left"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        Packages
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleScrollToSection("discount")}
                        className="font-bold hover:opacity-80 transition-opacity text-[#FFDDB0] text-[14px] sm:text-[16px] md:text-[18px] w-full text-center lg:text-left"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        Discount
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleScrollToSection("team")}
                        className="font-bold hover:opacity-80 transition-opacity text-[#FFDDB0] text-[14px] sm:text-[16px] md:text-[18px] w-full text-center lg:text-left"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        Team
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleScrollToSection("features")}
                        className="font-bold hover:opacity-80 transition-opacity text-[#FFDDB0] text-[14px] sm:text-[16px] md:text-[18px] w-full text-center lg:text-left"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        Features
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className={`flex space-x-4 sm:space-x-6 pt-4 justify-center lg:justify-start ${
                  isAnimated
                    ? "animate-fade-in-up-footer animation-delay-1200"
                    : ""
                }`}
              >
                <a
                  href="https://x.com/chaayekhanalhr?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFDDB0] hover:text-[#5E250F] transition-opacity text-2xl sm:text-3xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/share/1DsbEaCUVc/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFDDB0] hover:text-[#5E250F] transition-opacity text-2xl sm:text-3xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/chaayekhanagulberggreens?igsh=cnoxcWZlNXB2Y2d5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFDDB0] hover:text-[#5E250F] transition-opacity text-2xl sm:text-3xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
