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
    // Here we would implement the form submission logic
    console.log('Form submitted:', formData)
    alert('Message sent. I will contact you soon.')
  }

  const services = [
    'Strategic Consulting',
    'Operational Excellence',
    'Digital Transformation',
    'Organizational Development'
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header" data-aos="fade-up">
          <h2>Let's Connect</h2>
          <p>Ready to transform your business? Contact me and let's start working together.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form" data-aos="fade-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Corporate email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
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
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell me about your project or business challenge"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info" data-aos="fade-left">
            <div className="contact-item">
              <h3>Email</h3>
              <p>javier@asnaghibusiness.com</p>
            </div>
            
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+54 9 11 1234-5678</p>
            </div>
            
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/javierasnaghi</p>
            </div>
            
            <div className="contact-item">
              <h3>Location</h3>
              <p>Buenos Aires, Argentina</p>
            </div>
            
            <div className="contact-availability">
              <h3>Availability</h3>
              <p>Response within 24 hours</p>
              <p>Initial consultations at no cost</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
