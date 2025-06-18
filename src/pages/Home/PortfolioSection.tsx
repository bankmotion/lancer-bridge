import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PortfolioProjects, PortfolioResult } from "@/config/home";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev === 0 ? PortfolioProjects.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev === PortfolioProjects.length - 1 ? 0 : prev + 1
      );
    }
  };

  const getAdjacentIndex = (offset: number) => {
    const newIndex = currentIndex + offset;
    if (newIndex < 0) return PortfolioProjects.length - 1;
    if (newIndex >= PortfolioProjects.length) return 0;
    return newIndex;
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="bg-gradient-to-b bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Portfolio
        </motion.h2>

        <div className="relative">
          {/* Navigation Buttons - Moved outside the draggable area */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 z-10 shadow-lg border border-gray-700"
            disabled={isAnimating}
          >
            <CaretLeft size={28} className="text-gray-200" weight="bold" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 z-10 shadow-lg border border-gray-700"
            disabled={isAnimating}
          >
            <CaretRight size={28} className="text-gray-200" weight="bold" />
          </button>

          {/* Main Project Display */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="relative cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative">
                  <div className="aspect-[16/9] relative max-w-4xl mx-auto rounded-lg p-4">
                    <img
                      src={PortfolioProjects[currentIndex].image}
                      alt={PortfolioProjects[currentIndex].title}
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-lg" />
                  </div>
                </div>
                <div className="p-8 max-w-4xl mx-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold">
                      {PortfolioProjects[currentIndex].title}
                    </h3>
                    {PortfolioProjects[currentIndex].link && (
                      <a
                        href={PortfolioProjects[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <span className="text-sm underline">
                          Visit Live Site
                        </span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-gray-300 mb-6">
                    {PortfolioProjects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {PortfolioProjects[currentIndex].results.map(
                      (result: PortfolioResult, index: number) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 px-4 py-2 rounded-lg text-gray-200 border border-gray-700"
                        >
                          {result.title}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Adjacent Projects Preview */}
          <div className="flex gap-4 justify-center mt-4">
            {PortfolioProjects.map((project, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden cursor-pointer ${
                    index === currentIndex ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => !isAnimating && setCurrentIndex(index)}
                >
                  <img
                    src={PortfolioProjects[index].image}
                    alt={PortfolioProjects[index].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
