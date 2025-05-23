import './About.css'
import profileImage from '../../assets/images/customer_about.png'

const About = () => {
  return (
    <section id="about" className="about section">
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
            <h2>Who I Am?</h2>
            <div className="about-description">
              <p className="mobile-friendly-text">
                I'm Javier Asnaghi, a business consultant with over 15 years of experience 
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
                <a href="#contact" className="btn-primary">Let's Work Together</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
