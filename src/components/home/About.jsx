import { Link } from 'react-router-dom';
// Import motion but mark it as used with eslint comment
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const About = () => {
  const stats = [
    {
      label: 'Years of Experience',
      value: 10,
      suffix: '+',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: 'Projects Completed',
      value: 500,
      suffix: '+',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      label: 'Qualified Employees',
      value: 50,
      suffix: '+',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      label: 'Global Clients',
      value: 300,
      suffix: '+',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 002 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"
          />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: 'Quality Control',

      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'Expert Team',

      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Innovation',

      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-light-blue text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue mt-2">
            The Story Behind Our{' '}
            <span className="text-light-blue">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto mt-6"></div>
        </motion.div>

        {/* Main Content with Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          {/* Image Column - Left */}
          <motion.div
            className="lg:col-span-5 relative flex"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-light-blue/20 rounded-2xl transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
                alt="IEGS Global Team"
                className="rounded-2xl shadow-xl w-full h-full object-cover z-10 relative transform rotate-3 hover:rotate-0 transition-transform duration-500"
                style={{ minHeight: '100%' }}
              />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 bg-light-blue rounded-2xl flex items-center justify-center z-20 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-xs uppercase tracking-wide">
                    Years of
                    <br />
                    Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Floating brand elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-deep-blue rounded-full opacity-80 hidden lg:block"></div>
            <div className="absolute -bottom-8 left-20 w-16 h-16 border-4 border-light-blue rounded-full opacity-50 hidden lg:block"></div>
          </motion.div>

          {/* Content Card - Right */}
          <motion.div
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-lg relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-deep-blue mb-6">
              Leading Way In Geospatial Solutions
            </h3>
            <div className="flex items-center justify-center mb-8">
              <p className="text-gray-600 leading-relaxed text-lg text-justify max-w-2xl mx-auto">
                IEGS Global is a values-driven company made up of skilled,
                innovative professionals. We aim to lead the region in
                delivering reliable, cutting-edge GIS solutions and aspire to be
                a world-class provider in GIS/GPS/CAD, remote sensing, software
                development, and the global drone industry.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-light-blue/30 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center text-light-blue group-hover:bg-light-blue/20 transition-colors duration-300 flex-shrink-0">
                        <div className="w-6 h-6">{value.icon}</div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-deep-blue font-bold text-base mb-1">
                          {value.title}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/about"
                className="btn btn-primary inline-flex items-center group"
              >
                <span>Learn More About Us</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center space-y-3 sm:space-y-0">
                <div className="p-3 bg-light-blue/10 rounded-lg">
                  <div className="text-light-blue">{stat.icon}</div>
                </div>
                <div className="sm:ml-3">
                  <div className="text-3xl font-bold text-deep-blue">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
