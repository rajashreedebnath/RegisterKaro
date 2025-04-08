import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "₹4999",
    features: [
      "Company Registration",
      "PAN & TAN Registration",
      "Basic Documentation",
    ],
  },
  {
    name: "Pro Plan",
    price: "₹8999",
    features: [
      "Everything in Basic",
      "GST Registration",
      "Dedicated Account Manager",
    ],
  },
  {
    name: "Ultimate Plan",
    price: "₹14999",
    features: [
      "Everything in Pro",
      "Trademark Registration",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Choose Your Plan
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-200 p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all bg-gradient-to-b from-white to-blue-50"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">✔️</span> {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
