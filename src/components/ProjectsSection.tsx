import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import 'tailwindcss/tailwind.css'

function ProjectsSection() {
  const projects = [
    {
      title: 'Bite-Share',
      images: [
        '/addingbasket.png',
        '/home.png',
        '/messigingpage.png',
        '/viewingbasket.png',
      ],
      description:
        'Bite-Share is a web platform designed to connect people and organizations with excess food to those in need. As the Backend and Vibes Lead, my main responsibilities included developing the backend logic and creating optimized database queries for managing food baskets, including their display and creation. I also played a key role in building an interactive leaderboard to recognize and highlight the top contributors, encouraging a sense of community. The app leverages RESTful APIs for efficient data handling and communication.',
      githubLink: 'https://github.com/gurwinder8186/bite-share',
      liveLink: 'https://bite-share-pohutukawa24.devacademy.nz/',
      hasLiveButton: true,
    },
    {
      title: 'Food-Recipes',
      images: ['/home.jpeg', '/dishes.jpeg', '/recipedetail.jpeg'],
      description: `A food recipe website designed to help users explore and enjoy a variety of cuisines effortlessly. This was developed and presented as part of a Friday project assignment by a team of three developers. Built using client-side technologies like React, TypeScript, React Query, and CSS, along with server-side tools including Express, Knex, SQLite3, and SuperAgent, the platform integrates a responsive and engaging frontend with a fast and efficient backend. With a focus on simplicity and user experience, it enables users to easily search for and discover recipes. My role in the project was Backend Lead, ensuring efficient server-side development and database integration, while also providing support to the design partner. The project showcases the team's ability to deliver a well-crafted and functional application within a constrained timeframe.`,
      githubLink: 'https://github.com/gurwinder8186/food-Recipes',
      liveLink: 'https://your-live-site.com',
      hasLiveButton: false,
    },
  ]

  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(projects.length).fill(0)
  )
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleNext = (index: number) => {
    setCurrentImageIndex((prev) => {
      const updated = [...prev]
      updated[index] = (updated[index] + 1) % projects[index].images.length
      return updated
    })
  }

  const handlePrev = (index: number) => {
    setCurrentImageIndex((prev) => {
      const updated = [...prev]
      updated[index] =
        (updated[index] - 1 + projects[index].images.length) %
        projects[index].images.length
      return updated
    })
  }

  const toggleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className="relative py-12 md:py-16 bg-gray-100 text-center scroll-smooth">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Projects
      </h2>

      <div className="flex justify-center mb-6">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`px-6 py-2 text-lg font-semibold border-b-2 border-transparent hover:border-gray-500 transition-all ${
              activeTabIndex === index
                ? 'text-black border-black'
                : 'text-gray-400'
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 py-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-xl p-6 mb-8 transition-all relative ${
              activeTabIndex === index ? 'block' : 'hidden'
            }`}
          >
            <div className="relative h-[300px] w-full mb-4 rounded-lg overflow-hidden">
              <img
                src={project.images[currentImageIndex[index]]}
                alt={project.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => handlePrev(index)}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800/50 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:bg-black/70 transition"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => handleNext(index)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800/50 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:bg-black/70 transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <div
              className={`text-left text-gray-600 text-sm mb-4 overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index
                  ? 'max-h-[500px] h-auto'
                  : 'max-h-16 h-16'
              }`}
            >
              {project.description}
            </div>
            <button
              onClick={() => toggleExpand(index)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none transition-all flex justify-center items-center mx-auto"
            >
              {expandedIndex === index ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </button>

            <div className="flex gap-4 mt-4 justify-center">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-black transition"
              >
                GitHub
              </a>
              {project.hasLiveButton && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-black transition"
                >
                  Visit Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <a
        href="#toolkit"
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

export default ProjectsSection
