import { useLanguage } from './LanguageProvider'

function ProfileSections({ profileData }) {
  const { labels, isEnglish } = useLanguage()
  const programmingIcons = [
    {
      name: 'HTML',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'Python',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'SQL',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'C#',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    },
    {
      name: 'Bash',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    },
  ]

  return (
    <div className="case-grid">
      <section className="neon-card">
        <h2 className="section-title">{labels.skills}</h2>
        <div className="section-divider" />
        <ul className="list-divider">
          {(isEnglish ? profileData.skills.en : profileData.skills.fr).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="neon-card">
        <h2 className="section-title">{labels.programming}</h2>
        <div className="section-divider" />
        <div className="icon-grid">
          {programmingIcons.map((icon) => (
            <div className="icon-card" key={icon.name}>
              <img src={icon.url} alt={icon.name} loading="lazy" />
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="neon-card">
        <h2 className="section-title">{labels.experience}</h2>
        <div className="section-divider" />
        <ul className="list-divider">
          {(isEnglish ? profileData.experience.en : profileData.experience.fr).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="neon-card">
        <h2 className="section-title">{labels.associative}</h2>
        <div className="section-divider" />
        <ul className="list-divider">
          {(isEnglish ? profileData.associative.en : profileData.associative.fr).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="neon-card">
        <h2 className="section-title">{labels.hobbies}</h2>
        <div className="section-divider" />
        <ul className="list-divider">
          {(isEnglish ? profileData.hobbies.en : profileData.hobbies.fr).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ProfileSections
