import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Apply from './pages/Apply'
import AdminDashboard from './pages/admin/Dashboard'
import AdminContacts from './pages/admin/Contacts'
import AdminApplications from './pages/admin/Applications'
import './App.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <Navigation />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/contacts" element={<AdminContacts />} />
            <Route path="/admin/applications" element={<AdminApplications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
