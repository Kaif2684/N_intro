import React from 'react';
import { socialLinks } from '../data/socialLinks';
import { Heart } from 'lucide-react';
import * as LucideReact from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-bold text-blue-400">
              Portfolio
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Building modern technologies.
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => {
              const IconComponent = LucideReact[link.icon as keyof typeof LucideReact];
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={link.platform}
                >
                  {IconComponent && <IconComponent size={20} />}
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Md khushtar Ali. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 text-gray-400 flex items-center">
            <span>Made with</span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span>using React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;