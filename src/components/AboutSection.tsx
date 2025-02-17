function AboutSection() {
  return (
    <section className="md:py-20 bg-white text-center scroll-smooth relative pb-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-8">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-8">
          About Me
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-8 mb-4 md:mb-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src="/pic2.png"
              alt="Gurwinder Singh"
              className="w-full h-full object-cover rounded-full border-4 border-gray-50"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-left text-gray-700 leading-relaxed mb-4 md:mb-8">
              Hi, I'm passionate Full-Stack Developer based
              in New Zealand. My journey into tech was sparked by an early
              fascination with classic cartridge video games, which inspired me
              to explore the world of technology. With a Bachelor’s degree in IT
              and hands-on training at Dev Academy Aotearoa, I’ve developed
              skills in React, JavaScript, TypeScript, Node.js, and SQL. My
              background in retail and telecommunications has equipped me with
              strong problem-solving, teamwork, and customer service skills. I
              thrive on building user-focused solutions, tackling complex
              challenges, and contributing to impactful projects. I’m open to
              local and remote opportunities where I can continue to grow as a
              developer.
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-6">
          <a
            href="/Gurwinder's CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-black mb-8"
          >
            Download CV
          </a>
        </div>
      </div>
      <a
          href="#projects"
          className="flex items-center space-x-3 absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center justify-center h-10 w-5 border-2 border-gray-500 rounded-full group hover:bg-black transition">
            <span className="text-gray-500 text-2xl animate-bounce-reverse group-hover:text-white transition">
              ↓
            </span>
          </div>
        </a>
    </section>
  )
}

export default AboutSection
