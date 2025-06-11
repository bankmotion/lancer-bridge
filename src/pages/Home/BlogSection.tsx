import { motion } from "framer-motion";
import { Technologies } from "@/config/home";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const rightFade = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold mb-12 !text-black"
        >
          We unite top partners and advanced tech to give your business the
          edge.
        </motion.h4>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {Technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={rightFade}
              whileHover={{
                y: -10,
                scale: 1.1,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              className="px-2 py-3 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <img src={tech.icon} alt={tech.name} className="w-24 h-auto" />
              <p className="text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
