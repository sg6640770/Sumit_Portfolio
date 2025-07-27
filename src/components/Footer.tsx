import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold">
              <span className="text-blue-500">Sumit</span>
              <span className="text-white">Gupta</span>
            </h3>
            <p className="text-gray-400 mt-2">Full-Stack Developer</p>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <span className="text-gray-400">Made with</span>
            <Heart className="text-red-500 mx-2" size={20} />
            <span className="text-gray-400">using React & Tailwind CSS</span>
          </div>
          
          <div className="border-t border-slate-800 pt-6">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sumit Gupta. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;