import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-200 dark:bg-teal-900/30 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-block">
            <img
              src="https://avatars.githubusercontent.com/u/170238066?s=400&v=4"
              alt="Md Khushtar Ali"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
            Mohammed Khushtar Ali
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            AI & ML Engineer | Web Developer 
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
            I build cutting-edge technologies with React, Python, TypeScript, and AI APIs and many more.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/Kaif2684"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-700 text-white p-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-khushtar-ali-2191ba25a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg border border-gray-300 dark:border-gray-700 transition-colors shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;