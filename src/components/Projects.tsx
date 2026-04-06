import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
    title: 'College Management System',
    description:
      'A web-based college management system to handle student records, faculty management, attendance tracking, and course management. Built with secure authentication and role-based access.',
    technologies: ['.NET', 'React', 'SQL Server', 'Bootstrap'],
    image: 'cms1.png',
    github: 'https://github.com/amansahudev/College-Management-System',
    live: 'cmsbydev.somee.com',
    
  },
  {
    title: 'Secure CRUD API',
    description:
      'A secure RESTful API built using .NET Core implementing CRUD operations with JWT authentication, role-based authorization, and best security practices.',
    technologies: ['.NET Core', 'Web API', 'JWT', 'SQL Server'],
    image: 'Api.png',
    github: 'https://github.com/amansahudev/SecureCRUDAPI',
    live: 'https://github.com/amansahudev/SecureCRUDAPI',
   
  },
  {
    title: 'Blinkit UI Clone',
    description:
      'A responsive frontend clone of Blinkit built using React. Includes modern UI design, product listings, cart UI, and smooth user experience similar to real-world applications.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    image: 'blinkit.png',
    github: 'https://github.com/amansahudev/Blinkit-UI-Replica',
    live: 'https://blinkit-ui-replica.vercel.app/',
    
  },
   
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative backdrop-blur-lg bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project} opacity-60 group-hover:opacity-40 transition-opacity`} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
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
