import './Services.css'
import { MdOutlineLightbulb, MdOutlineBarChart, MdOutlineComputer, MdOutlinePeople } from 'react-icons/md'

const Services = () => {
  const services = [
    {
      title: 'Strategic Consulting',
      description: 'Development of business strategies that optimize resources and maximize long-term results.',
      features: ['Market analysis', 'Strategic planning', 'KPI implementation'],
      icon: <MdOutlineLightbulb size={48} />
    },
    {
      title: 'Operational Excellence',
      description: 'Improvement of internal processes to increase efficiency and reduce operational costs.',
      features: ['Process analysis', 'Automation', 'Change management'],
      icon: <MdOutlineBarChart size={48} />
    },
    {
      title: 'Digital Transformation',
      description: 'Integration of digital technologies to modernize and enhance your business model.',
      features: ['Process digitization', 'Systems implementation', 'Team training'],
      icon: <MdOutlineComputer size={48} />
    },
    {
      title: 'Organizational Development',
      description: 'Strengthening corporate culture and developing human capital.',
      features: ['Executive coaching', 'Leadership development', 'Talent management'],
      icon: <MdOutlinePeople size={48} />
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header" data-aos="fade-up">
          <h2>Services</h2>
          <p>Comprehensive solutions to drive your company's growth. EJEMPLOS:</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
