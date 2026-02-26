import { CheckCircle, ArrowRight } from 'lucide-react'

export default function About() {
  const loanProcess = [
    {
      step: 1,
      title: 'Apply Online',
      description: 'Fill out our simple form with your basic details in just 5 minutes.',
    },
    {
      step: 2,
      title: 'Document Submission',
      description: 'Upload required documents securely through our platform.',
    },
    {
      step: 3,
      title: 'Verification',
      description: 'Our team verifies your documents within 24-48 hours.',
    },
    {
      step: 4,
      title: 'Approval & Offer',
      description: 'Receive personalized offers from multiple lenders.',
    },
    {
      step: 5,
      title: 'Final Review',
      description: 'Review and compare offers side by side.',
    },
    {
      step: 6,
      title: 'Funding',
      description: 'Funds disbursed directly to your bank account.',
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main About Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">About Us</span>
                <h1 className="text-5xl font-poppins font-bold text-brand-primary mt-3 leading-tight">
                  India's Most Trusted Lending Platform
                </h1>
              </div>
              <p className="text-lg text-brand-text-secondary leading-relaxed">
                MyLoanApprove revolutionizes lending through technology and transparency. Founded with the mission to democratize financial access, we connect borrowers with India's most trusted banks and institutions.
              </p>
              <p className="text-brand-text-secondary leading-relaxed">
                Our AI-powered platform analyzes your profile and matches you with the most suitable loans, saving time and effort while ensuring competitive rates.
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-brand-success flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-brand-primary">RBI Regulated</h3>
                    <p className="text-brand-text-secondary text-sm mt-1">Fully compliant with Reserve Bank of India regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-brand-success flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-brand-primary">Industry Certified</h3>
                    <p className="text-brand-text-secondary text-sm mt-1">ISO 27001 certified for information security</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-brand-success flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-brand-primary">Award Winning</h3>
                    <p className="text-brand-text-secondary text-sm mt-1">Recognized as India's most trusted lending platform</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Professional team"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-24 py-20 bg-gradient-to-br from-brand-bg to-brand-surface rounded-3xl px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-poppins font-bold text-brand-text-primary">Our Mission</h2>
              <p className="text-lg text-brand-text-secondary leading-relaxed">
                To make financial inclusion accessible to every Indian by providing a transparent, fast, and hassle-free lending platform that connects borrowers with the best loan options.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center space-x-3">
                  <ArrowRight className="text-brand-secondary flex-shrink-0" size={20} />
                  <span className="text-brand-text-secondary">Simplify loan processes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ArrowRight className="text-brand-secondary flex-shrink-0" size={20} />
                  <span className="text-brand-text-secondary">Increase financial accessibility</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ArrowRight className="text-brand-secondary flex-shrink-0" size={20} />
                  <span className="text-brand-text-secondary">Ensure customer trust and transparency</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-poppins font-bold text-brand-text-primary">Our Vision</h2>
              <p className="text-lg text-brand-text-secondary leading-relaxed">
                To become the world's most customer-centric lending platform, empowering millions to achieve financial aspirations through innovative and secure solutions.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center space-x-3">
                  <ArrowRight className="text-brand-secondary flex-shrink-0" size={20} />
                  <span className="text-brand-text-secondary">Technology-driven lending solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ArrowRight className="text-brand-secondary flex-shrink-0" size={20} />
                  <span className="text-brand-text-secondary">Exceptional customer experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ArrowRight className="text-brand-secondary flex-shrink-0" size={20} />
                  <span className="text-brand-text-secondary">Sustainable financial growth</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Loan Approval Process */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">Process</span>
            <h2 className="text-4xl font-poppins font-bold text-brand-text-primary mt-3 mb-4">Our Loan Approval Process</h2>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">
              Simple, transparent, and efficient. Get approved in just 6 easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProcess.map((process, index) => (
              <div
                key={index}
                className="bg-brand-surface p-8 rounded-xl shadow-sm border border-brand-border hover:shadow-lg hover:border-brand-secondary/30 transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-secondary/10 border-2 border-brand-secondary flex items-center justify-center font-poppins font-bold text-brand-secondary">
                  {process.step}
                </div>
                <h3 className="text-lg font-poppins font-bold text-brand-text-primary mb-3 pr-8">{process.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>

          {/* Timeline visual for larger screens */}
          <div className="hidden lg:flex items-center justify-between mt-12">
            {loanProcess.map((_, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="w-3 h-3 bg-brand-secondary rounded-full"></div>
                {index < loanProcess.length - 1 && (
                  <div className="flex-1 h-1 bg-brand-border mx-3"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-brand-primary text-white rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-poppins text-white font-bold">5L+</h3>
              <p className="text-white/80 font-medium">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-poppins text-white font-bold">₹1000Cr+</h3>
              <p className="text-white/80 font-medium">Loans Approved</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-poppins text-white  font-bold">48h</h3>
              <p className="text-white/80 font-medium">Average Approval Time</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-poppins text-white font-bold">100+</h3>
              <p className="text-white/80 font-medium">Bank Partners</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
