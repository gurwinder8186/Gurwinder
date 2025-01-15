import { PaperAirplaneIcon } from '@heroicons/react/16/solid';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

function MainSection() {
  return (
    <section className="flex flex-col items-center text-center bg-gray-100 py-6 md:py-6 scroll-smooth">
      <div className="max-w-4xl w-full px-6 flex flex-col items-center space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left Text Content */}
          <div className="text-left max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-8">
              Gurwinder Singh
            </h2>
            <h3 className="text-xl font-medium text-gray-600 mb-4 md:mb-8 relative flex items-center">
              <span className="w-16 md:w-24 border-t border-gray-700 mr-3"></span>
              Full Stack Developer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-8">
              I'm skilled in React, TypeScript, HTML5, and more, passionate
              about creating innovative solutions.
            </p>
            <a href="#contact">
              <button className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-black hover:text-white hover:font-semibold flex items-center mb-4 md:mb-8 transition">
                Say Hello <span className="ml-2"><Send size={16}/></span>
              </button>
            </a>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/gurwinder8186"
                className="text-gray-500 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gurwinder-singh-dev/"
                className="text-gray-500 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:gurwinder8186@gmail.com"
                className="text-gray-500 hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Profile Section */}
          <div className="relative flex items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/pic.png"
                alt="Gurwinder Singh"
                className="w-full h-full object-cover rounded-full border-4 border-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <a href="#about-me">
          <div className="flex items-center justify-center h-10 w-5 border-2 border-gray-500 rounded-full group hover:bg-black transition">
            <span className="text-gray-500 text-2xl animate-bounce-reverse group-hover:text-white transition">
              ↓
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default MainSection;
