export const RESUME_DATA = {
  profile: {
    name: 'Balaji S',
    role: 'Full Stack Developer',
    email: 'balajisrini013@gmail.com',
    phone: '+91 7338979707',
    linkedin: 'https://linkedin.com/in/bala013ibis',
    github: '',
    tagline: 'Full Stack Developer specializing in .NET, Angular, and SQL Server enterprise solutions.',
    summary: 'Results-driven developer with 2.5+ years of experience delivering enterprise HR platforms using C#, ASP.NET Core, Angular, and SQL Server. Improved system efficiency by 30% and reduced production bugs by 40% with optimized APIs, database tuning, and structured test automation.'
  },
  skills: [
    { category: 'Languages', items: [
      { name: 'C#', icon: 'devicon-csharp-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' },
      { name: 'LINQ', icon: 'pi pi-code' }
    ]},
    { category: 'Backend & Architecture', items: [
      { name: 'ASP.NET Core', icon: 'devicon-dot-net-plain colored' },
      { name: '.NET Framework', icon: 'devicon-dot-net-plain colored' },
      { name: 'Web API', icon: 'pi pi-server' },
      { name: 'Entity Framework Core', icon: 'pi pi-database' },
      { name: 'JWT Authentication', icon: 'pi pi-shield' },
      { name: 'Microservices', icon: 'pi pi-sitemap' }
    ]},
    { category: 'Frontend & Testing', items: [
      { name: 'Angular 14/15/16', icon: 'devicon-angularjs-plain colored' },
      { name: 'RxJS', icon: 'devicon-rxjs-plain colored' },
      { name: 'NgRx', icon: 'pi pi-sync' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
      { name: 'NUnit', icon: 'pi pi-check-square' },
      { name: 'TDD', icon: 'pi pi-verified' }
    ]},
    { category: 'Databases & Integrations', items: [
      { name: 'MSSQL', icon: 'devicon-microsoftsqlserver-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'Stored Procedures', icon: 'pi pi-sliders-h' },
      { name: 'Query Optimization', icon: 'pi pi-bolt' },
      { name: 'Authbridge', icon: 'pi pi-id-card' },
      { name: 'Emsigner & Naukri API', icon: 'pi pi-link' }
    ]},
    { category: 'DevOps, Tools & AI', items: [
      { name: 'IIS Deployment', icon: 'pi pi-cloud-upload' },
      { name: 'SVN', icon: 'devicon-subversion-plain colored' },
      { name: 'GitHub Copilot', icon: 'pi pi-github' },
      { name: 'Claude AI', icon: 'pi pi-sparkles' },
      { name: 'Antigravity', icon: 'pi pi-bolt' },
      { name: 'Visual Studio', icon: 'devicon-visualstudio-plain colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
      { name: 'Azure (Expanding)', icon: 'devicon-azure-plain colored' }
    ]},
    { category: 'Methodologies', items: [
      { name: 'Agile', icon: 'pi pi-sync' },
      { name: 'Scrum', icon: 'pi pi-users' },
      { name: 'Sprint Planning', icon: 'pi pi-calendar' },
      { name: 'Code Reviews', icon: 'pi pi-comments' }
    ]}
  ],
  experience: [
    {
      role: 'Platform Engineer (Full Stack Developer)',
      icon: 'engineering',
      company: 'Adrenalin E-Systems Limited - Intellect Group',
      location: 'Chennai, India',
      date: 'August 2023 - Present',
      bullets: [
        'Designed and developed reusable RESTful Web APIs in C# ASP.NET Core for Talent Development, Acquisition, Operations, and Engagement modules.',
        'Integrated third-party services (Authbridge, Emsigner, Naukri API) into backend workflows and Angular frontend components.',
        'Optimized SQL Server stored procedures and queries, improving system efficiency by 30% across integration workflows.',
        'Implemented dependency injection, middleware, and JWT authentication for secure and maintainable APIs.',
        'Deployed and maintained ASP.NET Core applications on IIS with app pools, SSL bindings, and environment-specific configurations.',
        'Reduced production bug reports by 40% through NUnit automation and test-driven development practices.',
        'Developed AI features including a Resume Matcher and Document Q&A system using Python NLP and text processing.',
        'Used AI-assisted engineering workflows with GitHub Copilot, Claude AI, and Antigravity to improve sprint throughput.'
      ]
    }
  ],
  projects: [
    {
      title: 'Adrenalin JASON Integration Framework',
      role: 'Enterprise Project',
      tech: ['C#', 'ASP.NET Core', 'Angular', 'SQL Server', 'IIS'],
      description: 'Built and deployed enterprise HR integration services with secure role-based access, third-party integrations, and scalable API architecture.',
      github: ''
    },
    {
      title: 'Resume Matcher System',
      role: 'AI Feature Project',
      tech: ['Python', 'NLP', 'Angular', 'ASP.NET Core'],
      description: 'Created an NLP-based resume screening tool integrated with HR workflows for intelligent candidate-job matching at scale.',
      github: ''
    },
    {
      title: 'Document Q&A System',
      role: 'AI Microservice Project',
      tech: ['Python', 'Flask/Django', 'Text Retrieval'],
      description: 'Designed a document search and Q&A engine as a standalone microservice for deployment within the .NET and IIS ecosystem.',
      github: ''
    }
  ],
  certifications: [
    { title: 'Azure Services (Learning Path)', issuer: 'Microsoft Learn', date: 'In Progress' },
    { title: 'Flask/Django Microservices', issuer: 'Self Driven', date: 'In Progress' },
    { title: 'AI/LLM Integration Practices', issuer: 'Applied Project Work', date: 'Ongoing' }
  ],
  education: [
    {
      degree: 'Bachelor of Engineering - Computer Science and Engineering',
      school: 'Sri Sairam Institute of Technology, Chennai, India',
      date: '2018 - 2022',
      score: ''
    }
  ],
  achievements: [
    'Delivered multiple external partner integration projects on schedule, contributing to 30% efficiency improvement.',
    'Implemented NUnit automation that reduced production bug reports by 40% and improved release quality.',
    'Recognized for strong problem-solving, timely delivery, and cross-functional collaboration across Agile sprints.'
  ]
};
