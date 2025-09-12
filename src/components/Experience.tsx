const Experience = () => {
  const experiences = [
    {
      company: "Softtek",
      position: "Application Automation Analyst",
      duration: "Present",
      description: "Lead development of GenAI and chatbot solutions using JavaScript, Node.js, and Microsoft Azure.",
      technologies: ["Javascript", "Node.js", "MS Azure", "OpenAI", "Git"]
    },
    {
      company: "Softtek - Momentum Program Intern",
      position: "AMS Support Member",
      duration: "2016 - 2019",
      description: "Design and development of automated solutions for clients, focusing on Web scrapping, Chatbots, and internal tools to improve operational efficiency.",
      technologies: ["Selenium", "Rocket Chat", "Spring Boot", "Groovy", "Python" ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-700/30 backdrop-blur-sm border-t border-primary-500/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in text-gray-100">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-400/50"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
                } md:w-1/2 animate-slide-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-auto md:right-full md:mr-6 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-800 shadow-lg z-10 md:transform md:translate-x-1/2"></div>
                
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-dark-800/60 border border-primary-500/20 rounded-xl shadow-lg p-6 backdrop-blur-sm hover:shadow-xl hover:shadow-primary-500/10 transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-100">
                        {exp.position}
                      </h3>
                      <span className="text-primary-400 font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium text-primary-300 mb-3">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary-900/50 text-primary-200 px-3 py-1 rounded-full text-sm font-medium border border-primary-400/30 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
