import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AnimatedSection from "@/components/AnimatedSection";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex((prev) => (prev + 1) % heroContent.length);
    }
    if (isRightSwipe) {
      setCurrentImageIndex((prev) => (prev - 1 + heroContent.length) % heroContent.length);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      className="relative bg-gray-900 text-white py-32 h-[calc(100vh)] pt-[80px] flex items-end justify-center overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
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
          <AnimatedSection direction="down" delay={0.2}>
            <span className="text-yellow-400 text-md tracking-widest mb-2 inline-block font-medium bg-black/30 px-4 py-2 rounded-full">
              IDEAS, SOLUTIONS, ENGINEERING.
            </span>
          </AnimatedSection>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold mb-6 mt-10 leading-tight">
                {heroContent[currentImageIndex].slogan}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {heroContent[currentImageIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatedSection direction="up" delay={0.6}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-white text-black font-semibold px-8 py-4 mt-10 rounded-md hover:bg-gray-200 transition-all duration-300 text-lg"
            >
              Contact Us →
            </motion.button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
