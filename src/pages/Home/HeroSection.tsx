import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AnimatedSection from "@/components/AnimatedSection";

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
    <section className="relative bg-gray-900 text-white py-32 h-[calc(100vh-80px)] flex items-end justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
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
          <AnimatedSection direction="down" delay={0.2}>
            <span className="text-blue-400 text-sm tracking-widest mb-2 inline-block">
              IDEAS, SOLUTIONS, ENGINEERING.
            </span>
          </AnimatedSection>

          <AnimatedText
            text="Bringing Awesome Ideas to Life!"
            className="text-4xl leading-tight md:text-6xl font-bold mb-6 mt-10"
          />

          <AnimatedSection direction="up" delay={0.6}>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-semibold px-8 py-4 mt-10 rounded-md hover:bg-gray-200 transition-all duration-300"
            >
              LET'S TALK →
            </motion.button>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.8}>
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
