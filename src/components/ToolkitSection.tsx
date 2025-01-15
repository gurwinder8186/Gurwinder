import { SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiAuth0, SiVite, SiKx } from 'react-icons/si';

function ToolkitSection() {
  return (
    <section className="py-12 md:py-20 bg-white text-center scroll-smooth relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8">
        Toolkit
      </h2>
      <div className="flex flex-wrap gap-4 justify-center mb-8 md:mb-12">
        <div className="flex flex-col items-center">
          <SiJavascript size={32} />
          <p className="text-sm">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript size={32} />
          <p className="text-sm">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiReact size={32} />
          <p className="text-sm">React</p>
        </div>
        <div className="flex flex-col items-center">
          <SiHtml5 size={32} />
          <p className="text-sm">HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <SiCss3 size={32} />
          <p className="text-sm">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss size={32} />
          <p className="text-sm">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <SiNodedotjs size={32} />
          <p className="text-sm">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress size={32} />
          <p className="text-sm">Express.js</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">SQLite</span>
        </div>
        <div className="flex flex-col items-center">
          <SiKx size={32} />
          <p className="text-sm">Knex.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiAuth0 size={32} />
          <p className="text-sm">Auth0</p>
        </div>
        <div className="flex flex-col items-center">
          <SiVite size={32} />
          <p className="text-sm">Vite</p>
        </div>
      </div>

  
    </section>
  );
}

export default ToolkitSection;
