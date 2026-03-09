import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
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
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/pngs/mobileBG.png')",
        }}
      />
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: "url('/src/assets/pngs/aboutUsBG.png')",
        }}
      />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <h1
          className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px] text-[#5E250F] font-bold text-center mb-8 lg:mb-16"
          style={{ fontFamily: "Britannic, sans-serif" }}
        >
          About us
        </h1>

        <div className="max-w-[1300px] mx-auto w-full flex-grow flex items-center justify-center">
          <div className="flex flex-col lg:hidden items-center justify-center w-full gap-0">
            <div className="w-full max-w-sm">
              <p
                className={`text-base sm:text-base text-[#FFDDB0] font-bold leading-relaxed text-center pt-10 md:pt-0 ${
                  isAnimated ? "animate-slide-top" : ""
                }`}
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Chaaye Khana is a welcoming place for tea lovers who enjoy
                relaxing moments with a perfect cup of chai. Our café is
                inspired by the traditional tea culture where friends and
                families gather to share conversations and create beautiful
                memories. We take pride in serving freshly brewed tea made from
                high-quality ingredients. From classic doodh patti to special
                flavored teas, every cup is prepared with care to give our
                customers a rich and satisfying taste.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/src/assets/pngs/cupOfTea.png"
                alt="Cup of Tea"
                className="w-[500px] h-[500px] xl:w-[500px] xl:h-[500px] 2xl:w-[685px] 2xl:h-[675px] object-contain animate-rotate"
              />
            </div>

            <div className="w-full max-w-sm">
              <p
                className={`text-base sm:text-base text-[#FFDDB0] font-bold leading-relaxed text-center pb-10 md:pb-0 ${
                  isAnimated ? "animate-slide-bottom animation-delay-200" : ""
                }`}
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Along with our signature chai, Chaaye Khana also offers a
                variety of delicious snacks and light meals. Our goal is to
                create a warm and comfortable environment where everyone can
                enjoy good food and great tea. At Chaaye Khana, we believe tea
                is more than just a drink—it is an experience that brings people
                together. Whether you visit us for a quick break or a long
                conversation, we are here to make every moment special.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-row items-center justify-between gap-0 w-full">
            <div className="flex-1 text-center lg:text-left max-w-full flex items-center justify-center self-center">
              <p
                className={`text-xl xl:text-2xl text-[#FFDDB0] font-bold leading-relaxed text-center ${
                  isAnimated ? "animate-slide-left" : ""
                }`}
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Chaaye Khana is a welcoming place for tea lovers who enjoy
                relaxing moments with a perfect cup of chai. Our café is
                inspired by the traditional tea culture where friends and
                families gather to share conversations and create beautiful
                memories. We take pride in serving freshly brewed tea made from
                high-quality ingredients. From classic doodh patti to special
                flavored teas, every cup is prepared with care to give our
                customers a rich and satisfying taste.
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src="/src/assets/pngs/cupOfTea.png"
                alt="Cup of Tea"
                className="w-64 h-64 xl:w-[500px] xl:h-[500px] 2xl:w-[685px] 2xl:h-[675px] object-contain animate-rotate"
              />
            </div>

            <div className="flex-1 text-center lg:text-right max-w-full flex items-center justify-center self-center">
              <p
                className={`text-xl xl:text-2xl text-[#FFDDB0] font-bold leading-relaxed text-center ${
                  isAnimated ? "animate-slide-right animation-delay-200" : ""
                }`}
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Along with our signature chai, Chaaye Khana also offers a
                variety of delicious snacks and light meals. Our goal is to
                create a warm and comfortable environment where everyone can
                enjoy good food and great tea. At Chaaye Khana, we believe tea
                is more than just a drink—it is an experience that brings people
                together. Whether you visit us for a quick break or a long
                conversation, we are here to make every moment special.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes slideInTop {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-slide-top {
          animation: slideInTop 1s ease-out forwards;
        }

        .animate-slide-bottom {
          animation: slideInBottom 1s ease-out forwards;
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

export default AboutUs;
