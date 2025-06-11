import { motion } from "framer-motion";
import { ClientLogo } from "@/config/home";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const zoomIn = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 18 } },
};

const ClientLogoSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold mb-12 !text-black"
        >
          Crafting success stories with brands who dare to dream,
          <br /> we're the trusted architects of innovation and growth.
        </motion.h3>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {ClientLogo.map((logo) => (
            <motion.img
              key={logo}
              src={logo}
              alt="Client Logo"
              variants={zoomIn}
              className="w-40 max-w-full h-auto"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogoSection;
