const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-primary-500/20 text-gray-100 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors transform hover:scale-105"
            >
              Start a Conversation
            </button>
          </div>
          
          <div className="border-t border-primary-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-300">
                  © {currentYear} Andres Cardenas. All rights reserved.
                </p>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
