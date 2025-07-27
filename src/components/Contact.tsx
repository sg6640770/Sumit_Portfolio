import React from 'react';
import { Mail, Phone, Linkedin, Github, Code2 } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Mobile",
      value: "+91-7453825543",
      href: "tel:+917453825543"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sg6640770@gmail.com",
      href: "mailto:sg6640770@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sumit-gupta-a240ab333",
      href: "https://www.linkedin.com/in/sumit-gupta-a240ab333/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sg6640770",
      href: "https://github.com/sg6640770"
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "sg6640770",
      href: "https://leetcode.com/sg6640770"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to work together? Let's discuss your project and create something amazing!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-400">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always open to chatting about new opportunities, interesting problems, or exciting ideas in tech. 
                Whether it's freelancing, internships, or full-time roles — I’d love to hear from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300 group"
                    >
                      <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <IconComponent className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="flex flex-col justify-center bg-slate-800/50 p-8 rounded-lg border border-slate-700 h-full shadow-lg">
              <div className="text-center space-y-5">
                <h3 className="text-2xl font-bold text-white">Ready to Start?</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Whether you want to collaborate on a cool side project, discuss tech trends, or need 
                  a passionate full-stack developer for your team — I’m just a message away!
                </p>

                <div className="space-y-4 mt-4">
                  <a
                    href="mailto:sg6640770@gmail.com"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Send me an Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sumit-gupta-a240ab333/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-blue-500 hover:bg-blue-500 text-blue-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 text-center"
                  >
                    Connect on LinkedIn
                  </a>

                  <a
                    href="https://github.com/sg6640770"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-slate-500 hover:bg-slate-600 text-gray-300 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 text-center"
                  >
                    Explore GitHub Projects
                  </a>
                </div>

                <p className="text-sm text-gray-400 mt-6">I typically reply within a few hours 🕒</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
