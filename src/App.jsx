import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Services from './components/Services/Services'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import TopButton from './components/topButton/TopButton'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
