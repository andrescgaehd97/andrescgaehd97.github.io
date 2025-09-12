
const About = () => {
  const skills = [
    { name: "JavaScript", level: 90, icon: "🟨" },
    { name: "TypeScript", level: 85, icon: "🔷" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "Azure", level: 85, icon: "☁️" },
    { name: "OpenAI", level: 80, icon: "🤖" },
    { name: "CosmosDB", level: 70, icon: "🍃" }
  ];

  return (
    <section id="about" className="py-20 bg-dark-700/30 backdrop-blur-sm border-t border-primary-500/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in text-gray-100">
          About Me
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="w-80 h-80 mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full animate-pulse opacity-75"></div>
                  <div className="absolute inset-2 bg-dark-800 rounded-full flex items-center justify-center">
                    <img 
                      src="/me.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div 
                      className="text-8xl hidden items-center justify-center w-full h-full text-primary-400"
                      style={{ display: 'none' }}
                    >
                      👨‍💻
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                  Software Developer & AI Enthusiast
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 10 years of experience in software development, I specialize in creating 
                  innovative solutions using modern technologies. My passion lies in building 
                  intelligent chatbots and GenAI applications that solve real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I enjoy working with cutting-edge technologies like JavaScript, React, Node.js, 
                  and Microsoft Azure to deliver high-quality, scalable solutions. Currently focused 
                  on AI-driven applications and automation tools.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-primary-900/50 border border-primary-400/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary-400">10+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-8 text-gray-100">
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="bg-dark-800/60 border border-primary-500/20 rounded-lg p-4 backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/10 transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-100">{skill.name}</span>
                      </div>
                      <span className="text-primary-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-600 to-primary-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-900/40 to-primary-800/40 rounded-lg border border-primary-400/30 backdrop-blur-sm">
                <h4 className="font-semibold mb-3 text-gray-100">What I'm Currently Learning</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Advanced AI/ML techniques, cloud architecture patterns, and exploring new 
                  frameworks in the AI ecosystem to stay at the forefront of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;