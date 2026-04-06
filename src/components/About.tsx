import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* Left Content */}
          <div className="flex">
            <div className="flex-1 backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 p-10 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Hello, I'm Aman Sahu 👋
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I am a passionate <span className="font-semibold">Full Stack .NET Developer</span> dedicated to building modern, scalable, and user-friendly web applications.
                My journey in software development began with an IT diploma at 
                <span className="font-semibold"> Firoz Gandhi Polytechnic, Lucknow</span>, where I mastered core programming concepts and discovered my love for creating robust web solutions.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Currently, I am gaining hands-on industry experience as an 
                <span className="font-semibold"> Apprentice Developer</span> at 
                <span className="font-semibold"> Techpile Technology Pvt. Ltd.</span>.
                Here, I contribute to real-world projects while sharpening my skills in 
                <span className="font-semibold"> .NET development, Spring Boot, REST APIs, and modern frontend frameworks</span>.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I aim to deliver efficient, maintainable, and high-quality solutions while continuously learning and staying updated with the latest technologies in web development.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6">

            {/* Education */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                    Education
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Diploma in Information Technology
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Firoz Gandhi Polytechnic, Lucknow
                  </p>
                </div>
              </div>
            </div>

            {/* Current Role */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 dark:from-purple-500/20 dark:to-purple-600/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                    Current Role
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Apprentice Developer
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Techpile Technology Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-pink-500/10 to-pink-600/10 dark:from-pink-500/20 dark:to-pink-600/20 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-500 rounded-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                    Focus Areas
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Full Stack .NET Development
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Web Applications, REST APIs, Modern UI
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

export default About;