import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Anderson',
      position: 'Project Manager, Urban Planning Corp',
      quote:
        'IEGS Global delivered exceptional geospatial solutions for our urban development project. Their expertise in GIS technology and attention to detail exceeded our expectations.',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Sarah Reynolds',
      position: 'Director, Environmental Conservation NGO',
      quote:
        'Working with IEGS Global on our environmental monitoring projects has been a game-changer. Their innovative approaches and reliable data analysis have significantly improved our conservation efforts.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Michael Kwame',
      position: 'CTO, AgriTech Solutions',
      quote:
        "The precision agriculture solutions provided by IEGS Global have transformed our farming operations. The team's technical expertise and responsive service make them our trusted geospatial partner.",
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Elizabeth Okafor',
      position: 'Head of Smart City Initiative, Lagos',
      quote:
        "IEGS Global's smart city solutions have helped us create a more efficient and sustainable urban environment. Their cutting-edge technology and professional team have been instrumental to our success.",
      image:
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop',
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setActive(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 md:py-24 bg-deep-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover why organizations trust IEGS Global for their geospatial
            needs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={active}>
              {testimonials.map((testimonial, index) => {
                if (index === active) {
                  return (
                    <motion.div
                      key={testimonial.id}
                      className="absolute w-full"
                      custom={active}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.4 },
                        scale: { duration: 0.4 },
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1);
                        }
                      }}
                    >
                      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:shadow-3xl">
                        <div className="relative">
                          <svg
                            className="w-12 h-12 text-light-blue mb-6 opacity-90"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                          >
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                          </svg>

                          <p className="text-xl leading-relaxed mb-8 text-gray-700">
                            {testimonial.quote}
                          </p>

                          <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-light-blue">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-xl text-deep-blue mb-1">
                                {testimonial.name}
                              </h4>
                              <p className="text-light-blue">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }
                return null;
              })}
            </AnimatePresence>
          </div>

          {/* Updated Slide Navigation - Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group relative transition-all duration-300 ${
                  active === index ? 'scale-100' : 'scale-90 hover:scale-95'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    active === index
                      ? 'bg-white scale-100'
                      : 'bg-white/40 group-hover:bg-white/60'
                  }`}
                ></div>
                {active === index && (
                  <div className="absolute -inset-1.5 rounded-full border border-white/30 animate-ping"></div>
                )}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-light-blue/20 hover:bg-light-blue/30 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-light-blue/20 hover:bg-light-blue/30 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
