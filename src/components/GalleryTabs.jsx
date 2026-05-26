const tabs = [
  { id: 'threeD', label: '3D' },
  { id: 'code', label: 'Code' },
]

function GalleryTabs({ activeTab, onTabChange }) {
  return (
    <div className="gallery-tabs" role="tablist" aria-label="Gallery categories">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          className={activeTab === tab.id ? 'gallery-tab active' : 'gallery-tab'}
          aria-selected={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default GalleryTabs