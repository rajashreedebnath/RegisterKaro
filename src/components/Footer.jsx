import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#faq" className="hover:underline">FAQs</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="text-sm text-gray-400">
            support@registerkaro.in
          </p>
          <p className="text-sm text-gray-400">
            +91 84477 46183
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-lg font-semibold text-white">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">🐦</a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RegisterKaro.in — All rights reserved.
      </div>
    </footer>
  );
}
