import React from 'react';
import { Code, Zap, Heart, Upload, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Description */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">👋 Hi, I'm Sumit Gupta</h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full-Stack Developer who enjoys building real-world applications that solve meaningful problems through clean code, modern architecture, and intelligent features.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in <span className="text-blue-400 font-medium">React.js, Next.js, Spring Boot, Java, and MySQL</span>, and have integrated AI tools like <span className="text-blue-400 font-medium">OpenAI's GPT-4 and Whisper</span> to power smart, responsive applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              On the frontend, I work with <span className="text-blue-400 font-medium">TypeScript, Tailwind CSS, Bootstrap, and PrimeReact</span>, creating responsive UIs often starting from Figma designs.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              On the backend, I build scalable systems using <span className="text-blue-400 font-medium">Spring Boot, JDBC, and REST APIs</span>, and manage data with <span className="text-blue-400 font-medium">MySQL</span> and external APIs like the Art Institute of Chicago API.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I use <span className="text-blue-400 font-medium">n8n</span> for background jobs and automation, and deploy projects via <span className="text-blue-400 font-medium">AWS, Railway, Vercel, Netlify, and GitHub Pages</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I follow version control best practices using <span className="text-blue-400 font-medium">Git & GitHub</span>, and I'm always learning to stay ahead in tech. 🚀
            </p>
          </div>

          {/* Right - Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center mb-3">
                <Code className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Clean Code</h3>
              </div>
              <p className="text-gray-300">
                Writing maintainable, scalable code that follows best practices and modern standards.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center mb-3">
                <Zap className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Fast Learner</h3>
              </div>
              <p className="text-gray-300">
                Quickly adapt to new tools and frameworks while staying up-to-date with industry trends.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center mb-3">
                <Heart className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">User-Focused</h3>
              </div>
              <p className="text-gray-300">
                Building intuitive and fast UIs that offer a seamless experience across devices.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center mb-3">
                <Upload className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Deployment Ready</h3>
              </div>
              <p className="text-gray-300">
                Hands-on experience deploying on AWS, Railway, Vercel, Netlify & GitHub Pages.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center mb-3">
                <Users className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Team & Communication</h3>
              </div>
              <p className="text-gray-300">
                Collaborative mindset with strong communication skills and GitHub-based teamwork.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center mb-3">
                <ShieldCheck className="text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Project Ownership</h3>
              </div>
              <p className="text-gray-300">
                Led full lifecycle of apps from design to deployment and optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
