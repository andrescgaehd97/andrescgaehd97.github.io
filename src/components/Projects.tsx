const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Astro, React, and Tailwind CSS featuring smooth animations and optimized performance.",
      technologies: ["Astro", "React", "Tailwind CSS", "TypeScript"],
      image: "💼",
      link: "https://andrescgaehd97.github.io/",
      github: "https://github.com/andrescgaehd97/andrescgaehd97.github.io"
    }
    ,
    {
      title: "MCP Copilot Integration",
      description: "A project demonstrating the integration of Model Context Protocol (MCP) with GitHub Copilot to enhance AI-assisted knowledge about Soccer.",
      technologies: ["MCP", "FastMCP", "GitHub Copilot", "AI", "Python"],
      image: "⚽",
      github: "https://github.com/andrescgaehd97/FastMCP-Copilot-Integration"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-800/30 backdrop-blur-sm border-t border-primary-500/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in text-gray-100">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-dark-800/60 border border-primary-500/20 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-2 animate-slide-up backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary-900/40 to-primary-800/40 flex items-center justify-center border-b border-primary-500/20">
                <span className="text-6xl">{project.image}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary-900/50 text-primary-200 px-2 py-1 rounded-md text-sm font-medium border border-primary-400/30 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div> 
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                <br></br>
                  <a
                    href={project.github}
                    className="border-2 border-primary-400/50 text-primary-300 px-4 py-2 rounded-lg hover:border-primary-400 hover:bg-primary-400/10 backdrop-blur-sm transition-colors flex items-center gap-2"
                  >
                    <span>GitHub</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
