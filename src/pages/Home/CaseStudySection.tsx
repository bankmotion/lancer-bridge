import { motion, AnimatePresence } from "framer-motion";
import { CaseStudies } from "@/config/home";
import { useState } from "react";

const leftFade = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const rightFade = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 },
};

const textVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const imageVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const CaseStudySection = () => {
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setCurrentCaseStudyIndex((prev) => (prev + 1) % CaseStudies.length);
    setDirection(1);
  };

  const handlePrev = () => {
    setCurrentCaseStudyIndex(
      (prev) => (prev - 1 + CaseStudies.length) % CaseStudies.length
    );
    setDirection(-1);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, info) => {
          if (info.offset.x < -100) {
            handleNext();
          } else if (info.offset.x > 100) {
            handlePrev();
          }
        }}
      >
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          Discover How Our Solutions Have Made a Difference in Real-world
          Scenarios
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch">
          {/* Left: Details */}
          <div className="flex-1 flex flex-col justify-center md:justify-start md:pr-10 min-h-[320px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentCaseStudyIndex}
                variants={leftFade}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-2">
                  {CaseStudies[currentCaseStudyIndex].title}
                </h3>
                <p className="text-lg mb-4 text-gray-300">
                  {CaseStudies[currentCaseStudyIndex].description}
                </p>
                <div className="mb-8">
                  <h4 className="font-semibold mb-2">Results</h4>
                  <div className="flex gap-8">
                    {CaseStudies[currentCaseStudyIndex].results.map(
                      (r, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-white">
                            {r.percent} %
                          </div>
                          <div className="text-sm text-gray-300 mt-1">
                            {r.title}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <a
                  href={CaseStudies[currentCaseStudyIndex].button.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  {CaseStudies[currentCaseStudyIndex].button.text} &rarr;
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right: Image Slider */}
          <div className="flex-1 flex flex-col items-center justify-center relative min-h-[320px] overflow-hidden">
            <div className="w-full flex items-center justify-center relative">
              <button
                aria-label="Previous"
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 rounded-full p-2 z-10"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div
                className="relative w-full flex items-center justify-center"
                style={{ minHeight: "320px" }}
              >
                <AnimatePresence custom={direction} mode="wait" initial={false}>
                  <motion.img
                    key={currentCaseStudyIndex}
                    src={CaseStudies[currentCaseStudyIndex].image}
                    alt={CaseStudies[currentCaseStudyIndex].title}
                    className="rounded-2xl shadow-xl max-h-80 object-contain bg-white"
                    style={{ maxWidth: "90%" }}
                    custom={direction}
                    variants={rightFade}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  />
                </AnimatePresence>
              </div>
              <button
                aria-label="Next"
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 rounded-full p-2 z-10"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudySection;
