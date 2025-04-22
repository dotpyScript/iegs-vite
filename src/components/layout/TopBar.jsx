import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const TopBar = () => {
  return (
    <div className="bg-deep-blue text-white py-2 hidden md:block">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href="https://maps.app.goo.gl/vN9ABGKYHk5KTxqH7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-light-blue transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2 text-white group-hover:text-light-blue transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
              <span className="text-xs text-white hover:text-light-blue transition-colors duration-200">
                No. 3, Dawari Street, Off Ada George Road, Rumuokwuta, Rivers
                State
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-6 text-white">
            <a
              href="tel:+2349088800007"
              className="flex items-center hover:text-light-blue transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2 text-white group-hover:text-light-blue transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-xs text-white hover:text-light-blue transition-colors duration-200">
                +234 9088800007
              </span>
            </a>
            <a
              href="mailto:info@iegsglobal.com"
              className="flex items-center hover:text-light-blue transition-colors duration-200 text-white"
            >
              <svg
                className="w-4 h-4 mr-2 text-white group-hover:text-light-blue transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs">info@iegsglobal.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-3 text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full flex items-center justify-center text-white hover:text-light-blue hover:bg-white transition-all duration-200"
            >
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full flex items-center justify-center text-white hover:text-light-blue hover:bg-white transition-all duration-200"
            >
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full flex items-center justify-center text-white hover:text-light-blue hover:bg-white transition-all duration-200"
            >
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile TopBar Drawer Button */}
      <div className="block md:hidden absolute top-3 right-3 z-[60]">
        <motion.button
          className="bg-light-blue rounded-full p-2 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default TopBar;
