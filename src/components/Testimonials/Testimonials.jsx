import { useState } from 'react'
import './Testimonials.css'
import client1Image from '../../assets/images/client-1.webp'
import client2Image from '../../assets/images/client-2.jpeg'
import client3Image from '../../assets/images/client-3.jpg'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      name: "Maria Gonzalez",
      position: "CEO, TechStart Solutions",
      content: "Javier completely transformed our business strategy. His methodical approach and strategic vision allowed us to increase our revenue by 150% in just 18 months.",
      company: "TechStart Solutions",
      image: client1Image
    },
    {
      name: "Carlos Rodriguez",
      position: "General Director, InnovaCorp",
      content: "Javier's consulting was key to our international expansion. His expertise and network opened doors we thought were impossible to reach.",
      company: "InnovaCorp",
      image: client2Image
    },
    {
      name: "Ana Martinez",
      position: "Founder, EcoVerde",
      content: "Thanks to Javier, we optimized our processes and reduced operational costs by 40%. His support during implementation was exceptional.",
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
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="testimonials-header" data-aos="fade-up">
          <h2>Client Testimonials</h2>
          <p>Real success stories from business owners who have transformed their companies</p>
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
