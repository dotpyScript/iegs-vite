import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-blue text-white">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logoImage}
              alt="IEGS Global"
              className="h-14 brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed">
              A leading geospatial company, providing innovative, reliable, and
              professional Geospatial solutions and services that match
              standards.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-light-blue transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-light-blue transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-light-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/digital-mapping"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  Digital and Advanced Mapping
                </Link>
              </li>
              <li>
                <Link
                  to="/services/environmental-monitoring"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  Environmental Monitoring
                </Link>
              </li>
              <li>
                <Link
                  to="/services/geospatial-analytics"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  Geospatial Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/services/precision-agriculture"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  Precision Agriculture
                </Link>
              </li>
              <li>
                <Link
                  to="/services/smart-city"
                  className="text-gray-300 hover:text-light-blue transition-colors"
                >
                  Smart City Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-3 text-gray-300">
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                No. 3, Dawari Street, Off Ada George Road, Rumuokwuta, Rivers
                State
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <a
                  href="tel:+2349088800007"
                  className="hover:text-light-blue transition-colors"
                >
                  +234 9088800007
                </a>
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a
                  href="mailto:info@iegsglobal.com"
                  className="hover:text-light-blue transition-colors"
                >
                  info@iegsglobal.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text">
            &copy; {currentYear} IEGS Global. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-white">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-light-blue text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="hover:text-light-blue text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/sitemap"
                  className="hover:text-light-blue transition-colors text-white"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
