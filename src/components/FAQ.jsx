import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does company registration take?",
    answer: "Usually between 5-7 working days depending on document verification and government approvals.",
  },
  {
    question: "Is GST registration mandatory for startups?",
    answer: "Not always. It depends on your turnover and the nature of your business. We provide free consultation!",
  },
  {
    question: "Do you provide post-registration support?",
    answer: "Yes! We offer GST filing, accounting, and compliance support after your company is registered.",
  },
  {
    question: "Is the process 100% online?",
    answer: "Yes! You can submit your documents online. Our team handles the entire process remotely.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800"
              >
                {faq.question}
                <span className="ml-2">
                  {openIndex === index ? "➖" : "➕"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
