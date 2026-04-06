import { Heart, Github, Linkedin, Mail, Download } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    github: "https://github.com/amansahudev",
    linkedin: "https://linkedin.com/in/amansahudev",
    email: "mailto:amansahu.dev.in@gmail.com",
  };

  const quickLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Aman Sahu
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              .NET Full Stack Developer passionate about building scalable web
              applications using ASP.NET Core, Web API, SQL Server and modern
              frontend technologies.
            </p>

            {/* Resume Button */}
            <a
             href="/Aman_Sahu_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-lg hover:scale-105 transition"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h4>

            <div className="flex gap-4 mb-4">

              <a
                href={socialLinks.github}
                target="https://github.com/amansahudev"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={socialLinks.linkedin}
                target="https://linkedin.com/in/amansahudev"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={socialLinks.email}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>

            </div>

            <p className="text-sm text-gray-500">
              Open for freelance projects, internships, and full-time opportunities.
            </p>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm">
              © {currentYear} Aman Sahu. All Rights Reserved.
            </p>

            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              using React & Tailwind CSS
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;