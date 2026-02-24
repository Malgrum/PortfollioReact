import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { LanguageProvider } from './components/LanguageProvider'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
