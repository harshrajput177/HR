import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, TrendingUp, Briefcase, Award } from 'lucide-react';

const services = {
  'executive-search': {
    title: 'Executive Search',
    subtitle: 'Leadership Recruitment',
    description: 'Our Executive Search service is designed to find the exceptional leaders who will transform your organization. We combine industry expertise with cutting-edge search methodologies to identify top-tier talent for C-suite and senior management positions.',
    features: [
      'Comprehensive candidate profiling',
      'Global talent network access',
      'Strict confidentiality guaranteed',
      'Background verification',
      'Onboarding support',
      'Market compensation analysis'
    ],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=500&fit=crop'
  },
  'staffing-solutions': {
    title: 'Staffing Solutions',
    subtitle: 'Flexible Workforce Management',
    description: 'Our Staffing Solutions provide flexible workforce management tailored to your business needs. From temporary staffing to permanent placements, we connect you with the right talent at the right time.',
    features: [
      'Temporary staffing',
      'Permanent placements',
      'Contract-to-hire options',
      'High-volume recruitment',
      'Skilled trades specialists',
      'Administrative support'
    ],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop'
  },
  'recruitment-process': {
    title: 'Recruitment Process',
    subtitle: 'End-to-End Hiring Solutions',
    description: 'Our Recruitment Process Outsourcing (RPO) provides comprehensive hiring solutions that streamline your recruitment workflow while reducing costs and improving quality of hire.',
    features: [
      'Full-cycle recruitment',
      'Applicant tracking system',
      'Candidate screening & vetting',
      'Interview coordination',
      'Offer management',
      'Onboarding automation'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop'
  },
  'market-insights': {
    title: 'Market Insights',
    subtitle: 'Data-Driven Intelligence',
    description: 'Stay ahead of industry trends with our Market Insights service. We provide comprehensive market intelligence, salary benchmarks, and workforce analytics to inform your hiring decisions.',
    features: [
      'Salary benchmarking',
      'Industry trend reports',
      'Workforce analytics',
      'Competitor analysis',
      'Talent availability maps',
      'Custom research reports'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
  },
  'employer-branding': {
    title: 'Employer Branding',
    subtitle: 'Attract Top Talent',
    description: 'Build a compelling employer brand that attracts and retains the best talent. We help you communicate your unique value proposition to potential candidates.',
    features: [
      'Employer brand strategy',
      'Career site optimization',
      'Social media presence',
      'Employee value proposition',
      'Brand messaging development',
      'Recruitment marketing campaigns'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop'
  },
  'candidate-care': {
    title: 'Candidate Care',
    subtitle: 'Exceptional Candidate Experience',
    description: 'We believe every candidate deserves an exceptional experience. Our Candidate Care service ensures professional, responsive, and respectful treatment throughout the hiring process.',
    features: [
      'Personalized candidate journey',
      'Regular application updates',
      'Interview preparation',
      'Feedback & coaching',
      'Career counseling',
      'Post-placement follow-up'
    ],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop'
  },
  'hr-consulting': {
    title: 'HR Consulting',
    subtitle: 'Strategic Human Resources',
    description: 'Our HR Consulting services provide strategic guidance to optimize your human resources functions. From policy development to organizational design, we help build high-performing teams.',
    features: [
      'HR strategy development',
      'Policy & procedure design',
      'Organizational design',
      'Performance management',
      'Employee relations',
      'Compliance & audits'
    ],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop'
  },
  'training-development': {
    title: 'Training & Development',
    subtitle: 'Invest in Your People',
    description: 'Empower your workforce with our Training & Development programs. We deliver customized learning solutions that build skills and drive organizational growth.',
    features: [
      'Leadership development',
      'Skills assessments',
      'Custom training programs',
      'E-learning solutions',
      'Coaching & mentoring',
      'Career path planning'
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop'
  }
};

const ServicePage = () => {
  // Get service key from URL or default to executive-search
  const path = window.location.pathname;
  const serviceKey = path.split('/services/')[1] || 'executive-search';
  const service = services[serviceKey as keyof typeof services] || services['executive-search'];

  return (
    <div className="service-page">
      <div className="service-hero">
        <Link to="/#services" className="back-link">
          <ArrowLeft size={20} /> Back to Services
        </Link>
        <span className="service-subtitle">{service.subtitle}</span>
        <h1>{service.title}</h1>
        <p className="service-description">{service.description}</p>
      </div>

      <div className="service-content">
        <div className="service-image">
          <img src={service.image} alt={service.title} />
        </div>

        <div className="service-features">
          <h2>Key Features</h2>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>
                <CheckCircle size={20} className="feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link to="/#contact" className="btn btn-primary service-cta">
            Get Started <ArrowLeft size={18} style={{ marginLeft: '8px', transform: 'rotate(180deg)' }} />
          </Link>
        </div>
      </div>

      <div className="service-stats">
        <div className="stat-item">
          <Users size={32} />
          <div className="stat-number">10K+</div>
          <div className="stat-label">Candidates Placed</div>
        </div>
        <div className="stat-item">
          <TrendingUp size={32} />
          <div className="stat-number">98%</div>
          <div className="stat-label">Success Rate</div>
        </div>
        <div className="stat-item">
          <Briefcase size={32} />
          <div className="stat-number">500+</div>
          <div className="stat-label">Companies Served</div>
        </div>
        <div className="stat-item">
          <Award size={32} />
          <div className="stat-number">15+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
