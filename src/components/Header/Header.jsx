import { useState, useEffect } from 'react'
import './Header.css'
import heroImage from '../../assets/images/customer_header.png'

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header id="home" className="header">
      <div className="container">
        <div className={`header-content ${windowWidth < 768 ? 'mobile' : ''}`}>
          <div className="header-text" data-aos="fade-right">
            <div className="title-container">
              <h1 className="responsive-title">Javier Asnaghi</h1>
              {windowWidth >= 768 && (
                <h2 className="header-subtitle responsive-subtitle" style={{ marginTop: '24px', display: 'block', paddingTop: '8px', borderTop: '1px solid rgba(191, 161, 112, 0.3)', width: 'fit-content' }}>
                  Business Consulting
                </h2>
              )}
            </div>
            <p className="header-description responsive-text">
              Transforming businesses through innovative strategies and 
              tailored solutions that drive sustainable growth 
              and operational excellence.
            </p>
            <div className={`header-cta ${windowWidth < 768 ? 'mobile-cta' : ''}`}>
              <a href="#contact" className="btn-primary">Let's Talk</a>
              <a href="#services" className="btn-secondary">View Services</a>
            </div>
          </div>
          
          {/* Add wrapper div with clear positioning for mobile */}
          {windowWidth < 768 ? (
            <div className="header-image-wrapper" style={{width: '100%', position: 'relative', marginTop: '2rem'}}>
              <div className="header-image" data-aos="fade-up">
                <img 
                  src={heroImage} 
                  alt="Javier Asnaghi - Business Consultant" 
                  className="hero-image responsive-image"
                  style={{maxHeight: '60vh'}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="header-image" data-aos="fade-up">
              <img 
                src={heroImage} 
                alt="Javier Asnaghi - Business Consultant" 
                className="hero-image responsive-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header