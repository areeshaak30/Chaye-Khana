import reasonBG from "../assets/pngs/reasonBG.png";
import { useState, useEffect, useRef } from "react";
import chaye09 from "../assets/images/chaye09.jpeg";
import chaye10 from "../assets/images/chaye10.jpg.jpeg";

const ReasonToLoveUs = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="reasons"
      className="relative min-h-screen w-full overflow-hidden pb-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${reasonBG})` }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start pt-8 pb-4 lg:py-0">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-[500px] lg:h-[600px]">
                <div className="absolute bottom-0 left-[-30px] top-2 sm:top-8 z-10">
                  <img
                    src={chaye09}
                    alt="Chaaye Khana 09"
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[300px] lg:h-[300px] rounded-2xl shadow-2xl transform transition-transform duration-300 object-cover"
                  />
                </div>

                <div className="absolute top-[130px] right-[-30px] sm:top-4 sm:right-[-15px] z-20 lg:top-[280px] lg:right-[-40px]">
                  <img
                    src={chaye10}
                    alt="Chaaye Khana 10"
                    className="w-[180px] h-[180px] sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[340px] lg:h-[350px] rounded-2xl shadow-2xl transform transition-transform duration-300 object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-4 lg:px-0">
              <h1
                className={`font-bold text-[#ffddb0] mb-4 sm:mb-6 lg:mb-8 lg:pt-20 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[65px] ${
                  isAnimated ? "animate-slide-in-right" : ""
                }`}
                style={{ fontFamily: "'Britannic', sans-serif" }}
              >
                Reason to love us
              </h1>

              <p
                className={`font-normal text-[#ffddb0] leading-relaxed md:leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[510px] text-sm sm:text-base md:text-lg lg:text-[22px] text-justify lg:text-left ${
                  isAnimated ? "animate-slide-in-right animation-delay-200" : ""
                }`}
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                At Chaaye Khana, we invite you to not just indulge in our
                delightful menu but to fully immerse yourself in the unique
                ambiance that we've thoughtfully curated. Our space is a
                harmonious blend of tradition and comfort, designed to create an
                environment that's just as captivating as our food and drinks.
                As you relish the authentic flavours, allow yourself to revel in
                the intricate details of our decor, the warm lighting, the
                friendly smiles, and the soft hum of contented conversations.
                Each visit to Chaaye Khana is more than a meal; it's an
                immersive experience that gratifies all your senses. We look
                forward to welcoming you into our haven where beautiful flavours
                meet a captivating atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default ReasonToLoveUs;
