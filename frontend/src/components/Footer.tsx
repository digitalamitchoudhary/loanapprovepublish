import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-primary text-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold font-poppins text-white mb-4">MyLoanApprove</h3>
            <p className="text-brand-text-muted leading-relaxed mb-6 text-sm">
              Trusted financial partner helping millions achieve their dreams through accessible, transparent lending solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-primary-light flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-primary-light flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-primary-light flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Loan Types */}
          <div>
            <h4 className="text-lg font-semibold font-poppins text-white mb-6">Loan Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  Personal Loan
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  Home Loan
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  Business Loan
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  Car Loan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-poppins text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-brand-secondary flex-shrink-0 mt-0.5" />
                <a href="tel:+1-800-123-4567" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-brand-secondary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@myloanapprove.com" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200 text-sm">
                  info@myloanapprove.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-secondary flex-shrink-0 mt-0.5" />
                <span className="text-brand-text-muted text-sm">
                  123 Finance Street<br/>New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

      <div className="border-t border-brand-primary-light pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-text-muted">
        <p>
          &copy; {currentYear} MyLoanApprove. All rights reserved.
        </p>
        <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-brand-text-muted hover:text-brand-secondary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-royal-blue transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-royal-blue transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
