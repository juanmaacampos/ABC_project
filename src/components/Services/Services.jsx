import './Services.css'
import strategyIcon from '../../assets/images/strategy-icon.svg'
import operationsIcon from '../../assets/images/operations-icon.svg'
import digitalIcon from '../../assets/images/digital-icon.svg'
import organizationIcon from '../../assets/images/organization-icon.svg'

const Services = () => {
  const services = [
    {
      title: 'Consultoría Estratégica',
      description: 'Desarrollo de estrategias empresariales que optimizan recursos y maximizan resultados a largo plazo.',
      features: ['Análisis de mercado', 'Planificación estratégica', 'Implementación de KPIs'],
      icon: strategyIcon
    },
    {
      title: 'Optimización Operacional',
      description: 'Mejora de procesos internos para aumentar la eficiencia y reducir costos operativos.',
      features: ['Análisis de procesos', 'Automatización', 'Gestión del cambio'],
      icon: operationsIcon
    },
    {
      title: 'Transformación Digital',
      description: 'Integración de tecnologías digitales para modernizar y potenciar tu modelo de negocio.',
      features: ['Digitalización de procesos', 'Implementación de sistemas', 'Capacitación del equipo'],
      icon: digitalIcon
    },
    {
      title: 'Desarrollo Organizacional',
      description: 'Fortalecimiento de la cultura empresarial y desarrollo del capital humano.',
      features: ['Coaching ejecutivo', 'Desarrollo de liderazgo', 'Gestión del talento'],
      icon: organizationIcon
    }
  ]

  return (
    <section id="servicios" className="services section">
      <div className="container">
        <div className="services-header" data-aos="fade-up">
          <h2>Servicios</h2>
          <p>Soluciones integrales para impulsar el crecimiento de tu empresa</p>
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
                <img src={service.icon} alt={service.title} />
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
