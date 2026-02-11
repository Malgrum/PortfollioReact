import { useLanguage } from './LanguageProvider'

function ProjectsSection({ projects }) {
  const { labels, isEnglish } = useLanguage()

  return (
    <>
      <h1 className="page-title">{labels.projectsTitle}</h1>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="section-title">{project.title}</h3>
            <p>{isEnglish ? project.en : project.fr}</p>
          </article>
        ))}
      </div>
    </>
  )
}

export default ProjectsSection
