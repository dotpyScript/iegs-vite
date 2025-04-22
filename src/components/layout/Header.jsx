import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import logoImage from '../../assets/images/logo.png';
import TopBar from './TopBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      submenu: [
        { name: 'Our Story', path: '/about/story' },
        { name: 'Team', path: '/about/team' },
        { name: 'Careers', path: '/about/careers' },
      ],
    },
    {
      name: 'Services',
      path: '/services',
      submenu: [
        { name: 'GIS Solutions', path: '/services/gis' },
        { name: 'Remote Sensing', path: '/services/remote-sensing' },
        { name: 'Drone Services', path: '/services/drone' },
        { name: 'Software Development', path: '/services/software' },
      ],
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <TopBar />
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 hover:text-light-blue ${
          scrolled ? 'bg-white shadow-md mt-0 py-2 ' : 'py-2 shadow-sm md:mt-9 '
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-auto h-auto"
            >
              <img
                src={logoImage}
                alt="IEGS Global"
                className={`h-10 sm:h-12 md:h-14 transition-all duration-300 ${
                  scrolled ? '' : 'brightness-0 invert'
                }`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://via.placeholder.com/180x60?text=IEGS+Global';
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.submenu && handleDropdown(index)}
                onMouseLeave={() => link.submenu && handleDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`hover:text-light-blue transition-colors duration-200 px-4 py-2 text-sm font-medium rounded-md flex items-center group ${
                    scrolled
                      ? 'text-deep-blue hover:text-deep-blue'
                      : 'text-white hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.submenu && (
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Enhanced Dropdown Menu */}
                {link.submenu && (
                  <div
                    className={`absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 transform origin-top-left z-50 
                    group-hover:scale-100 group-hover:opacity-100 scale-95 opacity-0 
                    before:content-[''] before:absolute before:top-0 before:left-4 before:w-4 before:h-4 before:bg-white before:transform before:rotate-45 before:-translate-y-2 before:rounded-sm`}
                  >
                    <div className="relative bg-white py-2 px-1">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2.5 text-sm text-deep-blue hover:bg-gray-50 hover:text-light-blue rounded-md mx-1 transition-all duration-200 relative group/item"
                        >
                          <span className="relative z-10">{subItem.name}</span>
                          <span className="absolute inset-0 bg-light-blue/5 rounded-md scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left duration-200"></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="btn btn-primary ml-3 py-2.5 px-6 text-sm font-semibold relative overflow-hidden"
              >
                <span className="relative z-10">Get a Quote</span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled
                ? 'text-white hover:bg-transparent'
                : 'text-deep-blue hover:bg-transparent'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="container py-4">
              <nav className="flex flex-col divide-y divide-gray-100">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="py-3">
                    <div
                      className="flex items-center justify-between cursor-pointer text-deep-blue font-medium"
                      onClick={() => link.submenu && handleDropdown(index)}
                    >
                      <Link
                        to={!link.submenu ? link.path : '#'}
                        className="block w-full"
                        onClick={(e) => {
                          if (link.submenu) e.preventDefault();
                          else setIsOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                      {link.submenu && (
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {link.submenu && (
                      <div
                        className={`mt-2 ml-4 pl-4 border-l-2 border-gray-100 space-y-2 transition-all duration-200 overflow-hidden ${
                          activeDropdown === index ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-sm text-gray-600 hover:text-light-blue"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full"
                  >
                    <Link
                      to="/contact"
                      className="btn btn-primary text-center py-3 text-sm font-semibold block w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Get a Quote
                    </Link>
                  </motion.div>
                </div>
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href="https://maps.app.goo.gl/vN9ABGKYHk5KTxqH7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start text-gray-600 hover:text-light-blue"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-light-blue flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm">
                      No. 3, Dawari Street, Off Ada George Road, Rumuokwuta,
                      Rivers State
                    </span>
                  </a>

                  <a
                    href="tel:+2349088800007"
                    className="flex items-center text-gray-600 hover:text-light-blue"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-light-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm">+234 9088800007</span>
                  </a>

                  <a
                    href="mailto:info@iegsglobal.com"
                    className="flex items-center text-gray-600 hover:text-light-blue"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-light-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">info@iegsglobal.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;
