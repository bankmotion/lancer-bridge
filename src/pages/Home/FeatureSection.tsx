import { motion } from "framer-motion";
import { TechText } from "@/config/home";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const leftFade = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const FeatureSection = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {TechText.map((item) => (
              <motion.div
                key={item.title}
                variants={leftFade}
                whileHover={{
                  y: -15,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white shadow-lg p-8 rounded-xl transition-all duration-300"
              >
                <h3 className="font-semibold text-xl mb-3 !text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
