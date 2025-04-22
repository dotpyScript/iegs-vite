import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  const slides = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop',
      title: 'Geospatial Excellence',
      subtitle:
        'Pioneering innovative geospatial solutions that connect and transform communities worldwide. Our cutting-edge technology delivers precision and reliability for your mapping needs.',
      zoomDirection: 'in',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?q=80&w=2072&auto=format&fit=crop',
      title: 'Precision Mapping',
      subtitle:
        'Transform complex geographical data into clear, actionable insights. Our advanced mapping solutions help organizations make informed decisions with confidence.',
      zoomDirection: 'out',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2074&auto=format&fit=crop',
      title: 'Global Reach',
      subtitle:
        'From local projects to international initiatives, we deliver sustainable geospatial solutions that scale. Experience world-class service with local expertise.',
      zoomDirection: 'in',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2070&auto=format&fit=crop',
      title: 'Advanced Analytics',
      subtitle:
        'Unlock the full potential of your spatial data with our powerful analytics platform. Turn complex geographical information into strategic advantages for your business.',
      zoomDirection: 'out',
    },
  ];

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 7000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, slides.length]);

  const handleSlideInteraction = () => {
    setAutoplay(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    setTimeout(() => setAutoplay(true), 8000);
  };

  // Parallax effect for background images
  const imageVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
    exit: {
      scale: 1.1,
      opacity: 0,
      transition: { duration: 0.8, ease: 'easeIn' },
    },
  };

  // Staggered text animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const labelVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Preload all images to prevent flashing
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Get the current slide's zoom direction
  const getZoomAnimation = (direction) => {
    return direction === 'in'
      ? { scale: [1, 1.1], transition: { duration: 7, ease: 'linear' } }
      : { scale: [1.1, 1], transition: { duration: 7, ease: 'linear' } };
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={slides[currentSlide].id}
            className="absolute inset-0 h-full w-full"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={imageVariants}
          >
            {/* Enhanced overlay system for better text readability and visual appeal */}
            <div className="absolute inset-0 z-10">
              {/* Primary gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/60 to-black/30"></div>

              {/* Secondary gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>

              {/* Accent color overlay */}
              <div className="absolute inset-0 bg-light-blue/10"></div>

              {/* Subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '20px 20px',
                }}
              ></div>
            </div>

            <motion.div
              className="h-full w-full"
              animate={getZoomAnimation(slides[currentSlide].zoomDirection)}
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slides[currentSlide].id}
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
            >
              <motion.div
                className="mb-2 inline-block"
                variants={labelVariants}
              >
                <span className="bg-light-blue/90 py-1 px-4 rounded-full text-xs uppercase tracking-wider font-semibold text-white">
                  IEGS Global
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                variants={headingVariants}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={itemVariants}
              >
                <Link
                  to="/services"
                  className="btn btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-base md:text-lg font-semibold min-w-[160px]"
                >
                  Our Solutions
                </Link>
                <Link
                  to="/contact"
                  className="btn bg-white text-deep-blue hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base md:text-lg font-semibold min-w-[160px]"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation - Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  handleSlideInteraction();
                }}
                className={`group relative transition-all duration-300 ${
                  currentSlide === index
                    ? 'scale-100'
                    : 'scale-90 hover:scale-95'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-light-blue scale-100'
                      : 'bg-white/40 group-hover:bg-white/60'
                  }`}
                ></div>
                {currentSlide === index && (
                  <div className="absolute -inset-1.5 rounded-full border border-light-blue/30 animate-ping"></div>
                )}
              </button>
            ))}

            {/* Slide Counter */}
            <div className="ml-auto text-white/80 font-light text-sm tracking-wider">
              <span className="font-medium text-light-blue">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <span className="mx-1">/</span>
              <span>{String(slides.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-28 right-10 z-20 hidden md:block"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              y: [0, 6, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
            className="text-white"
          >
            <svg
              className="w-5 h-8"
              viewBox="0 0 24 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="22"
                height="38"
                rx="11"
                stroke="white"
                strokeWidth="2"
                strokeOpacity="0.5"
              />
              <motion.circle
                animate={{ y: [5, 25, 5] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
                cx="12"
                cy="10"
                r="4"
                fill="white"
              />
            </svg>
          </motion.div>
          <span className="text-white/80 text-sm font-light">Scroll</span>
        </div>
      </motion.div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Larger circles */}
        <div className="absolute bottom-[20%] -left-12 w-64 h-64 border border-white/10 rounded-full backdrop-blur-sm"></div>
        <div className="absolute top-[25%] -right-20 w-96 h-96 border border-white/10 rounded-full backdrop-blur-sm"></div>

        {/* Smaller accent circles */}
        <div className="absolute top-[10%] left-[20%] w-8 h-8 border border-light-blue/30 rounded-full backdrop-blur-sm">
          <div className="absolute inset-1 rounded-full bg-light-blue/10"></div>
        </div>
        <div className="absolute bottom-[30%] right-[15%] w-16 h-16 border border-light-blue/20 rounded-full backdrop-blur-sm">
          <div className="absolute inset-2 rounded-full bg-light-blue/10"></div>
        </div>

        {/* Additional small decorative elements */}
        <div className="absolute top-[40%] left-[40%] w-4 h-4 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-[40%] left-[15%] w-6 h-6 border border-light-blue/15 rounded-full"></div>
        <div className="absolute top-[15%] right-[30%] w-3 h-3 bg-light-blue/20 rounded-full blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;
