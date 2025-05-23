import { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo_left.png'

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
    
    // Lock body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = '' // Reset to allow CSS to take over
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observerRef.current && headerElement) {
        observerRef.current.unobserve(headerElement)
      }
      document.body.style.overflow = '' // Reset on unmount
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isInHeader ? 'navbar-in-header' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <img 
              src={logo} 
              alt="Asnaghi Business Logo"
              className="navbar-logo"
            />
          </div>
          
          <ul className="navbar-menu desktop-menu">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
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
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar