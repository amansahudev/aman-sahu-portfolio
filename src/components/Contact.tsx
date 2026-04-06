import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);

      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-10">
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Contact Information
              </h3>

              <div className="space-y-4">

                {/* Email */}
                <a
                  href="mailto:amansahu.dev.in@gmail.com"
                  className="flex items-start gap-4 p-4 backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      amansahu.dev.in@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919532312019"
                  className="flex items-start gap-4 p-4 backdrop-blur-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 dark:from-purple-500/20 dark:to-purple-600/20 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <div className="p-3 bg-purple-500 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      Phone
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +91 9532312019
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 backdrop-blur-lg bg-gradient-to-br from-pink-500/10 to-pink-600/10 dark:from-pink-500/20 dark:to-pink-600/20 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="p-3 bg-pink-500 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Social Media
              </h3>

              <div className="flex gap-4">

                <a
                  href="https://github.com/amansahudev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 backdrop-blur-lg bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-black hover:text-white transition-all hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>

                <a
                  href="https://linkedin.com/in/amansahudev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 backdrop-blur-lg bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>

              {status && (
                <p className="text-center text-green-600 dark:text-green-400 font-medium">
                  {status}
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;