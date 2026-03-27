import { useLanguage } from '../components/LanguageProvider'
import profileData from '../data/profileData'

function Gallery() {
  const { labels, isEnglish } = useLanguage()

  return (
    <>
      <h1 className="page-title">{labels.gallery}</h1>
      <div className="gallery-grid">
        {profileData.projects.map((project) => (
          <article key={project.title} className="gallery-card">
            <h3 className="section-title">{project.title}</h3>
            <p>{isEnglish ? project.en : project.fr}</p>
          </article>
        ))}
      </div>
    </>
  )
}

export default Gallery
