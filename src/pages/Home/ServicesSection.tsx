import { OurServices } from "@/config/home";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AnimatedSection from "@/components/AnimatedSection";
import { IconWeight } from "@phosphor-icons/react";

const ServicesSection = () => {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedSection direction="up" className="text-center mb-16">
          <AnimatedText
            text="Empowering Businesses with Strategic Technology Services"
            className="text-2xl md:text-3xl font-bold mb-4 text-center w-full justify-center flex"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to drive your business
            forward
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {OurServices.map((service, index) => (
            <AnimatedSection
              key={service.title}
              direction="up"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                }}
                className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-8 min-h-[220px] transition-all duration-300 shadow-lg hover:bg-gray-700"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6 text-blue-400"
                >
                  <service.icon
                    size={48}
                    weight={(service.iconWeight as IconWeight) || "duotone"}
                    className="text-blue-400"
                  />
                </motion.div>
                <h3 className="text-lg font-semibold text-center leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  {service.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
