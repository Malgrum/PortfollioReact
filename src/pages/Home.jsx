import { Link } from 'react-router-dom'
import { useLanguage } from '../components/LanguageProvider'

function Home() {
  const { labels, isEnglish } = useLanguage()

  return (
    <section className="neon-card">
      <h1 className="page-title">{labels.home}</h1>
      <p className="page-intro">
        {isEnglish
          ? 'Welcome to my neon portfolio. Explore my profile, projects, and contact me for collaborations.'
          : 'Bienvenue sur mon portfolio neon. Decouvre mon profil, mes projets et contacte-moi pour collaborer.'}
      </p>
      <div className="case-grid" style={{ marginTop: '20px' }}>
        <Link className="case" to="/profile">
          <div className="case-title">{labels.profile}</div>
          <p>{isEnglish ? 'About me and skills.' : 'Qui je suis et mes competences.'}</p>
        </Link>
        <Link className="case" to="/projects">
          <div className="case-title">{labels.projects}</div>
          <p>{isEnglish ? 'Selected work and builds.' : 'Travaux et realisations.'}</p>
        </Link>
        <Link className="case" to="/contact">
          <div className="case-title">{labels.contact}</div>
          <p>{isEnglish ? 'Get in touch.' : 'Echangeons ensemble.'}</p>
        </Link>
      </div>
    </section>
  )
}

export default Home
