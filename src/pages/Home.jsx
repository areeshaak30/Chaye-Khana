import { motion } from "framer-motion";
import ChayeBG from "../assets/pngs/chayeBG.png";
import BottomLayer from "../assets/pngs/bottomLayer.png";

const Home = () => {
  const handleSmoothScroll = () => {
    const element = document.querySelector("#menu");
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={ChayeBG}
          alt="Chaaye Khana Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div
        className="absolute top-0 left-0 h-full z-5 pointer-events-none hidden sm:block"
        style={{
          width: "55%",
          background:
            "linear-gradient(90deg, rgba(255, 221, 176, 0.9) 0%, rgba(255, 221, 176, 0.85) 40%, rgba(255, 221, 176, 0.6) 70%, rgba(255, 221, 176, 0.3) 90%, transparent 100%)",
          borderRadius: "0 0 150px 0",
        }}
      />

      <div
        className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 221, 176, 0.85) 0%, rgba(255, 221, 176, 0.7) 40%, rgba(255, 221, 176, 0.4) 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-10">
          <motion.div
            className="max-w-xl lg:max-w-2xl xl:max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-[#5E250F] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3"
              style={{ fontFamily: "'Britannic', sans-serif" }}
              variants={itemVariants}
            >
              Welcome to
            </motion.h2>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#5E250F] mb-4 sm:mb-6 lg:mb-8 leading-tight"
              style={{ fontFamily: "'Britannic', sans-serif" }}
              variants={itemVariants}
            >
              Chaaye Khana
            </motion.h1>

            <motion.p
              className="text-black text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-md sm:max-w-lg lg:max-w-xl"
              style={{ fontFamily: "'Britannic', sans-serif" }}
              variants={itemVariants}
            >
              Chaaye Khana is a place where tea lovers come together to enjoy
              the perfect blend of flavor and comfort. From traditional doodh
              patti to special teas and delicious snacks, we serve every cup
              with warmth and quality.
            </motion.p>

            <motion.button
              onClick={handleSmoothScroll}
              className="bg-[#5E250F] hover:bg-[#3D1810] text-[#FFDDB0] text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg cursor-pointer"
              style={{ fontFamily: "'Britannic', sans-serif" }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.6,
              }}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW MENU
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 pointer-events-none">
        <img
          src={BottomLayer}
          alt=""
          className="h-auto object-contain"
          style={{
            width: "75vw",
            maxWidth: "850px",
            minWidth: "380px",
            marginLeft: "-5%",
          }}
        />
      </div>
    </section>
  );
};

export default Home;
