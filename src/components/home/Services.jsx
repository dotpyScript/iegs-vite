import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Digital and Advanced Mapping',
      description:
        'Create detailed digital maps and advanced visualizations of geographic data for better decision-making.',

      path: '/services/digital-mapping',
      image:
        'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Environmental Monitoring',
      description:
        'Monitor and analyze environmental changes to support sustainable development and conservation efforts.',

      path: '/services/environmental-monitoring',
      image:
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Geospatial Data Analytics',
      description:
        'Process and analyze spatial data to reveal patterns, trends, and relationships for informed decision-making.',

      path: '/services/geospatial-analytics',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Precision Agriculture',
      description:
        'Optimize farming practices through advanced geospatial technology for increased efficiency and productivity.',

      path: '/services/precision-agriculture',
      image:
        'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Smart City Solutions',
      description:
        'Develop integrated urban systems using geospatial technology to improve efficiency, sustainability, and quality of life.',

      path: '/services/smart-city',
      image:
        'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Training and Learning Services',
      description:
        'Professional training and capacity building in geospatial technologies for individuals and organizations.',

      path: '/services/training',
      image:
        'https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-light-blue text-sm font-semibold uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue mt-2">
            Our Professional <span className="text-light-blue">Services</span>
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto mt-6"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Offering a comprehensive range of innovative geospatial solutions to
            meet your specific needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-deep-blue mb-3 group-hover:text-light-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-justify leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-light-blue font-medium hover:text-deep-blue transition-colors mt-auto group/link"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
