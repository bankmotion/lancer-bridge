import { motion } from "framer-motion";
import { OurStats } from "@/config/home";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const bounceIn = {
  initial: { scale: 0.5, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

const GlobalFootprinter = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold text-center mb-16 !text-black"
          >
            Sneak Peek into our Innovative Journey
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {OurStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={bounceIn}
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="text-center p-6 rounded-xl"
              >
                <motion.h3
                  whileHover={{
                    scale: 1.2,
                    color: "#2563eb",
                  }}
                  className="text-5xl md:text-6xl font-bold !text-blue-600 mb-4"
                >
                  {stat.value}
                </motion.h3>
                <h4 className="text-xl font-semibold mb-3 !text-black">
                  {stat.label}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GlobalFootprinter;
