const Education = () => {
  const education = [
    {
      institution: "Tecmilenio University",
      degree: "Artificial Intelligence Master",
      duration: "2021 - 2024",
      description: "Focused on the design and creation of AI applications, using Machine Learning and Deep Learning models, NLP processing, and computer vision",
    },
    {
      institution: "Tecmilenio University",
      degree: "Software Developement Engineer",
      duration: "2014 - 2019",
      description: "Focused on software engineering, data structures, algorithms"
    }
  ];

  const certifications = [
    {
        "institution" : "Microsoft",
        "certication": "Azure AI Engineer Associate",
        "earnDate": "2025",
        "url": "https://learn.microsoft.com/api/credentials/share/es-mx/AndresCardenasGaehd-7440/1593A83D7457F489?sharingId=5DF600F85153C755"
    },
    {
        "institution" : "Microsoft",
        "certication": "Azure Cosmos DB Developer Speciality",
        "earnDate": "2025",
        "url": "https://learn.microsoft.com/api/credentials/share/es-mx/AndresCardenasGaehd-7440/A012C282F8D0AE0B?sharingId=5DF600F85153C75555"
    },
    {
        "institution" : "Microsoft",
        "certication": "Azure AI Fundamentals",
        "earnDate": "2022",
        "url": "https://learn.microsoft.com/api/credentials/share/es-mx/AndresCardenasGaehd-7440/783B1483C838F7D2?sharingId=5DF600F85153C755"
    },
    {
        "institution" : "Microsoft",
        "certication": "Power Platform Fundamentals",
        "earnDate": "2022",
        "url": "https://learn.microsoft.com/api/credentials/share/es-mx/AndresCardenasGaehd-7440/A79680C9A95136A1?sharingId=5DF600F85153C755"
    },
    {
        "institution" : "Microsoft",
        "certication": "Azure Fundamentals",
        "earnDate": "2020",
        "url": "https://learn.microsoft.com/api/credentials/share/es-mx/AndresCardenasGaehd-7440/C25A077884A459DB?sharingId=5DF600F85153C755"
    }
   ];
    
  return (
    <section id="education" className="py-20 bg-dark-800/30 backdrop-blur-sm border-t border-primary-500/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in text-gray-100">
          Education & Certifications
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-8 text-gray-100">
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-dark-800/60 border border-primary-500/20 rounded-xl shadow-lg p-6 backdrop-blur-sm hover:shadow-xl hover:shadow-primary-500/10 transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-100 mb-2">
                          {edu.degree}
                        </h4>
                        <h5 className="text-lg font-medium text-primary-300">
                          {edu.institution}
                        </h5>
                      </div>
                      <span className="text-primary-400 font-medium bg-primary-900/40 px-3 py-1 rounded-full border border-primary-400/30 backdrop-blur-sm">
                        {edu.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-8 text-gray-100">
                Certifications
              </h3>
              
              <div className="bg-dark-800/60 border border-primary-500/20 rounded-xl shadow-lg p-6 backdrop-blur-sm">
                <div className="grid gap-4">
                {certifications.map((cert, index) => (
                    <div
                        key={cert.certication}
                        className="flex items-center p-4 bg-gradient-to-r from-primary-900/50 to-primary-800/50 rounded-lg hover:from-primary-900/70 hover:to-primary-800/70 transition-all transform hover:scale-105 cursor-pointer border border-primary-400/20 backdrop-blur-sm"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => window.open(cert.url, '_blank')}
                    >
                        
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-5 h-5 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-100">{cert.certication}</span>
                        <span className="text-primary-400 font-medium bg-primary-900/50 px-3 py-1 rounded-full ml-auto border border-primary-400/30">
                            {cert.earnDate}
                        </span>
                    </div>
                ))}
                </div>
                
                <div className="mt-8 p-4 bg-primary-900/30 rounded-lg border border-primary-400/20 backdrop-blur-sm">
                  <h6 className="font-medium text-gray-100 mb-2">Continuous Learning</h6>
                  <p className="text-gray-300 text-sm">
                    I'm always updating my skills through online courses, workshops, and conferences.
                    Currently pursuing advanced certifications in cloud architecture and machine learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
