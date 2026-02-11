import { useLanguage } from './LanguageProvider'

function ProfileSections({ profileData }) {
  const { labels, isEnglish } = useLanguage()

  return (
    <div className="case-grid">
      <section className="neon-card">
        <h2 className="section-title">{labels.skills}</h2>
        <div className="section-divider" />
        <ul>
          {(isEnglish ? profileData.skills.en : profileData.skills.fr).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="neon-card">
        <h2 className="section-title">{labels.programming}</h2>
        <div className="section-divider" />
        <ul>
          {profileData.programming.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="neon-card">
        <h2 className="section-title">{labels.experience}</h2>
        <div className="section-divider" />
        <ul>
          {(isEnglish ? profileData.experience.en : profileData.experience.fr).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="neon-card">
        <h2 className="section-title">{labels.associative}</h2>
        <div className="section-divider" />
        <ul>
          {(isEnglish ? profileData.associative.en : profileData.associative.fr).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="neon-card">
        <h2 className="section-title">{labels.hobbies}</h2>
        <div className="section-divider" />
        <ul>
          {(isEnglish ? profileData.hobbies.en : profileData.hobbies.fr).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ProfileSections
