import './About.css'
import profileImage from '../../assets/images/customer_about.png'
import aboutBgImage from '../../assets/images/about_bg.png'

const About = () => {
  const aboutStyle = {
    background: `linear-gradient(135deg, rgba(245, 245, 245, 0.85) 0%, rgba(224, 224, 224, 0.85) 100%), url(${aboutBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <section id="about" className="about section" style={aboutStyle}>
      <div className="container">
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img 
              src={profileImage} 
              alt="Javier Asnaghi - Business Consultant" 
              className="profile-image"
            />
          </div>
          
          <div className="about-text" data-aos="fade-left">
            <h2>About me</h2>
            <div className="about-description">
              <p className="mobile-friendly-text">
                EJEMPLO: I'm Javier Asnaghi, a business consultant with over 15 years of experience 
                helping companies across diverse sectors reach their full potential. 
                My approach focuses on creating customized solutions that not only solve 
                immediate problems but also build the foundation for sustainable growth.
              </p>
              
              <p className="mobile-friendly-text">
                Throughout my career, I've worked with emerging startups, growing SMEs, 
                and large corporations, always with the goal of transforming challenges into 
                growth opportunities. My methodology combines rigorous analysis, innovative 
                strategy, and practical execution.
              </p>
              
              <div className="about-stats mobile-stats">
                <div className="stat">
                  <h3>15+</h3>
                  <p>Years of experience</p>
                </div>
                <div className="stat">
                  <h3>200+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Businesses</p>
                </div>
              </div>
              
              <div className="about-cta mobile-cta">
                <a href="#contact" className="btn-outline">Let's Work Together</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
