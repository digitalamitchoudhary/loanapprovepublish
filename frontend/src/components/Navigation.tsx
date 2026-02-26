import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-surface shadow-md' : 'bg-brand-surface shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <Link to="/" className="text-2xl font-bold text-brand-primary font-poppins tracking-tight">
            MyLoanApprove
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-brand-text-secondary font-medium transition-colors duration-200 hover:text-brand-primary relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-brand-text-secondary font-medium transition-colors duration-200 hover:text-brand-primary relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-brand-text-secondary font-medium transition-colors duration-200 hover:text-brand-primary relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-brand-text-secondary font-medium transition-colors duration-200 hover:text-brand-primary relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/admin" className="text-brand-text-secondary font-medium transition-colors duration-200 hover:text-brand-primary relative group">
              Admin
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <Link to="/apply" className="hidden md:block px-7 py-2.5 bg-brand-secondary text-white rounded-lg font-semibold transition-all duration-200 hover:bg-brand-secondary-dark shadow-sm hover:shadow-md transform hover:scale-105">
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2">
            {isOpen ? (
              <X className="text-gray-800" size={24} />
            ) : (
              <Menu className="text-gray-800" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-surface border-t border-brand-border shadow-lg animate-slideDown">
            <div className="flex flex-col px-6 py-6 space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-brand-text-primary font-medium hover:text-brand-primary transition-colors">
                Home
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-brand-text-primary font-medium hover:text-brand-primary transition-colors">
                About
              </Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="text-brand-text-primary font-medium hover:text-brand-primary transition-colors">
                Services
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-brand-text-primary font-medium hover:text-brand-primary transition-colors">
                Contact
              </Link>
              <Link to="/admin" onClick={() => setIsOpen(false)} className="text-brand-text-primary font-medium hover:text-brand-primary transition-colors">
                Admin
              </Link>
              <Link to="/apply" onClick={() => setIsOpen(false)} className="bg-brand-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-secondary-dark text-center transition-all">
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
