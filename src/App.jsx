import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { LanguageProvider } from './components/LanguageProvider'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="projects" element={<Projects />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
