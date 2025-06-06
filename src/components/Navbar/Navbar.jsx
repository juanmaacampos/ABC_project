import { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo_left.png'
import {AiOutlineSetting, AiOutlineInfoCircle, AiOutlineStar, AiOutlineMail } from 'react-icons/ai' // Example icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isInHeader, setIsInHeader] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Create a ref for the intersection observer
  const observerRef = useRef(null)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Set up intersection observer to detect when header is in view
    const headerElement = document.getElementById('home')
    
    if (headerElement) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries
          setIsInHeader(entry.isIntersecting)
        },
        { threshold: 0.1 } // Detect when at least 10% of the header is visible
      )
      
      observerRef.current.observe(headerElement)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observerRef.current && headerElement) {
        observerRef.current.unobserve(headerElement)
      }
    }
  }, [])

  const navItems = [
    { name: 'Services', href: '#services', icon: <AiOutlineSetting /> },
    { name: 'About', href: '#about', icon: <AiOutlineInfoCircle /> },
    { name: 'Testimonials', href: '#testimonials', icon: <AiOutlineStar /> },
    { name: 'Contact', href: '#contact', icon: <AiOutlineMail />, isButton: true }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToHome = (event) => {
    event.preventDefault();
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMobileMenu(); // Close mobile menu if open
  };


  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isInHeader ? 'navbar-in-header' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <a href="#home" onClick={scrollToHome} className="navbar-logo-link">
              <img 
                src={logo} 
                alt="Asnaghi Business Logo"
                className="navbar-logo"
              />
            </a>
          </div>
          
          <ul className="navbar-menu desktop-menu">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isButton ? (
                  <a href={item.href} className="btn-outline navbar-btn">{item.name}</a>
                ) : (
                  <a href={item.href}>{item.name}</a>
                )}
              </li>
            ))}
          </ul>

          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                onClick={(e) => {
                  // Keep existing smooth scroll for nav items if they also target IDs
                  const targetId = item.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                  closeMobileMenu();
                }}
                className={item.isButton ? 'nav-contact-btn' : ''}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar