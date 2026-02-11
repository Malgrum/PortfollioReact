import profilePhoto from '../assets/profil.jpg'
import ProfileHero from '../components/ProfileHero'
import ProfileSections from '../components/ProfileSections'
import profileData from '../data/profileData'
import { useLanguage } from '../components/LanguageProvider'

function Profile() {
  const { labels, isEnglish } = useLanguage()

  return (
    <>
      <h1 className="page-title">{labels.profile}</h1>
      <p className="page-intro">
        {isEnglish
          ? 'Epitech student with a curious mindset, I enjoy building and exploring across the stack.'
          : "Étudiant à Epitech, curieux et polyvalent, j'aime construire et explorer sur toute la stack."}
      </p>
      <ProfileHero profileData={profileData} profilePhoto={profilePhoto} />
      <ProfileSections profileData={profileData} />
    </>
  )
}

export default Profile
