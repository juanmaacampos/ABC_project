import './Footer.css'
import logoUpWhite from '../../assets/images/logo_up_white.png'; // Import the logo

const Footer = () => {
  const currentYear = new Date().getFullYear()
  

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logoUpWhite} alt="Asnaghi Business Logo" className="footer-logo" />
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Strategic Consulting</a></li>
                <li><a href="#services">Operational Optimization</a></li>
                <li><a href="#services">Digital Transformation</a></li>
                <li><a href="#services">Organizational Development</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li><a href="#contact">Let's Talk</a></li>
                <li><a href="mailto:javier@asnaghibusiness.com">Email</a></li>
                <li><a href="tel:+31 6 10191014">Phone</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          
          <div className="footer-copyright">
            <p>
              &copy; {currentYear}{' '}
              <a href="https://jmcdev.site" target="_blank" rel="noopener noreferrer">
                JMCDEV Digital Solutions.
              </a>{' '}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
