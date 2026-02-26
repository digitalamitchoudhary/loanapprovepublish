import { Link } from 'react-router-dom'
import { Check, Banknote, Home as HomeIcon, Briefcase, Car, Clock, FileText, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Services() {
  const [expandedLoan, setExpandedLoan] = useState<number | null>(null)

  const loanTypes = [
    {
      icon: <Banknote size={40} className="text-royal-blue" />,
      title: 'Personal Loan',
      description: 'Fast and flexible personal loans for any purpose',
      shortBenefits: [
        'Instant approval in 24 hours',
        'No collateral required',
        'Flexible tenure up to 60 months'
      ],
      features: [
        'Loan Amount: ₹10,000 to ₹30 Lakh',
        'Tenure: 12 to 60 months',
        'Interest Rate: 8% to 18% per annum',
        'Processing Fee: 1% to 3% of loan amount',
        'No collateral required',
        'Instant approval in 24 hours',
      ],
      eligibility: [
        'Age: 18-60 years',
        'Monthly Income: ₹15,000 or above',
        'Employment: Salaried/Self-employed',
        'CIBIL Score: 650+',
        'Indian resident',
      ],
      documents: [
        'PAN Card',
        'Aadhar Card',
        'Last 6 months salary slips',
        'Last 2 years ITR',
        'Bank statements (6 months)',
        'Address proof',
      ],
    },
    {
      icon: <HomeIcon size={40} className="text-royal-blue" />,
      title: 'Home Loan',
      description: 'Affordable home loans to realize your dream home',
      shortBenefits: [
        'Loan up to ₹1 Crore+',
        'Tenure up to 30 years',
        'Tax benefits eligible'
      ],
      features: [
        'Loan Amount: ₹5 Lakh to ₹1 Crore+',
        'Tenure: 5 to 30 years',
        'Interest Rate: 6.5% to 10% per annum',
        'Processing Fee: 0.5% to 1% of loan amount',
        'Co-applicant option available',
        'Tax benefits eligible',
      ],
      eligibility: [
        'Age: 21-65 years',
        'Monthly Income: ₹25,000 or above',
        'Employment: Salaried/self-employed',
        'CIBIL Score: 700+',
        'Minimum 2 years employment history',
      ],
      documents: [
        'PAN Card',
        'Aadhar Card',
        'Last 3 years salary slips',
        'Last 3 years ITR',
        'Bank statements (6 months)',
        'Property documents',
        'Sanction letter from builder',
      ],
    },
    {
      icon: <Briefcase size={40} className="text-royal-blue" />,
      title: 'Business Loan',
      description: 'Flexible business loans to grow your enterprise',
      shortBenefits: [
        'Loan up to ₹5 Crore+',
        'Flexible repayment options',
        'Working capital support'
      ],
      features: [
        'Loan Amount: ₹5 Lakh to ₹5 Crore+',
        'Tenure: 12 to 84 months',
        'Interest Rate: 9% to 15% per annum',
        'Processing Fee: 1% to 3% of loan amount',
        'Flexible repayment options',
        'Working capital support',
      ],
      eligibility: [
        'Business vintage: Minimum 2 years',
        'Annual turnover: ₹10 Lakh+',
        'Age: 21-70 years',
        'CIBIL Score: 600+',
        'Registered business',
      ],
      documents: [
        'PAN Card',
        'Aadhar Card',
        'Last 2 years ITR',
        'Last 2 years audited financials',
        'Last 6 months bank statements',
        'Latest GST return',
        'Business registration documents',
      ],
    },
    {
      icon: <Car size={40} className="text-royal-blue" />,
      title: 'Car Loan',
      description: 'Easy and quick car financing solutions',
      shortBenefits: [
        'Same day approval available',
        'Easy documentation process',
        'Loan up to ₹50 Lakh'
      ],
      features: [
        'Loan Amount: ₹2 Lakh to ₹50 Lakh',
        'Tenure: 24 to 84 months',
        'Interest Rate: 7% to 12% per annum',
        'Processing Fee: 0.75% to 1.5% of loan amount',
        'Easy documentation',
        'Same day approval',
      ],
      eligibility: [
        'Age: 21-65 years',
        'Monthly Income: ₹20,000 or above',
        'Employment: Salaried/self-employed',
        'CIBIL Score: 650+',
        'Minimum 1-2 years employment',
      ],
      documents: [
        'PAN Card',
        'Aadhar Card',
        'Last 6 months salary slips',
        'Last 2 years ITR',
        'Bank statements (3 months)',
        'Driving license',
        'Car quote/invoice',
      ],
    },
  ]

  return (
    <div className="bg-brand-bg">
      {/* Professional Header Section */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-brand-secondary font-semibold text-sm tracking-widest uppercase">Loan Solutions</span>
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-brand-primary mt-4 mb-6 leading-tight">
              Loan Solutions Designed For You
            </h1>
            <p className="text-lg text-brand-text-secondary leading-relaxed">
              Explore our comprehensive range of loan products engineered to meet your unique financial needs with transparency, speed, and flexibility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Loan Category Cards Grid */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className="bg-brand-surface rounded-2xl border border-brand-border p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-brand-secondary/30 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-brand-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {loan.icon}
                </div>

                {/* Title & Description */}
                <h2 className="text-2xl font-poppins font-bold text-brand-primary mb-3">{loan.title}</h2>
                <p className="text-brand-text-secondary text-sm mb-6 leading-relaxed">{loan.description}</p>

                {/* Key Benefits */}
                <div className="space-y-3 mb-8 pb-8 border-b border-brand-border">
                  {loan.shortBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle size={18} className="text-brand-success flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text-secondary text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setExpandedLoan(expandedLoan === index ? null : index)}
                  className="w-full px-6 py-3 bg-brand-secondary text-white rounded-lg font-semibold shadow-sm hover:shadow-md hover:bg-brand-secondary-dark transition-all duration-200 transform hover:scale-105"
                >
                  {expandedLoan === index ? 'Hide Details' : 'View Details'} ↓
                </button>

                {/* Expandable Details Section */}
                {expandedLoan === index && (
                  <div className="mt-8 pt-8 px-6 mx-8 mb-6 pb-2 border-t border-brand-border space-y-8 bg-brand-bg rounded-b-2xl animate-slideDown">
                    {/* Key Features */}
                    <div>
                      <h3 className="text-lg font-poppins font-bold text-brand-primary mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {loan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check size={16} className="text-brand-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-brand-text-secondary text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Eligibility & Documents in 2 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-base font-poppins font-bold text-brand-primary mb-4 flex items-center space-x-2">
                          <CheckCircle size={18} className="text-brand-success" />
                          <span>Eligibility</span>
                        </h3>
                        <ul className="space-y-2">
                          {loan.eligibility.map((criteria, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-brand-secondary text-sm font-semibold mt-0.5">•</span>
                              <span className="text-brand-text-secondary text-sm">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base font-poppins font-bold text-brand-primary mb-4 flex items-center space-x-2">
                          <FileText size={18} className="text-brand-secondary" />
                          <span>Documents</span>
                        </h3>
                        <ul className="space-y-2">
                          {loan.documents.map((doc, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-brand-success text-sm font-semibold mt-0.5">✓</span>
                              <span className="text-brand-text-secondary text-sm">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <Link
                      to="/apply"
                      className="block text-center !px-6 py-3 bg-brand-success text-white rounded-lg font-semibold shadow-sm hover:shadow-md hover:bg-brand-success-dark transition-all  !mb-5 !mt-6"
                    >
                      Apply Now →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Comparison Table */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-brand-primary mb-4">Quick Comparison</h2>
            <p className="text-brand-text-secondary max-w-2xl mx-auto">
              Compare key features across our loan products to find the perfect fit for your needs
            </p>
          </div>

          <div className="overflow-x-auto bg-brand-surface rounded-2xl border border-brand-border shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold text-sm">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Personal</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Home</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Business</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Car</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="px-6 py-4 font-semibold text-brand-primary text-sm">Max Amount</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">₹30 Lakh</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">₹1 Crore+</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">₹5 Crore+</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">₹50 Lakh</td>
                </tr>
                <tr className="border-b border-brand-border bg-brand-bg">
                  <td className="px-6 py-4 font-semibold text-brand-primary text-sm">Min CIBIL</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">650</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">700</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">600</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">650</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="px-6 py-4 font-semibold text-brand-primary text-sm">Rate Range</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">8-18% p.a.</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">6.5-10% p.a.</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">9-15% p.a.</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">7-12% p.a.</td>
                </tr>
                <tr className="border-b border-brand-border bg-brand-bg">
                  <td className="px-6 py-4 font-semibold text-brand-primary text-sm">Tenure</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">12-60 months</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">5-30 years</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">12-84 months</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">24-84 months</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="px-6 py-4 font-semibold text-brand-primary text-sm">Approval</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">24 hours</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">7-10 days</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">5-7 days</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">Same day</td>
                </tr>
                <tr className="bg-brand-bg">
                  <td className="px-6 py-4 font-semibold text-brand-primary text-sm">Type</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">Unsecured</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">Secured</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">Both</td>
                  <td className="px-6 py-4 text-brand-text-secondary text-sm">Secured</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust & Authority Section */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all text-center">
            <div className="w-12 h-12 rounded-lg bg-royal-blue/10 flex items-center justify-center mx-auto mb-6">
              <Clock size={28} className="text-royal-blue" />
            </div>
            <h3 className="text-lg font-poppins font-bold text-navy mb-3">Fast Processing</h3>
            <p className="text-text-secondary text-sm">
              Our streamlined process ensures fastest loan approval in the industry, within 24-48 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all text-center">
            <div className="w-12 h-12 rounded-lg bg-emerald/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={28} className="text-emerald-600" />
            </div>
            <h3 className="text-lg font-poppins font-bold text-navy mb-3">Bank Partnerships</h3>
            <p className="text-text-secondary text-sm">
              Partnered with 25+ leading banks to bring you the most competitive rates and flexible terms.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all text-center">
            <div className="w-12 h-12 rounded-lg bg-royal-blue/10 flex items-center justify-center mx-auto mb-6">
              <FileText size={28} className="text-royal-blue" />
            </div>
            <h3 className="text-lg font-poppins font-bold text-navy mb-3">Minimal Docs</h3>
            <p className="text-text-secondary text-sm">
              Hassle-free documentation process with minimal paperwork. We handle the complexity for you.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-navy to-royal-blue rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-poppins text-white font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Apply for your ideal loan product today and get approved with our simple, transparent process.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-navy rounded-lg font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </div>
  )
}
