import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/javierasnaghi',
      icon: '💼'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5491112345678',
      icon: '📱'
    },
    {
      name: 'Email',
      url: 'mailto:javier@asnaghibusiness.com',
      icon: '✉️'
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Asnaghi Business</h3>
            <p>Transformando empresas, construyendo futuro.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#servicios">Consultoría Estratégica</a></li>
                <li><a href="#servicios">Optimización Operacional</a></li>
                <li><a href="#servicios">Transformación Digital</a></li>
                <li><a href="#servicios">Desarrollo Organizacional</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contacto</h4>
              <ul>
                <li><a href="#contacto">Conversemos</a></li>
                <li><a href="mailto:javier@asnaghibusiness.com">Email</a></li>
                <li><a href="tel:+5491112345678">Teléfono</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="/privacy">Política de Privacidad</a></li>
                <li><a href="/terms">Términos de Servicio</a></li>
                <li><a href="/cookies">Política de Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title={link.name}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {currentYear} Javier Asnaghi. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
