import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container">
        <div className="bg-deep-blue rounded-xl overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="dots"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="10" cy="10" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Geospatial Capabilities?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Contact our team of experts today to discuss how our innovative
                geospatial solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="btn bg-white text-deep-blue hover:bg-gray-100 text-center"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="btn bg-transparent text-white border border-white hover:bg-white/10 text-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Contact IEGS Global"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
