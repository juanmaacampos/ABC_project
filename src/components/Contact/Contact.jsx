import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se implementaría la lógica de envío del formulario
    console.log('Form submitted:', formData)
    alert('Mensaje enviado. Te contactaré pronto.')
  }

  const services = [
    'Consultoría Estratégica',
    'Optimización Operacional',
    'Transformación Digital',
    'Desarrollo Organizacional'
  ]

  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <div className="contact-header" data-aos="fade-up">
          <h2>Conversemos</h2>
          <p>¿Listo para transformar tu empresa? Contáctame y comencemos a trabajar juntos.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form" data-aos="fade-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email corporativo"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto o desafío empresarial"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary btn-full">
                Enviar mensaje
              </button>
            </form>
          </div>
          
          <div className="contact-info" data-aos="fade-left">
            <div className="contact-item">
              <h3>Email</h3>
              <p>javier@asnaghibusiness.com</p>
            </div>
            
            <div className="contact-item">
              <h3>Teléfono</h3>
              <p>+54 9 11 1234-5678</p>
            </div>
            
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/javierasnaghi</p>
            </div>
            
            <div className="contact-item">
              <h3>Ubicación</h3>
              <p>Buenos Aires, Argentina</p>
            </div>
            
            <div className="contact-availability">
              <h3>Disponibilidad</h3>
              <p>Respondo en menos de 24 horas</p>
              <p>Consultas iniciales sin costo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
