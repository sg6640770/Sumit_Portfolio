import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Java", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "JDBC", level: 80 },
        { name: "MySQL", level: 80 },
      ]
    },
    {
      title: "AI & Tools",
      skills: [
        { name: "OpenAI GPT-4", level: 85 },
        { name: "Whisper AI", level: 75 },
        { name: "n8n Automation", level: 70 },
        { name: "Git", level: 85 },
        { name: "Figma", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;