import { useEffect, useState } from "react";
import MenuCard from "../components/menuCard";
import menuData from "../components/data/menuData";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
      return 1;
    }
    return 1;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, menuData.length - cardsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    if (index <= maxIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="bg-[#FFDDB0] py-8 md:py-16 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          className="font-bold text-[80px] md:text-[120px] lg:text-[140px] text-[#5E250F] text-center mb-12 md:mb-20 leading-tight"
          style={{ fontFamily: "'Britannic', sans-serif" }}
        >
          MENU
        </h1>

        <div id="menu" className="relative px-2 sm:px-4 md:px-8 lg:px-12">
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {menuData.map((item) => (
                    <div key={item.id} className="w-full flex-shrink-0 px-2">
                      <MenuCard item={item} />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#5E250F] text-white p-2 rounded-full shadow-lg hover:bg-[#3D1810] transition-colors z-10"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5E250F] text-white p-2 rounded-full shadow-lg hover:bg-[#3D1810] transition-colors z-10"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="flex justify-center mt-4 space-x-2">
                {menuData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-[#5E250F]"
                        : "bg-[#5E250F]/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-4"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                  }}
                >
                  {menuData.map((item) => (
                    <div
                      key={item.id}
                      className={`flex-shrink-0 ${
                        cardsPerView === 3
                          ? "w-[calc(33.333%-12px)]"
                          : "w-[calc(25%-12px)]"
                      }`}
                    >
                      <MenuCard item={item} />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 -translate-x-full bg-[#5E250F] text-white p-3 rounded-full shadow-lg hover:bg-[#3D1810] transition-colors z-10"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 translate-x-full bg-[#5E250F] text-white p-3 rounded-full shadow-lg hover:bg-[#3D1810] transition-colors z-10"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-[#5E250F]"
                        : "bg-[#5E250F]/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
