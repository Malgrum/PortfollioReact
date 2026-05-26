import { useEffect, useState } from 'react'

function GalleryLightbox({ items = [], startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, items.length - 1))
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [items.length, onClose])

  useEffect(() => setIndex(startIndex), [startIndex])

  if (!items || items.length === 0) return null

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : i))
  const next = () => setIndex((i) => (i < items.length - 1 ? i + 1 : i))

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
        <img src={items[index].src} alt={items[index].alt} className="lightbox-image" />
        <div className="lightbox-caption">
          <h3 className="section-title">{items[index].title}</h3>
          <p>{items[index].description}</p>
        </div>
        <button className="lightbox-prev" onClick={prev} aria-label="Previous">‹</button>
        <button className="lightbox-next" onClick={next} aria-label="Next">›</button>
      </div>
    </div>
  )
}

export default GalleryLightbox
