import Header from './components/Header';
import MainSection from './components/MainSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ToolkitSection from './components/ToolkitSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="font-sans">
      <section id="header">
        <Header />
      </section>
      <main>
      <section id="about" >
  <MainSection />
</section>

<section id="about-me" >
  <AboutSection />
</section>

<section id="projects" >
  <ProjectsSection />
</section>

<section id="toolkit" >
  <ToolkitSection />
</section>

<section id="contact" >
  <ContactSection />
</section>

      </main>
    </div>
  );
}

export default App;
