import { useState } from 'react'
import './Testimonials.css'
import client1Image from '../../assets/images/client-1.jpg'
import client2Image from '../../assets/images/client-2.jpg'
import client3Image from '../../assets/images/client-3.jpg'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart Solutions",
      content: "Javier transformó completamente nuestra estrategia empresarial. Su enfoque metodológico y visión estratégica nos permitió aumentar nuestros ingresos en un 150% en solo 18 meses.",
      company: "TechStart Solutions",
      image: client1Image
    },
    {
      name: "Carlos Rodríguez",
      position: "Director General, InnovaCorp",
      content: "La consultoría de Javier fue clave para nuestra expansión internacional. Su experiencia y red de contactos nos abrieron puertas que creíamos imposibles de alcanzar.",
      company: "InnovaCorp",
      image: client2Image
    },
    {
      name: "Ana Martínez",
      position: "Fundadora, EcoVerde",
      content: "Gracias a Javier, logramos optimizar nuestros procesos y reducir costos operativos en un 40%. Su acompañamiento durante la implementación fue excepcional.",
      company: "EcoVerde",
      image: client3Image
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="testimonials section">
      <div className="container">
        <div className="testimonials-header" data-aos="fade-up">
          <h2>Lo que dicen mis clientes</h2>
          <p>Testimonios reales de empresarios que han transformado sus negocios</p>
        </div>
        
        <div className="testimonials-container" data-aos="fade-up" data-aos-delay="200">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"{testimonials[currentTestimonial].content}"</p>
            </div>
            
            <div className="testimonial-author">
              <div className="author-avatar">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="client-image"
                />
              </div>
              <div className="author-info">
                <h4>{testimonials[currentTestimonial].name}</h4>
                <span>{testimonials[currentTestimonial].position}</span>
                <span className="company">{testimonials[currentTestimonial].company}</span>
              </div>
            </div>
          </div>
          
          <div className="testimonials-navigation">
            <button onClick={prevTestimonial} className="nav-btn">‹</button>
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="nav-btn">›</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
