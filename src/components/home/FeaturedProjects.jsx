import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart City Mapping Initiative',
      category: 'Urban Planning',
      description:
        'Comprehensive 3D mapping and analysis for sustainable urban development.',
      image:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop',
      client: 'Metropolitan Development Authority',
      year: '2023',
    },
    {
      id: 2,
      title: 'Agricultural Monitoring System',
      category: 'Precision Agriculture',
      description:
        'Advanced drone-based monitoring system for large-scale agricultural operations.',
      image:
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
      client: 'AgroTech Solutions',
      year: '2023',
    },
    {
      id: 3,
      title: 'Forest Conservation Mapping',
      category: 'Environmental',
      description:
        'Satellite-based monitoring system for tracking deforestation patterns.',
      image:
        'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop',
      client: 'Environmental Protection Agency',
      year: '2023',
    },
    {
      id: 4,
      title: 'Coastal Zone Management',
      category: 'Marine Mapping',
      description:
        'Integrated coastal zone mapping system for environmental protection.',
      image:
        'https://images.unsplash.com/photo-1505245208761-ba872912fac0?q=80&w=2070&auto=format&fit=crop',
      client: 'Coastal Development Board',
      year: '2023',
    },
    {
      id: 5,
      title: 'Urban Transportation Analysis',
      category: 'Infrastructure',
      description:
        'Advanced GIS solutions for optimizing urban transportation networks.',
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop',
      client: 'City Transit Authority',
      year: '2023',
    },
    {
      id: 6,
      title: 'Renewable Energy Mapping',
      category: 'Energy',
      description:
        'Solar and wind potential mapping for renewable energy installations.',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop',
      client: 'Renewable Energy Corporation',
      year: '2023',
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-light-blue text-sm font-semibold uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue mt-2">
            Featured <span className="text-light-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-light-blue mx-auto mt-6"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our innovative geospatial solutions that have transformed
            industries and communities worldwide.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden aspect-w-16 aspect-h-12">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block text-white text-sm font-medium bg-light-blue/90 px-3 py-1 rounded-full mb-2">
                        {project.category}
                      </span>
                      <p className="text-white text-sm opacity-90">
                        Client: {project.client}
                      </p>
                      <p className="text-white text-sm opacity-90">
                        Year: {project.year}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-deep-blue mb-2 group-hover:text-light-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-light-blue font-medium hover:text-deep-blue transition-colors group/link"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="btn btn-primary inline-flex items-center group"
          >
            <span>View All Projects</span>
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
      </div>
    </section>
  );
};

export default FeaturedProjects;
