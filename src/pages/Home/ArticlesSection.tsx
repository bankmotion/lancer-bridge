import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState } from "react";

const articles = [
  {
    title: "What is iPaaS? A Strategic Guide to Integration Platform as a Service",
    description:
      "Modern businesses are not short on software; they are short on coordination. Enterprises with...",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "Databricks Cost Optimization: What High-Performing Teams Do Differently",
    description:
      "Databricks offers a powerful foundation for modern data infrastructure, enabling...",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "What C-Level Leaders Should Know Before Migrating to NetSuite",
    description:
      "Many teams begin their ERP journey when existing tools, like QuickBooks, Excel, or...",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "This Is How AI Is Quietly Rewriting Data Engineering Landscape",
    description:
      "AI is already changing how data gets produced, moved, and used, but most...",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
];

const fadeVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const ArticlesSection = () => {
  const [index, setIndex] = useState(0);
  const total = articles.length;

  const handlePrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const handleNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
    const threshold = 80;
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
      className="bg-gray-50 py-16"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h4 className="text-3xl font-bold mb-8 text-black text-left">Explore Our Latest Articles</h4>
        <div className="overflow-x-hidden">
          <div className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {articles.map((article, i) => (
              <motion.div
                key={i}
                variants={fadeVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white rounded-xl shadow-lg w-[350px] min-w-[350px] flex-shrink-0 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-xl mb-4"
                  />
                  <div className="p-6 pb-2">
                    <h5 className="font-bold text-xl mb-3 text-black">
                      {article.title}
                    </h5>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href={article.link}
                    className="text-sky-600 font-semibold hover:underline text-base"
                  >
                    READ BLOG &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full border border-sky-600 transition-all duration-200 ${
                index === i ? "bg-sky-600" : "bg-white"
              }`}
              aria-label={`Go to article ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ArticlesSection;
