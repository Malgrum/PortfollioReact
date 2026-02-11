import { useLanguage } from './LanguageProvider'
import cvFile from '../assets/Lienhard_Léo_CV.pdf'

function ProfileHero({ profileData, profilePhoto }) {
  const { labels, isEnglish } = useLanguage()

  return (
    <section className="profile-hero">
      <div className="photo">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      </div>
      <div className="social-links">
        <a
          className="social-link"
          href="https://github.com/Malgrum/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.2-1.1-1.52-1.1-1.52-.9-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.89 1.58 2.33 1.12 2.9.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06.8-.23 1.65-.34 2.5-.35.85.01 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.73 1.03 1.66 1.03 2.79 0 3.96-2.35 4.84-4.58 5.09.36.32.69.95.69 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49 3.97-1.35 6.84-5.16 6.84-9.66C22 6.58 17.52 2 12 2z"
            />
          </svg>
          <span>GitHub</span>
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/lienhard-l%C3%A9o/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
            <path
              fill="currentColor"
              d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.61-1.85 3.31-1.85 3.54 0 4.19 2.33 4.19 5.36v6.38zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 2H1.77C.79 2 0 2.77 0 3.73v16.54C0 21.23.79 22 1.77 22h20.46C23.21 22 24 21.23 24 20.27V3.73C24 2.77 23.21 2 22.23 2z"
            />
          </svg>
          <span>LinkedIn</span>
        </a>
        <a className="social-link" href={cvFile} download>
          <span>CV</span>
        </a>
      </div>
      <div className="neon-card">
        <div className="case-grid">
          <div className="case">
            <div className="case-title">{labels.firstName}</div>
            <div className="info">
              <p>{profileData.firstName}</p>
            </div>
          </div>
          <div className="case">
            <div className="case-title">{labels.lastName}</div>
            <div className="info">
              <p>{profileData.lastName}</p>
            </div>
          </div>
          <div className="case">
            <div className="case-title">{labels.age}</div>
            <div className="info">
              <p>
                {profileData.age} {isEnglish ? 'years' : 'ans'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHero
