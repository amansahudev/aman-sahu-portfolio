import { Code, Database, Layout, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Bootstrap', level: 85 },
        { name: 'jQuery', level: 75 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: '.NET', level: 80 },
        { name: '.NET Core', level: 75 },
        { name: 'Entity Framework', level: 75 },
        { name: 'C#', level: 70 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'SQL Server', level: 80 },
        { name: 'JSON', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 75 },
        { name: 'REST APIs', level: 80 },
        { name: 'Responsive Design', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="group backdrop-blur-lg bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animation: 'slideIn 1s ease-out',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            'HTML5',
            'CSS3',
            'JavaScript',
            'Bootstrap',
            'jQuery',
            'JSON',
            'ASP.NET Core',
            'C#',
            '.NET',
            '.NET Core',
            'SQL Server',
            'Git',
          ].map((tech, idx) => (
            <div
              key={idx}
              className="backdrop-blur-lg bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
