import React from 'react';
import { BookOpen, Briefcase, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 rounded-lg transform rotate-3"></div>
              <img
                src="https://avatars.githubusercontent.com/u/170238066?s=400&u=753feab7b5e76443f137ddfb76c782ca631be32f&v=4"
                alt="Md Khushtar Ali"
                className="relative rounded-lg shadow-md z-10"
              />
            </div>
            
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm Md Khushtar Ali, a driven Computer Science undergraduate at Chandigarh University with a passion for building AI, web apps, and automation tools. I specialize in combining React, Python, and Machine Learning to create impactful digital solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                My portfolio includes AI fitness apps, reinforcement learning agents, and web-based internship assistants. I enjoy blending problem-solving with creative UI and always aim to push boundaries with innovative tech.
              </p>
              
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Developed 6+ major projects in AI, web dev, and automation
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Projects
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Portfolio includes FitnFrame, Cognitive Detector, Brawler, and more
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Education
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                B.Tech in Computer Science, Chandigarh University (2023–2027)
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Certifications
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Certified in AI, Data Science, IoT, and Agile from Coursera & LinkedIn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;