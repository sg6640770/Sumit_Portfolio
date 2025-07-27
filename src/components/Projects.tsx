import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "YouTube Video Summarizer",
      description: "A full-stack AI-powered app where users input a YouTube URL. It extracts transcripts (via captions or Whisper), summarizes them with GPT-4, and stores the result in a MySQL database.",
      techStack: ["React.js", "Spring Boot", "JDBC", "MySQL", "OpenAI", "REST API", "n8n"],
      liveUrl: "https://yt-summarizer-frontend-navy.vercel.app/",
      frontendRepo: "https://github.com/sg6640770/YT_summarizer_Frontend",
      backendRepo: "https://github.com/sg6640770/YT_summarizer_Backend",
      featured: true
    },
    {
      title: "Art Table – React DataTable",
      description: "A responsive, paginated DataTable with server-side data and persistent selection across pages—built without storing full dataset in memory.",
      techStack: ["React", "TypeScript", "PrimeReact", "Art Institute API"],
      liveUrl: "https://myarttable.netlify.app/",
      githubUrl: "https://github.com/sg6640770/my-art-table",
      featured: true
    },
    {
      title: "Banking Management System",
      description: "A command-line based banking system with features like account creation, deposit/withdrawals, and balance tracking, built using JDBC for database operations.",
      techStack: ["Java", "JDBC", "MySQL"],
      githubUrl: "https://github.com/sg6640770/BankingManagementSystem",
      featured: false
    },
    {
      title: "Therapist Website Clone",
      description: "A pixel-perfect, SEO-optimized UI clone of a therapist's portfolio site, fully responsive and designed from Figma.",
      techStack: ["Next.js 14", "Tailwind CSS", "Figma"],
      liveUrl: "https://therapy-web-app-ten.vercel.app/",
      githubUrl: "https://github.com/sg6640770/Therapy_web_app",
      featured: false
    },
    {
      title: "Wealth+ Investment Site",
      description: "A frontend UI clone of a modern investment platform recreated from a static PDF design, demonstrating responsive design precision.",
      techStack: ["React.js", "Tailwind CSS"],
      liveUrl: "https://wealth-bay-delta.vercel.app/",
      githubUrl: "https://github.com/sg6640770/Wealth-",
      featured: false
    },
    {
      title: "TextUtils – Text Formatting App",
      description: "A utility tool for live text formatting—features include word/character count, case conversion, whitespace trimming, and dark mode.",
      techStack: ["React.js", "Bootstrap", "JavaScript"],
      liveUrl: "https://sg6640770.github.io/text_utils/",
      githubUrl: "https://github.com/sg6640770/text_utils",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Site
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-500/10"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    
                    {project.frontendRepo && (
                      <a 
                        href={project.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-500/10"
                      >
                        <Github size={16} />
                        Frontend
                      </a>
                    )}
                    
                    {project.backendRepo && (
                      <a 
                        href={project.backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-600 hover:border-blue-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-500/10"
                      >
                        <Github size={16} />
                        Backend
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300 overflow-hidden group p-6"
              >
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;