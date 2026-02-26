import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import api from '../utils/api'

export default function Apply() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanType: 'personal',
    loanAmount: 100000,
    employmentType: 'salaried',
    annualIncome: 500000,
    businessType: '',
    yearsInBusiness: 0,
    creditScore: 'good',
    documents: {
      aadhaar: false,
      pan: false,
      salarySlips: false,
      bankStatements: false,
      propertyDocs: false,
    },
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [applicationId, setApplicationId] = useState('')

  const loanTypes = [
    { value: 'personal', label: 'Personal Loan', minAmount: 10000, maxAmount: 500000 },
    { value: 'home', label: 'Home Loan', minAmount: 500000, maxAmount: 10000000 },
    { value: 'business', label: 'Business Loan', minAmount: 100000, maxAmount: 5000000 },
    { value: 'car', label: 'Car Loan', minAmount: 50000, maxAmount: 2000000 },
  ]

  const employmentTypes = [
    { value: 'salaried', label: 'Salaried' },
    { value: 'self-employed', label: 'Self-Employed' },
    { value: 'business-owner', label: 'Business Owner' },
    { value: 'retired', label: 'Retired' },
  ]

  const creditScores = [
    { value: 'excellent', label: 'Excellent (750+)' },
    { value: 'good', label: 'Good (700-750)' },
    { value: 'fair', label: 'Fair (650-700)' },
    { value: 'poor', label: 'Poor (Below 650)' },
  ]

  const currentLoan = loanTypes.find(t => t.value === formData.loanType)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [name]: checked,
        },
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }))
    }
    if (error) setError('')
  }

  const validateStep1 = () => {
    if (!formData.firstName.trim()) {
      setError('Please enter your first name')
      return false
    }
    if (!formData.lastName.trim()) {
      setError('Please enter your last name')
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
    return true
  }

  const validateStep2 = () => {
    if (!formData.loanAmount) {
      setError('Please enter a loan amount')
      return false
    }
    if (formData.loanAmount < (currentLoan?.minAmount || 10000)) {
      setError(`Minimum loan amount is ₹${(currentLoan?.minAmount || 10000).toLocaleString('en-IN')}`)
      return false
    }
    if (formData.loanAmount > (currentLoan?.maxAmount || 500000)) {
      setError(`Maximum loan amount is ₹${(currentLoan?.maxAmount || 500000).toLocaleString('en-IN')}`)
      return false
    }
    if (!formData.annualIncome) {
      setError('Please enter your annual income')
      return false
    }
    if (formData.annualIncome < 100000) {
      setError('Annual income must be at least ₹1 Lakh')
      return false
    }
    if (formData.employmentType === 'business-owner' && !formData.businessType.trim()) {
      setError('Please specify your business type')
      return false
    }
    return true
  }

  const validateStep3 = () => {
    const checkedDocs = Object.values(formData.documents).filter(Boolean).length
    if (checkedDocs === 0) {
      setError('Please select at least one document you have')
      return false
    }
    return true
  }

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return
    if (step === 2 && !validateStep2()) return
    if (step === 3 && !validateStep3()) return
    setError('')
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setError('')
    setStep(step - 1)
  }

  const handleSubmit = async () => {
    if (step !== 4) return

    setLoading(true)
    setError('')

    try {
      // Clean phone number by removing spaces, dashes, and parentheses
      const cleanPhone = formData.phone.replace(/[\s\-()]/g, '')

      const data = await api.applications.submit({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: cleanPhone,
        loanType: formData.loanType as 'personal' | 'home' | 'business' | 'car',
        loanAmount: formData.loanAmount,
        employmentType: formData.employmentType as 'salaried' | 'self-employed' | 'business-owner' | 'retired',
        annualIncome: formData.annualIncome,
        businessType: formData.businessType || undefined,
        yearsInBusiness: formData.yearsInBusiness || undefined,
        creditScore: formData.creditScore as 'excellent' | 'good' | 'fair' | 'poor',
        documents: formData.documents,
      })

      if (data.success && data.data?.applicationId) {
        setSubmitted(true)
        setApplicationId(data.data.applicationId)
      } else {
        setError(data.message || 'Failed to submit application. Please try again.')
      }
    } catch (err) {
      setError('Connection error. Make sure the backend server is running on port 5000.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="pt-24 pb-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-16 rounded-2xl shadow-lg text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-emerald-600" size={48} />
            </div>
            <h1 className="text-4xl font-poppins font-bold text-navy mb-4">Application Submitted!</h1>
            <p className="text-gray-600 text-lg mb-2">
              Thank you for submitting your {loanTypes.find(t => t.value === formData.loanType)?.label} application.
            </p>
            <p className="text-brand-text-secondary mb-8">
              Application ID: <span className="font-mono font-semibold text-brand-primary">{applicationId}</span>
            </p>
            <div className="bg-brand-secondary/5 border border-brand-secondary/20 p-6 rounded-lg mb-8">
              <p className="text-brand-secondary">
                Our team will review your application within <span className="font-semibold">2-3 business days</span> and contact you at the provided email and phone number.
              </p>
            </div>
            <a href="/" className="inline-block px-8 py-3 bg-brand-secondary text-white rounded-lg font-semibold hover:bg-brand-secondary-dark transition">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-poppins font-bold text-brand-primary mb-4">Apply for a Loan</h1>
          <p className="text-xl text-brand-text-secondary">Quick, simple, and secure application process</p>
        </section>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map(s => (
              <div
                key={s}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                  s === step
                    ? 'bg-brand-secondary text-white scale-110'
                    : s < step
                    ? 'bg-brand-success text-white'
                    : 'bg-brand-border text-brand-text-muted'
                }`}
              >
                {s < step ? '✓' : s}
              </div>
            ))}
          </div>
          <div className="h-2 bg-brand-border rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-secondary transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-brand-danger/5 border border-brand-danger/20 text-brand-danger rounded-lg">
            <p className="font-semibold">✕ {error}</p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-brand-surface p-10 rounded-2xl shadow-sm border border-brand-border">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-poppins font-bold text-brand-primary mb-6">Personal Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-brand-text-primary mb-2">
                    First Name <span className="text-brand-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-brand-text-primary mb-2">
                    Last Name <span className="text-brand-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-text-primary mb-2">
                  Email Address <span className="text-brand-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brand-text-primary mb-2">
                  Phone Number <span className="text-brand-danger">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-sm"
                />
              </div>
            </div>
          )}

          {/* Step 2: Loan Details */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-poppins font-bold text-brand-primary mb-6">Loan Details</h2>
              </div>

              <div>
                <label htmlFor="loanType" className="block text-sm font-semibold text-brand-text-primary mb-2">
                  Loan Type <span className="text-brand-danger">*</span>
                </label>
                <select
                  id="loanType"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition text-sm"
                >
                  {loanTypes.map(loan => (
                    <option key={loan.value} value={loan.value}>
                      {loan.label}
                    </option>
                  ))}
                </select>
                {currentLoan && (
                  <p className="text-xs text-brand-text-muted mt-2">
                    Range: ₹{currentLoan.minAmount.toLocaleString('en-IN')} - ₹{currentLoan.maxAmount.toLocaleString('en-IN')}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="loanAmount" className="block text-sm font-semibold text-brand-text-primary mb-2">
                  Requested Loan Amount <span className="text-brand-danger">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-brand-text-secondary font-semibold">₹</span>
                  <input
                    type="number"
                    id="loanAmount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    min={currentLoan?.minAmount || 10000}
                    max={currentLoan?.maxAmount || 500000}
                    className="w-full pl-8 pr-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="annualIncome" className="block text-sm font-semibold text-brand-text-primary mb-2">
                  Annual Income <span className="text-brand-danger">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-brand-text-secondary font-semibold">₹</span>
                  <input
                    type="number"
                    id="annualIncome"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    min="100000"
                    className="w-full pl-8 pr-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="employmentType" className="block text-sm font-semibold text-brand-text-primary mb-2">
                  Employment Type <span className="text-brand-danger">*</span>
                </label>
                <select
                  id="employmentType"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition text-sm"
                >
                  {employmentTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {formData.employmentType === 'business-owner' && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-semibold text-brand-text-primary mb-2">
                      Business Type <span className="text-brand-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="e.g., Retail, Manufacturing, Services"
                      className="w-full px-4 py-3 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="yearsInBusiness" className="block text-sm font-semibold text-brand-text-primary mb-2">
                      Years in Business
                    </label>
                    <input
                      type="number"
                      id="yearsInBusiness"
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition text-sm"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="creditScore" className="block text-sm font-semibold text-brand-text-primary mb-2">
                  Credit Score <span className="text-brand-danger">*</span>
                </label>
                <select
                  id="creditScore"
                  name="creditScore"
                  value={formData.creditScore}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition text-sm"
                >
                  {creditScores.map(score => (
                    <option key={score.value} value={score.value}>
                      {score.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Documents */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-poppins font-bold text-brand-primary mb-2">Documents</h2>
                <p className="text-brand-text-secondary text-sm mb-6">Select the documents you have available</p>
              </div>

              <div className="space-y-4">
                {[
                  { key: 'aadhaar', label: 'Aadhar Card' },
                  { key: 'pan', label: 'PAN Card' },
                  { key: 'salarySlips', label: 'Salary Slips (Last 3 months)' },
                  { key: 'bankStatements', label: 'Bank Statements (Last 6 months)' },
                  { key: 'propertyDocs', label: 'Property Documents (for Home Loan)' },
                ].map(doc => (
                  <label key={doc.key} className="flex items-center p-4 border border-brand-border rounded-lg hover:bg-brand-bg cursor-pointer transition">
                    <input
                      type="checkbox"
                      name={doc.key}
                      checked={formData.documents[doc.key as keyof typeof formData.documents]}
                      onChange={handleChange}
                      className="w-5 h-5 text-brand-secondary rounded focus:ring-brand-secondary"
                    />
                    <span className="ml-3 font-medium text-brand-text-primary">{doc.label}</span>
                  </label>
                ))}
              </div>

              <div className="bg-brand-secondary/5 border border-brand-secondary/20 p-4 rounded-lg">
                <p className="text-sm text-brand-secondary">
                  <span className="font-semibold">Note:</span> You can upload documents after submission through your application portal.
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-poppins font-bold text-brand-primary mb-6">Review Your Application</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-brand-bg p-6 rounded-lg">
                  <h3 className="font-semibold text-brand-primary mb-4">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-brand-text-secondary">Full Name</p>
                      <p className="font-semibold text-brand-text-primary">{formData.firstName} {formData.lastName}</p>
                    </div>
                    <div>
                      <p className="text-brand-text-secondary">Email</p>
                      <p className="font-semibold text-brand-text-primary">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-brand-text-secondary">Phone</p>
                      <p className="font-semibold text-brand-text-primary">{formData.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-bg p-6 rounded-lg">
                  <h3 className="font-semibold text-brand-primary mb-4">Loan Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-brand-text-secondary">Loan Type</p>
                      <p className="font-semibold text-brand-text-primary">
                        {loanTypes.find(t => t.value === formData.loanType)?.label}
                      </p>
                    </div>
                    <div>
                      <p className="text-brand-text-secondary">Amount</p>
                      <p className="font-semibold text-brand-text-primary">₹{formData.loanAmount.toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-brand-text-secondary">Annual Income</p>
                      <p className="font-semibold text-brand-text-primary">₹{formData.annualIncome.toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-brand-text-secondary">Credit Score</p>
                      <p className="font-semibold text-brand-text-primary">
                        {creditScores.find(c => c.value === formData.creditScore)?.label}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-secondary/5 border border-brand-secondary/20 p-4 rounded-lg">
                  <p className="text-sm text-brand-secondary">
                    By submitting this application, you agree to our terms and conditions. Our team will review your application and contact you within 2-3 business days.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 pt-6 border-t border-brand-border">
            <button
              onClick={handlePrevious}
              disabled={step === 1}
              className="px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary/5 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Previous
            </button>

            {step < 4 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-brand-secondary text-white rounded-lg font-semibold hover:bg-brand-secondary-dark transition transform hover:scale-105 text-sm"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-3 bg-brand-success text-white rounded-lg font-semibold hover:bg-brand-success-dark transition disabled:bg-brand-border disabled:cursor-not-allowed transform hover:scale-105 text-sm"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
