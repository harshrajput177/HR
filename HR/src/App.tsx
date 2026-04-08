import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search,
  Briefcase,
  TrendingUp,
  Award,
  Heart,
  ChevronDown,
  CheckCircle,
  Users,
  Building,
  Globe,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Menu,
  X,
  Laptop,
  BarChart3,
  Palette,
  HeartPulse,
  Megaphone,
  Settings,
  ClipboardList
} from "lucide-react";

import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

import ServicePage from './pages/Services/Services';
import './index.css';

// Team member images
const teamMembers = [
  { name: "Sarah Mitchell", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" },
  { name: "James Chen", role: "Managing Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" },
  { name: "Emily Rodriguez", role: "Head of Operations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop" },
  { name: "Michael Park", role: "Senior HR Consultant", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" }
];

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">
          HR<span>Pro</span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="nav-links desktop-menu">
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li className="dropdown">
            <a href="#services">Services <ChevronDown className="dropdown-arrow" size={14} /></a>
            <div className="dropdown-menu">
              <a href="#/services/executive-search">Executive Search</a>
              <a href="#/services/staffing-solutions">Staffing Solutions</a>
              <a href="#/services/recruitment-process">Recruitment Process</a>
              <a href="#/services/market-insights">Market Insights</a>
              <a href="#/services/employer-branding">Employer Branding</a>
              <a href="#/services/candidate-care">Candidate Care</a>
              <a href="#/services/hr-consulting">HR Consulting</a>
              <a href="#/services/training-development">Training & Development</a>
            </div>
          </li>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#categories" onClick={closeMobileMenu}>Jobs</a></li>
          <li><a href="#team" onClick={closeMobileMenu}>Team</a></li>
          <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
        
        <div className="nav-cta desktop-cta">
          <a href="#contact" className="btn btn-primary">Get Started</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        />

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <a href="#" className="logo" onClick={closeMobileMenu}>
              HR<span>Pro</span>
            </a>
          </div>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li className="mobile-dropdown">
              <button 
                className="mobile-dropdown-toggle"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services 
                <ChevronDown 
                  className={`dropdown-arrow ${servicesOpen ? 'rotated' : ''}`} 
                  size={18} 
                />
              </button>
              <ul className={`mobile-dropdown-menu ${servicesOpen ? 'open' : ''}`}>
                <li><a href="#/services/executive-search" onClick={closeMobileMenu}>Executive Search</a></li>
                <li><a href="#/services/staffing-solutions" onClick={closeMobileMenu}>Staffing Solutions</a></li>
                <li><a href="#/services/recruitment-process" onClick={closeMobileMenu}>Recruitment Process</a></li>
                <li><a href="#/services/market-insights" onClick={closeMobileMenu}>Market Insights</a></li>
                <li><a href="#/services/employer-branding" onClick={closeMobileMenu}>Employer Branding</a></li>
                <li><a href="#/services/candidate-care" onClick={closeMobileMenu}>Candidate Care</a></li>
                <li><a href="#/services/hr-consulting" onClick={closeMobileMenu}>HR Consulting</a></li>
                <li><a href="#/services/training-development" onClick={closeMobileMenu}>Training & Development</a></li>
              </ul>
            </li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#categories" onClick={closeMobileMenu}>Jobs</a></li>
            <li><a href="#team" onClick={closeMobileMenu}>Team</a></li>
            <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <div className="mobile-menu-cta">
            <a href="#contact" className="btn btn-primary" onClick={closeMobileMenu}>Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="hero-content">
        <motion.span 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Premier Recruitment Agency
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Find Your <span>Perfect</span> Talent
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Connecting exceptional talent with industry-leading companies worldwide. 
          We deliver premium recruitment solutions for forward-thinking organizations.
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact" className="btn btn-primary">Post a Job</a>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </motion.div>
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="hero-stat">
            <div className="hero-stat-number">10K+</div>
            <div className="hero-stat-label">Jobs Filled</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">500+</div>
            <div className="hero-stat-label">Companies</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">98%</div>
            <div className="hero-stat-label">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image scroll-animate"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" 
              alt="HR Pro Team" 
            />
            <div className="about-image-accent"></div>
          </motion.div>
          <motion.div 
            className="about-content scroll-animate"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="subtitle">About Us</span>
            <h2>Transforming <span className="highlight">Hiring</span> Since 2008</h2>
            <p>
              HRPro is a globally recognized recruitment agency dedicated to connecting 
              exceptional talent with world-class organizations. With over 15 years of 
              experience, we've helped hundreds of companies build their dream teams.
            </p>
            <p>
              Our mission is to revolutionize the recruitment industry by providing 
              personalized, data-driven solutions that exceed expectations. We believe 
              in the power of human connection to transform businesses.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon"><CheckCircle size={14} /></div>
                <span>Global Reach</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><CheckCircle size={14} /></div>
                <span>Industry Experts</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><CheckCircle size={14} /></div>
                <span>Quality Assured</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><CheckCircle size={14} /></div>
                <span>24/7 Support</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-secondary" style={{ marginTop: '30px' }}>
              Learn More <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Team Section
const Team = () => {
  return (
    <section id="team" className="section section-light">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Our Team</span>
          <h2>Meet The Experts</h2>
          <p>Our dedicated team of HR professionals brings decades of combined experience in talent acquisition.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="team-card scroll-animate"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href="#"><FaLinkedinIn size={18} /></a>
                    <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook size={18} /></a>
                  </div>
                </div>
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: <Search size={32} />,
      title: "Executive Search",
      description: "We identify and attract top-tier leadership talent through our extensive global network and proven methodology."
    },
    {
      icon: <Users size={32} />,
      title: "Staffing Solutions",
      description: "Flexible staffing services tailored to your business needs, from temporary placements to permanent hires."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Recruitment Process",
      description: "End-to-end recruitment outsourcing that transforms how you acquire and retain quality talent."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Market Insights",
      description: "Comprehensive market intelligence and salary benchmarking to help you make informed hiring decisions."
    },
    {
      icon: <Award size={32} />,
      title: "Employer Branding",
      description: "Strategic employer branding solutions that position your company as the preferred employer of choice."
    },
    {
      icon: <Heart size={32} />,
      title: "Candidate Care",
      description: "Personalized career coaching and support ensuring exceptional candidate experience throughout."
    },
    {
      icon: <Building size={32} />,
      title: "HR Consulting",
      description: "Expert HR advisory services to optimize your internal talent management strategies and policies."
    },
    {
      icon: <Globe size={32} />,
      title: "International Recruitment",
      description: "Specialized cross-border recruitment solutions for companies expanding globally."
    },
    {
      icon: <Star size={32} />,
      title: "Training & Development",
      description: "Professional development programs for both recruiters and hiring managers to enhance skills."
    }
  ];

  return (
    <section id="services" className="section section-white">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Our Services</span>
          <h2>Comprehensive Recruitment Solutions</h2>
          <p>We deliver tailored recruitment strategies that connect exceptional talent with world-class organizations.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card scroll-animate"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Job Categories
const Categories = () => {
const categories = [
  { icon: Briefcase, title: "Executive", jobs: "250+ Jobs" },
  { icon: Laptop, title: "Technology", jobs: "500+ Jobs" },
  { icon: BarChart3, title: "Finance", jobs: "180+ Jobs" },
  { icon: Palette, title: "Design", jobs: "120+ Jobs" },
  { icon: HeartPulse, title: "Healthcare", jobs: "300+ Jobs" },
  { icon: Megaphone, title: "Marketing", jobs: "150+ Jobs" },
  { icon: Settings, title: "Engineering", jobs: "400+ Jobs" },
  { icon: ClipboardList, title: "Administration", jobs: "100+ Jobs" },
]

  return (
    <section id="categories" className="section section-light">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Browse Jobs</span>
          <h2>Explore Job Categories</h2>
          <p>Find opportunities across diverse industries and functional areas.</p>
        </div>
        <div className="categories-grid">
      {categories.map((cat, index) => {
  const Icon = cat.icon  // 👈 ye line important hai

  return (
    <motion.a 
      href="#contact"
      key={index}
      className="category-card scroll-animate"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="category-icon">
        <Icon className="w-8 h-8 text-blue-500" />   {/* 👈 yaha use hoga */}
      </div>

      <h3>{cat.title}</h3>
      <p>{cat.jobs}</p>
    </motion.a>
  )
})}
        </div>
      </div>
    </section>
  );
};

// Statistics Section
const Stats = () => {
  const stats = [
    { number: "10,000+", label: "Placements" },
    { number: "500+", label: "Partner Companies" },
    { number: "98%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item scroll-animate"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials
const Testimonials = () => {
  const testimonials = [
    {
      text: "HRPro transformed our recruitment process. Their Executive Search team found us a CFO who exceeded all expectations. Truly exceptional service!",
      name: "Sarah Mitchell",
      role: "CEO, TechVentures Inc."
    },
    {
      text: "The best recruitment agency we've ever worked with. Professional, responsive, and consistently delivers top-tier candidates.",
      name: "James Chen",
      role: "HR Director, GlobalFinance"
    },
    {
      text: "Their understanding of the technology sector is unmatched. They placed three senior engineers who have become invaluable team members.",
      name: "Emily Rodriguez",
      role: "VP Engineering, DataSoft"
    }
  ];

  return (
    <section id="testimonials" className="section section-white">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">Testimonials</span>
          <h2>What Clients Say</h2>
          <p>Hear from companies who have transformed their recruitment with HRPro.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card scroll-animate"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.name.charAt(0)}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTA = () => {
  return (
    <section id="contact" className="section cta-section">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Transform Your Hiring?</h2>
          <p>Partner with HRPro and discover the difference premium recruitment makes. Let's build your dream team together.</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-outline-white">Get Started</a>
            <a href="tel:+1234567890" className="btn">Call Now</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              HR<span>Pro</span>
            </a>
            <p>Premier recruitment agency connecting exceptional talent with world-class organizations. Your success is our mission since 2008.</p>
            <div className="footer-social">
              <a href="#"><FaFacebook size={18} /></a>
              <a href="#"><FaTwitter size={18} /></a>
              <a href="#"><FaLinkedinIn size={18} /></a>
              <a href="#"><FaInstagram size={18} /></a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Executive Search</a></li>
              <li><a href="#">Staffing Solutions</a></li>
              <li><a href="#">Recruitment Process</a></li>
              <li><a href="#">Employer Branding</a></li>
              <li><a href="#">HR Consulting</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><a href="#"><Mail size={16} style={{ marginRight: '8px' }} />hello@hrpro.com</a></li>
              <li><a href="#"><Phone size={16} style={{ marginRight: '8px' }} />+1 (555) 123-4567</a></li>
              <li><a href="#">123 Business Avenue</a></li>
              <li><a href="#">New York, NY 10001</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 HRPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const location = useLocation();
  const isServicePage = location.pathname.startsWith('/services');

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="*" element={<MainContent />} />
      </Routes>
    </>
  );
}

// Main Content Component (all sections)
const MainContent = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Services />
      <Categories />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
