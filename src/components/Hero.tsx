import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 pt-24 sm:pt-28"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight break-words">
            <span className="text-white block">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 block">
              Sumit Gupta
            </span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up delay-200">
            <span className="typing-animation">Full-Stack Developer</span>
          </div>

          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-md sm:max-w-2xl mx-auto px-4 animate-fade-in-up delay-400">
            Passionate about building real-world applications that solve meaningful problems.
            Specializing in React.js, Next.js, Spring Boot, Java, MySQL, and AI integration with
            tools like OpenAI GPT-4 and Whisper.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up delay-600">
            <button
              onClick={scrollToAbout}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Explore My Work
            </button>

            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1ZTPQlmlfA_oCbH0AhckdnpksbQ4_Ow4H/view?usp=sharing"
              download="Sumit_Gupta_Resume.pdf"
              className="w-full sm:w-auto border border-gray-600 hover:border-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:bg-blue-500/10"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout}>
            <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
