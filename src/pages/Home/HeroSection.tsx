import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AnimatedSection from "@/components/AnimatedSection";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  const heroContent = [
    {
      image: "/assets/imgs/bg/01.png",
      slogan: "Your Bridge to High-Performance Dev Teams",
      description:
        "Building exceptional development teams that drive your success",
    },
    {
      image: "/assets/imgs/bg/02.png",
      slogan: "Trusted Tech Partners, Not Just Coders",
      description:
        "Strategic technology solutions that transform your business",
    },
    {
      image: "/assets/imgs/bg/03.png",
      slogan: "The Bridge Between Ideas and Execution",
      description: "Turning your vision into reality with expert engineering",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50; // minimum distance for swipe
    const { offset } = info;

    if (Math.abs(offset.x) > threshold) {
      if (offset.x > 0) {
        // Swipe right - go to previous
        setCurrentImageIndex(
          (prev) => (prev - 1 + heroContent.length) % heroContent.length
        );
      } else {
        // Swipe left - go to next
        setCurrentImageIndex((prev) => (prev + 1) % heroContent.length);
      }
    }
  };

  return (
    <motion.section
      className="relative bg-black text-white py-32 h-[calc(100vh)] pt-[80px] flex items-end justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroContent[currentImageIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-10"
      />

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`top-text-${currentImageIndex}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <span className="text-yellow-400 text-md tracking-widest mb-2 inline-block font-medium bg-black/30 px-4 py-2 rounded-full">
                IDEAS, SOLUTIONS, ENGINEERING.
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mt-10"
            >
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold mb-6 leading-tight">
                {heroContent[currentImageIndex].slogan}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {heroContent[currentImageIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`button-${currentImageIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-white text-black font-semibold px-8 py-4 mt-10 rounded-md hover:bg-gray-200 transition-all duration-300 text-lg"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
