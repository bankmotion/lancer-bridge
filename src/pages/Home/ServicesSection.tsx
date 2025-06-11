import { OurServices } from "@/config/home";
import { motion } from "framer-motion";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const bottomFade = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const ServicesSection = () => {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Empowering Businesses with Strategic Technology Services
        </h2>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {OurServices.map((service) => (
            <motion.div
              key={service.title}
              variants={bottomFade}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
              }}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-8 min-h-[180px] transition-all duration-300 shadow-lg"
            >
              <img src={service.icon} alt={service.title} className="w-14 h-14 mb-6" />
              <h3 className="text-lg font-semibold text-center leading-snug">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;