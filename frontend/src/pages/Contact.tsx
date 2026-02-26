import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import api from '../utils/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: 'personal',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const loanTypes = [
    { value: 'personal', label: 'Personal Loan' },
    { value: 'home', label: 'Home Loan' },
    { value: 'business', label: 'Business Loan' },
    { value: 'car', label: 'Car Loan' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    if (error) setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      setError('Please enter your email')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number')
      return false
    }
    if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      setError('Please enter a valid 10-digit phone number')
      return false
    }
    if (!formData.message.trim()) {
      setError('Please enter your message')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    setError('')

    try {
      // Clean phone number by removing spaces, dashes, and parentheses
      const cleanPhone = formData.phone.replace(/[\s\-()]/g, '')

      const data = await api.contact.submit({
        name: formData.name,
        email: formData.email,
        phone: cleanPhone,
        subject: loanTypes.find(t => t.value === formData.loanType)?.label,
        message: formData.message,
      })

      if (data.success) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          loanType: 'personal',
          message: '',
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(data.message || 'Failed to send message. Please try again.')
      }
    }catch (err) {
  if (err instanceof Error) {
    setError(err.message)
  } else {
    setError('Connection error. Make sure the backend server is running on port 5000.')
  }
  console.error('Form submission error:', err)
} finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24 pb-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <section className="text-center mb-20">
          <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          <h1 className="text-5xl font-poppins font-bold text-brand-primary mt-3 mb-4">Contact Us</h1>
          <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">
            Have questions? Our team is ready to assist you with any inquiries about our loan services.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-brand-surface p-7 rounded-xl shadow-sm border border-brand-border hover:shadow-lg hover:border-brand-secondary/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-brand-primary mb-2">Phone</h3>
                  <p className="text-brand-text-secondary text-sm font-medium">+1 (800) 123-4567</p>
                  <p className="text-brand-text-muted text-xs mt-1">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-surface p-7 rounded-xl shadow-sm border border-brand-border hover:shadow-lg hover:border-brand-secondary/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-brand-primary mb-2">Email</h3>
                  <p className="text-brand-text-secondary text-sm font-medium">support@myloanapprove.com</p>
                  <p className="text-brand-text-muted text-xs mt-1">We respond in 2 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-surface p-7 rounded-xl shadow-sm border border-brand-border hover:shadow-lg hover:border-brand-secondary/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-brand-primary mb-2">Address</h3>
                  <p className="text-brand-text-secondary text-sm">123 Finance Street</p>
                  <p className="text-brand-text-secondary text-sm">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-surface p-7 rounded-xl shadow-sm border border-brand-border hover:shadow-lg hover:border-brand-secondary/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-bold text-brand-primary mb-2">Business Hours</h3>
                  <p className="text-brand-text-secondary text-sm">Mon-Fri: 9 AM - 6 PM</p>
                  <p className="text-brand-text-secondary text-sm">Sat: 10 AM - 4 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-brand-surface p-10 rounded-2xl shadow-sm border border-brand-border">
              <h2 className="text-2xl font-poppins font-bold text-brand-primary mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg animate-slideDown">
                  <p className="font-semibold text-sm">✓ Message sent successfully!</p>
                  <p className="text-xs mt-1 text-green-700">We'll get back to you shortly.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg animate-slideDown">
                  <p className="font-semibold text-sm">✕ {error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition bg-white text-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-sm"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-sm"
                    required
                  />
                </div>

                {/* Loan Type */}
                <div>
                  <label htmlFor="loanType" className="block text-sm font-semibold text-brand-primary mb-2">
                    Loan Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="loanType"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition bg-white text-sm"
                  >
                    {loanTypes.map(loan => (
                      <option key={loan.value} value={loan.value}>
                        {loan.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-primary mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your loan needs..."
                    rows={5}
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition resize-none text-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-brand-secondary text-white rounded-lg font-semibold hover:bg-brand-secondary-dark transition-all disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 shadow-sm hover:shadow-md text-sm"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  We'll respond to your inquiry within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <section className="mb-20">
          <h2 className="text-3xl font-poppins font-bold text-brand-primary mb-8 text-center">Our Location</h2>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-brand-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.118566659089!2d-74.00901592345034!3d40.71278057130603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e3f24b67%3A0x17e39a3a8d85e8e!2s123%20Finance%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MyLoanApprove Location"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-poppins font-bold text-brand-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'What documents do I need for a loan application?',
                a: 'Documents vary by loan type. Generally, you need PAN, Aadhar, salary slips, and bank statements. Check our Services page for specific requirements.',
              },
              {
                q: 'How quickly will I hear back from your team?',
                a: 'We typically respond to inquiries within 2 hours during business hours. For urgent matters, call our support team.',
              },
              {
                q: 'Can I apply for multiple loans at once?',
                a: 'Yes, you can apply for multiple loan types. Submit separate applications for each loan type you\'re interested in.',
              },
              {
                q: 'What are your payment methods?',
                a: 'We accept online transfers, checks, and automatic payment setup. Contact our team for more details on payment options.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
