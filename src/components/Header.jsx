import { NavLink } from 'react-router-dom'
import { useLanguage } from './LanguageProvider'

function Header() {
  const { labels, isEnglish, toggleLanguage } = useLanguage()
  const linkClass = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <nav>
      <NavLink className={linkClass} to="/">
        {labels.profile}
      </NavLink>
      <NavLink className={linkClass} to="/projects">
        {labels.projects}
      </NavLink>
      <NavLink className={linkClass} to="/contact">
        {labels.contact}
      </NavLink>
      <div className="language-selector">
        <span className="lang-label">FR</span>
        <label className="switch">
          <input
            type="checkbox"
            id="lang-switch"
            checked={isEnglish}
            onChange={toggleLanguage}
            aria-label="Language switch"
          />
          <span className="slider" />
        </label>
        <span className="lang-label">EN</span>
      </div>
    </nav>
  )
}

export default Header
