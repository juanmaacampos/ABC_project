import './Header.css'
import heroImage from '../../assets/images/customer_header.png'

const Header = () => {
  return (
    <header id="inicio" className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-text" data-aos="fade-right">
            <h1>Javier Asnaghi</h1>
            <h2 className="header-subtitle">Business Consulting</h2>
            <p className="header-description">
              Transformando empresas a través de estrategias innovadoras y 
              soluciones personalizadas que impulsan el crecimiento sostenible 
              y la excelencia operacional.
            </p>
            <div className="header-cta">
              <a href="#contacto" className="btn-primary">Conversemos</a>
              <a href="#servicios" className="btn-secondary">Ver Servicios</a>
            </div>
          </div>
          <div className="header-image" data-aos="fade-left">
            <img 
              src={heroImage} 
              alt="Javier Asnaghi - Business Consultant" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header