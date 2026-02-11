import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className="page">
      <header className="header-card">
        <Header />
      </header>
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
