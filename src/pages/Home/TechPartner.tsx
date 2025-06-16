import { motion, AnimatePresence } from "framer-motion";
import { TechPartners } from "@/config/home";
import { useState } from "react";

const fadeVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const TechPartner = () => {
  const [index, setIndex] = useState(0);
  const total = TechPartners.length;

  const handlePrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const handleNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50; // Minimum distance to trigger slide
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  return (
    <motion.section 
      className="bg-gradient-to-b from-black via-gray-950 to-black text-white py-20"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          What Our Tech Partners Say
        </h2>
        
        {/* Draggable content */}
        <div className="relative">
          <motion.div 
            className="cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          >
            <div className="relative flex items-center justify-center min-h-[200px] mb-8">
              <div className="w-full flex justify-center">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={index}
                    variants={fadeVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                  >
                    <blockquote className="italic text-xl md:text-2xl leading-relaxed mb-6 text-gray-200">
                      "{TechPartners[index].description}"
                    </blockquote>
                    <p className="mt-2 text-lg font-semibold text-gray-300">
                      {TechPartners[index].title}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pagination dots - Now outside the draggable area */}
        <div className="flex justify-center gap-2 mt-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full border border-gray-700 transition-all duration-200 ${
                index === i ? "bg-gray-600" : "bg-transparent hover:bg-gray-800"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechPartner;
