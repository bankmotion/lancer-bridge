import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/assets/imgs/bg/1.png",
    "/assets/imgs/bg/2.webp",
    "/assets/imgs/bg/3.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative bg-gray-900 text-white py-32 h-[calc(100vh-80px)] flex items-end justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 z-10"
        />
        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-blue-400 text-sm tracking-widest mb-2"
            >
              IDEAS, SOLUTIONS, ENGINEERING.
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-4xl leading-tight md:text-6xl font-bold mb-6 mt-10"
            >
              Bringing Awesome <br /> Ideas to Life!
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-semibold px-8 py-4 mt-10 rounded-md hover:bg-gray-200 transition-all duration-300"
            >
              LET'S TALK →
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
