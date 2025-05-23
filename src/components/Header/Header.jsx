import { useState, useEffect } from 'react'
import './Header.css'
import heroImage from '../../assets/images/customer_header.png'
import headerBgImage from '../../assets/images/header_bg.png'

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

  const headerStyle = {
    background: `linear-gradient(135deg, rgba(245, 245, 245, 0.85) 0%, rgba(224, 224, 224, 0.85) 100%), url(${headerBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <header id="home" className="header" style={headerStyle}>
      <div className="container">
        <div className={`header-content ${windowWidth < 768 ? 'mobile' : ''}`}>
          <div className="header-text" data-aos="fade-right">
            <div className="title-container">
              <h1 className="responsive-title">Javier Asnaghi</h1>
              <h2 className="header-subtitle responsive-subtitle">
                Business Consulting
              </h2>
            </div>
            <p className="header-description responsive-text">
              Transforming businesses through innovative strategies and 
              tailored solutions that drive sustainable growth 
              and operational excellence.
            </p>
            <div className={`header-cta ${windowWidth < 768 ? 'mobile-cta' : ''}`}>
              <a href="#contact" className="btn-primary">Let's Talk</a>
              <a href="#services" className="btn-outline">View Services</a>
            </div>
          </div>
          
          {windowWidth < 768 ? (
            <div className="header-image-wrapper">
              <div className="header-image" data-aos="fade-up">
                <img 
                  src={heroImage} 
                  alt="Javier Asnaghi - Business Consultant" 
                  className="hero-image responsive-image"
                  style={{maxHeight: '60vh', marginTop: '-60px'}}
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