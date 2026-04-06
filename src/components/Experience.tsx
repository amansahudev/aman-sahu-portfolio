import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Apprentice .NET Full Stack Developer",
      company: "Techpile Technology Pvt. Ltd.",
      location: "Lucknow, India",
      period: "Aug 2025 – Present",
      description:
        "Working on real-world web development projects using the Microsoft .NET ecosystem. Building full-stack web applications using ASP.NET Core, MVC, and Web API while developing responsive user interfaces with modern frontend technologies and integrating SQL Server databases.",

      responsibilities: [
        "Develop and maintain web applications using ASP.NET Core, ASP.NET MVC, and C#",
        "Build responsive user interfaces using HTML, CSS, JavaScript, Bootstrap, and Razor Pages",
        "Implement dynamic functionality using jQuery and AJAX",
        "Design and manage relational databases using SQL Server",
        "Develop and integrate RESTful Web APIs for application functionality",
        "Perform CRUD operations using ADO.NET and SQL Server",
        "Test APIs and endpoints using Postman",
        "Use Git and GitHub for version control and collaboration",
        "Follow MVC architecture principles and clean code practices"
      ],

      technologies: [
        "C#",
        "ASP.NET Core",
        "ASP.NET MVC",
        "Web API",
        "Razor Pages",
       
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "AJAX",
        "ADO.NET",
        "SQL Server",
       
      ],
    },
  ];

  const education = {
    degree: "Diploma in Information Technology",
    institution: "Firoze Gandhi Polytechnic",
    location: "Raebareli ,Lucknow, India",
    period: "2021 – 2024",
    highlights: [
      "Studied programming fundamentals and software development concepts",
      "Learned web development technologies and database management",
      "Completed multiple academic technical projects",
      "Built strong foundation in programming and problem solving",
    ],
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* EXPERIENCE */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Professional Experience
          </h3>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {exp.role}
              </h4>

              <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {exp.company}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>

                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Key Responsibilities
                </h5>

                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Technologies
                </h5>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-purple-600" />
            Education
          </h3>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">

            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {education.degree}
            </h4>

            <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {education.institution}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {education.location}
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {education.period}
              </span>
            </div>

            <ul className="space-y-2">
              {education.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-purple-600 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;