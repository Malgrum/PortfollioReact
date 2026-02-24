import { useLanguage } from './LanguageProvider'
import htmlIcon from '../assets/icons/html5-original.svg'
import cssIcon from '../assets/icons/css3-original.svg'
import javascriptIcon from '../assets/icons/javascript-original.svg'
import reactIcon from '../assets/icons/react-original.svg'
import tailwindIcon from '../assets/icons/tailwindcss-original.svg'
import pythonIcon from '../assets/icons/python-original.svg'
import sqlIcon from '../assets/icons/mysql-original.svg'
import phpIcon from '../assets/icons/php-original.svg'
import csharpIcon from '../assets/icons/csharp-original.svg'
import godotIcon from '../assets/icons/godot-original.svg'
import bashIcon from '../assets/icons/bash-original.svg'
import googleIcon from '../assets/icons/google-original.svg'

function ProfileSections({ profileData }) {
  const { labels, isEnglish } = useLanguage()
  const programmingIcons = [
    { name: 'HTML', src: htmlIcon },
    { name: 'CSS', src: cssIcon },
    { name: 'JavaScript', src: javascriptIcon },
    { name: 'React', src: reactIcon },
    { name: 'Tailwind', src: tailwindIcon },
    { name: 'Python', src: pythonIcon },
    { name: 'SQL', src: sqlIcon },
    { name: 'PHP', src: phpIcon },
    { name: 'C#', src: csharpIcon },
    { name: 'Godot', src: godotIcon },
    { name: 'Bash', src: bashIcon },
    { name: 'Google Suite', src: googleIcon },
  ]
  const galleryItems = [
    { fr: 'Impression PLA', en: 'PLA Printing' },
    { fr: 'Impression Résine', en: 'Resin Printing' },
    { fr: 'Logiciel', en: 'Software' },
    { fr: 'Site', en: 'Website' },
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

      <section className="neon-card section-span-2">
        <h2 className="section-title">{labels.programming}</h2>
        <div className="section-divider" />
        <div className="icon-grid">
          {programmingIcons.map((icon) => (
            <div className="icon-card" key={icon.name}>
              <img src={icon.src} alt={icon.name} loading="lazy" />
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="neon-card">
        <h2 className="section-title">{labels.gallery}</h2>
        <div className="section-divider" />
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-item" key={item.fr}>
              {isEnglish ? item.en : item.fr}
            </div>
          ))}
        </div>
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

      <section className="neon-card">
        <h2 className="section-title">{labels.experience}</h2>
        <div className="section-divider" />
        <ul className="list-divider">
          {(isEnglish ? profileData.experience.en : profileData.experience.fr).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ProfileSections
