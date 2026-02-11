import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [isEnglish, setIsEnglish] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('language')
    if (stored === 'en') {
      setIsEnglish(true)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('en', isEnglish)
  }, [isEnglish])

  const labels = useMemo(
    () => ({
      profile: isEnglish ? 'Profile' : 'Profil',
      projects: isEnglish ? 'Projects' : 'Projects',
      projectsTitle: isEnglish ? 'My Projects' : 'Mes Projets',
      contact: 'Contact',
      skills: isEnglish ? 'Skills' : 'Compétences',
      programming: isEnglish ? 'Programming' : 'Programmation',
      experience: isEnglish ? 'Professional Experience' : 'Expérience Professionnelle',
      associative: isEnglish ? 'Associative' : 'Associative',
      hobbies: isEnglish ? 'Hobbies' : 'Hobbies',
      firstName: isEnglish ? 'First Name' : 'Prénom',
      lastName: isEnglish ? 'Last Name' : 'Nom',
      age: isEnglish ? 'Age' : 'Âge',
      send: isEnglish ? 'Send' : 'Envoyer',
      sending: isEnglish ? 'Sending...' : 'Envoi en cours...',
      firstNameLabel: isEnglish ? 'First Name :' : 'Prénom :',
      emailLabel: isEnglish ? 'E-mail :' : 'E-mail :',
      messageLabel: isEnglish ? 'Message :' : 'Message :',
      contactIntro: isEnglish
        ? 'Send your message and I will get back to you soon.'
        : 'Envoie ton message, je te reviens rapidement.',
      orderToggle: isEnglish ? 'Place an order' : 'Passer commande',
      orderType: isEnglish ? 'Order type' : 'Type de commande',
      orderBudget: isEnglish ? 'Budget' : 'Budget',
      orderPlaceholder: isEnglish ? 'Select a service' : 'Choisir un service',
      budgetPlaceholder: isEnglish ? 'Estimated budget' : 'Budget estime',
      sentSuccess: isEnglish
        ? 'Message Sent! I will get back to you soon.'
        : 'Message Envoyé ! Je reviens vers toi vite.',
      sentError: isEnglish ? 'Error... Please try again later.' : "Erreur lors de l'envoi... réessaie plus tard.",
      missingConfig: isEnglish
        ? 'EmailJS is not configured yet. Please add your keys.'
        : 'EmailJS n\'est pas configuré. Ajoute tes clés.',
    }),
    [isEnglish]
  )

  const toggleLanguage = () => {
    setIsEnglish((prev) => {
      const next = !prev
      localStorage.setItem('language', next ? 'en' : 'fr')
      return next
    })
  }

  const value = useMemo(
    () => ({
      isEnglish,
      labels,
      toggleLanguage,
    }),
    [isEnglish, labels]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
