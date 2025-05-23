import './About.css'
import profileImage from '../../assets/images/profile-image.jpg'

const About = () => {
  return (
    <section id="sobre-mi" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img 
              src={profileImage} 
              alt="Javier Asnaghi - Consultor Empresarial" 
              className="profile-image"
            />
          </div>
          
          <div className="about-text" data-aos="fade-left">
            <h2>¿Quién soy?</h2>
            <div className="about-description">
              <p>
                Soy Javier Asnaghi, consultor empresarial con más de 15 años de experiencia 
                ayudando a empresas de diversos sectores a alcanzar su máximo potencial. 
                Mi enfoque se centra en crear soluciones personalizadas que no solo resuelven 
                problemas inmediatos, sino que construyen las bases para un crecimiento sostenible.
              </p>
              
              <p>
                A lo largo de mi carrera, he trabajado con startups emergentes, PYMES en 
                crecimiento y grandes corporaciones, siempre con el objetivo de transformar 
                desafíos en oportunidades de crecimiento. Mi metodología combina análisis 
                riguroso, estrategia innovadora y ejecución práctica.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <h3>15+</h3>
                  <p>Años de experiencia</p>
                </div>
                <div className="stat">
                  <h3>200+</h3>
                  <p>Proyectos exitosos</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Empresas transformadas</p>
                </div>
              </div>
              
              <div className="about-cta">
                <a href="#contacto" className="btn-primary">Trabajemos juntos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
