import { Link } from 'react-router-dom'
import { CheckCircle, Users, Zap, Shield, Star, TrendingUp, Banknote, Home as HomeIcon, Briefcase, Car, ChevronDown, ChevronUp, FileCheck, Clock, Zap as ZapIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [counts, setCounts] = useState({ customers: 0, banks: 0, approval: 0 })

  // Animated counting for trust indicators
  useEffect(() => {
    const duration = 2000
    const start = Date.now()
    
    const timer = setInterval(() => {
      const now = Date.now()
      const progress = Math.min((now - start) / duration, 1)
      
      setCounts({
        customers: Math.floor(progress * 5000),
        banks: Math.floor(progress * 25),
        approval: Math.floor(progress * 98),
      })
      
      if (progress === 1) clearInterval(timer)
    }, 16)
    
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: <Banknote size={32} className="text-white" />,
      title: 'Personal Loan',
      description: 'Quick personal loans with minimal documentation and fast approval.',
    },
    {
      icon: <HomeIcon size={32} className="text-white" />,
      title: 'Home Loan',
      description: 'Affordable home loans with flexible EMI options and competitive rates.',
    },
    {
      icon: <Briefcase size={32} className="text-white"/>,
      title: 'Business Loan',
      description: 'Flexible business loans to grow your enterprise without hassle.',
    },
    {
      icon: <Car size={32} className="text-white" />,
      title: 'Car Loan',
      description: 'Easy car financing with low interest rates and quick processing.',
    },
  ]

  const whyChooseUs = [
    {
      icon: <Zap size={28} className="text-brand-success" />,
      title: 'Lightning Fast',
      description: 'Approval in as little as 24-48 hours',
    },
    {
      icon: <Shield size={28} className="text-brand-success" />,
      title: 'Bank-Grade Security',
      description: 'Your data is encrypted and completely secure',
    },
    {
      icon: <TrendingUp size={28} className="text-brand-success" />,
      title: 'Best Rates',
      description: 'Competitive interest rates in the industry',
    },
    {
      icon: <Users size={28} className="text-brand-success" />,
      title: 'Expert Support',
      description: '24/7 customer support for all your queries',
    },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Small Business Owner',
      text: 'MyLoanApprove made getting a business loan incredibly easy. Professional and transparent. The entire process took just 3 days!',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Priya Singh',
      role: 'Home Buyer',
      text: 'Best rates and amazing service. Got approval in just 3 days with minimal paperwork. Highly recommended for home loans.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Amit Patel',
      role: 'Car Buyer',
      text: 'Quick process and honest dealings. Highly recommend for anyone looking for loans. The team was very supportive.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Neha Deshmukh',
      role: 'Entrepreneur',
      text: 'Got my business loan approved faster than expected. The documentation process was smooth and well-guided throughout.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Vikram Sharma',
      role: 'Property Investor',
      text: 'Outstanding service! Got approved for my home loan with competitive rates. The customer support team is exceptional.',
      rating: 5,
      image: '👨‍💼',
    },
  ]

 const bankPartners = [
  {
    name: "HDFC Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
  },
  {
    name: "ICICI Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
  },
  {
    name: "Axis Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg",
  },
  {
    name: "State Bank of India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
  },
  {
    name: "Kotak Mahindra Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/39/Kotak_Mahindra_Group_logo.svg",
  },
  {
    name: "IndusInd Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/IndusInd_Bank_SVG_Logo.svg",
  },
];

  const faqs = [
    {
      question: 'How long does it take to get loan approval?',
      answer: 'Most loans are approved within 24-48 hours. We use AI-powered processing to speed up the verification and approval process.',
    },
    {
      question: 'What are the eligibility criteria?',
      answer: 'You need to be 21 years or older, have a stable income, and a good credit score. Different loan products have specific requirements.',
    },
    {
      question: 'What documents do I need?',
      answer: 'Basic documents include ID proof, address proof, income proof (salary slips/tax returns), and bank statements. The exact list depends on the loan type.',
    },
    {
      question: 'Can I apply for multiple loans at once?',
      answer: 'Yes, you can apply for multiple loans. We match you with the best options from our partner banks based on your profile.',
    },
    {
      question: 'What are the interest rates?',
      answer: 'Interest rates vary from 6.5% to 15% depending on the loan type, amount, tenure, and your credit profile. We offer competitive market rates.',
    },
    {
      question: 'Is my personal information safe?',
      answer: 'Absolutely. We use bank-grade encryption and comply with all RBI regulations. Your data is never shared without consent.',
    },
  ]

  return (
    <div>
      {/* Hero Section - IMPROVED */}
      <section className="relative pt-20 pb-28 bg-gradient-to-br from-brand-bg via-brand-surface to-brand-bg overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl -mr-48 -mt-24"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl -ml-36 -mb-12"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trust Line */}
              <div className="flex items-center space-x-2">
                <div className="h-0.5 w-8 bg-brand-secondary"></div>
                <span className="text-brand-secondary font-semibold text-sm tracking-widest uppercase">Trusted Loan Assistance Partner</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-poppins font-bold text-brand-primary leading-tight tracking-tight max-w-xl">
                  Get Your Loan Approved <span className="text-brand-secondary">Easily</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Fast, transparent, and hassle-free loan approvals from India's top banks. Get the best rates tailored to your needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-brand-secondary text-white rounded-lg font-semibold text-center shadow-md hover:shadow-lg transition-all duration-200 hover:bg-brand-secondary-dark transform hover:scale-105"
                >
                  Apply Now →
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3.5 border-2 border-brand-primary text-brand-primary rounded-lg font-semibold text-center transition-all duration-200 hover:bg-brand-primary/5"
                >
                  View Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div>
                  <p className="text-2xl font-poppins font-bold text-brand-text-primary">5L+</p>
                  <p className="text-brand-text-secondary text-sm">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-brand-border"></div>
                <div>
                  <p className="text-2xl font-poppins font-bold text-brand-text-primary">₹1000Cr+</p>
                  <p className="text-brand-text-secondary text-sm">Loans Approved</p>
                </div>
              </div>
            </div>

            {/* Right - Professional Image with Shadow */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-96 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl overflow-hidden shadow-2xl border border-brand-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop"
                  alt="Financial professionals working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent"></div>
              </div>
              {/* Shadow separation */}
              <div className="absolute -bottom-4 -right-4 w-full h-20 bg-gradient-to-t from-gray-900/10 to-transparent rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">About Us</span>
                <h2 className="text-4xl font-poppins font-bold text-brand-text-primary mt-2">
                  India's Trusted Lending Platform
                </h2>
              </div>
              <p className="text-lg text-brand-text-secondary leading-relaxed">
                MyLoanApprove connects borrowers with the best financial products from top banks. We simplify the lending process with technology and transparency.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our AI-powered matching system and expert team, we ensure you get the loan that fits your needs perfectly.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-success flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-text-primary font-medium">Over 5 lakhs customers served</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-success flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-text-primary font-medium">₹1000+ crores approved loans</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-success flex-shrink-0 mt-1" size={20} />
                  <span className="text-brand-text-primary font-medium">RBI regulated and secure</span>
                </div>
              </div>
            </div>
            <div className="relative h-80">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - PROFESSIONAL ICONS */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
                <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">Services</span>
                <h2 className="text-4xl font-poppins font-bold text-brand-primary mt-2 mb-4">Our Loan Products</h2>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">
              Comprehensive lending solutions tailored to your specific financial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-brand-surface p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-border hover:border-brand-secondary/30 group"
              >
                {/* Professional Icon with circular background */}
                <div className=" w-16 h-16 rounded-full bg-brand-secondary hover:bg-brand-primary flex items-center justify-center shadow-md hover:shadow-lg text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-poppins pt-2 font-bold text-brand-text-primary mb-3">{service.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="text-brand-secondary font-semibold text-sm hover:text-brand-primary transition-colors flex items-center mt-4 group/link"
                >
                  Learn More <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">Why Us</span>
                <h2 className="text-4xl font-poppins font-bold text-brand-primary mt-2 mb-4">Why Choose MyLoanApprove?</h2>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">
              We stand out with our commitment to speed, transparency, and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-8">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-lg font-poppins font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - SWIPER SLIDER */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">Testimonials</span>
            <h2 className="text-4xl font-poppins font-bold text-brand-text-primary mt-2 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">
              Real experiences from thousands of satisfied customers
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, A11y]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-brand-surface p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-brand-border h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">"{testimonial.text}"</p>
                    <div className="border-t border-gray-100 pt-4 flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center text-lg">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-text-primary text-sm">{testimonial.name}</p>
                        <p className="text-brand-text-muted text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-10 h-10 rounded-full bg-brand-secondary text-white items-center justify-center hover:bg-brand-secondary-dark transition-all duration-200 md:flex hidden">
              ←
            </button>
            <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-10 h-10 rounded-full bg-brand-secondary text-white items-center justify-center hover:bg-brand-secondary-dark transition-all duration-200 md:flex hidden">
              →
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">Why We Lead The Industry</span>
            <h2 className="text-4xl font-poppins font-bold text-brand-text-primary mt-2">Trusted by Millions, Backed by Data</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Trust Stat 1 */}
            <div className="text-center p-8 bg-brand-bg rounded-2xl hover:bg-brand-primary/5 transition-all duration-300">
              <p className="text-4xl md:text-5xl font-poppins font-bold text-brand-primary mb-2">{counts.customers.toLocaleString()}+</p>
              <p className="text-brand-text-secondary font-semibold text-sm">Happy Customers</p>
              <p className="text-brand-text-muted text-xs mt-2">Served with excellence</p>
            </div>

            {/* Trust Stat 2 */}
            <div className="text-center p-8 bg-brand-bg rounded-2xl hover:bg-brand-secondary/5 transition-all duration-300">
              <p className="text-4xl md:text-5xl font-poppins font-bold text-brand-secondary mb-2">{counts.banks}+</p>
              <p className="text-brand-text-secondary font-semibold text-sm">Bank Partners</p>
              <p className="text-brand-text-muted text-xs mt-2">Top financial institutions</p>
            </div>

            {/* Trust Stat 3 */}
            <div className="text-center p-8 bg-brand-bg rounded-2xl hover:bg-brand-primary/5 transition-all duration-300">
              <p className="text-4xl md:text-5xl font-poppins font-bold text-brand-primary mb-2">{counts.approval}%</p>
              <p className="text-brand-text-secondary font-semibold text-sm">Approval Rate</p>
              <p className="text-brand-text-muted text-xs mt-2">Industry-leading success</p>
            </div>

            {/* Trust Stat 4 */}
            <div className="text-center p-8 bg-brand-bg rounded-2xl hover:bg-brand-secondary/5 transition-all duration-300">
              <p className="text-3xl md:text-4xl font-poppins font-bold text-brand-secondary mb-2">24/7</p>
              <p className="text-brand-text-secondary font-semibold text-sm">Customer Support</p>
              <p className="text-brand-text-muted text-xs mt-2">Always here for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Partners Section */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">Our Partners</span>
            <h2 className="text-4xl font-poppins font-bold text-brand-text-primary mt-2">Partnered with India's Top Banks</h2>
            <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">
              We work with the nation's most trusted financial institutions to bring you the best loan options
            </p>
          </div>

          <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-6 gap-8">
            {bankPartners.map((bank, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-5 h-34 bg-brand-surface rounded-2xl shadow-sm hover:shadow-lg hover:border-brand-secondary/30 border border-brand-border transition-all duration-300 group cursor-pointer">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  <img src={bank.logo} alt={bank.name} className="h-12 w-13 object-contain" />
                </div>
                <p className="text-brand-text-secondary text-xs font-semibold text-center">{bank.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Eligibility Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">Simple Process</span>
            <h2 className="text-4xl font-poppins font-bold text-brand-text-primary mt-2">Minimal Documentation, Maximum Approval</h2>
            <p className="text-brand-text-secondary mt-4 max-w-2xl mx-auto">
              We've optimized the loan process to be as simple and fast as possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Minimal Documentation */}
            <div className="bg-gradient-to-br from-brand-primary/5 to-brand-primary/0 p-8 rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-surface border-2 border-brand-primary flex items-center justify-center mx-auto mb-6 shadow-sm">
                <FileCheck className="text-brand-primary" size={32} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-brand-text-primary mb-3">Minimal Documents</h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed">
                Just your ID, address proof, income statement, and bank details. Nothing more.
              </p>
            </div>

            {/* Quick Verification */}
            <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border hover:border-brand-secondary/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-secondary/10 border-2 border-brand-secondary flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ZapIcon className="text-brand-secondary" size={32} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-brand-text-primary mb-3">Quick Verification</h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed">
                AI-powered verification system processes your application in minutes, not days.
              </p>
            </div>

            {/* Fast Approval */}
            <div className="bg-gradient-to-br from-brand-primary/5 to-brand-primary/0 p-8 rounded-2xl border border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-surface border-2 border-brand-primary flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Clock className="text-brand-primary" size={32} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-brand-text-primary mb-3">Fast Approval</h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed">
                Get approval within 24-48 hours. Fastest in the industry. Guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-secondary font-semibold text-sm tracking-wider uppercase">Common Questions</span>
            <h2 className="text-4xl font-poppins font-bold text-brand-text-primary mt-2">Frequently Asked Questions</h2>
            <p className="text-brand-text-secondary mt-4">
              Find answers to common questions about our loan products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-brand-surface rounded-2xl border border-brand-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-brand-bg transition-colors duration-200"
                >
                  <span className="text-lg font-poppins font-bold text-brand-text-primary text-left">{faq.question}</span>
                  <span className="flex-shrink-0 ml-4">
                    {openFaq === index ? (
                      <ChevronUp className="text-brand-secondary" size={24} />
                    ) : (
                      <ChevronDown className="text-brand-text-muted" size={24} />
                    )}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-8 pb-6 border-t border-brand-border bg-brand-bg/50 animate-fadeIn">
                    <p className="text-brand-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <div className="mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary/50 rounded-2xl p-8 text-center text-white">
            <p className="text-lg font-semibold mb-4">Couldn't find the answer you were looking for?</p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-brand-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Contact Our Support Team
            </Link>
          </div> */}
        </div>
      </section>
      <section className="py-20 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-poppins text-white font-bold mb-4">Ready to Get Your Loan Approved?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Start your loan journey today. Get approved in as little as 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-white text-brand-primary rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Apply Now →
          </Link>
        </div>
      </section>
    </div>
  )
}
