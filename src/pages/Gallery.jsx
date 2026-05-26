import { useState } from 'react'
import GalleryTabs from '../components/GalleryTabs'
import GalleryLightbox from '../components/GalleryLightbox'
import { useLanguage } from '../components/LanguageProvider'

import casque from '../assets/gallerie/3D/Casque.jpg'
import kinger from '../assets/gallerie/3D/Kinger.jpg'
import gk4 from '../assets/gallerie/Code/GK4.png'
import ritualis from '../assets/gallerie/Code/Ritualis.png'

const galleryGroups = {
  threeD: [
    {
      src: casque,
      alt: 'Casque 3D',
      title: 'Casque',
      description: 'Modelisation 3D',
    },
    {
      src: kinger,
      alt: 'Kinger 3D',
      title: 'Kinger',
      description: 'Modelisation 3D',
    },
  ],
  code: [
    {
      src: ritualis,
      alt: 'Ritualis',
      title: 'Ritualis',
      description: 'Projet code',
    },
    {
      src: gk4,
      alt: 'GK4',
      title: 'GK4',
      description: 'Projet code',
    },
  ],
}

function Gallery() {
  const { labels, isEnglish } = useLanguage()
  const [activeTab, setActiveTab] = useState('threeD')

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const currentItems = galleryGroups[activeTab]

  return (
    <section className="neon-card gallery-page">
      <h1 className="page-title">{labels.gallery}</h1>
      <p className="page-intro">
        {isEnglish
          ? 'Two separate folders, split into dedicated tabs: 3D and Code.'
          : 'Deux dossiers distincts, repartis en onglets dedies : 3D et Code.'}
      </p>

      <GalleryTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="gallery-grid gallery-grid--images">
        {currentItems.map((item, i) => (
          <article key={item.title} className="gallery-card" onClick={() => openLightbox(i)}>
            <div className="gallery-image-frame">
              <img src={item.src} alt={item.alt} className="gallery-image" />
            </div>
            <div className="gallery-card-content">
              <h3 className="section-title">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {lightboxOpen && (
        <GalleryLightbox items={currentItems} startIndex={lightboxIndex} onClose={closeLightbox} />
      )}
    </section>
  )
}

export default Gallery
