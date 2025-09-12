const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-300 rounded-full animate-pulse delay-1000 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse delay-2000 opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary-400 rounded-full animate-pulse delay-3000 opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Banner */}
        <div className="animate-slide-up mb-8">
          <div className="bg-gradient-to-r from-primary-600/20 to-primary-800/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-6 py-3 max-w-fit mx-auto">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary-300">Available for new opportunities</span>
              </div>
              <div className="w-px h-4 bg-primary-500/30"></div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-primary-200">10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6">
              Hello, I'm{' '}
              <span className="text-primary-400 animate-pulse bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Andres Cardenas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Software Developer with a passion for crafting chatbots and GenAI solutions
              building impactful digital experiences.
            </p>
          </div>
          
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-600/30 font-medium"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary-400 text-primary-400 px-8 py-3 rounded-full hover:bg-primary-400 hover:text-dark-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm font-medium"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-12 animate-bounce-slow">
            <svg className="w-6 h-6 mx-auto text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
